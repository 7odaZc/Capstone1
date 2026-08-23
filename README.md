# Mahmoud Elzayat — Phase 3 Portfolio Foundation

This is the Phase 3 foundation for the portfolio content map.

## Included routes

- `/` — Home
- `/work` — Work
- `/work/react-web-applications` — React case study placeholder
- `/work/automation-testing` — Automation case study placeholder
- `/work/unity-puzzle-game` — Unity case study placeholder
- `/work/physics-engine` — Physics case study placeholder
- `/about` — About
- `/contact` — Contact
- `/health` — Server-rendered health check that fetches live data

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Server Components by default
- No secrets committed

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Build check

```bash
npm run build
```

## Vercel

Connect this repository to Vercel. Every Git push can then create a deployment/preview according to the repository's Vercel settings.

Set environment variables in Vercel using the keys documented in `.env.example`. Keep secrets out of the repository.

## Phase 3 checklist

- [x] Root layout
- [x] Navigation
- [x] Routed placeholder screens
- [x] Tailwind/base design tokens
- [x] Health-check page fetching data
- [x] Responsive layout rules for narrow and wide screens
- [x] `.env.example` with no secret values
- [ ] Push repository
- [ ] Connect repository to Vercel
- [ ] Submit live preview URL
