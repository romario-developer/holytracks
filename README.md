# Holytracks

Monorepo com duas aplicações: `apps/api` (backend TypeScript + Prisma) e `apps/web` (PWA React/Vite).  
Use `npm install` no root para instalar dependências e execute os scripts que simulam cada app individualmente (ex: `npm run dev:api`, `npm run dev:web`). O backend inicializa o SQLite em `apps/api/dev.db` via `initializeDatabase`; rode `npm run db:init --workspace=apps/api` para forçar a criação manualmente se necessário.

Rodar o MVP:
1. `npm install`
2. `npm run dev:api` em um terminal
3. `npm run dev:web` em outro terminal

O backend usa SQLite em desenvolvimento e está pronto para Postgres (configurável via `DATABASE_URL`). A PWA suporta instalação e cache básico; o layout é mobile-first com navegação tipo app.
# holytracks
