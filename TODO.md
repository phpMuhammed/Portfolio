# Outstanding tasks

Picking this back up later — status as of 2026-08-08.

## 1. Real CV PDF — DONE
Real file confirmed in place at `public/cv/Mohammed_Ayman_Musabeh_Senior_Full_Stack_Developer_CV.pdf`.

## 2. Real project logos — DONE
Replaced the generated lettermark fallbacks in `public/logos/` with real logos, per user-supplied URLs:

- **Darent** — wordmark SVG from `https://darent.com/images/darent-main-logo-white.svg` (already colored black/gold, not actually white despite the filename) → `public/logos/darent.svg`.
- **CapTab** — icon + wordmark SVG from `https://new.captabapp.com/imgs/logo.svg` → `public/logos/captab.svg`.
- **Istoria** — square icon (ram's-head mark, already on brand-blue background) from LinkedIn's company logo CDN, re-encoded from JPEG to real PNG bytes → `public/logos/istoria.png`. Also updated the project's website link to `https://istoria.app` (was `https://www.istoria.sa/`).
- **One Studio** — LinkedIn company logo image (served as JPEG despite its `.png`-looking URL; re-encoded to real PNG bytes) → `public/logos/onestudio.png`.

Verified live against the dev server (`/logos/{slug}` present in rendered HTML) and by rasterizing each file.

## 3. Real production domain — DONE
Set to `https://mhmd-musabeh.vercel.app` in `astro.config.mjs` (`site`), `public/robots.txt` (`Sitemap:` line), and the `Layout.astro` fallback. README's deploy checklist updated to match.

## 4. Actual deployment — DONE
Deployed to Vercel at `https://mhmd-musabeh.vercel.app`.

## 5. Live performance re-check — DONE
Re-verified against the live deployment (`https://mhmd-musabeh.vercel.app/`) on 2026-08-10 using Chrome DevTools performance traces (1x CPU, no network throttling):

- **Cold hit** (first request, serverless/CDN cold start): TTFB 1,925 ms, LCP 2,085 ms, CLS 0.00.
- **Warm hit** (cache warm): TTFB 117 ms, LCP 1,138 ms, CLS 0.00 — matches the local numbers that produced the Performance = 100 score.

Lighthouse's other categories were also spot-checked live (desktop, navigation mode): Accessibility 100, Best Practices 100, SEO 92, Agentic Browsing 67. Both non-100 scores are false negatives from Lighthouse's own fetch timing out on `robots.txt` (confirmed reachable, 200, via direct `curl`) and a missing optional `llms.txt` (404, not part of this project's original scope) — not real regressions.

## 6. OG image fonts — DONE
Root cause: `scripts/generate-og.mjs` built a raw SVG string and rasterized it with `sharp`, which delegates SVG text rendering to the system's font engine (fontconfig/librsvg) — it has no way to load the project's self-hosted `@fontsource` files, so it silently fell back to a system font.

Fix: rewrote the generator to use `satori` (layout) + `@resvg/resvg-js` (rasterize), the same approach Vercel's own OG image tooling uses. Both accept font data as in-memory buffers, so the script now loads the actual `.woff` files straight out of `node_modules/@fontsource/{inter,ibm-plex-sans-arabic,ibm-plex-mono}` — no system fonts involved, same output on any machine (dev laptop, CI, Vercel build). Added `satori` and `@resvg/resvg-js` as devDependencies.

Verified: regenerated both PNGs (1200×630), visually confirmed real Inter/IBM Plex Sans Arabic/IBM Plex Mono glyphs (correct weights, proper Arabic shaping/ligatures, correct bidi ordering for the mixed Arabic/Latin strings), and confirmed `npm run build` still completes cleanly.

## 7. Add skills icons — DONE
Added one icon per skill group heading in `src/components/Skills.astro`. Per-item icons weren't practical — most items are abstract concepts (e.g. "SOLID Principles", "Rate Limiting") without a natural brand mark, so per-group was the sane simple option (matches the TODO's stated fallback).

Extended the existing hand-rolled `Icon.astro` component (Lucide-style inline SVGs, already used for contact/nav icons) with 6 new icons — `layers`, `server`, `database`, `check-circle`, `terminal`, `plug` — no new package/dependency added, staying within the "no heavy UI kit / minimal JS" constraint. Icons are mapped positionally to `skills.groups` (not by label) since group order is identical across `en.ts`/`ar.ts` but label text differs per locale.

**Follow-up:** also added per-item brand icons for named technologies (Laravel, MySQL, etc.) via a new `TechIcon.astro` component — 24 monochrome brand marks sourced from Simple Icons (MIT-licensed, `currentColor` fill, same "no dependency" approach: markup copied in statically, no package installed). Mapped via an exact-string lookup table in `Skills.astro` (`TECH_ICONS`) keyed on the English item text, which works for both locales since proper nouns aren't translated. Only items that are actual named products get an icon (PHP, Laravel, MySQL, Redis, JavaScript, Git, GitHub, VS Code, Figma, Claude AI, etc.) — process/concept items still have none, since there's no meaningful brand mark for e.g. "Rate Limiting" or "Code Review". PHPUnit, Pest PHP, and Spatie have no icon (not in Simple Icons' catalog).
