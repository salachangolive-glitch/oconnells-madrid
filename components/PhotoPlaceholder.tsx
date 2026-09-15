type Props = {
  label: string;
  className?: string;
  aspect?: "video" | "square" | "wide";
};

export function PhotoPlaceholder({
  label,
  className = "",
  aspect = "video",
}: Props) {
  const aspectClass =
    aspect === "square"
      ? "aspect-square"
      : aspect === "wide"
        ? "aspect-[21/9]"
        : "aspect-video";

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-lg border border-cream/20 bg-black/60 ${aspectClass} ${className}`}
      role="img"
      aria-label={`Photo placeholder: ${label}`}
    >
      <div className="px-4 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-cream/50">
          NEED_REAL_PHOTO
        </p>
        <p className="mt-1 text-sm text-cream/80">{label}</p>
      </div>
    </div>
  );
}
