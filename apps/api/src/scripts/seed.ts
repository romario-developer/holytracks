import "dotenv/config";
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
      audioDemoUrl: "/audio/track1.mp3"
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
      audioDemoUrl: "/audio/track2.mp3"
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
      audioDemoUrl: "/audio/track3.mp3"
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
      audioDemoUrl: "/audio/track4.mp3"
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
      audioDemoUrl: "/audio/track5.mp3"
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
      audioDemoUrl: "/audio/track6.mp3"
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
      audioDemoUrl: "/audio/track7.mp3"
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
      audioDemoUrl: "/audio/track8.mp3"
    }
  }
];

const structure = {
  sections: [
    { name: "Intro", duration: 12 },
    { name: "Verso", duration: 32 },
    { name: "Refrao", duration: 24 }
  ]
};

const stems = [
  { name: "Voz", label: "Solista", volume: 0.9 },
  { name: "Violao", label: "Violao acustico", volume: 0.8 },
  { name: "Teclado", label: "Pads e atmosferas", volume: 0.7 }
];

const run = async () => {
  for (const entry of songs) {
    const existing = await prisma.song.findFirst({
      where: { title: entry.title, artist: entry.artist }
    });
    if (existing) continue;

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
        audioDemoUrl: entry.arrangement.audioDemoUrl,
        stemsJson: JSON.stringify(stems),
        structureJson: JSON.stringify(structure)
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
