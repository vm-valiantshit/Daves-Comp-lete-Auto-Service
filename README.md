# Dave's Complete Auto Service

Production-grade static HTML/CSS/JS website for Dave's Complete Auto Service in Emeryville, CA.

## Business facts

- Business: Dave's Complete Auto Service
- Owner: Prem
- Phone: (510) 451-3462
- Address: 2801 San Pablo Avenue, Emeryville, CA 94608
- Industry: Auto repair / complete auto service

## Setup

No framework or backend is required.

```bash
npm install
```

## Local preview

```bash
npm run preview
```

Open `http://localhost:3000`.

## Verification

```bash
npm run check
```

The check verifies required pages, metadata files, SEO tags, one H1 per page, sitemap entries, and required local business facts.

## Deploy

This repository is ready for Vercel static deployment.

```bash
vercel --prod
```

## Vercel/GitHub notes

- GitHub repo target: `vm-valiantshit/Daves-Comp-lete-Auto-Service`
- Vercel project should link to that repository.
- `vercel.json` includes static headers, clean URLs, asset caching, and a simple `/home` redirect.
