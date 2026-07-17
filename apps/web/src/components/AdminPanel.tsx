import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import { apiRequest, apiUpload, resolveAudioUrl } from "../lib/api";
import { loadBuffer } from "../lib/audioCache";
import { NOTE_NAMES } from "../lib/pitchShift";
import type { MixerStem, Section } from "./Mixer";

type Song = {
  id: string;
  title: string;
  artist: string;
  parts: string[];
};

type Arrangement = {
  id: string;
  name: string;
  defaultKey: string;
  defaultBpm: number;
  audioDemoUrl: string;
  stemsJson: MixerStem[] | null;
  structureJson: { beatsPerBar?: number; sections?: Section[] } | null;
  song: Song | null;
};

type AdminPanelProps = {
  token: string;
  arrangements: Arrangement[];
  partLabels: Record<string, string>;
  onChanged: () => void;
  onMessage: (text: string) => void;
};

const TIME_SIGNATURES = ["4/4", "3/4", "6/8", "2/4"];

const emptyForm = {
  title: "",
  artist: "",
  key: "C",
  bpm: "80",
  timeSignature: "4/4",
  part: "ENTRADA",
  season: ""
};

const formatSeconds = (value: number) => {
  const min = Math.floor(value / 60);
  const sec = (value % 60).toFixed(1).padStart(4, "0");
  return `${min}:${sec}`;
};

type EditableSection = { name: string; start: number };

const AdminPanel = ({ token, arrangements, partLabels, onChanged, onMessage }: AdminPanelProps) => {
  const [form, setForm] = useState(emptyForm);
  const [creating, setCreating] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [stemName, setStemName] = useState("");
  const [stemLabel, setStemLabel] = useState("");
  const [stemFile, setStemFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [sections, setSections] = useState<EditableSection[]>([]);
  const [selectedSection, setSelectedSection] = useState(0);
  const [beatsPerBar, setBeatsPerBar] = useState(4);
  const [snapMode, setSnapMode] = useState<"bar" | "beat" | "off">("beat");
  const [duration, setDuration] = useState(0);
  const [savingSections, setSavingSections] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const waveWrapRef = useRef<HTMLDivElement>(null);

  const selected = useMemo(
    () => arrangements.find((item) => item.id === selectedId) ?? null,
    [arrangements, selectedId]
  );
  const stems = useMemo(() => selected?.stemsJson ?? [], [selected]);

  // Sincroniza o editor quando muda o arranjo selecionado
  useEffect(() => {
    const structure = selected?.structureJson;
    setSections((structure?.sections ?? []).map((section) => ({ name: section.name, start: section.start })));
    setBeatsPerBar(structure?.beatsPerBar ?? 4);
    setSelectedSection(0);
    setDuration(0);
  }, [selectedId, selected]);

  // Carrega os stems do arranjo e desenha a waveform do editor
  const drawWaveform = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas || !stems.length) return;
    try {
      const buffers = await Promise.all(stems.map((stem) => loadBuffer(resolveAudioUrl(stem.url))));
      const total = Math.max(...buffers.map((buffer) => buffer.duration));
      setDuration(total);

      const g = canvas.getContext("2d");
      if (!g) return;
      const W = (canvas.width = 1200);
      const H = (canvas.height = 120);
      const RULER = 26; // faixa da régua compasso.tempo, estilo Reaper
      g.clearRect(0, 0, W, H);

      // waveform (abaixo da régua)
      const datas = buffers.map((buffer) => buffer.getChannelData(0));
      const maxLen = Math.max(...datas.map((data) => data.length));
      const samplesPerCol = Math.max(1, Math.floor(maxLen / W));
      const mid = RULER + (H - RULER) / 2;
      const amp = (H - RULER) / 2;
      g.fillStyle = "rgba(125, 170, 255, 0.7)";
      for (let x = 0; x < W; x++) {
        const start = x * samplesPerCol;
        let min = 0;
        let max = 0;
        for (let i = start; i < start + samplesPerCol; i += 6) {
          let sum = 0;
          for (const data of datas) {
            if (i < data.length) sum += data[i];
          }
          sum /= datas.length;
          if (sum > max) max = sum;
          if (sum < min) min = sum;
        }
        g.fillRect(x, mid - max * amp * 0.95, 1, Math.max(1, (max - min) * amp * 0.95));
      }

      // grade de compassos/tempos alinhada ao click (BPM do arranjo)
      const bpm = selected?.defaultBpm ?? 0;
      if (bpm > 0) {
        const beatSec = 60 / bpm;
        const barSec = beatSec * beatsPerBar;
        const pxPerSec = W / total;
        const barPx = barSec * pxPerSec;
        const labelEvery = barPx > 52 ? 1 : barPx > 26 ? 2 : 4;

        g.fillStyle = "rgba(255, 255, 255, 0.05)";
        g.fillRect(0, 0, W, RULER);

        for (let bar = 0; bar * barSec < total; bar++) {
          const x = Math.round(bar * barSec * pxPerSec);
          // linha de compasso: altura inteira
          g.fillStyle = "rgba(255, 255, 255, 0.28)";
          g.fillRect(x, 0, 1, H);
          // linhas de tempo (batidas do click) dentro do compasso
          if (barPx / beatsPerBar > 7) {
            for (let beat = 1; beat < beatsPerBar; beat++) {
              const bx = Math.round((bar * barSec + beat * beatSec) * pxPerSec);
              g.fillStyle = "rgba(255, 255, 255, 0.1)";
              g.fillRect(bx, RULER, 1, H - RULER);
            }
          }
          if (bar % labelEvery === 0) {
            const t = bar * barSec;
            g.fillStyle = "rgba(255, 255, 255, 0.85)";
            g.font = "11px Inter, system-ui, sans-serif";
            g.fillText(`${bar + 1}.1`, x + 3, 11);
            g.fillStyle = "rgba(255, 255, 255, 0.45)";
            g.font = "9px Inter, system-ui, sans-serif";
            g.fillText(`${Math.floor(t / 60)}:${(t % 60).toFixed(3).padStart(6, "0")}`, x + 3, 22);
          }
        }
      }
    } catch {
      onMessage("Não foi possível carregar o áudio para a waveform.");
    }
  }, [stems, onMessage, selected?.defaultBpm, beatsPerBar]);

  useEffect(() => {
    drawWaveform();
  }, [drawWaveform]);

  const handleCreate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCreating(true);
    try {
      const response = await apiRequest("/songs", {
        method: "POST",
        token,
        body: {
          title: form.title,
          artist: form.artist,
          key: form.key,
          bpm: Number(form.bpm),
          timeSignature: form.timeSignature,
          parts: [form.part],
          season: form.season || undefined
        }
      });
      onMessage(`Música "${form.title}" criada! Agora envie os stems.`);
      setForm(emptyForm);
      setSelectedId(response.arrangement?.id ?? "");
      onChanged();
    } catch (error) {
      onMessage((error as Error).message);
    } finally {
      setCreating(false);
    }
  };

  const handleUpload = async () => {
    if (!selected || !stemFile) {
      onMessage("Escolha a música e o arquivo de áudio.");
      return;
    }
    setUploading(true);
    try {
      const name = stemName.trim() || stemFile.name.replace(/\.[^.]+$/, "");
      const params = new URLSearchParams({ name, label: stemLabel });
      await apiUpload(`/arrangements/${selected.id}/stems?${params.toString()}`, stemFile, token);
      onMessage(`Stem "${name}" enviado!`);
      setStemName("");
      setStemLabel("");
      setStemFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      onChanged();
    } catch (error) {
      onMessage((error as Error).message);
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveStem = async (url: string) => {
    if (!selected) return;
    try {
      await apiRequest(`/arrangements/${selected.id}/stems?url=${encodeURIComponent(url)}`, {
        method: "DELETE",
        token
      });
      onMessage("Stem removido.");
      onChanged();
    } catch (error) {
      onMessage((error as Error).message);
    }
  };

  const handleDeleteSong = async () => {
    if (!selected?.song) return;
    if (!window.confirm(`Excluir "${selected.song.title}" com todos os stems?`)) return;
    try {
      await apiRequest(`/songs/${selected.song.id}`, { method: "DELETE", token });
      onMessage("Música excluída.");
      setSelectedId("");
      onChanged();
    } catch (error) {
      onMessage((error as Error).message);
    }
  };

  const handleWaveClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!duration || !sections.length) return;
    const rect = (waveWrapRef.current as HTMLDivElement).getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    let time = ratio * duration;

    // ímã: gruda o clique na grade do click (compasso ou tempo)
    const bpm = selected?.defaultBpm ?? 0;
    if (snapMode !== "off" && bpm > 0) {
      const step = snapMode === "bar" ? (60 / bpm) * beatsPerBar : 60 / bpm;
      time = Math.round(time / step) * step;
    }
    time = Math.max(0, Math.min(duration, Math.round(time * 1000) / 1000));

    setSections((prev) =>
      prev.map((section, index) => (index === selectedSection ? { ...section, start: time } : section))
    );
  };

  const handleSaveSections = async () => {
    if (!selected) return;
    if (!duration && sections.length) {
      onMessage("Envie ao menos um stem antes de salvar as seções.");
      return;
    }
    setSavingSections(true);
    try {
      const ordered = [...sections].sort((a, b) => a.start - b.start);
      const withDurations = ordered.map((section, index) => ({
        name: section.name,
        start: section.start,
        duration: (index + 1 < ordered.length ? ordered[index + 1].start : duration) - section.start
      }));
      await apiRequest(`/arrangements/${selected.id}`, {
        method: "PATCH",
        token,
        body: { sections: withDurations, beatsPerBar }
      });
      onMessage("Seções salvas!");
      onChanged();
    } catch (error) {
      onMessage((error as Error).message);
    } finally {
      setSavingSections(false);
    }
  };

  const updateSection = (index: number, patch: Partial<EditableSection>) => {
    setSections((prev) => prev.map((section, i) => (i === index ? { ...section, ...patch } : section)));
  };

  return (
    <section className="panel">
      <header>
        <h2>Administração</h2>
        <p>Cadastre músicas e envie as multitracks reais.</p>
      </header>

      <form className="admin-form" onSubmit={handleCreate}>
        <h3>Nova música</h3>
        <div className="admin-grid">
          <label>
            Título
            <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
          </label>
          <label>
            Artista
            <input value={form.artist} onChange={(e) => setForm({ ...form, artist: e.target.value })} required />
          </label>
          <label>
            Tom
            <select value={form.key} onChange={(e) => setForm({ ...form, key: e.target.value })}>
              {NOTE_NAMES.map((note) => (
                <option key={note} value={note}>
                  {note}
                </option>
              ))}
            </select>
          </label>
          <label>
            BPM
            <input
              type="number"
              min={30}
              max={300}
              value={form.bpm}
              onChange={(e) => setForm({ ...form, bpm: e.target.value })}
              required
            />
          </label>
          <label>
            Compasso
            <select value={form.timeSignature} onChange={(e) => setForm({ ...form, timeSignature: e.target.value })}>
              {TIME_SIGNATURES.map((ts) => (
                <option key={ts} value={ts}>
                  {ts}
                </option>
              ))}
            </select>
          </label>
          <label>
            Parte da missa
            <select value={form.part} onChange={(e) => setForm({ ...form, part: e.target.value })}>
              {Object.entries(partLabels).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit" className="primary" disabled={creating}>
          {creating ? "Criando..." : "Criar música"}
        </button>
      </form>

      <div className="admin-manage">
        <h3>Stems e seções</h3>
        <label>
          Música
          <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
            <option value="">Selecione...</option>
            {arrangements.map((item) => (
              <option key={item.id} value={item.id}>
                {item.song?.title ?? item.name} — {item.song?.artist}
              </option>
            ))}
          </select>
        </label>

        {selected && (
          <>
            <div className="stem-upload">
              <input
                ref={fileInputRef}
                type="file"
                accept=".wav,.mp3,.ogg,.m4a,.flac,.aac,audio/*"
                onChange={(e) => setStemFile(e.target.files?.[0] ?? null)}
              />
              <input
                placeholder="Nome (ex.: Bateria)"
                value={stemName}
                onChange={(e) => setStemName(e.target.value)}
              />
              <input
                placeholder="Descrição (opcional)"
                value={stemLabel}
                onChange={(e) => setStemLabel(e.target.value)}
              />
              <button onClick={handleUpload} disabled={uploading || !stemFile} type="button">
                {uploading ? "Enviando..." : "Enviar stem"}
              </button>
            </div>

            <div className="stem-list">
              {stems.map((stem) => (
                <article key={stem.url} className="data-row">
                  <div>
                    <strong>{stem.name}</strong>
                    <span>{stem.label}</span>
                  </div>
                  <button className="ghost" onClick={() => handleRemoveStem(stem.url)} type="button">
                    Remover
                  </button>
                </article>
              ))}
              {!stems.length && <p>Nenhum stem enviado ainda.</p>}
            </div>

            {stems.length > 0 && (
              <div className="section-editor">
                <h4>Seções</h4>
                <p className="muted">
                  Selecione uma seção e clique na waveform para marcar onde ela começa — o clique
                  gruda na grade do click ({selected.defaultBpm} BPM).
                </p>
                <div className="editor-toolbar">
                  <label className="inline">
                    Ímã
                    <select
                      value={snapMode}
                      onChange={(e) => setSnapMode(e.target.value as "bar" | "beat" | "off")}
                    >
                      <option value="beat">Tempo (click)</option>
                      <option value="bar">Compasso</option>
                      <option value="off">Desligado</option>
                    </select>
                  </label>
                </div>
                <div className="waveform editor" ref={waveWrapRef} onClick={handleWaveClick}>
                  <canvas ref={canvasRef} />
                  {duration > 0 &&
                    sections.map((section, index) => (
                      <div
                        key={index}
                        className={`wave-section-line${index === selectedSection ? " selected" : ""}`}
                        style={{ left: `${(section.start / duration) * 100}%` }}
                        title={section.name}
                      />
                    ))}
                </div>
                <div className="section-rows">
                  {sections.map((section, index) => (
                    <div
                      key={index}
                      className={`section-row${index === selectedSection ? " selected" : ""}`}
                      onClick={() => setSelectedSection(index)}
                    >
                      <input
                        value={section.name}
                        onChange={(e) => updateSection(index, { name: e.target.value })}
                      />
                      <input
                        type="number"
                        min={0}
                        max={Math.max(duration, 0)}
                        step={0.1}
                        value={section.start}
                        onChange={(e) => updateSection(index, { start: Number(e.target.value) })}
                      />
                      <span className="muted">{formatSeconds(section.start)}</span>
                      <button
                        className="ghost"
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSections((prev) => prev.filter((_, i) => i !== index));
                          setSelectedSection(0);
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div className="section-actions">
                  <button
                    className="ghost"
                    type="button"
                    onClick={() => {
                      setSections((prev) => [
                        ...prev,
                        { name: "Nova seção", start: prev.length ? prev[prev.length - 1].start + 10 : 0 }
                      ]);
                      setSelectedSection(sections.length);
                    }}
                  >
                    + Adicionar seção
                  </button>
                  <label className="inline">
                    Tempos por compasso
                    <input
                      type="number"
                      min={2}
                      max={12}
                      value={beatsPerBar}
                      onChange={(e) => setBeatsPerBar(Number(e.target.value))}
                    />
                  </label>
                  <button className="primary" type="button" onClick={handleSaveSections} disabled={savingSections}>
                    {savingSections ? "Salvando..." : "Salvar seções"}
                  </button>
                </div>
              </div>
            )}

            <button className="ghost danger" type="button" onClick={handleDeleteSong}>
              Excluir música
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default AdminPanel;
