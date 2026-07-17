// AudioContext único + cache de buffers decodificados, compartilhados
// entre o player (Mixer) e o editor de seções (Admin)

let sharedContext: AudioContext | null = null;

export const getAudioContext = () => {
  if (!sharedContext) {
    sharedContext = new AudioContext();
  }
  return sharedContext;
};

const bufferCache = new Map<string, Promise<AudioBuffer>>();

export const loadBuffer = (url: string) => {
  let cached = bufferCache.get(url);
  if (!cached) {
    cached = fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Falha ao baixar áudio (${response.status})`);
        }
        return response.arrayBuffer();
      })
      .then((data) => getAudioContext().decodeAudioData(data));
    bufferCache.set(url, cached);
    cached.catch(() => bufferCache.delete(url));
  }
  return cached;
};
