import { FastifyReply, FastifyRequest } from "fastify";
import { verifyToken } from "./auth.js";

export type AuthenticatedRequest = FastifyRequest & {
  userId: string;
};

export const requireAuth = async (request: FastifyRequest, reply: FastifyReply) => {
  const authHeader = request.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    reply.status(401).send({ message: "Token missing" });
    return;
  }
  try {
    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);
    (request as AuthenticatedRequest).userId = decoded.userId;
  } catch (error) {
    reply.status(401).send({ message: "Token invalid" });
  }
};
