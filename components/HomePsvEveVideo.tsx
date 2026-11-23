import Link from "next/link";
import { DirectionsButton } from "@/components/HowToGetHere";
import { HomePsvEveVideoPlayer } from "@/components/HomePsvEveVideoPlayer";
import { psvHomeVideoActive, PSV_HOME_VIDEO_UNTIL_MS } from "@/lib/psv-home-video";

const COPY = {
  en: {
    copy:
      "PSV fans meeting point at O'Connell St. Real Madrid v PSV, Tuesday 24 at 21:00, live on our screens, less than a minute from Sol. First come, first served.",
    guideHref: "/news/real-madrid-psv-tuesday-night-sol",
    guideLabel: "Real Madrid v PSV guide",
    aria:
      "Real Madrid v PSV: PSV fans meeting point at O'Connell St near Puerta del Sol",
    videoAria: "Video: PSV fans at O'Connell St, 23 November 2026",
    unmuteOn: "Turn sound on",
    unmuteOff: "Turn sound off",
  },
  es: {
    copy:
      "Punto de encuentro para aficionados del PSV en O'Connell St. Real Madrid–PSV, martes 24 a las 21:00, en directo en nuestras pantallas, a menos de un minuto de Sol. Por orden de llegada.",
    guideHref: "/es/noticias/real-madrid-psv-martes-sol",
    guideLabel: "Guía Real Madrid–PSV",
    aria:
      "Real Madrid–PSV: punto de encuentro del PSV en O'Connell St junto a Sol",
    videoAria: "Vídeo: aficionados del PSV en O'Connell St, 23 de noviembre de 2026",
    unmuteOn: "Activar sonido",
    unmuteOff: "Quitar sonido",
  },
} as const;

const HIDE_SCRIPT = `(function(){if(Date.now()>=${PSV_HOME_VIDEO_UNTIL_MS}){var e=document.querySelectorAll("[data-psv-home-eve]");for(var i=0;i<e.length;i++){e[i].style.display="none";e[i].setAttribute("hidden","")}}})();`;

export function HomePsvEveVideo({ locale }: { locale: "en" | "es" }) {
  if (!psvHomeVideoActive()) return null;
  if (Date.now() >= PSV_HOME_VIDEO_UNTIL_MS) return null;
  const c = COPY[locale];
  return (
    <>
      <section
        className="w-full border-b border-gold/30 bg-pub-burgundy-deep"
        id={locale === "es" ? "psv-en-directo" : "psv-live-now"}
        data-psv-home-eve
        data-show-until-ms={String(PSV_HOME_VIDEO_UNTIL_MS)}
        aria-label={c.aria}
        suppressHydrationWarning
      >
        <div className="w-full max-h-[min(70vh,720px)] aspect-[9/14] overflow-hidden leading-none lg:aspect-video lg:max-h-[min(65vh,680px)]">
          <HomePsvEveVideoPlayer
            videoAria={c.videoAria}
            unmuteOnLabel={c.unmuteOn}
            unmuteOffLabel={c.unmuteOff}
          />
        </div>
        <div className="mx-auto w-full max-w-5xl px-4 py-3 sm:py-4">
          <p className="text-sm leading-snug text-cream sm:text-base">{c.copy}</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
            <DirectionsButton locale={locale} />
            <Link
              href={c.guideHref}
              className="inline-flex items-center justify-center rounded-md border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold hover:bg-gold/10"
            >
              {c.guideLabel}
            </Link>
          </div>
        </div>
      </section>
      <script dangerouslySetInnerHTML={{ __html: HIDE_SCRIPT }} />
    </>
  );
}