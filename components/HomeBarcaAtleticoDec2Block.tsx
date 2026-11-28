import { DirectionsButton } from "@/components/HowToGetHere";
import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";

/** Owner 26 Nov 2026 00:30 Madrid — hide from Thursday 3 Dec (Madrid). */
const SHOW_UNTIL_YMD = "2026-12-02";
const HIDE_FROM_MS = Date.parse("2026-12-03T00:00:00+01:00");
const HIDE_SCRIPT = `(function(){if(Date.now()>=${HIDE_FROM_MS}){var e=document.querySelectorAll("[data-home-barca-atleti='2026-12-02']");for(var i=0;i<e.length;i++){e[i].style.display="none";e[i].setAttribute("hidden","")}}})();`;

/** Owner-approved exact copy — do not rewrite. */
const COPY = {
  en: {
    title: "Barça v Atlético · Wed 2 Dec · 21:30",
    hook:
      "Will Julián finally win back the Atleti fans… at the Camp Nou? Watch it with us.",
  },
  es: {
    title: "Barça – Atlético · Miércoles 2 de diciembre · 21:30",
    hook:
      "¿Marcará Julián en el Camp Nou para ganarse del todo el perdón de la afición rojiblanca? Vívelo con nosotros.",
  },
} as const;

export function HomeBarcaAtleticoDec2Block({ locale }: { locale: "en" | "es" }) {
  const today = madridTodayYmd(agendaBuildNow());
  if (today > SHOW_UNTIL_YMD) return null;
  if (Date.now() >= HIDE_FROM_MS) return null;
  const c = COPY[locale];
  return (
    <>
      <aside
        className="mx-auto mb-8 max-w-2xl rounded-lg border-2 border-gold bg-pub-burgundy-deep p-5 shadow-[0_0_0_1px_rgba(212,175,55,0.25)] sm:p-6"
        data-home-barca-atleti="2026-12-02"
        aria-label={c.title}
        suppressHydrationWarning
      >
        <h2 className="font-serif text-xl font-bold leading-snug text-gold sm:text-2xl">
          {c.title}
        </h2>
        <p className="mt-3 text-sm leading-snug text-cream sm:text-base">
          {c.hook}
        </p>
        <p className="mt-4">
          <DirectionsButton locale={locale} />
        </p>
      </aside>
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: HIDE_SCRIPT }}
      />
    </>
  );
}