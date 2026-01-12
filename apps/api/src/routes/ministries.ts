import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { requireAuth, AuthenticatedRequest } from "../lib/middleware.js";

const createSchema = z.object({
  name: z.string().min(3)
});

const inviteSchema = z.object({
  email: z.string().email()
});

export async function ministryRoutes(app: FastifyInstance) {
  app.register(async (router) => {
    router.addHook("preHandler", requireAuth);

    router.post("/ministries", async (request, reply) => {
      const parsed = createSchema.safeParse(request.body);
      if (!parsed.success) {
        return reply.status(400).send({ errors: parsed.error.issues });
      }

      const authReq = request as AuthenticatedRequest;
      const { name } = parsed.data;
      const ministry = await prisma.ministry.create({
        data: {
          name,
          ownerUserId: authReq.userId,
          members: {
            create: { userId: authReq.userId, role: "OWNER" }
          }
        }
      });
      return reply.status(201).send({ ministry });
    });

    router.get("/ministries", async (request) => {
      const authReq = request as AuthenticatedRequest;
      const memberships = await prisma.ministryMember.findMany({
        where: { userId: authReq.userId },
        include: { ministry: true }
      });
      return memberships.map((item) => ({
        ministry: item.ministry,
        role: item.role
      }));
    });

    router.post("/ministries/:id/invite", async (request, reply) => {
      const authReq = request as AuthenticatedRequest;
      const parsed = inviteSchema.safeParse(request.body);
      if (!parsed.success) {
        return reply.status(400).send({ errors: parsed.error.issues });
      }

      const { id } = request.params as { id: string };
      const ministry = await prisma.ministry.findUnique({ where: { id } });
      if (!ministry || ministry.ownerUserId !== authReq.userId) {
        return reply.status(403).send({ message: "Access denied" });
      }

      const userToInvite = await prisma.user.findUnique({ where: { email: parsed.data.email } });
      if (!userToInvite) {
        return reply.status(404).send({ message: "User not found" });
      }

      const existing = await prisma.ministryMember.findFirst({
        where: { ministryId: id, userId: userToInvite.id }
      });
      if (existing) {
        return reply.status(409).send({ message: "User already member" });
      }

      await prisma.ministryMember.create({
        data: { ministryId: id, userId: userToInvite.id, role: "MEMBER" }
      });
      return reply.status(201).send({ invited: userToInvite.email });
    });
  });
}
