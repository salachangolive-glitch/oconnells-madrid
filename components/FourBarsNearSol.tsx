import { MAPS_URL } from "@/lib/venue";
import { Section } from "@/components/Prose";

/**
 * Owner order (6 Nov 15:48): all four sibling bars as the main idea.
 * Four Corner: meeting point; Sunday from 14:00 until late (madrugada). NFL on screens (owner 7 Nov).
 * Do not reuse this to rewrite /nfl-madrid (that page already lists Four Corner).
 */
const BARS = [
  {
    name: "O'Reilly's Restaurant Bar",
    address: "Pasaje de Matheu, 4, 28012 Madrid",
    maps: "https://www.google.com/maps/search/?api=1&query=O%27Reilly%27s+Restaurant+Bar+Pasaje+de+Matheu+4+28012+Madrid",
  },
  {
    name: "Dubliners",
    address: "Calle de Espoz y Mina, 7, 28012 Madrid",
    maps: "https://www.google.com/maps/search/?api=1&query=Dubliners+Calle+de+Espoz+y+Mina+7+28012+Madrid",
  },
  {
    name: "O'Connell's",
    address: "Calle de Espoz y Mina, 7, 28012 Madrid",
    maps: MAPS_URL,
  },
  {
    name: "Four Corner",
    address: "Calle de la Victoria, 6, 28012 Madrid",
    maps: "https://www.google.com/maps/search/?api=1&query=Calle+de+la+Victoria+6+28012+Madrid",
    meetingOnly: true,
  },
] as const;

export function FourBarsNearSol({ locale }: { locale: "en" | "es" }) {
  const es = locale === "es";
  return (
    <Section title={es ? "Cuatro bares cerca de Sol" : "Four bars near Sol"}>
      <p>
        {es
          ? "Cuatro bares hermanos alrededor de la Puerta del Sol: el mismo finde, cuatro salas. Elige una, salta de una a otra, o empieza por la guía común."
          : "Four sibling bars around Puerta del Sol: one fan weekend, four rooms. Pick one, hop between them, or start from the shared guide."}{" "}
        <a
          href={es ? "https://dublinersmadrid.es/es/cuatro-bares-fin-de-semana/" : "https://dublinersmadrid.es/4-bars-one-fan-weekend/"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline"
        >
          {es ? "Cuatro bares, un fin de semana" : "4 bars, one fan weekend"}
        </a>
        .
      </p>
      <ul className="mt-3 space-y-3">
        {BARS.map((b) => (
          <li key={b.name} className="border-l border-gold/40 pl-3">
            <p className="font-semibold text-cream">{b.name}</p>
            <p className="text-sm text-cream-muted">{b.address}</p>
            {"meetingOnly" in b && b.meetingOnly ? (
              <p className="text-sm text-cream-muted">
                {es
                  ? "Punto de encuentro hermano junto a Sol. Four Corner, desde las 14:00 hasta la madrugada. NFL en pantallas — pregunta qué partido echan."
                  : "Sibling meeting point near Sol. Sunday from 14:00 until late, NFL on the screens — ask which game is on."}
              </p>
            ) : null}
            <p className="text-sm">
              <a href={b.maps} target="_blank" rel="noopener noreferrer" className="text-cream underline">
                Google Maps
              </a>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
