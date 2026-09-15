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
 * Real O'Connell St facade. Hero = clean photo only (no text/buttons/dark
 * overlays on the image). Wide horizontal frame so O'CONNELL ST. stays readable.
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
        className={`relative w-full overflow-hidden bg-[#0a2f24] aspect-[16/9] sm:aspect-[2/1] ${className}`}
      >
        <Image
          src="/images/hero-fachada-desktop.webp"
          alt={alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-contain object-center"
          quality={85}
        />
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
