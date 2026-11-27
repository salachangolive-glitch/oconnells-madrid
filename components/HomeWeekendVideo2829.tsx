import Link from "next/link";
import { DirectionsButton } from "@/components/HowToGetHere";
import { agendaBuildNow } from "@/lib/fixtures";

/** Weekend video 28–29 Nov 2026 — gone from Mon 30 Nov 00:00 Madrid (build + client hide). */
const HIDE_FROM_MS = Date.parse("2026-11-30T00:00:00+01:00");
const HIDE_SCRIPT = `(function(){if(Date.now()>=${HIDE_FROM_MS}){var e=document.querySelectorAll("[data-home-weekend-video='2026-11-29']");for(var i=0;i<e.length;i++){var v=e[i].querySelector("video");if(v){v.pause();}e[i].style.display="none";e[i].setAttribute("hidden","")}}})();`;
const TOGGLE_SCRIPT = `(function(){var b=document.querySelector("[data-weekend-video-toggle]");var v=document.querySelector("[data-home-weekend-video='2026-11-29'] video");if(!b||!v)return;b.addEventListener("click",function(){if(v.paused){v.play();b.textContent=b.getAttribute("data-label-pause")}else{v.pause();b.textContent=b.getAttribute("data-label-play")}})})();`;
const VIDEO_SRC = "/videos/finde-28-29-nov/finde-28-29-nov-v2.mp4";
const POSTER = "/videos/finde-28-29-nov/finde-28-29-nov-poster-640.webp";

const COPY = {
  en: {
    copy:
      "This weekend, live on our screens (Madrid time): Nations Championship rugby Sat 28 at 14:10 and 17:40 and Sun 29 at 14:10 and 17:40 (France v South Africa final); Copa Libertadores final Palmeiras v Estudiantes Sat 28 at 21:00; UCLA v USC Sat 28 at 21:30.",
    whatsOn: "What's On this week",
    whatsOnHref: "/whats-on",
    aria: "Sports weekend 28–29 November at O'Connell St",
    videoAria: "Video: sports weekend 28–29 November 2026 at O'Connell St",
    pause: "Pause video",
    play: "Play video",
  },
  es: {
    copy:
      "Este fin de semana, en directo en nuestras pantallas (hora de Madrid): rugby Nations Championship sáb 28 a las 14:10 y 17:40 y dom 29 a las 14:10 y 17:40 (final Francia–Sudáfrica); final de la Copa Libertadores Palmeiras–Estudiantes sáb 28 a las 21:00; UCLA–USC sáb 28 a las 21:30.",
    whatsOn: "Agenda de la semana",
    whatsOnHref: "/es/whats-on",
    aria: "Fin de semana de deporte 28–29 de noviembre en O'Connell St",
    videoAria: "Vídeo: fin de semana de deporte 28 y 29 de noviembre de 2026 en O'Connell St",
    pause: "Pausar vídeo",
    play: "Reproducir vídeo",
  },
} as const;

export function HomeWeekendVideo2829({ locale }: { locale: "en" | "es" }) {
  if (agendaBuildNow().getTime() >= HIDE_FROM_MS) return null;
  const c = COPY[locale];
  return (
    <>
      <section
        className="w-full border-b border-gold/30 bg-pub-burgundy-deep"
        id={locale === "es" ? "fin-de-semana-28-29" : "weekend-28-29"}
        data-home-weekend-video="2026-11-29"
        aria-label={c.aria}
        suppressHydrationWarning
      >
        <video
          className="mx-auto block aspect-[4/3] h-auto! max-h-none! w-full! max-w-3xl object-contain! object-center bg-black"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={POSTER}
          width={960}
          height={720}
          aria-label={c.videoAria}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="mx-auto w-full max-w-5xl px-4 py-3 sm:py-4">
          <div className="flex flex-wrap gap-2">
            <DirectionsButton locale={locale} />
            <Link
              href={c.whatsOnHref}
              className="inline-flex items-center justify-center rounded-md border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold hover:bg-gold/10"
            >
              {c.whatsOn}
            </Link>
          </div>
          <p className="mt-3 text-sm leading-snug text-cream sm:text-base">{c.copy}</p>
          <button
            type="button"
            className="mt-2 py-1 text-xs text-cream-muted underline hover:text-gold"
            data-weekend-video-toggle
            data-label-pause={c.pause}
            data-label-play={c.play}
          >
            {c.pause}
          </button>
        </div>
      </section>
      <script dangerouslySetInnerHTML={{ __html: HIDE_SCRIPT + TOGGLE_SCRIPT }} />
    </>
  );
}
