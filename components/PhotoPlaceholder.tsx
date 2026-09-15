import { VenueHero } from "./VenueHero";

/** @deprecated Prefer VenueHero — kept so any stray imports still render gradients, never NEED_REAL_PHOTO. */
export function PhotoPlaceholder({
  label,
  className = "",
  aspect = "video",
}: {
  label?: string;
  className?: string;
  aspect?: "video" | "square" | "wide";
}) {
  return (
    <VenueHero
      className={className}
      aspect={aspect}
      caption={label?.replace(/NEED_REAL_PHOTO/gi, "").trim() || undefined}
    />
  );
}
