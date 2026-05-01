# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server with HMR
npm run build      # Production build → dist/
npm run preview    # Local preview of production build
npm run lint       # ESLint (flat config, v10)
npm run typecheck  # tsc -b — type-check only, no emit
```

No test suite exists.

## Architecture

Single-page portfolio SPA — anchor navigation only (`#metrics`, `#work`, `#approach`, `#about`, `#contact`). No router.

**`src/data.ts`** is the single source of truth for all portfolio content (stats, case studies, testimonials, skills, experience, approach steps). Components import it directly — no prop drilling, no API calls.

Components are flat: one file per page section in `src/components/`. State is local to each component (menu toggle, animation triggers, counter progress). No global state management.

**Deployment**: push to `master` → GitHub Actions (`.github/workflows/deploy.yml`) → GitHub Pages. `vite.config.ts` sets `base: '/portfolio/'` — all asset references and public URLs must include this prefix.

## Non-Obvious Constraints

**CSS scroll behavior**: `scroll-behavior: smooth` is intentionally absent from CSS. Adding it conflicts with Framer Motion's `useSpring` scroll progress bar (double-smoothing creates lag).

**`overflow-x: clip` on body**: Not `overflow-x: hidden`. Using `hidden` creates a scroll container that breaks `position: sticky` and removes elements from the GPU compositor. `clip` prevents horizontal overflow without those side effects.

**Houdini `@property` declarations** in `index.css` enable CSS-animatable custom properties: `--gradient-angle` (rotating gradient borders on `.grad-card`) and `--ring-opacity` (hover glow intensity). These must stay in `index.css` — moving them to Tailwind config breaks the animation.

**Cursor spotlight**: `App.tsx` tracks `mousemove` and writes `--mx`/`--my` as inline CSS custom properties. The `.cursor-light` class in `index.css` consumes them via `radial-gradient`.

**Preloader timing**: `Preloader.tsx` runs an `rAF` counter to 100 over ~1.2s, then `App.tsx` waits an additional 700ms before revealing content. This is intentional — do not remove the delay.

**Marquee loop**: `Marquee.tsx` renders the array twice. The CSS animates the container from `0%` to `-50%` translateX, which creates a seamless loop. If you add items, the duplicate handles the visual wrap.

**`public/404.html`**: Required for SPA routing on GitHub Pages. GitHub serves this on unknown paths; it redirects back to index with the path encoded as a query param, which the app restores. Do not delete this file.

## Styling System

Custom Tailwind tokens defined in `tailwind.config.js`:
- **Colors**: `bg.deep`, `bg.surface`, `bg.raised` (backgrounds) · `amber.*`, `teal.*` (accents) · `text.primary/secondary/muted/faint`
- **Fonts**: `font-display` (Syne) · `font-body` (DM Sans) · `font-mono` (JetBrains Mono) — self-hosted via `@fontsource`
- **Fluid type**: `text-display-xl/lg/md` use `clamp()` — do not override with fixed `text-*` sizes
- **Shadows**: `shadow-amber-glow`, `shadow-teal-glow`, `shadow-card`, `shadow-lift`

Component-level CSS classes live in `index.css` (@layer components): `.amber-cta`, `.grad-card`, `.shiny-text`, `.card-base`, `.cursor-light`, `.progress-bar`. `App.css` is also loaded and contains additional classes — both files are active.

## Known TODOs

- `public/og-image.svg` → needs conversion to PNG for social crawler compatibility (Twitter/LinkedIn crawlers do not render SVG).
