/**
 * Single source of truth for the color-theme catalog.
 *
 * The CSS variables themselves live in `src/app/globals.css` under
 * `html[data-theme=\"...\"]` blocks — that file is the one we paste
 * theme tokens into. This module only carries the metadata the UI
 * (settings picker, no-flash boot script) needs.
 *
 * Adding a new theme is a two-step change:
 *   1. Append the new `html[data-theme=\"<id>\"]` block in globals.css
 *      with every token from an existing theme (use violet as the
 *      shape reference).
 *   2. Add an entry below. The order here drives the picker grid.
 *
 * Theme display names and taglines are loaded from the i18n message
 * files under `Settings.appearance.themes.<id>.*` — the `name` and
 * `tagline` fields below are now just opaque keys so the picker can
 * render the correct locale without any English fallback text living
 * in the source.
 */

// Tuhaus CRM: the accent palette is locked to the brand orange.
// The original template shipped five accents (violet, emerald, cobalt,
// amber, rose); they were removed so every account looks the same.
export const THEME_IDS = ["tuhaus"] as const;

export type ThemeId = (typeof THEME_IDS)[number];

export const DEFAULT_THEME: ThemeId = "tuhaus";

export const STORAGE_KEY = "wacrm.theme";

/**
 * MODE — the light/dark dimension, orthogonal to the accent theme.
 *
 * The CSS variables live in `src/app/globals.css` under
 * `html[data-mode=\"...\"]` blocks (neutral surfaces only). Applied
 * at runtime via `document.documentElement.dataset.mode`. Dark is
 * the historical default and stays the app's identity; light is the
 * opt-in eye-strain-friendly alternative.
 *
 * Persisted under its own localStorage key so it composes freely
 * with the accent choice (you can run Violet-light or Violet-dark).
 */
export const MODES = ["light", "dark"] as const;

export type Mode = (typeof MODES)[number];

export const DEFAULT_MODE: Mode = "light";

export const MODE_STORAGE_KEY = "wacrm.mode";

export function isMode(value: unknown): value is Mode {
  return (
    typeof value === "string" && (MODES as ReadonlyArray<string>).includes(value)
  );
}

export interface ThemeMeta {
  id: ThemeId;
  /** i18n key under Settings.appearance.themes.<id>.name */
  name_key: string;
  /** i18n key under Settings.appearance.themes.<id>.tagline */
  tagline_key: string;
  /**
   * Static swatch color for the picker chip. Hard-coded so the boot
   * script / picker cards don't need a getComputedStyle round trip
   * before the page settles. Must mirror `--primary` of the same
   * theme in globals.css.
   */
  swatch: string;
}

export const THEMES: ReadonlyArray<ThemeMeta> = [
  {
    id: "tuhaus",
    name_key: "themes.tuhaus.name",
    tagline_key: "themes.tuhaus.tagline",
    swatch: "#eaa654",
  },
];

export function isThemeId(value: unknown): value is ThemeId {
  return (
    typeof value === "string" &&
    (THEME_IDS as ReadonlyArray<string>).includes(value)
  );
}
