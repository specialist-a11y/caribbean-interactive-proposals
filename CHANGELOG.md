# Design Changelog

## Setup & Infrastructure

- Scaffolded Next.js 16 project with TypeScript and Tailwind v4
- Installed `@relume_io/relume-ui`, `@relume_io/relume-tailwind`, `framer-motion`, `react-icons`, `clsx`
- Configured `tailwind.config.js` with Relume preset + app content paths, bridged via `@config` directive in `globals.css`
- Switched to webpack bundler (`--webpack`) — Turbopack could not parse Relume's Tailwind v3 container CSS (`@media (width >= 100%)`)
- Copied Relume export into `/relume/` directory; renamed `service:-interactive-html-proposal` → `service-interactive-html-proposal` (colon breaks Node imports)

## Bug Fixes on Relume Export

- Added missing `import clsx from "clsx"` to all 6 `Navbar3.jsx` files (Relume exported them without it, causing SSR crash)
- Added missing `useState` to `blog/components/Blog14.jsx` React import
- Removed 27 unused `import React from "react"` statements across all components (modern JSX transform does not require it)

## Route Wiring (Sitemap)

| URL | File |
|---|---|
| `/` | `app/page.tsx` → `relume/home/index.jsx` |
| `/about` | `app/about/page.tsx` → `relume/about-us/index.jsx` |
| `/services` | `app/services/page.tsx` → `relume/services/index.jsx` |
| `/services/interactive-html-proposal` | `app/services/interactive-html-proposal/page.tsx` → `relume/service-interactive-html-proposal/index.jsx` |
| `/blog` | `app/blog/page.tsx` → `relume/blog/index.jsx` |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` → `relume/blog-post/index.jsx` |

## Design System — `app/globals.css`

- Established full CIP brand token system via CSS custom properties:
  - **Palette**: deep navy `#070f1c` → navy `#112240`, gold `#c9963e`, coral `#e57149`, off-white `#f8f5f0`
  - **Semantic aliases**: `--color-background-primary`, `--color-text-primary`, `--color-border-primary`, etc. (consumed by Relume token classes)
- Added `.cip-hero-bg` — atmospheric hero background with radial gold accent glow
- Added `.cip-img-placeholder` — animated shimmer gradient for image slots awaiting real assets
- Added `.cip-avatar` — gold-to-coral gradient initials circle for testimonials
- Set body to dark navy background with antialiased rendering

## Component Design Improvements

### `Header98.jsx` (Home hero)
- Replaced Cloudfront placeholder img with full CSS brand gradient (`var(--cip-hero-gradient)`)
- Added gold radial accent glow at 65% / 40%
- Added `Caribbean Interactive Proposals` gold eyebrow label above H1
- Gold color emphasis on the word "faster" in headline
- Muted body text opacity (75%) for better hierarchy
- Added bottom fade-to-body gradient for seamless section bleed

### All `Header65.jsx` files (About / Blog / Services / Service Detail headers)
- Added hero gradient background via `style` prop on section
- Replaced placeholder img + black overlay with CSS radial gradient accent div
- Removed unused React import (all 4 copies)

### `Layout362.jsx` (PDF vs Interactive comparison)
- Replaced both placeholder images with inline React components:
  - `<PdfMockup />` — dark grey striped document mock with filename label
  - `<InteractiveMockup />` — navy/gold branded proposal UI with CTA button
- Problem card border: `rgba(255,255,255,0.08)` (neutral/subdued)
- Solution card border: `rgba(201,150,62,0.3)` (gold accent — signals the right answer)
- Section label colors: coral for "Problem", gold for "Solution"
- Muted body text using `var(--cip-muted)`

### `Layout399.jsx` (Industry cards)
- Replaced 4 placeholder landscape images with distinct gradient backgrounds per industry
- Added industry-specific accent colors: gold (agencies), green (construction), coral (corporate), indigo (hospitality)
- Added symbolic icon characters as visual anchors in card image area
- Removed unused React import

### `Layout300.jsx` (Features)
- Replaced 4 placeholder landscape images with inline SVG icon illustrations:
  - Pricing table (bar chart icon)
  - E-signature (checkmark in circle)
  - Mobile (stacked screens)
  - Analytics (line graph with dots)
- Icons render in brand gold color
- Changed section background to `var(--cip-navy)` for visual rhythm alternation with adjacent sections
- Muted subtext using `var(--cip-muted)`
- Removed unused React import

### `Testimonial39.jsx` (all 3 copies — home, about, blog-post)
- Replaced circular placeholder img with `.cip-avatar` gold-to-coral gradient initials div ("MC" for Marcus Chen)
- Removed unused React import

## Image Generation (Pending — awaiting kie.ai credit top-up)

Script ready at `scripts/generate-images.mjs`. Run `node scripts/generate-images.mjs` once credits are added.

**8 images queued at 2K resolution via `nano-banana-2`:**

| File | Slot | Aspect |
|---|---|---|
| `hero-dark-caribbean.jpg` | All hero section backgrounds | 16:9 |
| `proposal-interactive.jpg` | Layout362 solution side | 3:2 |
| `pdf-messy.jpg` | Layout362 problem side | 3:2 |
| `professional-headshot.jpg` | All testimonial avatars | 1:1 |
| `blog-editorial.jpg` | Blog header + blog card thumbnails | 16:9 |
| `services-feature.jpg` | Services layout landscape slots | 3:2 |
| `services-portrait.jpg` | Services Layout369 portrait slot | 2:3 |
| `process-step.jpg` | Timeline18 step images | 1:1 |

Once downloaded to `public/images/`, swap placeholder `src` values in:
- `Header98.jsx` — `background-image: url('/images/hero-dark-caribbean.jpg')`
- All `Header65.jsx` — same
- `Layout362.jsx` — `<img src="/images/pdf-messy.jpg">` and `<img src="/images/proposal-interactive.jpg">`
- `Testimonial39.jsx` — `<img src="/images/professional-headshot.jpg">`
- `Blog14.jsx` / `Blog34.jsx` — `<img src="/images/blog-editorial.jpg">`
