import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  /** editorial = large home bar; feature = page hero-ish; gallery = grid cell */
  variant?: "editorial" | "feature" | "gallery";
  /** object-position hint for distinct crops across pages */
  position?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Real interior photos (portrait). Prefer showing the full vertical frame —
 * object-contain on mobile so screens/bar aren't cropped away.
 */
export function InteriorPhoto({
  src,
  alt,
  variant = "feature",
  position = "object-center",
  priority = false,
  className = "",
}: Props) {
  if (variant === "editorial") {
    return (
      <figure
        className={`relative w-full overflow-hidden bg-pub-burgundy-deep ${className}`}
      >
        <div className="relative mx-auto aspect-[3/4] w-full max-h-[85vh] max-w-3xl sm:aspect-[4/5] sm:max-h-[90vh]">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 768px"
            className={`object-contain ${position}`}
          />
        </div>
      </figure>
    );
  }

  if (variant === "gallery") {
    return (
      <figure
        className={`relative aspect-[3/4] overflow-hidden rounded-lg border border-cream/10 bg-pub-burgundy-deep ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 50vw, 280px"
          className={`object-cover ${position}`}
        />
      </figure>
    );
  }

  // feature — primary interior on inner pages
  return (
    <figure
      className={`relative mb-10 overflow-hidden rounded-xl border border-cream/15 bg-pub-burgundy-deep shadow-lg shadow-black/40 ${className}`}
    >
      <div className="relative aspect-[3/4] w-full sm:aspect-[4/5] md:mx-auto md:max-w-xl">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          sizes="(max-width: 768px) 100vw, 576px"
          className={`object-contain sm:object-cover ${position}`}
        />
      </div>
    </figure>
  );
}

/** Simple 2×2 (or responsive) gallery — no carousel, no overlays. */
export function InteriorGallery({
  items,
  className = "",
}: {
  items: { src: string; alt: string; position?: string }[];
  className?: string;
}) {
  return (
    <section className={`mb-12 ${className}`} aria-label="Interior photos">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {items.map((item) => (
          <InteriorPhoto
            key={item.src}
            src={item.src}
            alt={item.alt}
            variant="gallery"
            position={item.position || "object-center"}
          />
        ))}
      </div>
    </section>
  );
}
