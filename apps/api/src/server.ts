import path from "node:path";
import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import { authRoutes } from "./routes/auth.js";
import { ministryRoutes } from "./routes/ministries.js";
import { libraryRoutes } from "./routes/library.js";
import { setlistRoutes } from "./routes/setlists.js";
import { prisma } from "./lib/prisma.js";

const app = Fastify({ logger: false });

app.register(fastifyCors, { origin: true });

app.register(fastifyStatic, {
  root: path.join(process.cwd(), "public"),
  prefix: "/audio/",
  decorateReply: false
});

app.get("/api/health", async () => ({ status: "ok" }));

app.register(authRoutes, { prefix: "/api" });
app.register(ministryRoutes, { prefix: "/api" });
app.register(libraryRoutes, { prefix: "/api" });
app.register(setlistRoutes, { prefix: "/api" });

const start = async () => {
  try {
    await app.listen({ port: Number(process.env.PORT ?? 4000), host: "0.0.0.0" });
  } finally {
    await prisma.$disconnect();
  }
};

start().catch((error) => {
  app.log.error(error);
  process.exit(1);
});
