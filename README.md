# Personal Site

A personal academic website built with React, Vite, and Tailwind CSS.

## Aesthetic

- **Main site (light):** Light academia — a sunlit library by the sea, warm parchment, wood tones, sea-glass accents.
- **Main site (dark):** Dark academia — deep walnut, burgundy, candlelit gold (toggle in the header).
- **Surprise page (`/surprise`):** Solarpunk ecosystem portfolio — tropical vegetation reclaiming the page; AI as part of nature, not separate from it.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, areas of inquiry, recent work |
| `/about` | Biography, affiliations, education |
| `/research` | Publications and projects |
| `/contact` | Email and social links |
| `/surprise` | Hidden solarpunk creative portfolio |

## Getting started

Requires [Node.js](https://nodejs.org/) 18+.

```bash
cd personal-site
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Customisation

Replace placeholder content in:

- `index.html` — page title
- `src/components/Layout.jsx` — your name and tagline
- `src/pages/About.jsx` — bio, affiliations, education
- `src/pages/Research.jsx` — publications list
- `src/pages/Contact.jsx` — email and social links
- `src/pages/Solarpunk.jsx` — creative portfolio items
- `src/pages/Home.jsx` — hero copy and portrait placeholder

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.).
