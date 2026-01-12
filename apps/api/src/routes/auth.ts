import { FastifyInstance } from "fastify";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";
import { signToken } from "../lib/auth.js";
import { requireAuth, AuthenticatedRequest } from "../lib/middleware.js";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2)
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export async function authRoutes(app: FastifyInstance) {
  app.post("/auth/register", async (request, reply) => {
    const parsed = registerSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.status(400).send({ errors: parsed.error.issues });
    }

    const { email, password, name } = parsed.data;
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return reply.status(409).send({ message: "Email already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { email, passwordHash: hashed, name }
    });

    const ministry = await prisma.ministry.create({
      data: {
        name: `${name} Ministerio`,
        ownerUserId: user.id,
        members: {
          create: { userId: user.id, role: "OWNER" }
        }
      }
    });

    const token = signToken({ userId: user.id });
    return reply.send({
      token,
      user: { id: user.id, email: user.email, name: user.name },
      ministry
    });
  });

  app.post("/auth/login", async (request, reply) => {
    const parsed = loginSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.status(400).send({ errors: parsed.error.issues });
    }

    const { email, password } = parsed.data;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return reply.status(401).send({ message: "Invalid credentials" });
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      return reply.status(401).send({ message: "Invalid credentials" });
    }

    const memberships = await prisma.ministryMember.findMany({
      where: { userId: user.id },
      include: { ministry: true }
    });

    const token = signToken({ userId: user.id });
    return reply.send({
      token,
      user: { id: user.id, email: user.email, name: user.name },
      ministries: memberships.map((item) => ({
        ...item.ministry,
        role: item.role
      }))
    });
  });

  app.get("/me", { preHandler: requireAuth }, async (request, reply) => {
    const authReq = request as AuthenticatedRequest;
    const user = await prisma.user.findUnique({
      where: { id: authReq.userId },
      select: { id: true, email: true, name: true }
    });
    if (!user) {
      return reply.status(404).send({ message: "User not found" });
    }
    return reply.send({ user });
  });
}
