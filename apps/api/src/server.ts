import "dotenv/config";
import path from "node:path";
import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
import fastifyMultipart from "@fastify/multipart";
import fastifyStatic from "@fastify/static";
import { authRoutes } from "./routes/auth.js";
import { ministryRoutes } from "./routes/ministries.js";
import { libraryRoutes } from "./routes/library.js";
import { setlistRoutes } from "./routes/setlists.js";
import { adminRoutes } from "./routes/admin.js";
import { prisma } from "./lib/prisma.js";

const app = Fastify({ logger: false });

app.register(fastifyCors, {
  origin: true,
  methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE"]
});
app.register(fastifyMultipart);

app.register(fastifyStatic, {
  root: path.join(process.cwd(), "public", "audio"),
  prefix: "/audio/",
  decorateReply: false
});

app.get("/", async () => ({
  name: "Holytracks API",
  status: "ok",
  hint: "Esta é a API. O app roda em http://localhost:4173 (npm run dev:web)."
}));

app.get("/api/health", async () => ({ status: "ok" }));

app.register(authRoutes, { prefix: "/api" });
app.register(ministryRoutes, { prefix: "/api" });
app.register(libraryRoutes, { prefix: "/api" });
app.register(setlistRoutes, { prefix: "/api" });
app.register(adminRoutes, { prefix: "/api" });

const start = async () => {
  await app.listen({ port: Number(process.env.PORT ?? 4000), host: "0.0.0.0" });
  console.log(`API rodando em http://localhost:${process.env.PORT ?? 4000}`);
};

start().catch((error) => {
  console.error(error);
  prisma.$disconnect().finally(() => process.exit(1));
});
