import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";
import { MAPS_URL } from "@/lib/venue";

/** Owner 26 Nov 2026 T52 — hide from Wednesday 16 Dec (Madrid). */
const SHOW_UNTIL_YMD = "2026-12-15";
const HIDE_FROM_MS = Date.parse("2026-12-16T00:00:00+01:00");
const HIDE_SCRIPT = `(function(){if(Date.now()>=${HIDE_FROM_MS}){var e=document.querySelectorAll("[data-home-bayern-basket='2026-12-15']");for(var i=0;i<e.length;i++){e[i].style.display="none";e[i].setAttribute("hidden","")}}})();`;

const COPY = {
  en: {
    title: "Real Madrid v Bayern · Tue 15 Dec · 20:45 · Movistar Arena",
    deLine:
      "Treffpunkt — meeting point Monday 14 and Tuesday 15, before and after the game.",
    route: "Route",
    guideHref: "/news/movistar-arena-bayern-fans-bar",
    guideLabel: "Movistar Arena Bayern Fans Bar",
  },
  es: {
    title: "Real Madrid–Bayern · martes 15 dic · 20:45 · Movistar Arena",
    deLine:
      "Treffpunkt — punto de encuentro el lunes 14 y el martes 15, antes y después del partido.",
    route: "Cómo llegar",
    guideHref: "/de/real-madrid-bayern-basketball-treffpunkt-sol",
    guideLabel: "Bayern Fans Madrid Treffpunkt (alemán)",
  },
} as const;

export function HomeBayernBasketDec15Block({ locale }: { locale: "en" | "es" }) {
  const today = madridTodayYmd(agendaBuildNow());
  if (today > SHOW_UNTIL_YMD) return null;
  if (Date.now() >= HIDE_FROM_MS) return null;
  const c = COPY[locale];
  return (
    <>
      <aside
        className="mx-auto mb-8 max-w-2xl rounded-lg border-2 border-gold bg-pub-burgundy-deep p-5 shadow-[0_0_0_1px_rgba(212,175,55,0.25)] sm:p-6"
        data-home-bayern-basket="2026-12-15"
        aria-label={c.title}
        suppressHydrationWarning
      >
        <h2 className="font-serif text-xl font-bold leading-snug text-gold sm:text-2xl">
          {c.title}
        </h2>
        <p className="mt-3 text-sm leading-snug text-cream sm:text-base" lang="de">
          {c.deLine}
        </p>
        <p className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            data-oc-directions="button"
            className="inline-flex items-center justify-center rounded-md bg-pub-green px-5 py-2.5 text-sm font-semibold text-cream hover:bg-pub-green-light"
          >
            {c.route}
          </a>
          <a href={c.guideHref} hrefLang={locale === "es" ? "de" : "en"} className="text-sm text-gold underline">
            {c.guideLabel}
          </a>
        </p>
      </aside>
      <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: HIDE_SCRIPT }} />
    </>
  );
}