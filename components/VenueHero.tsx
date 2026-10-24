import Image from "next/image";
import { preload } from "react-dom";

const HERO_SRCSET = [
  "/images/hero-fachada-480w.webp 480w",
  "/images/hero-fachada-720w.webp 720w",
  "/images/hero-fachada-960w.webp 960w",
  "/images/hero-fachada-desktop.webp 1200w",
].join(", ");
const HERO_SIZES = "(max-width: 768px) 100vw, 768px";

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
 * Real O'Connell St facade (portrait). Hero = clean photo only (no text /
 * buttons / dark overlays on the image). Full vertical frame so the gold
 * O'CONNELL ST. lettering and red storefront stay readable.
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
    preload("/images/hero-fachada-desktop.webp", {
      as: "image",
      imageSrcSet: HERO_SRCSET,
      imageSizes: HERO_SIZES,
      fetchPriority: "high",
    });
    return (
      <div
        className={`relative w-full overflow-hidden bg-pub-burgundy-deep ${className}`}
      >
        <div className="relative mx-auto aspect-[3/4] w-full max-h-[85vh] max-w-3xl sm:aspect-[4/5] sm:max-h-[90vh]">
          {/* Plain responsive <img> (static export has no image optimizer):
              phones get a 480/720/960 px file instead of the 1200 px one. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-fachada-desktop.webp"
            srcSet={HERO_SRCSET}
            sizes={HERO_SIZES}
            alt={alt}
            width={1200}
            height={1600}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-contain object-center"
          />
        </div>
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
