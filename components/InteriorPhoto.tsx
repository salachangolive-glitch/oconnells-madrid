/** Interior photos with pre-sized copies (name-320w/480w/640w/780w.webp). */
const RESPONSIVE = new Set([
  "/images/interior/bar-corner.webp",
  "/images/interior/bar-taps.webp",
  "/images/interior/sports-aisle.webp",
  "/images/interior/about-salon.webp",
  "/images/interior/stairs-levels.webp",
]);

function srcSetFor(src: string): string | undefined {
  if (!RESPONSIVE.has(src)) return undefined;
  const base = src.replace(/\.webp$/, "");
  return [320, 480, 640, 780]
    .map((w) => `${base}-${w}w.webp ${w}w`)
    .concat(`${src} 1050w`)
    .join(", ");
}

/** Plain <img> filling its box (static export has no image optimizer). */
function FillImg({
  src,
  alt,
  sizes,
  priority,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className: string;
}) {
  const srcSet = srcSetFor(src);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={alt}
      width={1050}
      height={1400}
      loading={priority ? undefined : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={`absolute inset-0 h-full w-full ${className}`}
    />
  );
}

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
          <FillImg
            src={src}
            alt={alt}
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
        <FillImg
          src={src}
          alt={alt}
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
        <FillImg
          src={src}
          alt={alt}
          priority={priority}
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
  ariaLabel = "Interior photos",
}: {
  items: { src: string; alt: string; position?: string }[];
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <section className={`mb-12 ${className}`} aria-label={ariaLabel}>
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
