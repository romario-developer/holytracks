import "dotenv/config";
import { readFileSync } from "node:fs";
import path from "node:path";
import { prisma } from "../lib/prisma.js";

const songs = [
  {
    title: "Luz do Advento",
    artist: "Coral Dominico",
    liturgicalTags: ["ENTRADA", "ADVENTO", "ASSEMBLEIA"],
    bpm: 82,
    key: "C",
    timeSignature: "4/4",
    language: "pt-BR",
    season: "ADVENTO",
    parts: ["ENTRADA"],
    arrangement: {
      name: "Versao A",
      trackSlug: "track1"
    }
  },
  {
    title: "Salmo do Peregrino",
    artist: "Ministerio Horizonte",
    liturgicalTags: ["SALMO", "RESPONSORIAL"],
    bpm: 76,
    key: "D",
    timeSignature: "4/4",
    language: "pt-BR",
    season: "TEMPO_COMUM",
    parts: ["SALMO"],
    arrangement: {
      name: "Padrao",
      trackSlug: "track2"
    }
  },
  {
    title: "Aclamacao ao Evangelho",
    artist: "Vozes da Paroquia",
    liturgicalTags: ["ACLAMACAO", "EVANGELHO"],
    bpm: 98,
    key: "G",
    timeSignature: "4/4",
    language: "pt-BR",
    season: "TEMPO_COMUM",
    parts: ["ACLAMACAO"],
    arrangement: {
      name: "Dinamica",
      trackSlug: "track3"
    }
  },
  {
    title: "Gloria ao Pai",
    artist: "Coral do Santuario",
    liturgicalTags: ["GLORIA", "LITURGIA"],
    bpm: 114,
    key: "F",
    timeSignature: "4/4",
    language: "pt-BR",
    season: "PASCOA",
    parts: ["GLORIA"],
    arrangement: {
      name: "Pascal",
      trackSlug: "track4"
    }
  },
  {
    title: "Ofertorio da Esperanca",
    artist: "Ministerio Ilumine",
    liturgicalTags: ["OFERTORIO", "CONVIDO"],
    bpm: 88,
    key: "G",
    timeSignature: "3/4",
    language: "pt-BR",
    season: "TEMPO_COMUM",
    parts: ["OFERTORIO"],
    arrangement: {
      name: "Instrumental",
      trackSlug: "track5"
    }
  },
  {
    title: "Santo Santo Santo",
    artist: "Banda do Encontro",
    liturgicalTags: ["SANTO", "COMUNHAO"],
    bpm: 112,
    key: "A",
    timeSignature: "4/4",
    language: "pt-BR",
    season: "TEMPO_COMUM",
    parts: ["SANTO"],
    arrangement: {
      name: "Liturgico",
      trackSlug: "track6"
    }
  },
  {
    title: "Cordeiro da Misericordia",
    artist: "Ensaio Paroquial",
    liturgicalTags: ["CORDEIRO", "COMUNHAO"],
    bpm: 90,
    key: "E",
    timeSignature: "4/4",
    language: "pt-BR",
    season: "TEMPO_COMUM",
    parts: ["CORDEIRO"],
    arrangement: {
      name: "Solo",
      trackSlug: "track7"
    }
  },
  {
    title: "Final em Gratidao",
    artist: "Coral das Voze",
    liturgicalTags: ["FINAL", "ALEGRIA"],
    bpm: 100,
    key: "D",
    timeSignature: "4/4",
    language: "pt-BR",
    season: "TEMPO_COMUM",
    parts: ["FINAL"],
    arrangement: {
      name: "Celebracao",
      trackSlug: "track8"
    }
  }
];

// Stems sintéticos gerados por scripts/generate-stems.mjs em public/audio/<trackSlug>/
const buildStems = (trackSlug: string) => [
  { name: "Click", label: "Metronomo", volume: 0.8, url: `/audio/${trackSlug}/click.wav` },
  { name: "Bateria", label: "Bateria e percussao", volume: 0.9, url: `/audio/${trackSlug}/bateria.wav` },
  { name: "Baixo", label: "Baixo eletrico", volume: 0.8, url: `/audio/${trackSlug}/baixo.wav` },
  { name: "Teclado", label: "Pads e atmosferas", volume: 0.7, url: `/audio/${trackSlug}/teclado.wav` },
  { name: "Voz", label: "Voz guia", volume: 0.9, url: `/audio/${trackSlug}/voz.wav` }
];

// O manifest.json de cada track traz os tempos exatos das seções (gerados junto com o áudio)
const readManifest = (trackSlug: string) => {
  const manifestPath = path.join(process.cwd(), "public", "audio", trackSlug, "manifest.json");
  return JSON.parse(readFileSync(manifestPath, "utf-8"));
};

const run = async () => {
  for (const entry of songs) {
    const manifest = readManifest(entry.arrangement.trackSlug);
    const stemsJson = JSON.stringify(buildStems(entry.arrangement.trackSlug));
    const structureJson = JSON.stringify({
      duration: manifest.duration,
      beatsPerBar: manifest.beatsPerBar,
      sections: manifest.sections
    });
    const audioDemoUrl = `/audio/${entry.arrangement.trackSlug}/mix.wav`;

    const existing = await prisma.song.findFirst({
      where: { title: entry.title, artist: entry.artist },
      include: { arrangements: true }
    });

    if (existing) {
      for (const arrangement of existing.arrangements) {
        await prisma.arrangement.update({
          where: { id: arrangement.id },
          data: { audioDemoUrl, stemsJson, structureJson }
        });
      }
      continue;
    }

    const song = await prisma.song.create({
      data: {
        title: entry.title,
        artist: entry.artist,
        liturgicalTags: entry.liturgicalTags.join(","),
        bpm: entry.bpm,
        key: entry.key,
        timeSignature: entry.timeSignature,
        language: entry.language,
        season: entry.season,
        parts: entry.parts.join(",")
      }
    });

    await prisma.arrangement.create({
      data: {
        songId: song.id,
        name: entry.arrangement.name,
        defaultKey: entry.key,
        defaultBpm: entry.bpm,
        audioDemoUrl,
        stemsJson,
        structureJson
      }
    });
  }
};

run()
  .then(() => {
    console.log("Seed completed");
    return prisma.$disconnect();
  })
  .catch((error) => {
    console.error("Seed error", error);
    prisma.$disconnect().then(() => process.exit(1));
  });
