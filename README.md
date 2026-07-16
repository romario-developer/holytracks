# Holytracks — Multitracks Católicos

App de multitracks para ministérios de música (estilo Prime/Playback): setlists litúrgicos,
Live Mode com mixer por stem, click, guias de voz e troca de seção sem cortar o click.

## Estrutura

Monorepo com duas aplicações:

- `apps/api` — backend TypeScript (Fastify 5 + Prisma + SQLite, pronto para Postgres via `DATABASE_URL`)
- `apps/web` — PWA React/Vite com o player multitrack (Web Audio API)

## Rodar o projeto

```bash
npm install

# 1. banco + dados de exemplo
npm run prisma:generate --workspace=apps/api
npx prisma migrate deploy --schema apps/api/prisma/schema.prisma
npm run seed --workspace=apps/api

# 2. áudios sintéticos de teste (stems + click por música)
cd apps/api
node scripts/generate-stems.mjs
# guias de voz (Windows, usa o TTS do sistema):
powershell -ExecutionPolicy Bypass -File scripts/generate-guides.ps1
cd ../..

# 3. subir (dois terminais)
npm run dev:api   # API em http://localhost:4000
npm run dev:web   # app em http://localhost:4173
```

Crie uma conta na tela inicial, monte um setlist na aba **Setlist** e toque na aba **Live**.

## O player (Live Mode)

- **Mixer por stem**: volume, mudo e solo por faixa + master, com waveform clicável (seek)
- **Seções**: clicar numa seção agenda a troca para o fim da seção atual, com precisão
  de amostra — o click nunca corta; a voz anuncia e conta os tempos ("Refrão... 1, 2, 3, 4")
- **Contagem**: 1 compasso de click antes de começar
- **Guia**: voz anuncia a próxima seção 1 compasso antes de cada borda
- **Repetir**: repete a seção atual indefinidamente (ministração) até desligar
- **Transposição**: ±6 semitons preservando o andamento (pitch shift granular; o click não é transposto)
- **Saída do click/guias**: o click, a contagem e as guias saem por um barramento de cue
  separado do master — dá para roteá-los para outra saída de áudio (fones dos músicos),
  sem ir para o PA

## Observações

- Os áudios em `apps/api/public/audio/` são gerados (não versionados) — rode os scripts do passo 2.
- O client do Prisma é gerado em `apps/api/src/generated/` (não versionado) — `npm run prisma:generate`.
