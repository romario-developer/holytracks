const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000/api";

const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, "");

// Converte caminhos relativos de áudio ("/audio/...") para a origem da API
export const resolveAudioUrl = (path: string) =>
  path.startsWith("http") ? path : `${API_ORIGIN}${path}`;

type RequestOptions = {
  method?: string;
  body?: Record<string, unknown>;
  token?: string;
};

export const apiRequest = async (path: string, options: RequestOptions = {}) => {
  const { method = "GET", body, token } = options;
  const headers: Record<string, string> = {
    "Content-Type": "application/json"
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });

  const responseData = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(responseData?.message ?? "Erro ao conectar com o servidor");
  }

  return responseData;
};
