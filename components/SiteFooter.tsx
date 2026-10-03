import Link from "next/link";
import {
  ADDRESS,
  HOURS,
  MAPS_URL,
  PUBLIC_EMAIL,
  PUBLIC_EMAIL_MAILTO,
  SITE_NAME,
} from "@/lib/venue";

type Locale = "en" | "es";

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es";
  return (
    <footer className="mt-auto border-t border-gold/15 bg-black px-4 py-10 pb-28 text-sm text-cream-muted">
      <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
        <div>
          <p className="font-serif text-lg text-cream">
            {SITE_NAME} Madrid
          </p>
          <p className="mt-2">Calle de Espoz y Mina 7</p>
          <p className="mt-1 text-cream/55">
            {ADDRESS.postalCode} {ADDRESS.city}
          </p>
          <p className="mt-3 text-cream/55">
            {isEs ? HOURS.summaryEs : HOURS.summaryEn}
          </p>
          <p className="mt-3">
            <a
              href={PUBLIC_EMAIL_MAILTO}
              data-event="email_click"
              className="text-cream hover:text-gold"
            >
              {PUBLIC_EMAIL}
            </a>
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
                {isEs ? "Deportes en directo" : "Live Sports"}
              </Link>
            </li>
            <li>
              <Link
                href={isEs ? "/es/whats-on" : "/whats-on"}
                data-event="whats_on"
                className="hover:text-gold"
              >
                {isEs ? "Agenda" : "What's On"}
              </Link>
            </li>
            <li>
              <Link
                href={
                  isEs ? "/es/thursday-1-euro-shots" : "/thursday-1-euro-shots"
                }
                className="hover:text-gold"
              >
                {isEs ? "Chupitos a 1 € los jueves" : "Thursday €1 shots"}
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
                data-event="contact"
                className="hover:text-gold"
              >
                {isEs ? "Contacto" : "Contact"}
              </Link>
            </li>
            <li>
              <Link
                href={isEs ? "/es/privacy" : "/privacy"}
                className="hover:text-gold"
              >
                {isEs ? "Privacidad" : "Privacy"}
              </Link>
            </li>
            <li>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-event="directions"
                className="hover:text-gold"
              >
                {isEs ? "Cómo llegar" : "Directions"}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-2 font-semibold uppercase tracking-wide text-cream/90">
            {isEs ? "Dónde estamos" : "Find us"}
          </p>
          <p>
            {isEs
              ? "Junto a Puerta del Sol."
              : "Near Puerta del Sol."}
          </p>
        </div>
      </div>
    </footer>
  );
}
