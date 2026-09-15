import Link from "next/link";
import { MAPS_URL } from "@/lib/venue";

type Locale = "en" | "es";

/** Fixtures | Directions | Contact — no phone on the new website. */
export function StickyCta({ locale = "en" }: { locale?: Locale }) {
  const isEs = locale === "es";
  const fixturesHref = isEs ? "/es/whats-on" : "/whats-on";
  const contactHref = isEs ? "/es/contact" : "/contact";

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/25 bg-black/95 backdrop-blur-md safe-bottom"
      aria-label={isEs ? "Acciones rápidas" : "Quick actions"}
    >
      <ul className="mx-auto grid max-w-3xl grid-cols-3 px-1 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-cream-muted sm:text-[11px]">
        <li>
          <Link
            href={fixturesHref}
            className="flex min-h-11 flex-col items-center justify-center gap-0.5 px-1 py-1.5 hover:text-gold"
          >
            <ScreenIcon />
            {isEs ? "Partidos" : "Fixtures"}
          </Link>
        </li>
        <li>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 flex-col items-center justify-center gap-0.5 px-1 py-1.5 hover:text-gold"
          >
            <PinIcon />
            {isEs ? "Cómo llegar" : "Directions"}
          </a>
        </li>
        <li>
          <Link
            href={contactHref}
            className="flex min-h-11 flex-col items-center justify-center gap-0.5 px-1 py-1.5 hover:text-gold"
          >
            <MailIcon />
            {isEs ? "Contacto" : "Contact"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function ScreenIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="text-gold">
      <rect x="3" y="5" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="text-gold">
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="text-gold">
      <rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
