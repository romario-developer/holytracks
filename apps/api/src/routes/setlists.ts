import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth, AuthenticatedRequest } from "../lib/middleware.js";

const setlistPartSchema = z.enum([
  "ENTRADA",
  "ATO_PENITENCIAL",
  "GLORIA",
  "SALMO",
  "ACLAMACAO",
  "OFERTORIO",
  "SANTO",
  "CORDEIRO",
  "COMUNHAO",
  "FINAL",
  "OUTROS"
]);

const itemSchema = z.object({
  arrangementId: z.string(),
  part: setlistPartSchema,
  order: z.number().int().min(0).optional(),
  notes: z.string().optional()
});

const createSetlistSchema = z.object({
  name: z.string().min(2),
  ministryId: z.string(),
  date: z.string().optional(),
  liturgyType: z.string().optional(),
  season: z.string().optional(),
  items: z.array(itemSchema).optional()
});

const updateItemSchema = z.object({
  order: z.number().int().min(0).optional(),
  part: setlistPartSchema.optional(),
  notes: z.string().optional()
});

const liveEventSchema = z.object({
  setlistId: z.string(),
  type: z.enum(["play", "stop", "next", "loop"]),
  payload: z.record(z.unknown()).optional()
});

const ensureMembership = async (userId: string, ministryId: string) => {
  const membership = await prisma.ministryMember.findFirst({
    where: { userId, ministryId }
  });
  if (!membership) {
    throw new Error("MembershipRequired");
  }
  return membership;
};

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
type ArrangementRecord = Record<string, unknown> & {
  stemsJson?: string;
  structureJson?: string;
  song?: SongRecord;
};

const formatSongDetail = (song: SongRecord) => ({
  id: song.id as string,
  title: song.title as string,
  artist: song.artist as string,
  language: song.language as string,
  timeSignature: song.timeSignature as string,
  bpm: song.bpm as number,
  liturgicalTags: parseCsvList(song.liturgicalTags),
  parts: parseCsvList(song.parts),
  season: song.season as string | undefined
});

const formatArrangementDetail = (arrangement: ArrangementRecord) => ({
  id: arrangement.id as string,
  name: arrangement.name as string,
  defaultKey: arrangement.defaultKey as string,
  defaultBpm: arrangement.defaultBpm as number,
  audioDemoUrl: arrangement.audioDemoUrl as string,
  stemsJson: parseJsonString(arrangement.stemsJson),
  structureJson: parseJsonString(arrangement.structureJson),
  song: arrangement.song ? formatSongDetail(arrangement.song) : null
});

const formatSetlistDetail = (setlist: { items: any[]; [key: string]: any }) => ({
  id: setlist.id,
  name: setlist.name,
  date: setlist.date,
  liturgyType: setlist.liturgyType,
  season: setlist.season,
  createdAt: setlist.createdAt,
  ministryId: setlist.ministryId,
  items: [...setlist.items]
    .sort((a, b) => a.order - b.order)
    .map((item) => ({
      id: item.id,
      order: item.order,
      part: item.part,
      notes: item.notes,
      arrangement: formatArrangementDetail(item.arrangement)
    }))
});

export async function setlistRoutes(app: FastifyInstance) {
  app.register(async (router) => {
    router.addHook("preHandler", requireAuth);

    router.post("/setlists", async (request, reply) => {
      const parsed = createSetlistSchema.safeParse(request.body);
      if (!parsed.success) {
        return reply.status(400).send({ errors: parsed.error.issues });
      }

      const authReq = request as AuthenticatedRequest;
      try {
        await ensureMembership(authReq.userId, parsed.data.ministryId);
      } catch {
        return reply.status(403).send({ message: "Access denied" });
      }

      const items = parsed.data.items ?? [];

      const setlist = await prisma.setlist.create({
        data: {
          name: parsed.data.name,
          ministryId: parsed.data.ministryId,
          date: parsed.data.date ? new Date(parsed.data.date) : null,
          liturgyType: parsed.data.liturgyType,
          season: parsed.data.season,
          createdById: authReq.userId,
          items: {
            create: items.map((item, index) => ({
              arrangementId: item.arrangementId,
              part: item.part,
              order: item.order ?? index,
              notes: item.notes
            }))
          }
        },
        include: {
          items: { include: { arrangement: { include: { song: true } } } }
        }
      });

      return reply.status(201).send({ setlist: formatSetlistDetail(setlist) });
    });

    router.get("/setlists", async (request) => {
      const authReq = request as AuthenticatedRequest;
      const memberships = await prisma.ministryMember.findMany({
        where: { userId: authReq.userId }
      });
      const ministryIds = memberships.map((m) => m.ministryId);
      const setlists = await prisma.setlist.findMany({
        where: { ministryId: { in: ministryIds } },
        include: { items: { include: { arrangement: { include: { song: true } } } } }
      });

      return { setlists: setlists.map(formatSetlistDetail) };
    });

    router.get("/setlists/:id", async (request, reply) => {
      const authReq = request as AuthenticatedRequest;
      const { id } = request.params as { id: string };
      const setlist = await prisma.setlist.findUnique({
        where: { id },
        include: { items: { include: { arrangement: { include: { song: true } } } } }
      });
      if (!setlist) {
        return reply.status(404).send({ message: "Setlist not found" });
      }

      try {
        await ensureMembership(authReq.userId, setlist.ministryId);
      } catch {
        return reply.status(403).send({ message: "Access denied" });
      }

      return { setlist: formatSetlistDetail(setlist) };
    });

    router.get("/setlists/:id/live", async (request, reply) => {
      const authReq = request as AuthenticatedRequest;
      const { id } = request.params as { id: string };
      const setlist = await prisma.setlist.findUnique({
        where: { id },
        include: { items: { include: { arrangement: { include: { song: true } } } } }
      });
      if (!setlist) {
        return reply.status(404).send({ message: "Setlist not found" });
      }

      try {
        await ensureMembership(authReq.userId, setlist.ministryId);
      } catch {
        return reply.status(403).send({ message: "Access denied" });
      }

      return {
        setlist: formatSetlistDetail(setlist),
        liveMode: true
      };
    });

    router.post("/setlists/:id/items", async (request, reply) => {
      const authReq = request as AuthenticatedRequest;
      const { id } = request.params as { id: string };
      const parsed = itemSchema.safeParse(request.body);
      if (!parsed.success) {
        return reply.status(400).send({ errors: parsed.error.issues });
      }

      const setlist = await prisma.setlist.findUnique({ where: { id } });
      if (!setlist) {
        return reply.status(404).send({ message: "Setlist not found" });
      }

      try {
        await ensureMembership(authReq.userId, setlist.ministryId);
      } catch {
        return reply.status(403).send({ message: "Access denied" });
      }

      const lastItem = await prisma.setlistItem.findFirst({
        where: { setlistId: id },
        orderBy: { order: "desc" }
      });
      const resolvedOrder = parsed.data.order ?? (lastItem ? lastItem.order + 1 : 0);

      const item = await prisma.setlistItem.create({
        data: {
          setlistId: id,
          arrangementId: parsed.data.arrangementId,
          part: parsed.data.part,
          order: resolvedOrder,
          notes: parsed.data.notes
        }
      });
      return reply.status(201).send({ item });
    });

    router.patch("/setlists/:id/items/:itemId", async (request, reply) => {
      const authReq = request as AuthenticatedRequest;
      const { id, itemId } = request.params as { id: string; itemId: string };
      const parsed = updateItemSchema.safeParse(request.body);
      if (!parsed.success) {
        return reply.status(400).send({ errors: parsed.error.issues });
      }

      const setlist = await prisma.setlist.findUnique({ where: { id } });
      if (!setlist) {
        return reply.status(404).send({ message: "Setlist not found" });
      }

      try {
        await ensureMembership(authReq.userId, setlist.ministryId);
      } catch {
        return reply.status(403).send({ message: "Access denied" });
      }

      const updates: Record<string, unknown> = {};
      if (parsed.data.order !== undefined) {
        updates.order = parsed.data.order;
      }
      if (parsed.data.part) {
        updates.part = parsed.data.part;
      }
      if (parsed.data.notes !== undefined) {
        updates.notes = parsed.data.notes;
      }

      if (!Object.keys(updates).length) {
        return reply.status(400).send({ message: "Nothing to update" });
      }

      const updated = await prisma.setlistItem.update({
        where: { id: itemId },
        data: updates
      });
      return { item: updated };
    });

    router.delete("/setlists/:id/items/:itemId", async (request, reply) => {
      const authReq = request as AuthenticatedRequest;
      const { id, itemId } = request.params as { id: string; itemId: string };
      const setlist = await prisma.setlist.findUnique({ where: { id } });
      if (!setlist) {
        return reply.status(404).send({ message: "Setlist not found" });
      }

      try {
        await ensureMembership(authReq.userId, setlist.ministryId);
      } catch {
        return reply.status(403).send({ message: "Access denied" });
      }

      await prisma.setlistItem.delete({ where: { id: itemId } });
      return reply.status(204).send();
    });

    router.post("/events/log", async (request, reply) => {
      const authReq = request as AuthenticatedRequest;
      const parsed = liveEventSchema.safeParse(request.body);
      if (!parsed.success) {
        return reply.status(400).send({ errors: parsed.error.issues });
      }

      const setlist = await prisma.setlist.findUnique({ where: { id: parsed.data.setlistId } });
      if (!setlist) {
        return reply.status(404).send({ message: "Setlist not found" });
      }

      try {
        await ensureMembership(authReq.userId, setlist.ministryId);
      } catch {
        return reply.status(403).send({ message: "Access denied" });
      }

      await prisma.eventLog.create({
        data: {
          userId: authReq.userId,
          ministryId: setlist.ministryId,
          setlistId: setlist.id,
          type: parsed.data.type,
          payloadJson: parsed.data.payload ? JSON.stringify(parsed.data.payload) : null
        }
      });

      return reply.status(201).send({ status: "logged" });
    });
  });
}
