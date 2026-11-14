import { Section } from "@/components/Prose";
import { BAR_MAPS, HUB } from "@/lib/after-game-sunday-8-nov";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/venue";

/**
 * Localo SEO pass: CID Maps + GET DIRECTIONS on existing commercial pages.
 * Four Corner Maps stay search-only (no CID on this site). Does not change hours.
 * Does not replace FourBarsNearSol / AfterGameSundayFourBars.
 */
const BARS = [
  {
    name: "O'Connell's",
    address: "Calle de Espoz y Mina 7, 28012 Madrid (Maps: O'Connell St)",
    maps: BAR_MAPS.oconnells,
    noteEn:
      "This Irish pub and sports bar, a short walk from Puerta del Sol. Red facade, gold lettering.",
    noteEs:
      "Este pub irlandés y bar deportivo, a un paso de Puerta del Sol. Fachada roja, rótulo dorado.",
  },
  {
    name: "Dubliners",
    address: "Calle de Espoz y Mina 7, 28012 Madrid",
    maps: BAR_MAPS.dubliners,
    noteEn: "Same number, different door, same street.",
    noteEs: "El mismo número, otra puerta, la misma calle.",
  },
  {
    name: "O'Reilly's Restaurant Bar",
    address: "Pasaje de Matheu 4, 28012 Madrid",
    maps: BAR_MAPS.oreillys,
    noteEn: "Covered arcade off this street.",
    noteEs: "Pasaje cubierto al lado de esta calle.",
  },
  {
    name: "Four Corner",
    address: "Calle de la Victoria 6, 28012 Madrid",
    maps: BAR_MAPS.fourCorner,
    noteEn:
      "Open from 14:00 until late · sports screens. Ask which game is on.",
    noteEs:
      "Abierto desde las 14:00 hasta la madrugada · pantallas de deporte. Pregunta qué partido echan.",
  },
] as const;

export function LocaloFindUs({ locale }: { locale: "en" | "es" }) {
  const es = locale === "es";
  return (
    <Section title={es ? "Cómo llegar · Maps" : "Find us · Maps"}>
      <p>
        {es
          ? "Pub irlandés y bar deportivo en Sol, Madrid, en Espoz y Mina 7, a un paso de Puerta del Sol. CÓMO LLEGAR abre el pin CID de cada ficha. Four Corner está abierto desde las 14:00, con pantallas de deporte."
          : "Irish pub and sports bar in Sol, Madrid, at Espoz y Mina 7, a short walk from Puerta del Sol. GET DIRECTIONS is the CID pin for each listing. Four Corner is open from 14:00, with sports screens."}
      </p>
      <ul className="mt-3 space-y-3">
        {BARS.map((b) => (
          <li key={b.name} className="border-l border-gold/40 pl-3">
            <p className="font-semibold text-cream">{b.name}</p>
            <p className="text-sm text-cream-muted">{b.address}</p>
            <p className="text-sm text-cream-muted">{es ? b.noteEs : b.noteEn}</p>
            <p className="text-sm">
              <a
                href={b.maps}
                target="_blank"
                rel="noopener noreferrer"
                data-event="directions"
                className="text-cream underline"
              >
                {es ? "CÓMO LLEGAR" : "GET DIRECTIONS"}
              </a>
              {b.name === "O'Connell's" ? (
                <>
                  {" · "}
                  <a href={PHONE_TEL} data-event="phone_click" className="text-cream underline">
                    {PHONE_DISPLAY}
                  </a>
                </>
              ) : null}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <a
          href={BAR_MAPS.oconnells}
          target="_blank"
          rel="noopener noreferrer"
          data-event="directions"
          className="text-gold underline"
        >
          {es ? "FIND US — O'Connell's" : "FIND US"}
        </a>
        {" · "}
        <a
          href={es ? HUB.es : HUB.en}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline"
        >
          {es ? HUB.ctaEs : HUB.ctaEn}
        </a>
      </p>
    </Section>
  );
}
