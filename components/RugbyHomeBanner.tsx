import Link from "next/link";
import { HOURS, MAPS_URL } from "@/lib/venue";

/** Nations Championship home promo — hide from Sun 22 Nov 2026 04:00 Europe/Madrid. */
const HIDE_AFTER = Date.parse("2026-11-22T04:00:00+01:00");
const HIDE_SCRIPT = `(function(){if(Date.now()>=${HIDE_AFTER}){var e=document.querySelectorAll('[data-rugby-home="2026-11-21"]');for(var i=0;i<e.length;i++){e[i].style.display="none";e[i].setAttribute("hidden","")}}})();`;

const COPY = {
  en: {
    title: "International Rugby – Saturday 21 November",
    live:
      "Live on our screens at O'Connell St — six Nations Championship fixtures Saturday (Madrid time).",
    matches: [
      "15:10 England v New Zealand",
      "15:10 Scotland v Japan",
      "17:40 Ireland v South Africa",
      "17:40 Italy v Fiji",
      "21:10 France v Argentina",
      "21:10 Wales v Australia",
    ],
    address: `Calle de Espoz y Mina 7 — Saturday doors open ${HOURS.sat.open}, until ${HOURS.sat.close}.`,
    access: "No reservations; first come, first served.",
    howto: "How to get here",
    cta: "View rugby schedule",
    href: "/news/rugby-saturday-sol-21-nov",
    locationHref: "/location",
  },
  es: {
    title: "Jornada internacional de rugby – sábado 21 de noviembre",
    live:
      "En directo en nuestras pantallas en O'Connell St, Espoz y Mina 7 — seis partidos del sábado (hora Madrid).",
    matches: [
      "15:10 Inglaterra–Nueva Zelanda",
      "15:10 Escocia–Japón",
      "17:40 Irlanda–Sudáfrica",
      "17:40 Italia–Fiyi",
      "21:10 Francia–Argentina",
      "21:10 Gales–Australia",
    ],
    address: `Calle de Espoz y Mina 7 — sábado apertura ${HOURS.sat.open}, hasta las ${HOURS.sat.close}.`,
    access: "Sin reservas; por orden de llegada.",
    howto: "Cómo llegar",
    cta: "Ver partidos de rugby",
    href: "/es/noticias/rugby-sabado-sol-21-nov",
    locationHref: "/es/location",
  },
} as const;

export function RugbyHomeBanner({ locale }: { locale: "en" | "es" }) {
  if (Date.now() >= HIDE_AFTER) return null;
  const c = COPY[locale];
  return (
    <>
      <aside
        className="mx-auto mb-8 max-w-2xl rounded-lg border border-gold/50 bg-pub-burgundy-deep/90 p-5 sm:p-6"
        data-rugby-home="2026-11-21"
        suppressHydrationWarning
      >
        <h2 className="font-serif text-lg font-bold leading-snug text-gold sm:text-xl">
          {c.title}
        </h2>
        <p className="mt-2 text-sm text-cream-muted">{c.live}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-cream sm:text-base">
          {c.matches.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-cream/90">{c.address}</p>
        <p className="mt-1 text-sm text-cream-muted">{c.access}</p>
        <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            {c.howto} (Google Maps)
          </a>
          <Link href={c.locationHref} className="text-gold underline">
            {c.howto}
          </Link>
        </p>
        <Link
          href={c.href}
          data-event="rugby_cta_click"
          data-bar="oconnells"
          data-lang={locale}
          className="mt-5 inline-block rounded bg-gold px-5 py-2.5 text-center text-sm font-semibold text-black hover:bg-gold/90"
        >
          {c.cta}
        </Link>
      </aside>
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: HIDE_SCRIPT }}
      />
    </>
  );
}