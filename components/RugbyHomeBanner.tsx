import Link from "next/link";
import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";
import { HOURS, MAPS_URL } from "@/lib/venue";

/**
 * Nations Championship promo for Saturday 21 Nov 2026.
 * Build-time gate: hidden once the Madrid calendar day is 22 Nov or later
 * (daily rebuild). Client script also hides from Sun 22 Nov 04:00 Europe/Madrid
 * so it drops after Saturday night even if the rebuild has not run yet.
 */
const HIDE_AFTER_YMD = "2026-11-22";
const HIDE_AFTER_MS = Date.parse("2026-11-22T04:00:00+01:00");
const HIDE_SCRIPT = `(function(){if(Date.now()>=${HIDE_AFTER_MS}){var e=document.querySelectorAll('[data-rugby-home="2026-11-21"]');for(var i=0;i<e.length;i++){e[i].style.display="none";e[i].setAttribute("hidden","")}}})();`;

const COPY = {
  en: {
    title: "International Rugby – Saturday 21 November",
    live:
      "Live on our screens at O'Connell St, Espoz y Mina 7, by Puerta del Sol. Nations Championship matches on Saturday 21 November, Madrid time. A meeting point for fans of every country.",
    priorityLabel: "First up",
    priority: ["15:10 England v New Zealand", "17:40 Ireland v South Africa"],
    alsoLabel: "Also live on our screens",
    also: [
      "15:10 Scotland v Japan",
      "17:40 Italy v Fiji",
      "21:10 France v Argentina",
      "21:10 Wales v Australia",
    ],
    address: `Saturday doors open ${HOURS.sat.open}, until ${HOURS.sat.close}.`,
    access: "No reservations, first come first served.",
    howto: "How to get here",
    cta: "Saturday rugby near Sol",
    href: "/news/rugby-saturday-sol-21-nov",
    locationHref: "/location",
  },
  es: {
    title: "Jornada internacional de rugby – sábado 21 de noviembre",
    live:
      "En directo en nuestras pantallas en O'Connell St, Espoz y Mina 7, junto a Puerta del Sol. Seis partidos del Nations Championship el sábado 21 de noviembre, hora de Madrid. Un punto de encuentro para aficionados de todos los países.",
    priorityLabel: "Destacados",
    priority: ["15:10 Inglaterra–Nueva Zelanda", "17:40 Irlanda–Sudáfrica"],
    alsoLabel: "También en directo en nuestras pantallas",
    also: [
      "15:10 Escocia–Japón",
      "17:40 Italia–Fiyi",
      "21:10 Francia–Argentina",
      "21:10 Gales–Australia",
    ],
    address: `Sábado: apertura ${HOURS.sat.open}, hasta las ${HOURS.sat.close}.`,
    access: "Sin reservas, por orden de llegada.",
    howto: "Cómo llegar",
    cta: "Rugby del sábado junto a Sol",
    href: "/es/noticias/rugby-sabado-sol-21-nov",
    locationHref: "/es/location",
  },
} as const;

export function RugbyHomeBanner({ locale }: { locale: "en" | "es" }) {
  if (madridTodayYmd(agendaBuildNow()) >= HIDE_AFTER_YMD) return null;
  if (Date.now() >= HIDE_AFTER_MS) return null;
  const c = COPY[locale];
  return (
    <>
      <aside
        className="mx-auto mb-8 max-w-2xl rounded-lg border-2 border-gold bg-pub-burgundy-deep p-5 shadow-[0_0_0_1px_rgba(212,175,55,0.25)] sm:p-6"
        data-rugby-home="2026-11-21"
        suppressHydrationWarning
      >
        <h2 className="font-serif text-xl font-bold leading-snug text-gold sm:text-2xl">
          {c.title}
        </h2>
        <p className="mt-2 text-sm text-cream sm:text-base">{c.live}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold">
          {c.priorityLabel}
        </p>
        <ul className="mt-1 space-y-1 text-base font-semibold text-cream sm:text-lg">
          {c.priority.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold/90">
          {c.alsoLabel}
        </p>
        <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-cream sm:text-base">
          {c.also.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-cream/90">{c.address}</p>
        <p className="mt-1 text-sm font-medium text-cream">{c.access}</p>
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
