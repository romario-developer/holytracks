# Holytracks API

Backend service built with Fastify, Prisma and SQLite (prepared to switch to Postgres).

## Getting started

1. Install dependencies inside the API workspace:
   ```bash
   npm --prefix apps/api install
   ```
2. Configure environment variables in `apps/api/.env` (the repo already ships with sensible defaults for development).
3. Apply the Prisma schema and create the local SQLite database:
   ```bash
   cd apps/api
   npx prisma migrate dev --name init
   ```
4. Seed demo data (songs + arrangements):
   ```bash
   npm run seed
   ```

## Development

- Run the API in watch mode:
  ```bash
  npm run dev
  ```
- Build for production:
  ```bash
  npm run build
  ```
- Start the compiled server:
  ```bash
  npm run start
  ```

## Configuration notes

- `DATABASE_URL` defaults to `file:./dev.db` (relative to `prisma/schema.prisma`). To use Postgres in production, change `provider = "postgresql"` in `prisma/schema.prisma` and point `DATABASE_URL` to your Postgres instance.
- `JWT_SECRET` controls the signing key for tokens; keep it secret in production.
- Static assets (demo audio) are served from `/public/audio`.
- Live mode events can be recorded via `POST /api/events/log` (send `setlistId`, `type`, `payload`) and the latest live data is available at `GET /api/setlists/:id/live`.
