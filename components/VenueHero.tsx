import Image from "next/image";

type Props = {
  variant?: "hero" | "secondary" | "gradient";
  alt?: string;
  className?: string;
  /** @deprecated kept for call sites — maps to gradient */
  aspect?: "video" | "square" | "wide";
  caption?: string;
  src?: string;
};

/**
 * Real O'Connell St facade for home/location, or green gradient for other pages.
 * Hero: same wide facade photo; mobile uses a low horizontal frame so the full
 * width (and O'CONNELL ST.) stays readable — no aggressive portrait crop.
 * Soft overlay. priority, no lazy.
 */
export function VenueHero({
  variant,
  alt = "O'Connell St Irish pub facade, Calle de Espoz y Mina 7, Madrid",
  className = "",
  aspect = "wide",
  caption,
  src,
}: Props) {
  const mode =
    variant ||
    (src?.includes("fachada") || src?.includes("hero")
      ? "hero"
      : src
        ? "secondary"
        : "gradient");

  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "wide"
        ? "aspect-[21/9]"
        : "aspect-video";

  if (mode === "hero") {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border border-cream/15 shadow-lg shadow-black/40 bg-gradient-to-br from-[#0a2f24] via-black to-[#061a14] aspect-[16/9] sm:aspect-[2/1] ${className}`}
      >
        {/* Mobile + desktop: same wide facade asset — horizontal frame, contain so full width & sign stay visible */}
        <Image
          src="/images/hero-fachada-desktop.webp"
          alt={alt}
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1200px"
          className="object-contain object-center sm:object-cover"
          quality={85}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
      </div>
    );
  }

  if (mode === "secondary") {
    return (
      <div
        className={`relative aspect-[16/9] overflow-hidden rounded-xl border border-cream/15 shadow-lg shadow-black/40 ${className}`}
      >
        <Image
          src="/images/fachada-secondary.webp"
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover object-center"
          quality={80}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-end overflow-hidden rounded-xl border border-cream/10 bg-gradient-to-br from-pub-green via-[#0a2f24] to-black ${aspectClass} ${className}`}
      role="img"
      aria-label={caption || "O'Connell St Madrid"}
    >
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--pub-green-light),_transparent_55%)]" />
      {caption ? (
        <p className="relative z-10 p-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream/70 sm:p-6">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
