import { BRAND } from "@/config/brand";
import { cn } from "@/lib/utils";

/**
 * Tuhaus logo that follows the light/dark mode.
 *
 * Both variants are rendered and CSS (see `.brand-on-light` /
 * `.brand-on-dark` in globals.css) hides the one that doesn't match
 * `html[data-mode]`, so there is no flash while the theme boots.
 *
 * - variant="full": horizontal logo (house + "Tuhaus")
 * - variant="mark": house only, square
 * - tone="light" | "dark" forces one version regardless of mode
 *   (useful on colored panels).
 */
export function BrandLogo({
  variant = "full",
  tone,
  height = 28,
  className,
}: {
  variant?: "full" | "mark";
  tone?: "light" | "dark";
  height?: number;
  className?: string;
}) {
  const isMark = variant === "mark";
  const width = isMark ? height : Math.round(height * BRAND.logo.aspect);
  const srcLight = isMark ? BRAND.logo.markLight : BRAND.logo.light;
  const srcDark = isMark ? BRAND.logo.markDark : BRAND.logo.dark;
  const alt = BRAND.shortName;

  if (tone) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={tone === "light" ? srcLight : srcDark}
        alt={alt}
        width={width}
        height={height}
        className={cn("shrink-0 select-none", className)}
        draggable={false}
      />
    );
  }

  return (
    <span
      className={cn("inline-flex shrink-0", className)}
      style={{ width, height }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={srcLight}
        alt={alt}
        width={width}
        height={height}
        className="brand-on-light select-none"
        draggable={false}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={srcDark}
        alt=""
        aria-hidden
        width={width}
        height={height}
        className="brand-on-dark select-none"
        draggable={false}
      />
    </span>
  );
}
