// Gera stems WAV sintéticos (click, bateria, baixo, teclado, voz) para cada arranjo do seed.
// Cada música tem 16 compassos divididos em 4 seções (Intro, Verso, Refrão, Solo) com
// arranjos diferentes, para testar a troca de seção sem cortar o click.
// Também grava um manifest.json por música com os tempos exatos das seções.
// Uso: node scripts/generate-stems.mjs  (a partir de apps/api)
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const SAMPLE_RATE = 22050;
const BARS_PER_SECTION = 4;
const SECTION_NAMES = ["Intro", "Verso", "Refrão", "Solo"];
const BARS = BARS_PER_SECTION * SECTION_NAMES.length;

// Mesmos dados de tom/BPM do seed.ts — track1..track8
const tracks = [
  { slug: "track1", key: "C", bpm: 82, beatsPerBar: 4 },
  { slug: "track2", key: "D", bpm: 76, beatsPerBar: 4 },
  { slug: "track3", key: "G", bpm: 98, beatsPerBar: 4 },
  { slug: "track4", key: "F", bpm: 114, beatsPerBar: 4 },
  { slug: "track5", key: "G", bpm: 88, beatsPerBar: 3 },
  { slug: "track6", key: "A", bpm: 112, beatsPerBar: 4 },
  { slug: "track7", key: "E", bpm: 90, beatsPerBar: 4 },
  { slug: "track8", key: "D", bpm: 100, beatsPerBar: 4 }
];

const SEMITONES = { C: 0, "C#": 1, D: 2, "D#": 3, E: 4, F: 5, "F#": 6, G: 7, "G#": 8, A: 9, "A#": 10, B: 11 };
const freqOf = (semitoneFromC0) => 16.3516 * Math.pow(2, semitoneFromC0 / 12);

// Progressão I – V – vi – IV (graus em semitons a partir da tônica, tríades)
const PROGRESSION = [
  { root: 0, minor: false },
  { root: 7, minor: false },
  { root: 9, minor: true },
  { root: 5, minor: false }
];

const mulberry32 = (seed) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const normalize = (buffer, peakTarget = 0.9) => {
  let peak = 0;
  for (let i = 0; i < buffer.length; i++) peak = Math.max(peak, Math.abs(buffer[i]));
  if (peak === 0) return buffer;
  const gain = peakTarget / peak;
  for (let i = 0; i < buffer.length; i++) buffer[i] *= gain;
  return buffer;
};

const writeWav = (filePath, samples) => {
  const dataSize = samples.length * 2;
  const buffer = Buffer.alloc(44 + dataSize);
  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20); // PCM
  buffer.writeUInt16LE(1, 22); // mono
  buffer.writeUInt32LE(SAMPLE_RATE, 24);
  buffer.writeUInt32LE(SAMPLE_RATE * 2, 28);
  buffer.writeUInt16LE(2, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);
  for (let i = 0; i < samples.length; i++) {
    const clamped = Math.max(-1, Math.min(1, samples[i]));
    buffer.writeInt16LE(Math.round(clamped * 32767), 44 + i * 2);
  }
  writeFileSync(filePath, buffer);
};

const generateTrack = (track) => {
  const { key, bpm, beatsPerBar } = track;
  const beatSec = 60 / bpm;
  const totalBeats = BARS * beatsPerBar;
  const totalSamples = Math.round(totalBeats * beatSec * SAMPLE_RATE);
  const keyOffset = SEMITONES[key];
  const rand = mulberry32(track.slug.charCodeAt(5) * 7919);

  const click = new Float32Array(totalSamples);
  const drums = new Float32Array(totalSamples);
  const bass = new Float32Array(totalSamples);
  const keys = new Float32Array(totalSamples);
  const voice = new Float32Array(totalSamples);

  const addTone = (target, startSec, durSec, freq, amp, { attack = 0.005, release = 0.05, harmonics = [1], vibrato = 0 } = {}) => {
    const start = Math.round(startSec * SAMPLE_RATE);
    const count = Math.round(durSec * SAMPLE_RATE);
    for (let i = 0; i < count; i++) {
      const idx = start + i;
      if (idx >= totalSamples) break;
      const t = i / SAMPLE_RATE;
      let env = 1;
      if (t < attack) env = t / attack;
      else if (t > durSec - release) env = Math.max(0, (durSec - t) / release);
      const vib = vibrato ? Math.sin(2 * Math.PI * 5 * t) * vibrato : 0;
      let sample = 0;
      for (let h = 0; h < harmonics.length; h++) {
        sample += harmonics[h] * Math.sin(2 * Math.PI * freq * (h + 1) * (1 + vib) * t);
      }
      target[idx] += sample * env * amp;
    }
  };

  const addNoise = (target, startSec, durSec, amp, brightness) => {
    const start = Math.round(startSec * SAMPLE_RATE);
    const count = Math.round(durSec * SAMPLE_RATE);
    let last = 0;
    for (let i = 0; i < count; i++) {
      const idx = start + i;
      if (idx >= totalSamples) break;
      const t = i / count;
      const white = rand() * 2 - 1;
      // filtro passa-alta simples para chimbal, passa-baixa para caixa
      const filtered = brightness > 0.5 ? white - last : (last = last * 0.7 + white * 0.3);
      last = brightness > 0.5 ? white : last;
      target[idx] += filtered * (1 - t) * (1 - t) * amp;
    }
  };

  const addKick = (target, startSec) => {
    const start = Math.round(startSec * SAMPLE_RATE);
    const count = Math.round(0.14 * SAMPLE_RATE);
    for (let i = 0; i < count; i++) {
      const idx = start + i;
      if (idx >= totalSamples) break;
      const t = i / SAMPLE_RATE;
      const freq = 100 * Math.exp(-t * 18) + 42;
      const env = Math.exp(-t * 22);
      target[idx] += Math.sin(2 * Math.PI * freq * t) * env * 0.95;
    }
  };

  const addClickTick = (target, startSec, accented) => {
    const freq = accented ? 1700 : 1100;
    const start = Math.round(startSec * SAMPLE_RATE);
    const count = Math.round(0.025 * SAMPLE_RATE);
    for (let i = 0; i < count; i++) {
      const idx = start + i;
      if (idx >= totalSamples) break;
      const t = i / SAMPLE_RATE;
      const env = Math.exp(-t * 220);
      target[idx] += Math.sin(2 * Math.PI * freq * t) * env * (accented ? 1 : 0.7);
    }
  };

  for (let bar = 0; bar < BARS; bar++) {
    const sectionIdx = Math.floor(bar / BARS_PER_SECTION);
    const section = SECTION_NAMES[sectionIdx];
    const chord = PROGRESSION[bar % PROGRESSION.length];
    const barStart = bar * beatsPerBar * beatSec;
    const rootSemitone = keyOffset + chord.root;
    const third = chord.minor ? 3 : 4;
    const triad = [0, third, 7];

    // Virada de "prato" no início do Solo, para marcar a chegada da seção
    if (section === "Solo" && bar % BARS_PER_SECTION === 0) {
      addNoise(drums, barStart, 0.9, 0.5, 0.9);
    }

    for (let beat = 0; beat < beatsPerBar; beat++) {
      const beatStart = barStart + beat * beatSec;

      // Click: constante do início ao fim, acentuado no primeiro tempo do compasso
      addClickTick(click, beatStart, beat === 0);

      // Bateria por seção
      if (section === "Intro") {
        // só chimbal e bumbo no primeiro tempo — clima de introdução
        if (beat === 0) addKick(drums, beatStart);
        addNoise(drums, beatStart, 0.03, 0.16, 0.9);
        addNoise(drums, beatStart + beatSec / 2, 0.03, 0.1, 0.9);
      } else {
        addKick(drums, beatStart);
        if (beat === 1 || (beatsPerBar === 4 && beat === 3)) {
          addNoise(drums, beatStart, 0.1, 0.55, 0.3);
        }
        const hatAmp = section === "Refrão" ? 0.3 : 0.22;
        addNoise(drums, beatStart, 0.03, hatAmp, 0.9);
        addNoise(drums, beatStart + beatSec / 2, 0.03, hatAmp * 0.65, 0.9);
        if (section === "Refrão") {
          // semicolcheias extras no refrão — mais energia
          addNoise(drums, beatStart + beatSec / 4, 0.02, 0.1, 0.9);
          addNoise(drums, beatStart + (3 * beatSec) / 4, 0.02, 0.1, 0.9);
        }
      }

      // Baixo por seção
      if (section === "Intro") {
        if (beat === 0) {
          addTone(bass, beatStart, beatsPerBar * beatSec * 0.95, freqOf(rootSemitone + 24), 0.7, {
            harmonics: [1, 0.4],
            release: 0.2
          });
        }
      } else if (section === "Solo") {
        // colcheias "bombando" no solo
        for (const half of [0, 0.5]) {
          const semitone = half === 0 ? rootSemitone : rootSemitone + (beat % 2 === 0 ? 0 : 7);
          addTone(bass, beatStart + half * beatSec, beatSec * 0.42, freqOf(semitone + 24), 0.8, {
            harmonics: [1, 0.45, 0.2],
            release: 0.05
          });
        }
      } else {
        const bassSemitone = beat === beatsPerBar - 1 ? rootSemitone + 7 : rootSemitone;
        addTone(bass, beatStart, beatSec * 0.9, freqOf(bassSemitone + 24), 0.8, {
          harmonics: [1, 0.45, 0.2],
          release: 0.08
        });
      }

      // Voz-guia por seção
      if (section === "Verso") {
        const melodyDegree = triad[[0, 2, 1, 2][beat % 4]];
        addTone(voice, beatStart, beatSec * 0.85, freqOf(rootSemitone + melodyDegree + 60), 0.5, {
          attack: 0.03,
          release: 0.1,
          harmonics: [1, 0.3],
          vibrato: 0.006
        });
      } else if (section === "Refrão") {
        const melodyDegree = triad[[2, 1, 0, 1][beat % 4]];
        addTone(voice, beatStart, beatSec * 0.85, freqOf(rootSemitone + melodyDegree + 72), 0.5, {
          attack: 0.03,
          release: 0.1,
          harmonics: [1, 0.3],
          vibrato: 0.008
        });
      } else if (section === "Solo") {
        // arpejo em colcheias — "solo de guitarra"
        const pattern = [0, 1, 2, 1];
        for (const half of [0, 0.5]) {
          const step = (beat * 2 + half * 2) % pattern.length;
          const degree = triad[pattern[step]];
          addTone(voice, beatStart + half * beatSec, beatSec * 0.4, freqOf(rootSemitone + degree + 72), 0.45, {
            attack: 0.01,
            release: 0.05,
            harmonics: [1, 0.5, 0.2]
          });
        }
      }
      // Intro: sem voz
    }

    // Teclado: pad segurando a tríade o compasso inteiro (todas as seções)
    const padAmp = section === "Refrão" ? 0.32 : 0.28;
    for (const interval of triad) {
      addTone(keys, barStart, beatsPerBar * beatSec, freqOf(rootSemitone + interval + 48), padAmp, {
        attack: 0.35,
        release: 0.4,
        harmonics: [1, 0.15]
      });
      if (section === "Refrão") {
        // dobra uma oitava acima no refrão
        addTone(keys, barStart, beatsPerBar * beatSec, freqOf(rootSemitone + interval + 60), 0.12, {
          attack: 0.4,
          release: 0.4
        });
      }
    }
  }

  normalize(click, 0.85);
  normalize(drums);
  normalize(bass);
  normalize(keys, 0.7);
  normalize(voice, 0.85);

  // Mix de demonstração sem o click
  const mix = new Float32Array(totalSamples);
  for (let i = 0; i < totalSamples; i++) {
    mix[i] = drums[i] * 0.9 + bass[i] * 0.8 + keys[i] * 0.7 + voice[i] * 0.9;
  }
  normalize(mix);

  const barDur = beatsPerBar * beatSec;
  const sections = SECTION_NAMES.map((name, index) => ({
    name,
    start: index * BARS_PER_SECTION * barDur,
    duration: BARS_PER_SECTION * barDur,
    bars: BARS_PER_SECTION
  }));

  return {
    stems: { click, bateria: drums, baixo: bass, teclado: keys, voz: voice, mix },
    manifest: {
      slug: track.slug,
      key,
      bpm,
      beatsPerBar,
      bars: BARS,
      duration: totalBeats * beatSec,
      sections
    }
  };
};

const outputRoot = path.join(process.cwd(), "public", "audio");
for (const track of tracks) {
  const dir = path.join(outputRoot, track.slug);
  mkdirSync(dir, { recursive: true });
  const { stems, manifest } = generateTrack(track);
  for (const [name, samples] of Object.entries(stems)) {
    writeWav(path.join(dir, `${name}.wav`), samples);
  }
  writeFileSync(path.join(dir, "manifest.json"), JSON.stringify(manifest, null, 2));
  console.log(`Gerado ${track.slug} (${track.key}, ${track.bpm} BPM, ${manifest.duration.toFixed(1)}s)`);
}
console.log("Stems gerados em", outputRoot);
