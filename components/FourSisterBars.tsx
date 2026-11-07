import Link from "next/link";
import { FAN_WEEKEND, SISTER_BARS } from "@/lib/fan-weekend";

type Locale = "en" | "es";

export function FourSisterBars({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es";

  return (
    <section className="mb-12">
      <h2 className="font-serif text-xl font-semibold text-cream sm:text-2xl">
        {isEs ? "Los cuatro bares junto a Sol" : "The four bars near Sol"}
      </h2>
      <p className="mt-3 text-cream/80">
        {isEs
          ? "Cuatro locales hermanos a pocos minutos de Puerta del Sol. Elige sala, pásate de una a otra, o empieza por la guía común."
          : "Four sister rooms a few minutes from Puerta del Sol. Pick a room, hop between them, or start from the shared guide."}
      </p>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2">
        {SISTER_BARS.map((bar) => (
          <li
            key={bar.id}
            className="border-b border-gold/20 pb-5"
          >
            <p className="font-serif text-lg font-semibold text-cream">
              {bar.name}
            </p>
            <p className="mt-1 text-sm text-cream-muted">{bar.address}</p>
            <p className="mt-2 text-sm text-cream/80">
              {isEs ? bar.blurbEs : bar.blurbEn}
            </p>
            <p className="mt-2 text-sm text-gold">
              {isEs ? bar.hoursEs : bar.hoursEn}
            </p>
            <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <a
                href={bar.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline"
              >
                Maps
              </a>
              {bar.webUrl ? (
                bar.webUrl.startsWith("http") ? (
                  <a
                    href={bar.webUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline"
                  >
                    {isEs ? "Web" : "Web"}
                  </a>
                ) : (
                  <Link href={isEs && bar.id === "oconnells" ? "/es" : bar.webUrl} className="text-gold underline">
                    {isEs ? "Esta web" : "This site"}
                  </Link>
                )
              ) : null}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-cream-muted">
        {isEs ? (
          <>
            Guía compartida:{" "}
            <a
              href={FAN_WEEKEND.dublinersHubEs}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline"
            >
              cuatro bares, un fin de semana
            </a>
            .
          </>
        ) : (
          <>
            Shared guide:{" "}
            <a
              href={FAN_WEEKEND.dublinersHubEn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline"
            >
              4 bars, one fan weekend
            </a>
            .
          </>
        )}
      </p>
    </section>
  );
}
