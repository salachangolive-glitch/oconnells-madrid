import Image from "next/image";

type Props = {
  /** When set, shows the real facade (or other public image). */
  src?: string;
  alt?: string;
  className?: string;
  aspect?: "video" | "square" | "wide";
  /** Overlay eyebrow text for gradient-only heroes */
  caption?: string;
};

/**
 * Hero media: real venue photo when available, otherwise a tasteful
 * Irish-pub green gradient — never NEED_REAL_PHOTO / fake stock.
 */
export function VenueHero({
  src,
  alt = "O'Connell St Irish pub near Puerta del Sol, Madrid",
  className = "",
  aspect = "wide",
  caption,
}: Props) {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "wide"
        ? "aspect-[21/9]"
        : "aspect-video";

  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border border-cream/15 shadow-lg shadow-black/40 ${aspectClass} ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
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
