import Link from "next/link";
import { MAPS_URL } from "@/lib/venue";

type Locale = "en" | "es";

/**
 * Under facade: PARTIDOS | CÓMO LLEGAR, then the single Thursday promo strip.
 * No duplicate €1 blocks elsewhere on Home.
 */
export function HomeCtaBand({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es";
  const fixturesHref = isEs ? "/es/whats-on" : "/whats-on";
  const thursdayHref = isEs
    ? "/es/thursday-1-euro-shots"
    : "/thursday-1-euro-shots";
  const fixturesLabel = isEs ? "Partidos" : "Fixtures";
  const dirLabel = isEs ? "Cómo llegar" : "Directions";

  return (
    <div className="bg-pub-burgundy-deep">
      <nav
        className="flex items-center justify-center gap-8 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream-muted"
        aria-label={isEs ? "Acciones" : "Actions"}
      >
        <Link
          href={fixturesHref}
          className="transition hover:text-gold"
        >
          {fixturesLabel}
        </Link>
        <span className="text-gold/40" aria-hidden>
          |
        </span>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-gold"
        >
          {dirLabel}
        </a>
      </nav>

      <Link
        href={thursdayHref}
        className="group block border-t border-gold/25 bg-gradient-to-r from-pub-burgundy via-pub-burgundy-deep to-pub-green px-4 py-5 text-center transition hover:brightness-110 sm:py-6"
      >
        {isEs ? (
          <>
            <p className="font-serif text-xs font-bold tracking-[0.35em] text-gold">
              JUEVES
            </p>
            <p className="mt-2 font-serif text-xl font-bold tracking-wide text-cream sm:text-2xl">
              Chupitos a{" "}
              <span className="text-gold group-hover:text-cream">1&nbsp;€</span>
            </p>
          </>
        ) : (
          <>
            <p className="font-serif text-xs font-bold tracking-[0.35em] text-gold">
              THURSDAY
            </p>
            <p className="mt-2 font-serif text-xl font-bold tracking-wide text-cream sm:text-2xl">
              Shots from{" "}
              <span className="text-gold group-hover:text-cream">€1</span>
            </p>
          </>
        )}
      </Link>
    </div>
  );
}
