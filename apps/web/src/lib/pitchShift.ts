// Transposição por granular overlap-add: desloca a altura em `semitones` mantendo a
// duração exata do buffer — o tempo (BPM), as bordas de seção e o click ficam intactos.
// Grãos de ~100ms com janela Hann e 50% de sobreposição (soma constante = 1).

export const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const FLAT_TO_SHARP: Record<string, string> = {
  Db: "C#",
  Eb: "D#",
  Gb: "F#",
  Ab: "G#",
  Bb: "A#"
};

export const transposeKey = (key: string, semitones: number): string => {
  const match = /^([A-G][#b]?)(m?)$/.exec(key.trim());
  if (!match) return key;
  const base = FLAT_TO_SHARP[match[1]] ?? match[1];
  const index = NOTE_NAMES.indexOf(base);
  if (index === -1) return key;
  const next = NOTE_NAMES[(index + ((semitones % 12) + 12)) % 12];
  return `${next}${match[2]}`;
};

export const pitchShiftBuffer = (
  ctx: BaseAudioContext,
  buffer: AudioBuffer,
  semitones: number
): AudioBuffer => {
  if (semitones === 0) return buffer;
  const rate = Math.pow(2, semitones / 12);
  const grainSize = Math.round(buffer.sampleRate * 0.1);
  const hop = Math.floor(grainSize / 2);
  const output = ctx.createBuffer(buffer.numberOfChannels, buffer.length, buffer.sampleRate);

  const window = new Float32Array(grainSize);
  for (let i = 0; i < grainSize; i++) {
    window[i] = 0.5 * (1 - Math.cos((2 * Math.PI * i) / (grainSize - 1)));
  }

  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const input = buffer.getChannelData(channel);
    const out = output.getChannelData(channel);
    // cada grão fica ancorado na posição original (tempo preservado),
    // mas é lido do input em velocidade `rate` (altura deslocada)
    for (let grainStart = 0; grainStart < input.length; grainStart += hop) {
      for (let i = 0; i < grainSize; i++) {
        const outIdx = grainStart + i;
        if (outIdx >= out.length) break;
        const srcPos = grainStart + i * rate;
        const s0 = Math.floor(srcPos);
        if (s0 >= input.length - 1) break;
        const frac = srcPos - s0;
        const sample = input[s0] * (1 - frac) + input[s0 + 1] * frac;
        out[outIdx] += sample * window[i];
      }
    }
  }
  return output;
};
