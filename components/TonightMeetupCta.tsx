import Link from "next/link";
import { PATHS, TONIGHT_MEETUP } from "@/lib/fan-weekend";

/**
 * Unique O'Connell's CTA for Sat 7 Nov 18:00–19:00.
 * Not a Dubliners clone. Four Corner is Sunday only (sports screens).
 */
const HIDE_SCRIPT = `(function(){if(Date.now()>=${TONIGHT_MEETUP.hideAfterMs}){var e=document.querySelectorAll('[data-tonight-meetup="2026-11-07"]');for(var i=0;i<e.length;i++){e[i].style.display="none";e[i].setAttribute("hidden","")}}})();`;

export function TonightMeetupCta({ locale = "en" }: { locale?: "en" | "es" }) {
  if (Date.now() >= TONIGHT_MEETUP.hideAfterMs) return null;
  const es = locale === "es";

  return (
    <>
      <aside
        className="mb-8 border border-gold/40 bg-pub-green px-4 py-5 text-center sm:py-6"
        data-tonight-meetup="2026-11-07"
        suppressHydrationWarning
      >
        <p className="font-serif text-xs font-bold tracking-[0.22em] text-gold">
          {es ? "SÁBADO 7 NOV" : "SATURDAY 7 NOV"}
        </p>
        <p className="mt-2 font-serif text-lg font-bold text-cream sm:text-xl">
          {es ? TONIGHT_MEETUP.headlineEs : TONIGHT_MEETUP.headlineEn}
        </p>
        <p className="mx-auto mt-2 max-w-2xl text-sm text-cream-muted">
          {es ? TONIGHT_MEETUP.bodyEs : TONIGHT_MEETUP.bodyEn}
        </p>
        <p className="mt-3">
          <Link
            href={es ? PATHS.saturdayEs : PATHS.saturdayEn}
            className="text-xs font-semibold uppercase tracking-[0.16em] text-gold hover:text-cream"
          >
            {es ? "Sábado en O'Connell's →" : "Saturday at O'Connell's →"}
          </Link>
        </p>
      </aside>
      <script dangerouslySetInnerHTML={{ __html: HIDE_SCRIPT }} />
    </>
  );
}
