import { useCallback, useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { apiRequest } from "./lib/api";
import Mixer from "./components/Mixer";
import type { MixerStem, Section } from "./components/Mixer";
import AdminPanel from "./components/AdminPanel";

type PartKey =
  | "ENTRADA"
  | "ATO_PENITENCIAL"
  | "GLORIA"
  | "SALMO"
  | "ACLAMACAO"
  | "OFERTORIO"
  | "SANTO"
  | "CORDEIRO"
  | "COMUNHAO"
  | "FINAL"
  | "OUTROS";

type Song = {
  id: string;
  title: string;
  artist: string;
  bpm: number;
  key?: string;
  timeSignature: string;
  language?: string;
  liturgicalTags: string[];
  parts: string[];
  season?: string | null;
};

type Arrangement = {
  id: string;
  name: string;
  defaultKey: string;
  defaultBpm: number;
  audioDemoUrl: string;
  stemsJson: MixerStem[] | null;
  structureJson: { duration?: number; beatsPerBar?: number; sections?: Section[] } | null;
  song: Song | null;
};

type SetlistItem = {
  id: string;
  part: PartKey;
  order: number;
  notes?: string | null;
  arrangement: Arrangement;
};

type Setlist = {
  id: string;
  name: string;
  createdAt: string;
  date?: string | null;
  liturgyType?: string | null;
  season?: string | null;
  ministryId: string;
  items: SetlistItem[];
};

type Ministry = {
  id: string;
  name: string;
  slug?: string;
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
  SALMO: "Salmo",
  ACLAMACAO: "Aclamação",
  OFERTORIO: "Ofertório",
  SANTO: "Santo",
  CORDEIRO: "Cordeiro",
  COMUNHAO: "Comunhão",
  FINAL: "Final",
  OUTROS: "Outros"
};

// Cor de capa determinística a partir do título (não temos imagens ainda)
const coverHue = (text: string) => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % 360;
};

const arrangementStems = (arrangement: Arrangement | null | undefined): MixerStem[] => {
  if (!arrangement) return [];
  if (arrangement.stemsJson?.length) return arrangement.stemsJson;
  if (arrangement.audioDemoUrl) {
    return [{ name: "Mix", label: "Mixagem completa", volume: 0.9, url: arrangement.audioDemoUrl }];
  }
  return [];
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
  const [arrangements, setArrangements] = useState<Arrangement[]>([]);
  const [setlists, setSetlists] = useState<Setlist[]>([]);
  const [draftName, setDraftName] = useState("");
  const [draftItems, setDraftItems] = useState<SetlistItem[]>([]);
  const [builderPart, setBuilderPart] = useState<PartKey>("ENTRADA");
  const [builderArrangementId, setBuilderArrangementId] = useState("");
  const [overlay, setOverlay] = useState<null | "setlist" | "admin" | "config">(null);
  const [message, setMessage] = useState("");
  const [liveSetlistId, setLiveSetlistId] = useState<string | null>(null);
  const [liveIndex, setLiveIndex] = useState(0);
  const [liveLoop, setLiveLoop] = useState(false);

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

  const loadLibrary = useCallback(async () => {
    if (!token) return;
    try {
      const response = await apiRequest("/arrangements", { token });
      setArrangements(response.arrangements ?? []);
    } catch (error) {
      console.error(error);
    }
  }, [token]);

  useEffect(() => {
    if (!isAuthenticated) return;
    loadLibrary();
  }, [isAuthenticated, loadLibrary]);

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

  const filteredArrangements = useMemo(
    () => arrangements.filter((item) => item.song?.parts?.includes(builderPart)),
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
    if (!builderArrangementId) {
      setMessage("Escolha um arranjo na biblioteca.");
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
    if (!draftName || !draftItems.length || !selectedMinistry) {
      setMessage("Complete o nome e adicione ao menos uma faixa.");
      return;
    }
    try {
      const payload = {
        name: draftName,
        ministryId: selectedMinistry,
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
      // já deixa o setlist recém-criado ativo no palco
      if (response.setlist?.id) {
        handleLiveSelection(response.setlist.id);
      }
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

  const handleLivePrev = () => {
    setLiveIndex((prev) => (prev - 1 < 0 ? prev : prev - 1));
  };

  const handleLiveEnded = () => {
    setLiveIndex((prev) => {
      const next = prev + 1;
      return next >= (activeLiveSetlist?.items.length ?? 1) ? prev : next;
    });
  };

  const handleLiveSelection = (id: string) => {
    if (!id) {
      setLiveSetlistId(null);
      setLiveIndex(0);
      return;
    }
    setLiveSetlistId(id);
    setLiveIndex(0);
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
          Em missas reais você pode montar setlists e tocar os multitracks no Live Mode.
        </p>
      </div>
    </div>
  );

  if (!isAuthenticated) {
    return <div className="app-shell">{authPanel}</div>;
  }

  const setlistManager = (
    <section className="panel">
      <header>
        <h2>Setlists</h2>
        <p>Escolha o setlist ativo ou monte um novo para a missa.</p>
      </header>

      <div className="stored-setlists">
        {setlists.map((item) => (
          <article
            key={item.id}
            className={`data-row${item.id === activeLiveSetlist?.id ? " active" : ""}`}
          >
            <div>
              <strong>{item.name}</strong>
              <span>{item.items.length} partes</span>
            </div>
            <button
              className="primary"
              onClick={() => {
                handleLiveSelection(item.id);
                setOverlay(null);
              }}
            >
              Tocar
            </button>
          </article>
        ))}
        {!setlists.length && <p>Nenhum setlist ainda. Monte um abaixo.</p>}
      </div>

      <div className="builder">
        <h3>Novo setlist</h3>
        <div className="draft-controls">
          <label>
            Nome do setlist
            <input value={draftName} onChange={(event) => setDraftName(event.target.value)} />
          </label>
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
          <button onClick={handleAddToDraft} disabled={!builderArrangementId}>
            Adicionar {PART_LABELS[builderPart]}
          </button>
        </div>

        <div className="card-grid">
          {filteredArrangements.map((item) => (
            <button
              key={item.id}
              className={`card selectable${builderArrangementId === item.id ? " selected" : ""}`}
              onClick={() => setBuilderArrangementId(item.id)}
            >
              <div className="card-head">
                <h3>{item.song?.title ?? item.name}</h3>
                <span>{item.song?.artist}</span>
              </div>
              <p className="card-meta">
                Tom {item.defaultKey} • {item.defaultBpm} BPM • {arrangementStems(item).length} stems
              </p>
            </button>
          ))}
          {!filteredArrangements.length && <p>Nenhuma música cadastrada para esta parte.</p>}
        </div>

        {draftItems.length > 0 && (
          <div className="draft-items">
            {draftItems.map((item) => (
              <article key={item.id} className="draft-row">
                <strong>
                  {PART_LABELS[item.part]} – {item.arrangement.song?.title ?? item.arrangement.name}
                </strong>
                <button onClick={() => handleRemoveDraft(item.id)}>Remover</button>
              </article>
            ))}
          </div>
        )}
        <button className="primary" onClick={handleSaveSetlist} disabled={!draftItems.length || !draftName}>
          Salvar setlist
        </button>
      </div>
    </section>
  );

  const configPanel = (
    <section className="panel">
      <header>
        <h2>Configurações</h2>
        <p>{user ? `Logado como ${user.name}` : ""}</p>
      </header>
      <label className="config-field">
        Ministério
        <select value={selectedMinistry} onChange={(event) => setSelectedMinistry(event.target.value)}>
          {ministries.map((ministry) => (
            <option key={ministry.id} value={ministry.id}>
              {ministry.name}
            </option>
          ))}
        </select>
      </label>
      <button className="ghost danger" onClick={handleLogout}>
        Sair da conta
      </button>
    </section>
  );

  const overlayTitles = { setlist: "Setlists", admin: "Administração", config: "Configurações" };

  return (
    <div className="stage-shell">
      <div className="stage-body">
        <section className="stage-player">
          <div className="stage-topbar">
            <span className="brand">Holytracks</span>
            <label className="setlist-pill">
              <select
                value={activeLiveSetlist?.id ?? ""}
                onChange={(event) => handleLiveSelection(event.target.value)}
              >
                {!setlists.length && <option value="">Nenhum setlist</option>}
                {setlists.map((setlist) => (
                  <option key={setlist.id} value={setlist.id}>
                    {setlist.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {activeLiveSetlist?.items.length ? (
            <div className="song-cards">
              {activeLiveSetlist.items.map((item, index) => {
                const songTitle = item.arrangement.song?.title ?? item.arrangement.name;
                return (
                  <button
                    key={item.id}
                    className={`song-card${index === liveIndex ? " current" : ""}`}
                    onClick={() => setLiveIndex(index)}
                  >
                    <span
                      className="song-cover"
                      style={{
                        background: `linear-gradient(160deg, hsl(${coverHue(songTitle)} 65% 42%), hsl(${
                          (coverHue(songTitle) + 40) % 360
                        } 70% 24%))`
                      }}
                    >
                      ♪
                    </span>
                    <span className="song-card-title">{songTitle}</span>
                    <span className="song-card-key">
                      {PART_LABELS[item.part]} ({item.arrangement.defaultKey})
                    </span>
                  </button>
                );
              })}
            </div>
          ) : null}

          {currentLiveItem ? (
            <Mixer
              stems={arrangementStems(currentLiveItem.arrangement)}
              title={currentLiveItem.arrangement.song?.title ?? currentLiveItem.arrangement.name}
              tone={currentLiveItem.arrangement.defaultKey}
              bpm={currentLiveItem.arrangement.defaultBpm}
              timeSignature={currentLiveItem.arrangement.song?.timeSignature}
              beatsPerBar={currentLiveItem.arrangement.structureJson?.beatsPerBar}
              sections={currentLiveItem.arrangement.structureJson?.sections ?? []}
              loop={liveLoop}
              onToggleLoop={() => setLiveLoop((prev) => !prev)}
              onEnded={handleLiveEnded}
              onPrev={handleLivePrev}
              onNext={handleLiveNext}
            />
          ) : (
            <div className="stage-empty">
              <p>Nenhuma música carregada.</p>
              <button className="primary" onClick={() => setOverlay("setlist")}>
                Escolher setlist
              </button>
              <button className="ghost" onClick={() => setOverlay("admin")}>
                Cadastrar músicas
              </button>
            </div>
          )}
        </section>

        <aside className="stage-sidebar">
          <button onClick={() => setOverlay("setlist")}>
            <span className="side-icon">≣</span>
            Setlist
          </button>
          <button onClick={() => setOverlay("admin")}>
            <span className="side-icon">🎚</span>
            Admin
          </button>
          <button onClick={() => setOverlay("config")}>
            <span className="side-icon">⚙</span>
            Config
          </button>
        </aside>
      </div>

      {message && (
        <div className="toast" onClick={() => setMessage("")} role="status">
          {message}
        </div>
      )}

      {overlay && (
        <div className="overlay-backdrop" onClick={() => setOverlay(null)}>
          <div className="overlay-panel" onClick={(event) => event.stopPropagation()}>
            <div className="overlay-head">
              <strong>{overlayTitles[overlay]}</strong>
              <button className="overlay-close" onClick={() => setOverlay(null)}>
                ✕
              </button>
            </div>
            <div className="overlay-scroll">
              {overlay === "setlist" && setlistManager}
              {overlay === "config" && configPanel}
              {overlay === "admin" && (
                <AdminPanel
                  token={token}
                  arrangements={arrangements}
                  partLabels={PART_LABELS}
                  onChanged={loadLibrary}
                  onMessage={setMessage}
                />
              )}
            </div>
          </div>
        </div>
      )}
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
