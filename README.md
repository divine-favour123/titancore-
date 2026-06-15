# TitanCore Construction — Frontend

A frontend-only clone of the TitanCore Construction Ltd site. Same UI/UX (dark theme,
yellow `#FFB800` accent, GSAP scroll animations, Framer Motion transitions), built
as a standalone **Vite + React + React Router + Tailwind CSS** app with **no backend**.

## Getting started

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Pages

- `/` — Home (hero, services preview, stats, featured projects, testimonials, CTA)
- `/about` — About Us (history, mission/vision, safety, team CTA)
- `/services` — Services (full list with details, anchored sections e.g. `/services#road`)
- `/projects` — Projects (filterable portfolio grid)
- `/contact` — Contact (form + info cards + map)
- Anything else — themed 404 page

## What changed from the original export

The original export was tightly coupled to a specific AI-app-builder platform
(custom dev server, Hono backend, Neon Postgres, Auth.js, Stripe, an admin panel,
etc.). All of that has been removed so this runs as a plain static frontend you can
`npm install` anywhere.

1. **Backend removed** — no API routes, no admin panel, no auth, no database.
2. **Images/video swapped** — a few images (and the hero video) pointed at the
   platform's private CDN (`raw.createusercontent.com`), which isn't publicly
   accessible. These were replaced with royalty-free Unsplash images of
   construction sites/buildings as placeholders. Swap them for your own brand
   photos/video whenever you're ready — just edit the `src=` values in:
   - `src/pages/Home.jsx` (hero background)
   - `src/pages/About.jsx` (team photo)
   - `src/pages/Services.jsx` and `src/pages/Projects.jsx` (`serviceImages` /
     `projectImages` objects)
3. **Routing** — converted from the platform's file-based router to standard
   `react-router-dom` (`src/App.jsx`), with all internal links converted to
   `<Link>` for client-side navigation.
4. **Contact form** — `src/pages/Contact.jsx` no longer calls `/api/contact`.
   On submit it just shows the "Message Sent!" success state (simulated ~0.8s
   delay). No data is sent or stored anywhere yet.

## Connecting Supabase later

When you're ready to wire up the backend with Supabase:

1. `npm install @supabase/supabase-js`
2. Create a Supabase client (e.g. `src/lib/supabaseClient.js`) using your project
   URL + anon key (put these in a `.env` file, **never commit real keys**).
3. In `src/pages/Contact.jsx`, replace the `setTimeout` block in `handleSubmit`
   with an `insert` into a `messages`/`contact_submissions` table, keeping the
   existing `loading` / `success` / `error` state handling — it's already wired
   up in the UI.
4. All site content (services, projects, stats, testimonials) currently lives
   in `src/data/siteData.js` as static arrays — you can later fetch these from
   Supabase tables instead and the components won't need to change much since
   they just map over arrays.

## Editing content

- Company copy, services, projects, stats, testimonials → `src/data/siteData.js`
- Header/footer/nav links, WhatsApp number, contact details → `src/components/Navigation.jsx`
  and `src/components/Layout.jsx`
- Colors: the brand palette is `#121212` (near-black), `#FFB800` (amber/yellow),
  `#1A1A1A` / `#0F0F0F` / `#0A0A0A` (panel shades) — used directly as Tailwind
  arbitrary values throughout (`bg-[#FFB800]`, etc.)
