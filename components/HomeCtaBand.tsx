import Link from "next/link";
import { MAPS_URL } from "@/lib/venue";

type Locale = "en" | "es";

/** Under the clean facade: discreet links + Thursday €1 as the visual hook. */
export function HomeCtaBand({ locale = "en" }: { locale?: Locale }) {
  const thursdayHref =
    locale === "es" ? "/es/thursday-1-euro-shots" : "/thursday-1-euro-shots";
  const whatsLabel = "What's on";
  const dirLabel = locale === "es" ? "Cómo llegar" : "Directions";
  const thuTop = locale === "es" ? "JUEVES" : "THURSDAY";
  const thuBottom = locale === "es" ? "CHUPITOS" : "SHOTS";

  return (
    <div className="border-y border-gold-soft/30 bg-gradient-to-b from-pub-burgundy-deep to-pub-green">
      <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-4 sm:py-3">
        <nav
          className="flex items-center justify-center gap-6 border-b border-cream/10 px-4 py-3 text-sm tracking-wide text-cream-muted sm:border-0 sm:py-0 sm:justify-start"
          aria-label={locale === "es" ? "Acciones" : "Actions"}
        >
          <Link
            href="/whats-on"
            className="border-b border-transparent pb-0.5 transition hover:border-gold hover:text-cream"
          >
            {whatsLabel}
          </Link>
          <span className="text-gold-soft/50" aria-hidden>
            ·
          </span>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-transparent pb-0.5 transition hover:border-gold hover:text-cream"
          >
            {dirLabel}
          </a>
        </nav>

        <Link
          href={thursdayHref}
          className="group flex items-center justify-center gap-4 bg-pub-burgundy/80 px-4 py-4 sm:rounded-sm sm:border sm:border-gold/40 sm:bg-pub-burgundy sm:px-6 sm:py-3"
        >
          <div className="text-right leading-none">
            <p className="font-serif text-[10px] font-bold tracking-[0.28em] text-gold sm:text-xs">
              {thuTop}
            </p>
            <p className="mt-1 font-serif text-xs tracking-[0.2em] text-cream/85">
              {thuBottom}
            </p>
          </div>
          <p className="font-serif text-4xl font-bold leading-none text-gold transition group-hover:text-cream sm:text-5xl">
            €1
          </p>
        </Link>
      </div>
    </div>
  );
}
