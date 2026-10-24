import Link from "next/link";
import { ga4Enabled } from "@/lib/analytics";
import {
  ADDRESS,
  HOURS,
  MAPS_URL,
  PUBLIC_EMAIL,
  PUBLIC_EMAIL_MAILTO,
  SITE_NAME,
} from "@/lib/venue";

type Locale = "en" | "es" | "de";

export function SiteFooter({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es";
  const isDe = locale === "de";
  return (
    <footer className="mt-auto border-t border-gold/15 bg-black px-4 py-10 pb-[calc(7.5rem+env(safe-area-inset-bottom,0px))] text-sm text-cream-muted">
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
            {isEs ? HOURS.summaryEs : isDe ? HOURS.summaryDe : HOURS.summaryEn}
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
            {isEs ? "Explorar" : isDe ? "Entdecken" : "Explore"}
          </p>
          <ul className="space-y-1">
            <li>
              <Link
                href={isEs ? "/es/sports" : "/sports"}
                className="hover:text-gold"
              >
                {isEs ? "Deportes en directo" : isDe ? "Live Sport" : "Live Sports"}
              </Link>
            </li>
            <li>
              <Link
                href={isEs ? "/es/whats-on" : "/whats-on"}
                data-event="whats_on"
                className="hover:text-gold"
              >
                {isEs ? "Agenda" : isDe ? "What's On" : "What's On"}
              </Link>
            </li>
            <li>
              <Link
                href={isEs ? "/es/thursday-1-euro-shots" : "/thursday-1-euro-shots"}
                className="hover:text-gold"
              >
                {isEs ? "Chupitos a 1 € los jueves" : isDe ? "Thursday €1 shots" : "Thursday €1 shots"}
              </Link>
            </li>
            <li>
              <Link
                href={isEs ? "/es/location" : "/location"}
                className="hover:text-gold"
              >
                {isEs ? "Ubicación" : isDe ? "Lage" : "Location"}
              </Link>
            </li>
            <li>
              <Link
                href={isEs ? "/es/contact" : "/contact"}
                data-event="contact"
                className="hover:text-gold"
              >
                {isEs ? "Contacto" : isDe ? "Kontakt" : "Contact"}
              </Link>
            </li>
            <li>
              <Link
                href={isEs ? "/es/privacy" : "/privacy"}
                className="hover:text-gold"
              >
                {isEs ? "Privacidad" : isDe ? "Datenschutz" : "Privacy"}
              </Link>
            </li>
            {ga4Enabled() ? (
              <li>
                <button
                  type="button"
                  data-cookie-settings=""
                  className="text-left hover:text-gold"
                >
                  {isEs ? "Configurar cookies" : isDe ? "Cookie-Einstellungen" : "Cookie settings"}
                </button>
              </li>
            ) : null}
            <li>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-event="directions"
                className="hover:text-gold"
              >
                {isEs ? "Cómo llegar" : isDe ? "Anfahrt" : "Directions"}
              </a>
            </li>
            <li>
              <a
                href="https://g.page/r/CUmI0cCDuHWUEBE/review"
                target="_blank"
                rel="noopener"
                className="hover:text-gold"
              >
                {isEs ? "Déjanos tu opinión en Google" : isDe ? "Google-Bewertung hinterlassen" : "Leave us a Google review"}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-2 font-semibold uppercase tracking-wide text-cream/90">
            {isEs ? "Dónde estamos" : isDe ? "So findet ihr uns" : "Find us"}
          </p>
          <p>
            {isEs
              ? "Junto a Puerta del Sol."
              : isDe
                ? "Direkt an der Puerta del Sol."
                : "Near Puerta del Sol."}
          </p>
        </div>
      </div>
    </footer>
  );
}
