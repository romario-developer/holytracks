import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { resolveAudioUrl } from "../lib/api";
import { pitchShiftBuffer, transposeKey } from "../lib/pitchShift";

export type MixerStem = {
  name: string;
  label: string;
  volume: number;
  url: string;
};

export type Section = {
  name: string;
  start: number;
  duration: number;
  bars?: number;
};

type ChannelState = {
  volume: number;
  muted: boolean;
  solo: boolean;
};

type PendingJump = {
  targetIndex: number;
  boundaryCtxTime: number;
  targetOffset: number;
  newSources: AudioBufferSourceNode[];
  newGains: GainNode[];
  oldSources: AudioBufferSourceNode[];
  oldGains: GainNode[];
  cueSources: AudioBufferSourceNode[];
  auto?: boolean;
};

type QueueJumpOptions = {
  // troca automática (repetir seção): sem voz e sem toggle-cancela
  silent?: boolean;
  auto?: boolean;
};

// Vozes da contagem falada ("Refrão... um, dois, três, quatro")
const NUMBER_SLUGS = ["um", "dois", "tres", "quatro", "cinco", "seis"];

type MixerProps = {
  stems: MixerStem[];
  title: string;
  tone?: string;
  bpm?: number;
  timeSignature?: string;
  beatsPerBar?: number;
  sections?: Section[];
  loop: boolean;
  onToggleLoop: () => void;
  onEnded?: () => void;
  onPrev?: () => void;
  onNext?: () => void;
};

// AudioContext único compartilhado entre trocas de música
let sharedContext: AudioContext | null = null;
const getAudioContext = () => {
  if (!sharedContext) {
    sharedContext = new AudioContext();
  }
  return sharedContext;
};

const bufferCache = new Map<string, Promise<AudioBuffer>>();

const loadBuffer = (url: string) => {
  let cached = bufferCache.get(url);
  if (!cached) {
    cached = fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Falha ao baixar stem (${response.status})`);
        }
        return response.arrayBuffer();
      })
      .then((data) => getAudioContext().decodeAudioData(data));
    bufferCache.set(url, cached);
    cached.catch(() => bufferCache.delete(url));
  }
  return cached;
};

const formatTime = (seconds: number) => {
  const safe = Math.max(0, Math.floor(seconds));
  const min = Math.floor(safe / 60);
  const sec = safe % 60;
  return `${min}:${sec.toString().padStart(2, "0")}`;
};

const isClickStem = (stem: MixerStem) => stem.name.toLowerCase() === "click";

// "Refrão" -> "refrao" (nome do arquivo da guia de voz)
const guideSlug = (name: string) =>
  name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

// Tick sintetizado para a contagem de entrada (mesmo timbre do click gravado)
const createTickBuffer = (ctx: AudioContext, accented: boolean) => {
  const length = Math.round(ctx.sampleRate * 0.03);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  const freq = accented ? 1700 : 1100;
  for (let i = 0; i < length; i++) {
    const t = i / ctx.sampleRate;
    data[i] = Math.sin(2 * Math.PI * freq * t) * Math.exp(-t * 220) * (accented ? 1 : 0.7);
  }
  return buffer;
};

const Mixer = ({
  stems,
  title,
  tone,
  bpm,
  timeSignature,
  beatsPerBar = 4,
  sections = [],
  loop,
  onToggleLoop,
  onEnded,
  onPrev,
  onNext
}: MixerProps) => {
  const [channels, setChannels] = useState<ChannelState[]>([]);
  const [masterVolume, setMasterVolume] = useState(0.9);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [queuedSection, setQueuedSection] = useState<number | null>(null);
  const [countInEnabled, setCountInEnabled] = useState(true);
  const [guideEnabled, setGuideEnabled] = useState(true);
  const [countingIn, setCountingIn] = useState(false);
  const [sectionLoop, setSectionLoop] = useState(false);
  const [transpose, setTranspose] = useState(0);
  const [transposing, setTransposing] = useState(false);
  const [cueDevices, setCueDevices] = useState<MediaDeviceInfo[]>([]);
  const [cueOutputId, setCueOutputId] = useState("default");

  // buffers como vieram dos arquivos; buffersRef recebe a versão transposta quando transpose != 0
  const originalBuffersRef = useRef<AudioBuffer[]>([]);
  const buffersRef = useRef<AudioBuffer[]>([]);
  const sourcesRef = useRef<AudioBufferSourceNode[]>([]);
  const gainsRef = useRef<GainNode[]>([]);
  const masterGainRef = useRef<GainNode | null>(null);
  // Barramento de cue (click + guias de voz): separado do master e roteável
  // para outra saída de áudio (fones dos músicos) sem passar pelo PA
  const cueBusRef = useRef<GainNode | null>(null);
  const cueStreamDestRef = useRef<MediaStreamAudioDestinationNode | null>(null);
  const cueAudioElRef = useRef<HTMLAudioElement | null>(null);
  const startedAtRef = useRef(0);
  const offsetRef = useRef(0);
  const playingRef = useRef(false);
  const tickTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pendingJumpRef = useRef<PendingJump | null>(null);
  const announcedBoundaryRef = useRef<number | null>(null);
  const loopRef = useRef(loop);
  const onEndedRef = useRef(onEnded);
  const channelsRef = useRef<ChannelState[]>([]);
  const sectionsRef = useRef<Section[]>(sections);
  const countInRef = useRef(countInEnabled);
  const guideRef = useRef(guideEnabled);
  const sectionLoopRef = useRef(sectionLoop);
  // o tick (criado em startPlayback) chama queueSectionJump, que é declarado depois — via ref
  const queueJumpRef = useRef<((index: number, opts?: QueueJumpOptions) => void) | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const waveWrapRef = useRef<HTMLDivElement>(null);

  loopRef.current = loop;
  onEndedRef.current = onEnded;
  channelsRef.current = channels;
  sectionsRef.current = sections;
  countInRef.current = countInEnabled;
  guideRef.current = guideEnabled;
  sectionLoopRef.current = sectionLoop;

  const barDuration = bpm ? (60 / bpm) * beatsPerBar : 0;

  const getCueBus = useCallback(() => {
    const ctx = getAudioContext();
    if (!cueBusRef.current) {
      cueBusRef.current = ctx.createGain();
      cueBusRef.current.connect(ctx.destination);
    }
    return cueBusRef.current;
  }, []);

  // Lista as saídas de áudio; com requestPermission, pede acesso uma vez para
  // liberar os nomes dos dispositivos (sem permissão os labels vêm vazios)
  const loadCueDevices = useCallback(async (requestPermission: boolean) => {
    try {
      let devices = await navigator.mediaDevices.enumerateDevices();
      let outputs = devices.filter((device) => device.kind === "audiooutput");
      if (requestPermission && outputs.length && outputs.every((device) => !device.label)) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach((track) => track.stop());
        devices = await navigator.mediaDevices.enumerateDevices();
        outputs = devices.filter((device) => device.kind === "audiooutput");
      }
      setCueDevices(outputs);
    } catch {
      // sem permissão/suporte — fica só a saída padrão
    }
  }, []);

  // Roteia o cue bus: "default" = mesma saída do PA; qualquer outro id vai por
  // MediaStreamDestination -> <audio> com setSinkId (a saída dos fones dos músicos)
  const applyCueOutput = useCallback(
    async (deviceId: string) => {
      const ctx = getAudioContext();
      const cueBus = getCueBus();
      try {
        if (deviceId === "default") {
          cueBus.disconnect();
          cueBus.connect(ctx.destination);
          cueAudioElRef.current?.pause();
        } else {
          if (!cueStreamDestRef.current) {
            cueStreamDestRef.current = ctx.createMediaStreamDestination();
          }
          if (!cueAudioElRef.current) {
            cueAudioElRef.current = new Audio();
            cueAudioElRef.current.srcObject = cueStreamDestRef.current.stream;
          }
          await cueAudioElRef.current.setSinkId(deviceId);
          cueBus.disconnect();
          cueBus.connect(cueStreamDestRef.current);
          await cueAudioElRef.current.play();
        }
        setCueOutputId(deviceId);
      } catch (routeError) {
        console.error(routeError);
        cueBus.disconnect();
        cueBus.connect(ctx.destination);
        setCueOutputId("default");
      }
    },
    [getCueBus]
  );

  // Toca uma guia de voz ("Refrão", "Solo"...) pelo barramento de cue
  const playGuide = useCallback(
    (sectionName: string) => {
      if (!guideRef.current) return;
      const ctx = getAudioContext();
      loadBuffer(resolveAudioUrl(`/audio/guides/${guideSlug(sectionName)}.wav`))
        .then((buffer) => {
          const source = ctx.createBufferSource();
          source.buffer = buffer;
          source.connect(getCueBus());
          source.start();
        })
        .catch(() => {
          // guia inexistente para esta seção — segue sem aviso
        });
    },
    [getCueBus]
  );

  // Contagem falada rumo à troca: o nome termina na entrada do último compasso
  // e os números caem exatamente nos tempos ("Refrão... 1, 2, 3, 4" → troca)
  const scheduleJumpCue = useCallback(
    async (sectionName: string, boundaryCtx: number): Promise<AudioBufferSourceNode[]> => {
      const ctx = getAudioContext();
      const cueBus = getCueBus();
      const beats = Math.min(beatsPerBar, NUMBER_SLUGS.length);
      try {
        const [nameBuffer, ...numberBuffers] = await Promise.all([
          loadBuffer(resolveAudioUrl(`/audio/guides/${guideSlug(sectionName)}.wav`)),
          ...NUMBER_SLUGS.slice(0, beats).map((slugName) =>
            loadBuffer(resolveAudioUrl(`/audio/guides/${slugName}.wav`))
          )
        ]);
        const beatSec = barDuration / beatsPerBar;
        const lastBarStart = boundaryCtx - barDuration;
        const sources: AudioBufferSourceNode[] = [];

        const nameSource = ctx.createBufferSource();
        nameSource.buffer = nameBuffer;
        nameSource.connect(cueBus);
        nameSource.start(Math.max(ctx.currentTime, lastBarStart - nameBuffer.duration));
        sources.push(nameSource);

        numberBuffers.forEach((buffer, beat) => {
          const source = ctx.createBufferSource();
          source.buffer = buffer;
          source.connect(cueBus);
          source.start(Math.max(ctx.currentTime, lastBarStart + beat * beatSec));
          sources.push(source);
        });
        return sources;
      } catch {
        return [];
      }
    },
    [getCueBus, barDuration, beatsPerBar]
  );

  const stemsKey = useMemo(() => stems.map((stem) => stem.url).join("|"), [stems]);

  const effectiveGain = useCallback((channel: ChannelState | undefined, allChannels: ChannelState[]) => {
    if (!channel) return 1;
    const anySolo = allChannels.some((item) => item.solo);
    if (channel.muted) return 0;
    if (anySolo && !channel.solo) return 0;
    return channel.volume;
  }, []);

  const cancelPendingJump = useCallback(
    (restoreOldGains: boolean) => {
      const pending = pendingJumpRef.current;
      if (!pending) return;
      [...pending.newSources, ...pending.cueSources].forEach((source) => {
        try {
          source.stop();
        } catch {
          // ainda não iniciada
        }
      });
      if (restoreOldGains) {
        const ctx = getAudioContext();
        pending.oldGains.forEach((gain, index) => {
          gain.gain.cancelScheduledValues(ctx.currentTime);
          gain.gain.value = effectiveGain(channelsRef.current[index], channelsRef.current);
        });
      }
      pendingJumpRef.current = null;
      setQueuedSection(null);
    },
    [effectiveGain]
  );

  const stopSources = useCallback(() => {
    cancelPendingJump(false);
    sourcesRef.current.forEach((source) => {
      try {
        source.onended = null;
        source.stop();
      } catch {
        // já parado
      }
    });
    sourcesRef.current = [];
    gainsRef.current = [];
    if (tickTimerRef.current) {
      clearInterval(tickTimerRef.current);
      tickTimerRef.current = null;
    }
  }, [cancelPendingJump]);

  const pause = useCallback(() => {
    if (!playingRef.current) return;
    const ctx = getAudioContext();
    offsetRef.current = Math.min(
      offsetRef.current + ctx.currentTime - startedAtRef.current,
      buffersRef.current[0]?.duration ?? 0
    );
    stopSources();
    playingRef.current = false;
    setPlaying(false);
    setPosition(offsetRef.current);
  }, [stopSources]);

  const startPlayback = useCallback(
    async (offsetSeconds: number, opts: { skipCountIn?: boolean } = {}) => {
      const buffers = buffersRef.current;
      if (!buffers.length) return;

      const ctx = getAudioContext();
      await ctx.resume();
      stopSources();

      if (!masterGainRef.current) {
        masterGainRef.current = ctx.createGain();
        masterGainRef.current.connect(ctx.destination);
      }
      masterGainRef.current.gain.value = masterVolume;
      const cueBus = getCueBus();

      const currentChannels = channelsRef.current;

      // Contagem de entrada: 1 compasso de click antes da música começar
      // (só no play do usuário — seek, loop e transposição retomam direto)
      const countInDuration = countInRef.current && barDuration > 0 && !opts.skipCountIn ? barDuration : 0;
      const startAt = ctx.currentTime + 0.08 + countInDuration;

      const gains: GainNode[] = [];
      const sources = buffers.map((buffer, index) => {
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        const gain = ctx.createGain();
        gain.gain.value = effectiveGain(currentChannels[index], currentChannels);
        source.connect(gain);
        // click sai pelo cue bus (retorno dos músicos); o resto pelo master (PA)
        gain.connect(isClickStem(stems[index]) ? cueBus : (masterGainRef.current as GainNode));
        source.start(startAt, offsetSeconds);
        gains.push(gain);
        return source;
      });

      if (countInDuration > 0) {
        const beatSec = barDuration / beatsPerBar;
        for (let beat = 0; beat < beatsPerBar; beat++) {
          const tick = ctx.createBufferSource();
          tick.buffer = createTickBuffer(ctx, beat === 0);
          tick.connect(cueBus);
          tick.start(ctx.currentTime + 0.08 + beat * beatSec);
          sources.push(tick);
        }
        setCountingIn(true);
        setTimeout(() => setCountingIn(false), Math.round(countInDuration * 1000) + 80);
      }

      sourcesRef.current = sources;
      gainsRef.current = gains;
      startedAtRef.current = startAt;
      offsetRef.current = offsetSeconds;
      announcedBoundaryRef.current = null;
      playingRef.current = true;
      setPlaying(true);

      const totalDuration = buffers[0].duration;
      // setInterval em vez de requestAnimationFrame: RAF é suspenso em abas
      // em segundo plano e o fim da música precisa ser detectado mesmo assim
      tickTimerRef.current = setInterval(() => {
        if (!playingRef.current) return;

        // Troca de seção agendada: assume o novo conjunto de fontes na borda exata
        const pending = pendingJumpRef.current;
        if (pending && ctx.currentTime >= pending.boundaryCtxTime) {
          pending.oldSources.forEach((source) => {
            try {
              source.onended = null;
              source.stop();
            } catch {
              // já parada
            }
          });
          pending.newGains.forEach((gain, index) => {
            gain.gain.cancelScheduledValues(0);
            gain.gain.value = effectiveGain(channelsRef.current[index], channelsRef.current);
          });
          sourcesRef.current = pending.newSources;
          gainsRef.current = pending.newGains;
          startedAtRef.current = pending.boundaryCtxTime;
          offsetRef.current = pending.targetOffset;
          pendingJumpRef.current = null;
          setQueuedSection(null);
        }

        const elapsed = offsetRef.current + ctx.currentTime - startedAtRef.current;
        // durante a contagem de entrada, elapsed < offset — congela o relógio no offset
        const shown = Math.max(offsetRef.current, Math.min(elapsed, totalDuration));
        setPosition(Math.max(0, shown));

        // Repetir seção: mantém sempre um pulo silencioso agendado de volta ao início da seção atual
        if (sectionLoopRef.current && !pendingJumpRef.current && elapsed >= 0) {
          const loopSections = sectionsRef.current;
          const loopIdx = loopSections.findIndex(
            (section) => elapsed >= section.start && elapsed < section.start + section.duration
          );
          if (loopIdx !== -1) {
            queueJumpRef.current?.(loopIdx, { silent: true, auto: true });
          }
        }

        // Guia de voz: anuncia a próxima seção 1 compasso antes da borda
        const allSections = sectionsRef.current;
        if (guideRef.current && allSections.length && barDuration > 0 && elapsed >= 0) {
          const currentIdx = allSections.findIndex(
            (section) => elapsed >= section.start && elapsed < section.start + section.duration
          );
          if (currentIdx !== -1) {
            const boundary = allSections[currentIdx].start + allSections[currentIdx].duration;
            const timeToBoundary = boundary - elapsed;
            if (timeToBoundary > 0 && timeToBoundary <= barDuration && announcedBoundaryRef.current !== boundary) {
              const target = pendingJumpRef.current
                ? allSections[pendingJumpRef.current.targetIndex]
                : currentIdx + 1 < allSections.length
                  ? allSections[currentIdx + 1]
                  : loopRef.current
                    ? allSections[0]
                    : null;
              if (target) {
                playGuide(target.name);
              }
              announcedBoundaryRef.current = boundary;
            }
          }
        }

        if (!pendingJumpRef.current && elapsed >= totalDuration) {
          if (loopRef.current) {
            startPlayback(0, { skipCountIn: true });
          } else {
            stopSources();
            playingRef.current = false;
            setPlaying(false);
            offsetRef.current = 0;
            setPosition(0);
            onEndedRef.current?.();
          }
        }
      }, 100);
    },
    [effectiveGain, masterVolume, stopSources, getCueBus, playGuide, barDuration, beatsPerBar, stems]
  );

  // Agenda a troca para o fim da seção atual, com precisão de amostra — o click não corta:
  // um segundo conjunto de fontes começa exatamente na borda enquanto o atual é silenciado
  const queueSectionJump = useCallback(
    (index: number, opts: QueueJumpOptions = {}) => {
      const allSections = sectionsRef.current;
      const target = allSections[index];
      if (!target || !buffersRef.current.length) return;

      if (!playingRef.current) {
        offsetRef.current = target.start;
        setPosition(target.start);
        return;
      }

      const ctx = getAudioContext();

      // clicar de novo na seção já agendada cancela a fila (não vale para o repetir automático)
      if (!opts.auto && pendingJumpRef.current?.targetIndex === index) {
        cancelPendingJump(true);
        return;
      }
      cancelPendingJump(true);

      const pos = offsetRef.current + ctx.currentTime - startedAtRef.current;
      const current =
        allSections.find((section) => pos >= section.start && pos < section.start + section.duration) ??
        allSections[allSections.length - 1];
      const boundary = current.start + current.duration;
      let boundaryCtx = startedAtRef.current + (boundary - offsetRef.current);
      const minLead = ctx.currentTime + 0.06;
      if (boundaryCtx < minLead) boundaryCtx = minLead;

      const currentChannels = channelsRef.current;
      const master = masterGainRef.current as GainNode;
      const cueBus = getCueBus();

      const newGains: GainNode[] = [];
      const newSources = buffersRef.current.map((buffer, stemIndex) => {
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        const gain = ctx.createGain();
        const vol = effectiveGain(currentChannels[stemIndex], currentChannels);
        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.setValueAtTime(vol, boundaryCtx);
        source.connect(gain);
        gain.connect(isClickStem(stems[stemIndex]) ? cueBus : master);
        source.start(boundaryCtx, target.start);
        newGains.push(gain);
        return source;
      });

      gainsRef.current.forEach((gain, stemIndex) => {
        const vol = effectiveGain(currentChannels[stemIndex], currentChannels);
        gain.gain.setValueAtTime(vol, ctx.currentTime);
        gain.gain.setValueAtTime(0, boundaryCtx);
      });

      const pending: PendingJump = {
        targetIndex: index,
        boundaryCtxTime: boundaryCtx,
        targetOffset: target.start,
        newSources,
        newGains,
        oldSources: sourcesRef.current,
        oldGains: gainsRef.current,
        cueSources: [],
        auto: opts.auto
      };
      pendingJumpRef.current = pending;
      setQueuedSection(index);

      // impede o aviso natural duplicado nesta borda
      announcedBoundaryRef.current = boundary;

      // contagem falada: "Nome... 1, 2, 3, 4" terminando exatamente na borda
      if (!opts.silent && guideRef.current) {
        scheduleJumpCue(target.name, boundaryCtx).then((cueSources) => {
          if (pendingJumpRef.current === pending) {
            pending.cueSources = cueSources;
          } else {
            // o agendamento mudou enquanto as vozes carregavam — descarta
            cueSources.forEach((source) => {
              try {
                source.stop();
              } catch {
                // ainda não iniciada
              }
            });
          }
        });
      }
    },
    [cancelPendingJump, effectiveGain, getCueBus, scheduleJumpCue, stems]
  );

  queueJumpRef.current = queueSectionJump;

  const drawWaveform = useCallback(() => {
    const canvas = canvasRef.current;
    const buffers = buffersRef.current;
    if (!canvas || !buffers.length) return;
    const g = canvas.getContext("2d");
    if (!g) return;

    const W = (canvas.width = 1200);
    const H = (canvas.height = 110);
    g.clearRect(0, 0, W, H);

    // soma dos stems audíveis (sem o click, que é só percussivo)
    const audible = buffers.filter((_, index) => stems[index]?.name.toLowerCase() !== "click");
    if (!audible.length) return;
    const channelDatas = audible.map((buffer) => buffer.getChannelData(0));
    const maxLen = Math.max(...audible.map((buffer) => buffer.length));
    const samplesPerCol = Math.max(1, Math.floor(maxLen / W));
    const mid = H / 2;

    g.fillStyle = "rgba(125, 170, 255, 0.75)";
    for (let x = 0; x < W; x++) {
      const start = x * samplesPerCol;
      let min = 0;
      let max = 0;
      for (let i = start; i < start + samplesPerCol; i += 4) {
        let sum = 0;
        for (const data of channelDatas) {
          if (i < data.length) sum += data[i];
        }
        sum /= channelDatas.length;
        if (sum > max) max = sum;
        if (sum < min) min = sum;
      }
      const top = mid - max * mid * 0.95;
      const bottom = mid - min * mid * 0.95;
      g.fillRect(x, top, 1, Math.max(1, bottom - top));
    }
  }, [stems]);

  // Carrega e decodifica os stems sempre que a música muda
  useEffect(() => {
    let cancelled = false;
    stopSources();
    playingRef.current = false;
    setPlaying(false);
    setPosition(0);
    offsetRef.current = 0;
    setError("");
    setQueuedSection(null);
    setSectionLoop(false);
    originalBuffersRef.current = [];
    buffersRef.current = [];
    setChannels(stems.map((stem) => ({ volume: stem.volume ?? 0.8, muted: false, solo: false })));

    if (!stems.length) {
      setDuration(0);
      return;
    }

    setTranspose(0);
    setLoading(true);
    Promise.all(stems.map((stem) => loadBuffer(resolveAudioUrl(stem.url))))
      .then((buffers) => {
        if (cancelled) return;
        originalBuffersRef.current = buffers;
        buffersRef.current = buffers;
        setDuration(Math.max(...buffers.map((buffer) => buffer.duration)));
        setLoading(false);
        drawWaveform();
      })
      .catch((loadError) => {
        if (cancelled) return;
        console.error(loadError);
        setError("Não foi possível carregar os stems desta música.");
        setLoading(false);
      });

    return () => {
      cancelled = true;
      stopSources();
      playingRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stemsKey]);

  // Transposição: recalcula os buffers (exceto o click, que não tem altura)
  // e retoma a reprodução no mesmo ponto, sem contagem
  useEffect(() => {
    const originals = originalBuffersRef.current;
    if (!originals.length) return;
    let cancelled = false;

    const wasPlaying = playingRef.current;
    if (wasPlaying) {
      pause();
    }

    if (transpose === 0) {
      buffersRef.current = originals;
      if (wasPlaying) {
        startPlayback(offsetRef.current, { skipCountIn: true }).catch(() => {});
      }
      return;
    }

    setTransposing(true);
    // deixa o "Transpondo..." pintar antes do processamento síncrono
    const timer = setTimeout(() => {
      if (cancelled) return;
      const ctx = getAudioContext();
      buffersRef.current = originals.map((buffer, index) =>
        isClickStem(stems[index]) ? buffer : pitchShiftBuffer(ctx, buffer, transpose)
      );
      setTransposing(false);
      if (wasPlaying) {
        startPlayback(offsetRef.current, { skipCountIn: true }).catch(() => {});
      }
    }, 30);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      setTransposing(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transpose]);

  // Aplica volume/mute/solo nos ganhos ativos sem reiniciar a reprodução
  useEffect(() => {
    // enquanto há troca agendada, os ganhos têm automação marcada — não sobrescrever
    if (pendingJumpRef.current) return;
    channels.forEach((channel, index) => {
      const gain = gainsRef.current[index];
      if (gain) {
        gain.gain.value = effectiveGain(channel, channels);
      }
    });
  }, [channels, effectiveGain]);

  useEffect(() => {
    if (masterGainRef.current) {
      masterGainRef.current.gain.value = masterVolume;
    }
  }, [masterVolume]);

  // Lista inicial de saídas (sem pedir permissão; nomes vêm ao abrir o seletor)
  useEffect(() => {
    loadCueDevices(false);
  }, [loadCueDevices]);

  const handlePlayPause = () => {
    if (playingRef.current) {
      pause();
    } else {
      startPlayback(offsetRef.current >= duration ? 0 : offsetRef.current).catch(() => {
        setError("Não foi possível iniciar o áudio.");
      });
    }
  };

  const handleStop = () => {
    stopSources();
    playingRef.current = false;
    setPlaying(false);
    offsetRef.current = 0;
    setPosition(0);
  };

  const handleWaveformSeek = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!duration) return;
    const rect = (waveWrapRef.current as HTMLDivElement).getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    const time = ratio * duration;
    if (playingRef.current) {
      startPlayback(time, { skipCountIn: true }).catch(() => setError("Não foi possível buscar a posição."));
    } else {
      offsetRef.current = time;
      setPosition(time);
    }
  };

  const updateChannel = (index: number, patch: Partial<ChannelState>) => {
    setChannels((prev) => prev.map((channel, i) => (i === index ? { ...channel, ...patch } : channel)));
  };

  const currentSectionIndex = useMemo(() => {
    if (!sections.length) return -1;
    const index = sections.findIndex(
      (section) => position >= section.start && position < section.start + section.duration
    );
    return index === -1 ? sections.length - 1 : index;
  }, [sections, position]);

  if (!stems.length) {
    return (
      <div className="player">
        <p className="mixer-empty">Esta música ainda não tem stems cadastrados.</p>
      </div>
    );
  }

  const progressPercent = duration ? Math.min(100, (position / duration) * 100) : 0;

  return (
    <div className="player">
      <div className="player-top">
        <div className="player-meta">
          <span className="meta-block">
            <strong>{bpm ?? "--"}</strong>
            <small>BPM</small>
          </span>
          <span className="meta-block">
            <strong>{timeSignature ?? "4/4"}</strong>
            <small>compasso</small>
          </span>
          <span className="meta-block transpose">
            <span className="transpose-controls">
              <button
                onClick={() => setTranspose((prev) => Math.max(-6, prev - 1))}
                disabled={transpose <= -6 || transposing || loading}
                title="Baixar meio tom"
              >
                −
              </button>
              <strong>{tone ? transposeKey(tone, transpose) : transpose > 0 ? `+${transpose}` : `${transpose}`}</strong>
              <button
                onClick={() => setTranspose((prev) => Math.min(6, prev + 1))}
                disabled={transpose >= 6 || transposing || loading}
                title="Subir meio tom"
              >
                +
              </button>
            </span>
            <small>{transpose === 0 ? "Tom" : `Tom ${transpose > 0 ? "+" : ""}${transpose}`}</small>
          </span>
          <span className="meta-block clock">
            <strong>{formatTime(position)}</strong>
            <small>/ {formatTime(duration)}</small>
          </span>
        </div>
        <div className="player-transport">
          <button className="transport-btn" onClick={onPrev} title="Música anterior">
            ⏮
          </button>
          <button
            className="transport-btn play"
            onClick={handlePlayPause}
            disabled={loading || !!error}
            title={playing ? "Pausar" : "Tocar"}
          >
            {playing ? "❚❚" : "▶"}
          </button>
          <button className="transport-btn" onClick={handleStop} disabled={loading} title="Parar">
            ■
          </button>
          <button className="transport-btn" onClick={onNext} title="Próxima música">
            ⏭
          </button>
        </div>
        <div className="player-side">
          <button
            className={countInEnabled ? "chip active" : "chip"}
            onClick={() => setCountInEnabled((prev) => !prev)}
            title="1 compasso de click antes de começar"
          >
            Contagem
          </button>
          <button
            className={guideEnabled ? "chip active" : "chip"}
            onClick={() => setGuideEnabled((prev) => !prev)}
            title="Voz anuncia a próxima seção 1 compasso antes"
          >
            Guia
          </button>
          <button
            className={sectionLoop ? "chip active repeat" : "chip"}
            onClick={() => {
              setSectionLoop((prev) => {
                const next = !prev;
                if (!next && pendingJumpRef.current?.auto) {
                  cancelPendingJump(true);
                }
                return next;
              });
            }}
            title="Repete a seção atual até desligar"
          >
            Repetir
          </button>
          <button className={loop ? "chip active" : "chip"} onClick={onToggleLoop}>
            Loop
          </button>
          <span className="mixer-status">
            {loading ? "Carregando..." : transposing ? "Transpondo..." : countingIn ? "Contagem..." : title}
          </span>
        </div>
      </div>

      {error && <p className="mixer-error">{error}</p>}

      <div className="waveform" ref={waveWrapRef} onClick={handleWaveformSeek}>
        <canvas ref={canvasRef} />
        <div className="wave-played" style={{ width: `${progressPercent}%` }} />
        <div className="wave-playhead" style={{ left: `${progressPercent}%` }} />
        {duration > 0 &&
          sections.map((section, index) => (
            <div
              key={index}
              className="wave-section-line"
              style={{ left: `${(section.start / duration) * 100}%` }}
            />
          ))}
      </div>

      {sections.length > 0 && (
        <div className="sections-row">
          {sections.map((section, index) => (
            <button
              key={index}
              className={[
                "section-chip",
                index === currentSectionIndex ? "current" : "",
                index === queuedSection ? "queued" : ""
              ]
                .filter(Boolean)
                .join(" ")}
              style={{ flexGrow: section.duration }}
              onClick={() => queueSectionJump(index)}
              disabled={loading || !!error}
            >
              <strong>{section.name}</strong>
              {section.bars ? <small>{section.bars} comp.</small> : null}
            </button>
          ))}
        </div>
      )}

      {queuedSection !== null && (
        <p className="queue-hint">
          → Indo para <strong>{sections[queuedSection]?.name}</strong> quando a seção atual terminar
          (clique de novo para cancelar)
        </p>
      )}

      <div className="console">
        {stems.map((stem, index) => {
          const channel = channels[index];
          if (!channel) return null;
          const anySolo = channels.some((item) => item.solo);
          const silenced = channel.muted || (anySolo && !channel.solo);
          return (
            <div key={stem.url} className={`strip${silenced ? " silenced" : ""}`}>
              <input
                className="fader"
                type="range"
                min={0}
                max={1}
                step={0.02}
                value={channel.volume}
                onChange={(event) => updateChannel(index, { volume: Number(event.target.value) })}
              />
              <div className="strip-buttons">
                <button
                  className={channel.muted ? "mute active" : "mute"}
                  onClick={() => updateChannel(index, { muted: !channel.muted })}
                  title="Mudo"
                >
                  M
                </button>
                <button
                  className={channel.solo ? "solo active" : "solo"}
                  onClick={() => updateChannel(index, { solo: !channel.solo })}
                  title="Solo"
                >
                  S
                </button>
              </div>
              <span className="strip-name" title={stem.label}>
                {stem.name}
              </span>
            </div>
          );
        })}
        <div className="strip master-strip">
          <input
            className="fader"
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={masterVolume}
            onChange={(event) => setMasterVolume(Number(event.target.value))}
          />
          <div className="strip-buttons" />
          <span className="strip-name">Master</span>
        </div>
      </div>

      <div className="cue-route">
        <span>🎧 Saída do click e guias</span>
        <select
          value={cueOutputId}
          onMouseDown={() => {
            if (!cueDevices.some((device) => device.label)) {
              loadCueDevices(true);
            }
          }}
          onChange={(event) => applyCueOutput(event.target.value)}
        >
          <option value="default">Padrão (junto com o PA)</option>
          {cueDevices
            .filter((device) => device.deviceId && device.deviceId !== "default")
            .map((device) => (
              <option key={device.deviceId} value={device.deviceId}>
                {device.label || "Saída de áudio"}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Mixer;
