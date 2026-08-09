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

## 4. Actual deployment
Not yet deployed anywhere (Vercel/Netlify/GitHub Pages). No live URL exists yet. The GitHub repo (`github.com/phpMuhammed/Portfolio`) is pushed and ready to connect to a host. Production domain is already decided (`https://mhmd-musabeh.vercel.app`), pointing at Vercel.

## 5. Live performance re-check
Lighthouse Performance = 100 was measured locally against an unthrottled preview server. Worth re-verifying once the site is actually deployed.

## 6. OG image fonts (cosmetic, low priority)
`public/og-en.png` / `public/og-ar.png` render with a system fallback font instead of Inter / IBM Plex Sans Arabic (sharp's SVG rasterizer didn't pick up the self-hosted fonts in this environment). Still fully legible and on-brand, just not pixel-exact to the site's typography.

## 7. Add skills icons — DONE
Added one icon per skill group heading in `src/components/Skills.astro`. Per-item icons weren't practical — most items are abstract concepts (e.g. "SOLID Principles", "Rate Limiting") without a natural brand mark, so per-group was the sane simple option (matches the TODO's stated fallback).

Extended the existing hand-rolled `Icon.astro` component (Lucide-style inline SVGs, already used for contact/nav icons) with 6 new icons — `layers`, `server`, `database`, `check-circle`, `terminal`, `plug` — no new package/dependency added, staying within the "no heavy UI kit / minimal JS" constraint. Icons are mapped positionally to `skills.groups` (not by label) since group order is identical across `en.ts`/`ar.ts` but label text differs per locale.

**Follow-up:** also added per-item brand icons for named technologies (Laravel, MySQL, etc.) via a new `TechIcon.astro` component — 24 monochrome brand marks sourced from Simple Icons (MIT-licensed, `currentColor` fill, same "no dependency" approach: markup copied in statically, no package installed). Mapped via an exact-string lookup table in `Skills.astro` (`TECH_ICONS`) keyed on the English item text, which works for both locales since proper nouns aren't translated. Only items that are actual named products get an icon (PHP, Laravel, MySQL, Redis, JavaScript, Git, GitHub, VS Code, Figma, Claude AI, etc.) — process/concept items still have none, since there's no meaningful brand mark for e.g. "Rate Limiting" or "Code Review". PHPUnit, Pest PHP, and Spatie have no icon (not in Simple Icons' catalog).
