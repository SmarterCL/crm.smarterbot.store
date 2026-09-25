/**
 * Tuhaus CRM brand configuration.
 *
 * Single place for everything brand-related (name, logos, colors,
 * login copy). When porting the branding to another fork or version
 * of the app, copy this file + `public/brand/` and re-apply the small
 * edits that import from here.
 *
 * Colors must mirror the `html[data-theme="tuhaus"]` block in
 * `src/app/globals.css`.
 */
export const BRAND = {
  name: "Tuhaus CRM",
  shortName: "Tuhaus",
  description:
    "CRM para WhatsApp: todas tus conversaciones, contactos y ventas en un solo lugar.",
  siteUrl: "https://crm.tuhaus.com",
  logo: {
    /** Full horizontal logo for light backgrounds */
    light: "/brand/tuhaus-logo.svg",
    /** Full horizontal logo for dark backgrounds */
    dark: "/brand/tuhaus-logo-dark.svg",
    /** Square mark (house) for light backgrounds */
    markLight: "/brand/tuhaus-isotipo.svg",
    /** Square mark (house) for dark backgrounds */
    markDark: "/brand/tuhaus-isotipo-dark.svg",
    /** Intrinsic aspect ratio of the horizontal logo (width / height) */
    aspect: 420 / 108,
  },
  colors: {
    /** Brand orange, exact value from the logo */
    orange: "#EAA654",
    /** Darker orange used as primary in light mode (legible on white) */
    orangeDeep: "#C77A22",
    ink: "#1D1E1B",
    gray: "#929292",
  },
} as const;
