import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent } from "react";
import { apiRequest } from "./lib/api";

type PartKey =
  | "ENTRADA"
  | "ATO_PENITENCIAL"
  | "GLORIA"
  | "SALMO_RESPONSORIAL"
  | "ACLAMACAO"
  | "OFERTORIO"
  | "SANTO"
  | "CORDEIRO"
  | "COMUNHAO"
  | "FINAL";

type Stem = {
  id: string;
  arrangement_id: string;
  name: string;
  volume: number;
  label: string;
};

type Arrangement = {
  id: string;
  tone: string;
  bpm: number;
  difficulty: number;
  official: boolean;
  demoUrl: string | null;
  music: {
    id: string;
    title: string;
    part: PartKey;
    author: string | null;
    tempoId: string;
  };
  stems: Stem[];
};

type Tempo = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  allowGloria: boolean;
};

type SetlistItem = {
  id: string;
  part: PartKey;
  order: number;
  arrangement: Arrangement;
};

type Setlist = {
  id: string;
  name: string;
  createdAt: string;
  tempo: Tempo;
  ministryId: string;
  createdBy: string;
  items: SetlistItem[];
};

type Ministry = {
  id: string;
  name: string;
  slug: string;
  owner_id?: string;
  role?: string;
};

type User = {
  id: string;
  name: string;
  email: string;
};

const PART_LABELS: Record<PartKey, string> = {
  ENTRADA: "Entrada",
  ATO_PENITENCIAL: "Ato Penitencial",
  GLORIA: "Glória",
  SALMO_RESPONSORIAL: "Salmo",
  ACLAMACAO: "Aclamação",
  OFERTORIO: "Ofertório",
  SANTO: "Santo",
  CORDEIRO: "Cordeiro",
  COMUNHAO: "Comunhão",
  FINAL: "Final"
};

const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : initialValue;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (storedValue === null) {
      window.localStorage.removeItem(key);
    } else {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
};

const App = () => {
  const [token, setToken] = useLocalStorage<string>("holytracks-token", "");
  const [user, setUser] = useLocalStorage<User | null>("holytracks-user", null);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [ministries, setMinistries] = useState<Ministry[]>([]);
  const [selectedMinistry, setSelectedMinistry] = useState<string>("");
  const [tempos, setTempos] = useState<Tempo[]>([]);
  const [arrangements, setArrangements] = useState<Arrangement[]>([]);
  const [setlists, setSetlists] = useState<Setlist[]>([]);
  const [draftTempoId, setDraftTempoId] = useState("");
  const [draftName, setDraftName] = useState("");
  const [draftItems, setDraftItems] = useState<SetlistItem[]>([]);
  const [builderPart, setBuilderPart] = useState<PartKey>("ENTRADA");
  const [builderArrangementId, setBuilderArrangementId] = useState("");
  const [activeTab, setActiveTab] = useState<"home" | "library" | "setlist" | "live">("home");
  const [message, setMessage] = useState("");
  const [liveSetlistId, setLiveSetlistId] = useState<string | null>(null);
  const [liveIndex, setLiveIndex] = useState(0);
  const [liveLoop, setLiveLoop] = useState(false);
  const [liveVolume, setLiveVolume] = useState(0.8);
  const [livePlaying, setLivePlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const isAuthenticated = Boolean(token);

  const activeLiveSetlist = useMemo(
    () => setlists.find((setlist) => setlist.id === liveSetlistId) ?? setlists[0] ?? null,
    [liveSetlistId, setlists]
  );

  const currentLiveItem = activeLiveSetlist?.items[liveIndex] ?? null;

  useEffect(() => {
    if (!isAuthenticated) {
      setMinistries([]);
      setSetlists([]);
      setArrangements([]);
      setTempos([]);
      setSelectedMinistry("");
      return;
    }

    const loadMinistries = async () => {
      try {
        const response = await apiRequest("/ministries", { token });
        setMinistries(response.ministries ?? []);
        const next = response.ministries?.[0]?.id ?? "";
        setSelectedMinistry(next);
      } catch (error) {
        console.error(error);
      }
    };

    loadMinistries();
  }, [isAuthenticated, token]);

  useEffect(() => {
    if (!isAuthenticated) return;
    const loadLibrary = async () => {
      try {
        const temposResponse = await apiRequest("/library/tempos", { token });
        setTempos(temposResponse.tempos ?? []);
        const arrangementsResponse = await apiRequest("/library/arrangements", { token });
        setArrangements(arrangementsResponse.arrangements ?? []);
        setDraftTempoId(temposResponse.tempos?.[0]?.id ?? "");
      } catch (error) {
        console.error(error);
      }
    };

    loadLibrary();
  }, [isAuthenticated, token]);

  useEffect(() => {
    if (!isAuthenticated || !selectedMinistry) return;
    const loadSetlists = async () => {
      try {
        const response = await apiRequest(`/setlists?ministryId=${selectedMinistry}`, { token });
        setSetlists(response.setlists ?? []);
        if (!liveSetlistId && response.setlists?.length) {
          setLiveSetlistId(response.setlists[0].id);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadSetlists();
  }, [isAuthenticated, selectedMinistry, token]);

  useEffect(() => {
    const activeTrack = currentLiveItem?.arrangement?.demoUrl;
    const audio = audioRef.current;
    if (!audio) return;
    if (activeTrack) {
      const shouldResume = livePlaying;
      audio.src = activeTrack;
      audio.loop = liveLoop;
      audio.volume = liveVolume;
      if (shouldResume) {
        audio.play().catch(() => {});
      }
    }

    const handleEnd = () => {
      if (liveLoop) return;
      setLiveIndex((prev) => {
        const next = prev + 1;
        return next >= (activeLiveSetlist?.items.length ?? 1) ? prev : next;
      });
    };

    audio.addEventListener("ended", handleEnd);
    return () => {
      audio.removeEventListener("ended", handleEnd);
    };
  }, [currentLiveItem, liveLoop, liveVolume, livePlaying, activeLiveSetlist]);

  const filteredArrangements = useMemo(
    () => arrangements.filter((item) => item.music.part === builderPart),
    [arrangements, builderPart]
  );

  const handleAuth = async (values: Record<string, string>) => {
    setAuthLoading(true);
    setAuthError("");
    try {
      const path = authMode === "login" ? "/auth/login" : "/auth/register";
      const payload =
        authMode === "login"
          ? values
          : {
              ...values,
              ministryName: values.ministryName
            };
      const response = await apiRequest(path, { method: "POST", body: payload });
      setToken(response.token);
      setUser(response.user);
      if (authMode === "login") {
        setMinistries(response.ministries ?? []);
        setSelectedMinistry(response.ministries?.[0]?.id ?? "");
      } else if (response.ministry) {
        setMinistries([response.ministry]);
        setSelectedMinistry(response.ministry.id);
      }
      setMessage(`Bem-vindo(a), ${response.user?.name ?? "músico"}!`);
    } catch (error) {
      setAuthError((error as Error).message);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleAddToDraft = () => {
    if (!builderArrangementId || !draftTempoId) {
      setMessage("Escolha um arranjo e selecione o tempo litúrgico.");
      return;
    }
    const chosen = arrangements.find((item) => item.id === builderArrangementId);
    if (!chosen) return;
    setDraftItems((prev) => [
      ...prev,
      {
        id: `${builderArrangementId}-${prev.length}`,
        part: builderPart,
        order: prev.length,
        arrangement: chosen
      }
    ]);
    setBuilderArrangementId("");
    setMessage("Item adicionado ao setlist.");
  };

  const handleRemoveDraft = (id: string) => {
    setDraftItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSaveSetlist = async () => {
    if (!draftName || !draftTempoId || !draftItems.length || !selectedMinistry) {
      setMessage("Complete o nome, o tempo e adicione ao menos uma faixa.");
      return;
    }
    try {
      const payload = {
        name: draftName,
        ministryId: selectedMinistry,
        tempoId: draftTempoId,
        items: draftItems.map((item, index) => ({
          arrangementId: item.arrangement.id,
          part: item.part,
          order: index
        }))
      };
      const response = await apiRequest("/setlists", {
        method: "POST",
        token,
        body: payload
      });
      setSetlists((prev) => [response.setlist, ...prev]);
      setDraftItems([]);
      setDraftName("");
      setMessage("Setlist salvo com sucesso!");
    } catch (error) {
      setMessage((error as Error).message);
    }
  };

  const handleLogout = () => {
    setToken("");
    setUser(null);
    setMinistries([]);
    setSelectedMinistry("");
    setSetlists([]);
    setMessage("Sessão encerrada.");
  };

  const handleLiveNext = () => {
    if (!activeLiveSetlist) return;
    setLiveIndex((prev) => (prev + 1 >= activeLiveSetlist.items.length ? prev : prev + 1));
  };

  const handleLiveSelection = (id: string) => {
    if (!id) {
      setLiveSetlistId(null);
      setLiveIndex(0);
      setLivePlaying(false);
      return;
    }
    setLiveSetlistId(id);
    setLiveIndex(0);
    setLivePlaying(false);
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (livePlaying) {
      audio.pause();
      setLivePlaying(false);
    } else {
      audio
        .play()
        .then(() => setLivePlaying(true))
        .catch(() => setMessage("Não foi possível reproduzir o áudio."));
    }
  };

  const authPanel = (
    <div className="auth-shell">
      <h1>Holytracks | Multitracks Católicos</h1>
      <p>Login e cadastro para ministérios de música com foco em missas.</p>
      <div className="auth-card">
        <div className="mode-toggle">
          <button
            className={authMode === "login" ? "active" : ""}
            onClick={() => setAuthMode("login")}
          >
            Entrar
          </button>
          <button
            className={authMode === "register" ? "active" : ""}
            onClick={() => setAuthMode("register")}
          >
            Registrar
          </button>
        </div>
        <AuthForm mode={authMode} onSubmit={handleAuth} loading={authLoading} error={authError} />
        <p className="small-print">
          Em missas reais você pode trocar o tempo litúrgico, montar setlists e tocar no Live Mode.
        </p>
      </div>
    </div>
  );

  if (!isAuthenticated) {
    return <div className="app-shell">{authPanel}</div>;
  }

  const libraryPanel = (
    <section className="panel">
      <header>
        <h2>Biblioteca litúrgica</h2>
        <p>Repertório filtrado por parte e tempo.</p>
      </header>
      <div className="filters">
        <label>
          Parte
          <select value={builderPart} onChange={(event) => setBuilderPart(event.target.value as PartKey)}>
            {Object.entries(PART_LABELS).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Tempo
          <select value={draftTempoId} onChange={(event) => setDraftTempoId(event.target.value)}>
            <option value="">Selecione</option>
            {tempos.map((tempo) => (
              <option key={tempo.id} value={tempo.id}>
                {tempo.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="card-grid">
        {filteredArrangements.map((item) => (
          <div key={item.id} className="card">
            <div className="card-head">
              <h3>{item.music.title}</h3>
              <span>{item.music.part.replace("_", " ")}</span>
            </div>
            <div className="card-body">
              <p>
                Tom {item.tone} • {item.bpm} BPM
              </p>
              <p>Dificuldade {item.difficulty}</p>
              <div className="stems">
                {item.stems.slice(0, 3).map((stem) => (
                  <div key={stem.id} className="stem">
                    <span>{stem.name}</span>
                    <span>{stem.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="ghost" onClick={() => setBuilderArrangementId(item.id)}>
              {builderArrangementId === item.id ? "Selecionado" : "Selecionar"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );

  const homePanel = (
    <section className="panel">
      <header>
        <h2>Resumo da missa</h2>
        <p>Organize o ministério com tempos e setlists prontos.</p>
      </header>
      <div className="stats">
        <div>
          <h3>{setlists.length}</h3>
          <p>Setlists salvos</p>
        </div>
        <div>
          <h3>{arrangements.length}</h3>
          <p>Arranjos disponíveis</p>
        </div>
        <div>
          <h3>{draftItems.length}</h3>
          <p>Itens no rascunho</p>
        </div>
      </div>
      <div className="notice">
        {message ? <p>{message}</p> : <p>Selecione um ministério para começar a montar a missa.</p>}
      </div>
    </section>
  );

  const setlistPanel = (
    <section className="panel">
      <header>
        <h2>Montagem de setlist</h2>
        <p>Combine partes da missa e organize a ordem.</p>
      </header>
      <div className="draft-controls">
        <label>
          Nome do setlist
          <input value={draftName} onChange={(event) => setDraftName(event.target.value)} />
        </label>
        <label>
          Tempo litúrgico
          <select value={draftTempoId} onChange={(event) => setDraftTempoId(event.target.value)}>
            <option value="">Escolha</option>
            {tempos.map((tempo) => (
              <option key={tempo.id} value={tempo.id}>
                {tempo.name}
              </option>
            ))}
          </select>
        </label>
        <button onClick={handleAddToDraft} disabled={!draftTempoId || !builderArrangementId}>
          Adicionar {PART_LABELS[builderPart]}
        </button>
      </div>
      <div className="draft-items">
        {draftItems.map((item) => (
          <article key={item.id} className="draft-row">
            <strong>
              {PART_LABELS[item.part]} – {item.arrangement.music.title}
            </strong>
            <button onClick={() => handleRemoveDraft(item.id)}>Remover</button>
          </article>
        ))}
        {!draftItems.length && <p>Adicione um arranjo para cada parte da missa.</p>}
      </div>
      <button className="primary" onClick={handleSaveSetlist}>
        Salvar setlist
      </button>
      <div className="stored-setlists">
        <h3>Setlists do ministério</h3>
        {setlists.map((item) => (
          <article key={item.id} className="data-row">
            <div>
              <strong>{item.name}</strong>
              <span>{item.items.length} partes</span>
            </div>
            <button onClick={() => handleLiveSelection(item.id)}>Carregar no Live</button>
          </article>
        ))}
      </div>
    </section>
  );

  const livePanel = (
    <section className="panel live-panel">
      <header>
        <h2>Live Mode</h2>
        <p>Controle rápido da missa no palco.</p>
      </header>
      <div className="live-controls">
        <label>
          Setlist ativo
          <select
            value={activeLiveSetlist?.id ?? ""}
            onChange={(event) => handleLiveSelection(event.target.value)}
          >
            {setlists.map((setlist) => (
              <option key={setlist.id} value={setlist.id}>
                {setlist.name}
              </option>
            ))}
          </select>
        </label>
        <div className="audio-actions">
          <button onClick={handlePlayPause}>{livePlaying ? "Pausar" : "Tocar"}</button>
          <button onClick={handleLiveNext}>Próxima</button>
          <label className="switch">
            <input type="checkbox" checked={liveLoop} onChange={() => setLiveLoop((prev) => !prev)} />
            <span>Loop</span>
          </label>
        </div>
        <label>
          Volume
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={liveVolume}
            onChange={(event) => {
              setLiveVolume(Number(event.target.value));
              if (audioRef.current) {
                audioRef.current.volume = Number(event.target.value);
              }
            }}
          />
        </label>
      </div>
      <div className="live-timeline">
        {activeLiveSetlist?.items.map((item, index) => (
          <div key={item.id} className={index === liveIndex ? "current" : ""}>
            <strong>
              {PART_LABELS[item.part]} – {item.arrangement.music.title}
            </strong>
            <p>{item.arrangement.music.author ?? "Arranjo demo"}</p>
          </div>
        ))}
      </div>
      <audio ref={audioRef} controls className="hidden-audio" />
    </section>
  );

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1>Holytracks Multitracks</h1>
          <p>{ministries.find((item) => item.id === selectedMinistry)?.name ?? "Selecione um ministério"}</p>
          {user && <p className="muted">Coordenador(a): {user.name}</p>}
        </div>
        <div className="user-actions">
          <select value={selectedMinistry} onChange={(event) => setSelectedMinistry(event.target.value)}>
            {ministries.map((ministry) => (
              <option key={ministry.id} value={ministry.id}>
                {ministry.name}
              </option>
            ))}
          </select>
          <button className="ghost" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </header>
      <main className="app-main">
        {activeTab === "home" && homePanel}
        {activeTab === "library" && libraryPanel}
        {activeTab === "setlist" && setlistPanel}
        {activeTab === "live" && livePanel}
      </main>
      <footer className="tab-bar">
        <button className={activeTab === "home" ? "active" : ""} onClick={() => setActiveTab("home")}>
          Início
        </button>
        <button
          className={activeTab === "library" ? "active" : ""}
          onClick={() => setActiveTab("library")}
        >
          Biblioteca
        </button>
        <button
          className={activeTab === "setlist" ? "active" : ""}
          onClick={() => setActiveTab("setlist")}
        >
          Setlist
        </button>
        <button className={activeTab === "live" ? "active" : ""} onClick={() => setActiveTab("live")}>
          Live
        </button>
      </footer>
    </div>
  );
};

type AuthFormProps = {
  mode: "login" | "register";
  onSubmit: (values: Record<string, string>) => void;
  loading: boolean;
  error: string;
};

const AuthForm = ({ mode, onSubmit, loading, error }: AuthFormProps) => {
  const [form, setForm] = useState<{ email: string; password: string; name?: string; ministryName?: string }>({
    email: "",
    password: "",
    name: "",
    ministryName: ""
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {mode === "register" && (
        <>
          <label>
            Nome
            <input
              value={form.name}
              onChange={(event) => handleChange("name", event.target.value)}
              required
            />
          </label>
          <label>
            Ministério (opcional)
            <input value={form.ministryName} onChange={(event) => handleChange("ministryName", event.target.value)} />
          </label>
        </>
      )}
      <label>
        E-mail
        <input value={form.email} type="email" onChange={(event) => handleChange("email", event.target.value)} required />
      </label>
      <label>
        Senha
        <input
          value={form.password}
          type="password"
          onChange={(event) => handleChange("password", event.target.value)}
          required
        />
      </label>
      {error && <p className="auth-error">{error}</p>}
      <button type="submit" className="primary" disabled={loading}>
        {loading ? "Aguarde..." : mode === "login" ? "Entrar" : "Criar conta"}
      </button>
    </form>
  );
};

export default App;
