# Dvista

Real estate site — London property listings, filterable search, and a 3-step online viewing booking flow.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (CSS-variable based theme — see `src/styles/tailwind.css`)
- **@heroicons/react** (outline + solid, via `src/components/ui/AppIcon.tsx`)
- Fonts: **Fraunces** (display/serif) + **DM Sans** (body), loaded via `next/font/google`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run build
npm run start
```

> **Note:** `npm run build` needs internet access to fetch Fraunces/DM Sans from Google Fonts at build time (`next/font/google`). This is normal — it will work on any machine with regular internet access.

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, featured properties, services bento grid, stats, testimonial + CTA |
| `/properties` | All listings with type / location / price / listing-type filters and shortlisting |
| `/properties/[id]` | Single property detail page with agent card and similar listings |
| `/services` | Buy / Sell / Rent / Invest, each expanded, plus a "how it works" process section |
| `/book-a-viewing` | 3-step booking flow: property type → date & time → your details → confirmation |

## Project structure

```
src/
  app/
    layout.tsx                        Root layout, fonts, metadata
    page.tsx                          Homepage
    properties/page.tsx                Listings + filters
    properties/[id]/page.tsx           Property detail
    services/page.tsx                  Services page
    book-a-viewing/page.tsx            Booking page shell
    book-a-viewing/components/         Booking flow steps (client state machine)
    components/                        Homepage sections (Hero, Properties, Services, Stats, Testimonial)
  components/
    Header.tsx / Footer.tsx            Site chrome
    ui/AppImage.tsx                    next/image wrapper with graceful error fallback
    ui/AppIcon.tsx                     Heroicons-by-name wrapper (outline/solid)
    ui/AppLogo.tsx                     Brand mark (SVG)
  lib/properties-data.ts               Shared property listings dataset
  styles/tailwind.css                  Design tokens (colors, shadows, type scale, motion utilities)
```

## Notes on this build

- Property images are hotlinked from `img.rocket.new` / `images.unsplash.com` (as in the original), allow-listed in `next.config.js` under `images.remotePatterns`. Swap these for your own hosted images before going live — hotlinked demo URLs are not guaranteed to stay online long-term.
- The booking flow keeps state in memory only (no backend) — "Confirm Booking" shows a confirmation screen but doesn't send anywhere. Wire up an API route or form handler (e.g. `/api/book`) to actually receive submissions.
- `tailwind.config.ts` includes a small `safelist` for `md:col-span-1` / `md:col-span-2` — the services bento grid builds this class dynamically at runtime (`` `md:${service.span}` ``), which Tailwind's static scanner can't detect on its own.
- No favicon is included yet — drop one at `public/favicon.ico`.
"# property" 
