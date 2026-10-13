"use client";
import { useEffect, useState } from "react";
import { MAPS_URL } from "@/lib/venue";

/** One-off post-match block, Atlético–Man Utd 13 Oct 2026. Hidden from 14 Oct 06:00 Madrid (04:00Z). */
const CUTOFF = Date.parse("2026-10-14T04:00:00Z");
const BUILT_BEFORE_CUTOFF = Date.now() < CUTOFF;

export function PostMatchBanner({ locale }: { locale: "en" | "es" }) {
  const [show, setShow] = useState(BUILT_BEFORE_CUTOFF);
  useEffect(() => {
    if (Date.now() >= CUTOFF) setShow(false);
  }, []);
  if (!show) return null;
  const es = locale === "es";
  return (
    <aside className="mx-auto mb-8 max-w-2xl rounded-lg border border-gold/40 bg-black/60 p-5 text-center" data-postmatch="2026-10-13">
      <h2 className="font-serif text-xl font-bold tracking-wide text-gold sm:text-2xl">
        {es ? "¿DESPUÉS DEL PARTIDO?" : "POST-MATCH IN MADRID?"}
      </h2>
      {es ? (
        <p className="mt-2 text-cream/90">
          ¿Vuelves al centro después del Atlético–Manchester United? Sigue la noche
          de fútbol en nuestro pub deportivo junto a la Puerta del Sol. Sin reserva.
        </p>
      ) : (
        <>
          <p className="mt-2 text-cream/90">
            Back in the city centre after Atlético vs Manchester United? Continue
            your match night near Puerta del Sol.
          </p>
          <p className="mt-1 text-sm text-cream/75">
            A sports pub at Sol in central Madrid: drinks, football atmosphere and
            walk-ins only.
          </p>
        </>
      )}
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-event="directions"
        className="mt-4 inline-block rounded bg-gold px-5 py-2 font-semibold text-black"
      >
        {es ? "CÓMO LLEGAR" : "HOW TO GET HERE"}
      </a>
    </aside>
  );
}
