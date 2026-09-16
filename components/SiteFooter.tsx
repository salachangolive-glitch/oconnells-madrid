import Link from "next/link";
import {
  ADDRESS,
  HOURS,
  MAPS_URL,
  SITE_NAME,
} from "@/lib/venue";

type Locale = "en" | "es";

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es";
  return (
    <footer className="mt-auto border-t border-gold/15 bg-black px-4 py-10 pb-28 text-sm text-cream-muted">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
        <div>
          <p className="font-serif text-lg text-cream">{SITE_NAME}</p>
          <p className="mt-2">{ADDRESS.full}</p>
          <p className="mt-3 text-cream/55">
            {isEs ? HOURS.summaryEs : HOURS.summaryEn}
          </p>
        </div>
        <div>
          <p className="mb-2 font-semibold uppercase tracking-wide text-cream/90">
            {isEs ? "Explorar" : "Explore"}
          </p>
          <ul className="space-y-1">
            <li>
              <Link
                href={isEs ? "/es/sports" : "/sports"}
                className="hover:text-gold"
              >
                {isEs ? "Deportes" : "Sports"}
              </Link>
            </li>
            <li>
              <Link
                href={isEs ? "/es/whats-on" : "/whats-on"}
                className="hover:text-gold"
              >
                {isEs ? "Partidos" : "Fixtures"}
              </Link>
            </li>
            <li>
              <Link
                href={
                  isEs ? "/es/thursday-1-euro-shots" : "/thursday-1-euro-shots"
                }
                className="hover:text-gold"
              >
                {isEs ? "Jueves chupitos a 1 €" : "Thursday €1 shots"}
              </Link>
            </li>
            <li>
              <Link
                href={isEs ? "/es/erasmus" : "/erasmus"}
                className="hover:text-gold"
              >
                Erasmus
              </Link>
            </li>
            <li>
              <Link
                href={isEs ? "/es/location" : "/location"}
                className="hover:text-gold"
              >
                {isEs ? "Ubicación" : "Location"}
              </Link>
            </li>
            <li>
              <Link
                href={isEs ? "/es/contact" : "/contact"}
                className="hover:text-gold"
              >
                {isEs ? "Contacto" : "Contact"}
              </Link>
            </li>
            <li>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                {isEs ? "Cómo llegar" : "Directions"}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-2 font-semibold uppercase tracking-wide text-cream/90">
            {isEs ? "Centro de Madrid" : "Central Madrid"}
          </p>
          <p>
            {isEs
              ? "Pub irlandés cerca de Sol · Madrid Centro."
              : "Irish pub near Sol · Madrid Centro."}
          </p>
        </div>
      </div>
    </footer>
  );
}
