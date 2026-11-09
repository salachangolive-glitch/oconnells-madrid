import { Section } from "@/components/Prose";
import { BAR_MAPS, HUB } from "@/lib/after-game-sunday-8-nov";

/**
 * Unique four-bar block for after-Bernabéu / evening-NFL pages.
 * This door first, then the three sister doors. Does not replace FourBarsNearSol.
 */
const BARS = [
  {
    name: "O'Connell's",
    address: "Calle de Espoz y Mina 7, 28012 Madrid (Maps: O'Connell St)",
    maps: BAR_MAPS.oconnells,
    noteEn: "This door — red facade, gold lettering. Sunday 8 Nov from 12:00 (usual Sunday is 14:00).",
    noteEs: "Esta puerta — fachada roja, rótulo dorado. Domingo 8 nov desde las 12:00 (el domingo habitual es 14:00).",
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
    noteEn: "Covered arcade off this street. Usual Sunday 11:30–01:30.",
    noteEs: "Pasaje cubierto al lado de esta calle. Domingo habitual 11:30–01:30.",
  },
  {
    name: "Four Corner",
    address: "Calle de la Victoria 6, 28012 Madrid",
    maps: BAR_MAPS.fourCorner,
    noteEn: "Sunday from 14:00 until late · sports screens. Opening confirmed; broadcasts not listed.",
    noteEs: "Domingo desde las 14:00 hasta la madrugada · pantallas de deporte. Apertura confirmada; no listamos emisiones.",
  },
] as const;

export function AfterGameSundayFourBars({ locale }: { locale: "en" | "es" }) {
  const es = locale === "es";
  return (
    <Section title={es ? "Los cuatro bares — direcciones y Maps" : "The four bars — addresses and Maps"}>
      <p>
        {es
          ? "Esta puerta primero. Luego las tres hermanas. Preguntad qué hay en pantalla. Pub irlandés independiente."
          : "This door first. Then the three sister doors. Ask which game is on. Independent Irish pub."}
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
                className="text-cream underline"
              >
                {es ? "CÓMO LLEGAR" : "GET DIRECTIONS"}
              </a>
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm">
        <a
          href={es ? HUB.es : HUB.en}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline"
        >
          {es ? HUB.ctaEs : HUB.ctaEn}
        </a>
        {" · "}
        <a
          href={BAR_MAPS.oconnells}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline"
        >
          {es ? "FIND US — O'Connell's" : "FIND US"}
        </a>
      </p>
    </Section>
  );
}
