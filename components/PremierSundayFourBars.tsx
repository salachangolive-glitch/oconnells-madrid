import { Section } from "@/components/Prose";
import { BAR_MAPS, HUB } from "@/lib/premier-sunday-8-nov";

/**
 * Unique four-bar block for Premier League Sunday 8 Nov pages only.
 * Does not replace FourBarsNearSol / FourSisterBars / nfl-madrid copy.
 */
const BARS = [
  {
    name: "O'Reilly's Restaurant Bar",
    address: "Pasaje de Matheu 4, 28012 Madrid",
    maps: BAR_MAPS.oreillys,
    hoursEn: "Sunday 11:30–01:30 (usual hours, not a 12:00 special)",
    hoursEs: "Domingo 11:30–01:30 (horario de siempre, no es una apertura a las 12:00)",
  },
  {
    name: "Dubliners",
    address: "Calle de Espoz y Mina 7, 28012 Madrid",
    maps: BAR_MAPS.dubliners,
    hoursEn: "Sunday 12:00–02:00",
    hoursEs: "Domingo 12:00–02:00",
  },
  {
    name: "O'Connell's",
    address: "Calle de Espoz y Mina 7, 28012 Madrid (Maps: O'Connell St)",
    maps: BAR_MAPS.oconnells,
    hoursEn: "Sunday 8 Nov from 12:00 (usual Sunday is 14:00)",
    hoursEs: "Domingo 8 nov desde las 12:00 (el domingo habitual es 14:00)",
  },
  {
    name: "Four Corner",
    address: "Calle de la Victoria 6, 28012 Madrid",
    maps: BAR_MAPS.fourCorner,
    hoursEn: "Sunday from 14:00 until late · sports screens. Opening confirmed; broadcasts not listed.",
    hoursEs: "Domingo desde las 14:00 hasta la madrugada · pantallas de deporte. Apertura confirmada; no listamos emisiones.",
  },
] as const;

export function PremierSundayFourBars({ locale }: { locale: "en" | "es" }) {
  const es = locale === "es";
  return (
    <Section title={es ? "Los cuatro bares — direcciones y Maps" : "The four bars — addresses and Maps"}>
      <p>
        {es
          ? "Cuatro salas hermanas junto a Sol. Preguntad qué hay en pantalla. No todos los partidos van en todas las pantallas. Pub irlandés independiente."
          : "Four sister rooms near Sol. Ask which game is on. Not every match on every screen. Independent Irish pub."}
      </p>
      <ul className="mt-3 space-y-3">
        {BARS.map((b) => (
          <li key={b.name} className="border-l border-gold/40 pl-3">
            <p className="font-semibold text-cream">{b.name}</p>
            <p className="text-sm text-cream-muted">{b.address}</p>
            <p className="text-sm text-cream-muted">{es ? b.hoursEs : b.hoursEn}</p>
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
