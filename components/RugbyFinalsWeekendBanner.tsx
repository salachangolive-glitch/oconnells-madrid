import Link from "next/link";
import { DirectionsButton } from "@/components/HowToGetHere";
import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";
import { ADDRESS, MAPS_URL } from "@/lib/venue";

const SHOW_FROM = "2026-11-25";
const HIDE_FROM_YMD = "2026-11-30";
const HIDE_MS = Date.parse("2026-11-30T00:00:00+01:00");
const HIDE_SCRIPT = `(function(){if(Date.now()>=${HIDE_MS}){var e=document.querySelectorAll('[data-rugby-finals="2026-11-27"]');for(var i=0;i<e.length;i++){e[i].style.display="none";e[i].setAttribute("hidden","")}}})();`;

const COPY = {
  en: {
    title: "Meeting point for rugby fans in Madrid",
    live:
      "Nations Championship Finals Weekend at Twickenham, 27–29 November, Madrid time — all six matches live on our screens at O'Connell St, less than a minute from Puerta del Sol.",
    finalLabel: "Final — Sunday 29 November",
    final: "17:40 France v South Africa",
    fri: ["17:40 Italy v Fiji", "21:10 Ireland v Australia"],
    sat: ["14:10 Wales v Japan", "17:40 England v New Zealand"],
    sun: ["14:10 Scotland v Argentina"],
    satOpen: "Saturday 28 November: doors open exceptionally at 14:00.",
    fcfs: "Meeting point before and after — first come, first served.",
    cta: "Finals weekend guide",
    href: "/news/nations-championship-finals-twickenham-sol",
    whatsOn: "/whats-on",
  },
  es: {
    title: "Punto de encuentro en Madrid para los aficionados al rugby",
    live:
      "Fin de semana de finales del Nations Championship en Twickenham, 27–29 de noviembre, hora de Madrid — los seis partidos en directo en nuestras pantallas en O'Connell St, a menos de un minuto de Puerta del Sol.",
    finalLabel: "Final — domingo 29 de noviembre",
    final: "17:40 Francia–Sudáfrica",
    fri: ["17:40 Italia–Fiyi", "21:10 Irlanda–Australia"],
    sat: ["14:10 Gales–Japón", "17:40 Inglaterra–Nueva Zelanda"],
    sun: ["14:10 Escocia–Argentina"],
    satOpen: "Sábado 28 de noviembre: apertura excepcional a las 14:00.",
    fcfs: "Punto de encuentro antes y después — por orden de llegada.",
    cta: "Guía del fin de semana de finales",
    href: "/es/noticias/nations-championship-finals-fin-de-semana-sol",
    whatsOn: "/es/whats-on",
  },
} as const;

export function RugbyFinalsWeekendBanner({ locale }: { locale: "en" | "es" }) {
  const today = madridTodayYmd(agendaBuildNow());
  if (today < SHOW_FROM || today >= HIDE_FROM_YMD) return null;
  if (Date.now() >= HIDE_MS) return null;
  const c = COPY[locale];
  return (
    <>
      <aside
        className="mx-auto mb-8 max-w-2xl rounded-lg border-2 border-gold bg-pub-burgundy-deep p-5 shadow-[0_0_0_1px_rgba(212,175,55,0.25)] sm:p-6"
        data-rugby-finals="2026-11-27"
        suppressHydrationWarning
      >
        <h2 className="font-serif text-xl font-bold leading-snug text-gold sm:text-2xl">
          {c.title}
        </h2>
        <p className="mt-2 text-sm text-cream sm:text-base">{c.live}</p>
        <p className="mt-1 text-sm text-cream-muted">{ADDRESS.full}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold">
          {c.finalLabel}
        </p>
        <p className="mt-1 text-base font-semibold text-cream">{c.final}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gold">
          {locale === "es" ? "Viernes 27" : "Friday 27"}
        </p>
        <ul className="mt-1 space-y-1 text-sm text-cream">
          {c.fri.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gold">
          {locale === "es" ? "Sábado 28" : "Saturday 28"}
        </p>
        <ul className="mt-1 space-y-1 text-sm text-cream">
          {c.sat.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        <p className="mt-2 text-sm text-gold">{c.satOpen}</p>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gold">
          {locale === "es" ? "Domingo 29" : "Sunday 29"}
        </p>
        <ul className="mt-1 space-y-1 text-sm text-cream">
          {c.sun.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-cream-muted">{c.fcfs}</p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href={c.href}
            className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-black hover:bg-gold/90"
          >
            {c.cta}
          </Link>
          <DirectionsButton locale={locale} />
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-sm text-gold underline"
          >
            {locale === "es" ? "Google Maps" : "Google Maps"}
          </a>
          <Link href={c.whatsOn} className="text-sm text-gold underline">
            {locale === "es" ? "Agenda" : "What's On"}
          </Link>
        </div>
      </aside>
      <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: HIDE_SCRIPT }} />
    </>
  );
}