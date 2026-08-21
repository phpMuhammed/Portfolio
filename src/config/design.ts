/**
 * Master switch for the refreshed visual design.
 *
 *   true  → v2: Geist type, animated network backdrop, spotlight cards,
 *               scroll reveals, grain, header scroll progress.
 *   false → v1: the original flat design. No canvas is mounted, no extra
 *               scripts are fetched, and every v2-only rule in global.css
 *               (all scoped under `[data-design='v2']`) stops applying.
 *
 * Flip this single constant to switch the whole site between the two looks.
 */
export const DESIGN_V2 = true;

/** Written to `<html data-design>` — every v2-only CSS rule is scoped to it. */
export const DESIGN_VERSION = DESIGN_V2 ? 'v2' : 'v1';

/**
 * Brand icons in the Skills section (Skills.astro's TECH_ICONS map).
 *
 * Off for now: only proper-noun tools (PHP, Laravel, MySQL...) have an icon —
 * concept/process items ("RESTful APIs", "SOLID Principles") never will, so
 * mixed rows look ragged. Flip to true once every pill in a row can have one
 * (see the "add a placeholder glyph" / "split into Tools vs Concepts" options
 * discussed for that section) rather than half of them.
 */
export const SHOW_SKILL_ICONS = false;
