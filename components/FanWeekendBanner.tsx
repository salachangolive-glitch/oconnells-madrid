import Link from "next/link";
import { FAN_WEEKEND, PATHS, WEEKEND_HOURS } from "@/lib/fan-weekend";

type Locale = "en" | "es";

export function FanWeekendBanner({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es";

  return (
    <aside className="border-t border-gold/30 bg-pub-green px-4 py-6 text-center sm:py-7">
      <p className="font-serif text-xs font-bold tracking-[0.28em] text-gold">
        {isEs ? FAN_WEEKEND.sloganEs : FAN_WEEKEND.sloganEn}
      </p>
      <p className="mt-2 font-serif text-lg font-bold text-cream sm:text-xl">
        {isEs
          ? "Sábado 7 y domingo 8 de noviembre"
          : "Saturday 7 & Sunday 8 November"}
      </p>
      <p className="mx-auto mt-2 max-w-2xl text-sm text-cream-muted">
        {isEs
          ? `${WEEKEND_HOURS.sun8NovNoteEs} Hoy no hay NFL en directo. Mañana, pantallas desde mediodía.`
          : `${WEEKEND_HOURS.sun8NovNoteEn} No live NFL today. Tomorrow the screens run from midday.`}
      </p>
      <nav
        className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.16em]"
        aria-label={isEs ? "Fin de semana NFL" : "NFL fan weekend"}
      >
        <Link href={isEs ? PATHS.saturdayEs : PATHS.saturdayEn} className="text-gold hover:text-cream">
          {isEs ? "Hoy sábado" : "Today Saturday"}
        </Link>
        <span className="text-gold/40" aria-hidden>
          |
        </span>
        <Link href={isEs ? PATHS.sundayEs : PATHS.sundayEn} className="text-gold hover:text-cream">
          {isEs ? "Domingo NFL" : "Sunday NFL"}
        </Link>
        <span className="text-gold/40" aria-hidden>
          |
        </span>
        <Link href={isEs ? PATHS.hubEs : PATHS.hubEn} className="text-gold hover:text-cream">
          {isEs ? "Los cuatro bares" : "The four bars"}
        </Link>
      </nav>
    </aside>
  );
}
