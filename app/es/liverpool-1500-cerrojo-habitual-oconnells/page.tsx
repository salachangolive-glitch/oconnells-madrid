import Link from "next/link";
import { PremierSundayFourBars } from "@/components/PremierSundayFourBars";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PATHS } from "@/lib/fan-weekend";
import { PL_KICKOFFS, PL_PATHS } from "@/lib/premier-sunday-8-nov";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Liverpool 15:00 en el cerrojo habitual — O'Connell's",
  description:
    "Crystal Palace–Liverpool es a las 15:00 Madrid el domingo 8 nov — la hora en que O'Connell's suele abrir. Este domingo abrimos a las 12:00. Preguntad qué hay en pantalla. Cuatro bares, Maps, Four Corner 14:00.",
  path: PL_PATHS.liverpoolEs,
  locale: "es",
});

export default function EsLiverpool1500Page() {
  return (
    <PageShell locale="es" altLangHref={PL_PATHS.liverpoolEn}>
      <PageHero
        eyebrow="Domingo 8 de noviembre · rótulo dorado, Espoz y Mina 7"
        title="Liverpool es a las 15:00. Ese es el cerrojo habitual de esta puerta."
        lead="Crystal Palace–Liverpool pita a las 15:00 hora de Madrid. El resto de domingos, esa es la hora en que O'Connell's gira la llave. Este domingo la fachada roja ya está abierta desde las 12:00. Pub irlandés independiente. No prometemos Liverpool en una pantalla con nombre — preguntad qué partido hay."
      />

      <Section title="La pizarra sigue diciendo 14:00" featured>
        <p>
          {ADDRESS.full}. El domingo habitual es a las 14:00. El reloj inglés
          de esta semana pone Palace–Liverpool a las{" "}
          {PL_KICKOFFS.palaceLiverpool.madrid} — una hora después de esa
          pizarra, y la misma hora que un viajero sigue tratando como “cuando
          despierta la puerta irlandesa”. El domingo 8 de noviembre la
          excepción es más temprano: abrimos a las 12:00 para que la sala
          exista antes del partido NFL de Madrid, no porque hayamos colgado
          una parrilla de Premier League.
        </p>
        <p>
          Si venís al rótulo dorado por Liverpool, entráis a una sala que ya
          lleva tres horas tirando de barril, no a una fachada cerrada a las
          14:59. Esa es la historia de este pub. No es una ficha de emisión.
        </p>
      </Section>

      <Section title="El resto de la hora inglesa de las 15:00">
        <p>
          Liverpool no está solo a las 15:00. Sunderland–Chelsea,
          Brighton–Brentford e Ipswich–Bournemouth comparten esa hora de
          Madrid. Cuatro partidos, un reloj. Esta sala no puede inventar
          cuatro señales. La página de Chelsea a la misma hora y la de United
          a las 17:30 están en este sitio para orientar — no para prometer
          que cada televisor pone el nombre que queréis.
        </p>
        <p>
          <Link href={PL_PATHS.chelseaEs} className="text-gold underline">
            Chelsea a las mismas 15:00
          </Link>
          {" · "}
          <Link href={PL_PATHS.unitedEs} className="text-gold underline">
            United a las 17:30
          </Link>
          {" · "}
          <Link href={PATHS.sundayEs} className="text-gold underline">
            Ventanas NFL del domingo en esta puerta
          </Link>
        </p>
      </Section>

      <Section title="Four Corner es a las 14:00, con pantallas de deporte">
        <p>
          No esperéis en la Calle de la Victoria a mediodía. Four Corner,
          Victoria 6, abre el domingo desde las 14:00 hasta la madrugada, con
          pantallas de deporte. Esa hora está confirmada. Lo que ponen esas
          pantallas, no. Una hora después arranca el racimo inglés de las
          15:00. Preguntad en cada sala.
        </p>
        <p>
          <Link href={PATHS.usualSundayEs} className="text-gold underline">
            El domingo habitual es a las 14:00
          </Link>
          {" · "}
          <Link href={PATHS.hubEs} className="text-gold underline">
            Los cuatro bares
          </Link>
        </p>
      </Section>

      <PremierSundayFourBars locale="es" />
    </PageShell>
  );
}
