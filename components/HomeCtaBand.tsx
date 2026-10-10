import Link from "next/link";
import { MAPS_URL } from "@/lib/venue";

type Locale = "en" | "es";

/**
 * Hero CTAs: What's On | Directions | Contact.
 * Thursday promo lives in ThursdayFeature (once on Home) — not duplicated here.
 */
export function HomeCtaBand({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es";
  const whatsOnHref = isEs ? "/es/whats-on" : "/whats-on";
  const contactHref = isEs ? "/es/contact" : "/contact";
  const whatsOnLabel = isEs ? "Agenda" : "What's On";
  const dirLabel = isEs ? "Cómo llegar" : "Directions";
  const contactLabel = isEs ? "Contacto" : "Contact";

  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cream-muted"
      aria-label={isEs ? "Acciones" : "Actions"}
    >
      <Link href={whatsOnHref} data-event="whats_on" className="transition hover:text-gold">
        {whatsOnLabel}
      </Link>
      <span className="text-gold/40" aria-hidden>
        |
      </span>
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-event="directions"
        className="transition hover:text-gold"
      >
        {dirLabel}
      </a>
      <span className="text-gold/40" aria-hidden>
        |
      </span>
      <Link href={contactHref} data-event="contact" className="transition hover:text-gold">
        {contactLabel}
      </Link>
    </nav>
  );
}
