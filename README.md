# Healthcare English — Pixel Exploration Game

A client-side Next.js + TypeScript + Tailwind CSS prototype for SMK Nursing/Healthcare students.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Build check:

```bash
npm run build
```

## Controls
- WASD / Arrow Keys — Move
- E — Interact
- J — Open Clue Journal
- Mouse/touch can also activate an object by clicking it.

## Edit content
- `data/clues.ts` — hidden clues
- `data/challenges.ts` — English questions and answers
- `data/objects.ts` — room objects, positions, collision, interactions, clue links
- `data/layouts.ts` — layout metadata
- `components/Room.tsx` — placeholder visual rendering only
- `components/Game.tsx` — game state/progression/collision loop

## Vercel
Push this folder to GitHub and import the repository in Vercel. No environment variables are required.

## Future room-photo reconstruction
Room objects are data-driven in `data/objects.ts`. Their x/y/w/h, solidity, interaction, and clue links are kept outside the game rendering logic so the placeholder room can later be rebuilt from four real room photos.
