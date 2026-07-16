import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";

const songsQuerySchema = z.object({
  q: z.string().optional(),
  part: z.string().optional(),
  season: z.string().optional()
});

const parseCsvList = (value?: string) =>
  value
    ? value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : [];

const parseJsonString = (value?: string) => {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

type SongRecord = Record<string, unknown> & { liturgicalTags?: string; parts?: string };
type ArrangementRecord = Record<string, unknown> & { stemsJson?: string; structureJson?: string };

const formatSongResponse = (song: SongRecord) => ({
  ...song,
  liturgicalTags: parseCsvList(song.liturgicalTags),
  parts: parseCsvList(song.parts)
});

const formatArrangementDetail = (arrangement: ArrangementRecord) => ({
  ...arrangement,
  stemsJson: parseJsonString(arrangement.stemsJson),
  structureJson: parseJsonString(arrangement.structureJson)
});

export async function libraryRoutes(app: FastifyInstance) {
  app.get("/songs", async (request) => {
    const parsed = songsQuerySchema.safeParse(request.query);
    if (!parsed.success) {
      return { errors: parsed.error.issues };
    }

    const { q, part, season } = parsed.data;
    const where: Record<string, unknown> = {};
    if (q) {
      where.OR = [
        { title: { contains: q, mode: "insensitive" } },
        { artist: { contains: q, mode: "insensitive" } }
      ];
    }
    if (season) {
      where.season = season;
    }
    if (part) {
      where.parts = { contains: part.toUpperCase(), mode: "insensitive" };
    }

    const songs = await prisma.song.findMany({
      where,
      include: {
        arrangements: {
          select: {
            id: true,
            name: true,
            audioDemoUrl: true,
            defaultBpm: true,
            defaultKey: true
          }
        }
      }
    });
    return { songs: songs.map(formatSongResponse) };
  });

  app.get("/songs/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    const song = await prisma.song.findUnique({
      where: { id },
      include: {
        arrangements: {
          select: {
            id: true,
            name: true,
            audioDemoUrl: true,
            defaultBpm: true,
            defaultKey: true,
            stemsJson: true,
            structureJson: true
          }
        }
      }
    });
    if (!song) {
      return reply.status(404).send({ message: "Song not found" });
    }
    return {
      song: {
        ...formatSongResponse(song),
        arrangements: song.arrangements.map(formatArrangementDetail)
      }
    };
  });

  app.get("/arrangements", async () => {
    const arrangements = await prisma.arrangement.findMany({
      include: { song: true }
    });
    return {
      arrangements: arrangements.map((arrangement) => ({
        ...formatArrangementDetail(arrangement),
        song: formatSongResponse(arrangement.song)
      }))
    };
  });

  app.get("/arrangements/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    const arrangement = await prisma.arrangement.findUnique({
      where: { id },
      include: { song: true }
    });
    if (!arrangement) {
      return reply.status(404).send({ message: "Arrangement not found" });
    }
    return {
      arrangement: {
        ...formatArrangementDetail(arrangement),
        song: formatSongResponse(arrangement.song)
      }
    };
  });
}
