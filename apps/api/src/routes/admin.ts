import { createWriteStream } from "node:fs";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth } from "../lib/middleware.js";

const createSongSchema = z.object({
  title: z.string().min(2),
  artist: z.string().min(2),
  key: z.string().min(1),
  bpm: z.number().int().min(30).max(300),
  timeSignature: z.string().default("4/4"),
  language: z.string().default("pt-BR"),
  season: z.string().optional(),
  parts: z.array(z.string()).min(1),
  liturgicalTags: z.array(z.string()).default([]),
  arrangementName: z.string().default("Padrão")
});

const sectionSchema = z.object({
  name: z.string().min(1),
  start: z.number().min(0),
  duration: z.number().min(0),
  bars: z.number().int().optional()
});

const patchArrangementSchema = z.object({
  defaultKey: z.string().optional(),
  defaultBpm: z.number().int().min(30).max(300).optional(),
  beatsPerBar: z.number().int().min(2).max(12).optional(),
  sections: z.array(sectionSchema).optional()
});

const stemMetaSchema = z.object({
  name: z.string().min(1),
  label: z.string().default(""),
  volume: z.number().min(0).max(1).default(0.8)
});

type StemEntry = { name: string; label: string; volume: number; url: string };

const AUDIO_EXTENSIONS = new Set([".wav", ".mp3", ".ogg", ".m4a", ".flac", ".aac"]);

const sanitizeFileName = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .toLowerCase();

const parseJsonString = (value?: string | null) => {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

export async function adminRoutes(app: FastifyInstance) {
  app.register(async (router) => {
    router.addHook("preHandler", requireAuth);

    // Cadastra música + arranjo vazio (stems entram depois via upload)
    router.post("/songs", async (request, reply) => {
      const parsed = createSongSchema.safeParse(request.body);
      if (!parsed.success) {
        return reply.status(400).send({ errors: parsed.error.issues });
      }
      const data = parsed.data;

      const song = await prisma.song.create({
        data: {
          title: data.title,
          artist: data.artist,
          key: data.key,
          bpm: data.bpm,
          timeSignature: data.timeSignature,
          language: data.language,
          season: data.season,
          parts: data.parts.join(","),
          liturgicalTags: data.liturgicalTags.join(",")
        }
      });

      const beatsPerBar = Number(data.timeSignature.split("/")[0]) || 4;
      const arrangement = await prisma.arrangement.create({
        data: {
          songId: song.id,
          name: data.arrangementName,
          defaultKey: data.key,
          defaultBpm: data.bpm,
          audioDemoUrl: "",
          stemsJson: JSON.stringify([]),
          structureJson: JSON.stringify({ beatsPerBar, sections: [] })
        }
      });

      return reply.status(201).send({ song, arrangement });
    });

    // Upload de um stem (multipart: file + campos name/label/volume)
    router.post("/arrangements/:id/stems", async (request, reply) => {
      const { id } = request.params as { id: string };
      const arrangement = await prisma.arrangement.findUnique({ where: { id } });
      if (!arrangement) {
        return reply.status(404).send({ message: "Arrangement not found" });
      }

      const file = await request.file({ limits: { fileSize: 200 * 1024 * 1024 } });
      if (!file) {
        return reply.status(400).send({ message: "Envie um arquivo de áudio" });
      }

      const extension = path.extname(file.filename ?? "").toLowerCase();
      if (!AUDIO_EXTENSIONS.has(extension)) {
        return reply.status(400).send({ message: `Formato não suportado: ${extension || "sem extensão"}` });
      }

      // metadados via querystring: a ordem das partes do multipart não é garantida,
      // então campos enviados depois do arquivo poderiam se perder
      const query = request.query as { name?: string; label?: string; volume?: string };
      const fields = file.fields as Record<string, { value?: unknown } | undefined>;
      const meta = stemMetaSchema.safeParse({
        name:
          query.name?.trim() ||
          String(fields.name?.value ?? "").trim() ||
          path.basename(file.filename, extension),
        label: query.label ?? String(fields.label?.value ?? ""),
        volume:
          query.volume !== undefined
            ? Number(query.volume)
            : fields.volume?.value !== undefined
              ? Number(fields.volume.value)
              : undefined
      });
      if (!meta.success) {
        return reply.status(400).send({ errors: meta.error.issues });
      }

      const dir = path.join(process.cwd(), "public", "audio", "uploads", id);
      await mkdir(dir, { recursive: true });
      const fileName = `${Date.now()}-${sanitizeFileName(file.filename ?? `stem${extension}`)}`;
      await pipeline(file.file, createWriteStream(path.join(dir, fileName)));
      if (file.file.truncated) {
        await rm(path.join(dir, fileName), { force: true });
        return reply.status(413).send({ message: "Arquivo maior que o limite de 200MB" });
      }

      const url = `/audio/uploads/${id}/${fileName}`;
      const stems: StemEntry[] = (parseJsonString(arrangement.stemsJson) as StemEntry[] | null) ?? [];
      stems.push({ name: meta.data.name, label: meta.data.label, volume: meta.data.volume, url });

      const updated = await prisma.arrangement.update({
        where: { id },
        data: {
          stemsJson: JSON.stringify(stems),
          // primeiro stem vira o demo enquanto não houver mix dedicado
          audioDemoUrl: arrangement.audioDemoUrl || url
        }
      });

      return reply.status(201).send({
        stem: stems[stems.length - 1],
        stems,
        arrangementId: updated.id
      });
    });

    // Remove um stem (registro + arquivo físico)
    router.delete("/arrangements/:id/stems", async (request, reply) => {
      const { id } = request.params as { id: string };
      const { url } = request.query as { url?: string };
      if (!url) {
        return reply.status(400).send({ message: "Informe a url do stem" });
      }

      const arrangement = await prisma.arrangement.findUnique({ where: { id } });
      if (!arrangement) {
        return reply.status(404).send({ message: "Arrangement not found" });
      }

      const stems: StemEntry[] = (parseJsonString(arrangement.stemsJson) as StemEntry[] | null) ?? [];
      const remaining = stems.filter((stem) => stem.url !== url);
      if (remaining.length === stems.length) {
        return reply.status(404).send({ message: "Stem não encontrado" });
      }

      // só apaga arquivos dentro da pasta de uploads deste arranjo
      const expectedPrefix = `/audio/uploads/${id}/`;
      if (url.startsWith(expectedPrefix)) {
        const fileName = path.basename(url);
        await rm(path.join(process.cwd(), "public", "audio", "uploads", id, fileName), { force: true });
      }

      await prisma.arrangement.update({
        where: { id },
        data: {
          stemsJson: JSON.stringify(remaining),
          audioDemoUrl: arrangement.audioDemoUrl === url ? (remaining[0]?.url ?? "") : arrangement.audioDemoUrl
        }
      });

      return { stems: remaining };
    });

    // Exclui música com arranjos, itens de setlist e arquivos enviados
    router.delete("/songs/:id", async (request, reply) => {
      const { id } = request.params as { id: string };
      const song = await prisma.song.findUnique({
        where: { id },
        include: { arrangements: true }
      });
      if (!song) {
        return reply.status(404).send({ message: "Song not found" });
      }

      const arrangementIds = song.arrangements.map((item) => item.id);
      await prisma.setlistItem.deleteMany({ where: { arrangementId: { in: arrangementIds } } });
      await prisma.arrangement.deleteMany({ where: { songId: id } });
      await prisma.song.delete({ where: { id } });

      for (const arrangementId of arrangementIds) {
        await rm(path.join(process.cwd(), "public", "audio", "uploads", arrangementId), {
          recursive: true,
          force: true
        });
      }

      return reply.status(204).send();
    });

    // Atualiza seções/beatsPerBar/tom/BPM do arranjo
    router.patch("/arrangements/:id", async (request, reply) => {
      const { id } = request.params as { id: string };
      const parsed = patchArrangementSchema.safeParse(request.body);
      if (!parsed.success) {
        return reply.status(400).send({ errors: parsed.error.issues });
      }

      const arrangement = await prisma.arrangement.findUnique({ where: { id } });
      if (!arrangement) {
        return reply.status(404).send({ message: "Arrangement not found" });
      }

      const updates: Record<string, unknown> = {};
      if (parsed.data.defaultKey) updates.defaultKey = parsed.data.defaultKey;
      if (parsed.data.defaultBpm) updates.defaultBpm = parsed.data.defaultBpm;

      if (parsed.data.sections || parsed.data.beatsPerBar) {
        const structure = (parseJsonString(arrangement.structureJson) as Record<string, unknown> | null) ?? {};
        if (parsed.data.beatsPerBar) structure.beatsPerBar = parsed.data.beatsPerBar;
        if (parsed.data.sections) {
          structure.sections = [...parsed.data.sections].sort((a, b) => a.start - b.start);
        }
        updates.structureJson = JSON.stringify(structure);
      }

      const updated = await prisma.arrangement.update({ where: { id }, data: updates });
      return {
        arrangement: {
          ...updated,
          stemsJson: parseJsonString(updated.stemsJson),
          structureJson: parseJsonString(updated.structureJson)
        }
      };
    });
  });
}
