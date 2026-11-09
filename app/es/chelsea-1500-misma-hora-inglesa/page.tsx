import Link from "next/link";
import { PremierSundayFourBars } from "@/components/PremierSundayFourBars";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PATHS } from "@/lib/fan-weekend";
import { PL_KICKOFFS, PL_PATHS } from "@/lib/premier-sunday-8-nov";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Chelsea 15:00 — la misma hora inglesa que Liverpool, O'Connell's",
  description:
    "Sunderland–Chelsea es a las 15:00 Madrid el domingo 8 nov, la misma hora que Palace–Liverpool. O'Connell's, Espoz y Mina 7. Preguntad qué hay en pantalla. Cuatro bares, Maps, Four Corner 14:00.",
  path: PL_PATHS.chelseaEs,
  locale: "es",
});

export default function EsChelsea1500Page() {
  return (
    <PageShell locale="es" altLangHref={PL_PATHS.chelseaEn}>
      <PageHero
        eyebrow="Domingo 8 de noviembre · una hora, cuatro partidos ingleses"
        title="Chelsea no es un segundo reloj. Chelsea es la misma 15:00."
        lead="Sunderland–Chelsea pita a las 15:00 hora de Madrid — la misma hora que Crystal Palace–Liverpool. Esta sala irlandesa en Espoz y Mina no recibe una segunda tarde inglesa. Pub independiente. Preguntad qué hay en el cristal."
      />

      <Section title="Cuatro nombres, una hora de Madrid" featured>
        <p>
          {ADDRESS.full}. Las {PL_KICKOFFS.sunderlandChelsea.madrid} son
          Sunderland–Chelsea. También son Palace–Liverpool,
          Brighton–Brentford e Ipswich–Bournemouth. La Premier movió tres de
          esos partidos del domingo fuera del 15:00 británico de siempre; en
          Madrid siguen cayendo juntos a las 15:00. Eso es un problema de
          gente, no un listado.
        </p>
        <p>
          No vamos a escribir “Chelsea en directo aquí” como si los otros tres
          partidos se hubieran evaporado. Si al grupo le importan las camisetas
          azules, decídlo en barra. Si el televisor ya va con Liverpool, esa
          es la respuesta honesta — no una web inventando una parrilla.
        </p>
      </Section>

      <Section title="Esta puerta ya estaba abierta">
        <p>
          El domingo habitual aquí es a las 14:00. Aquel domingo 8 de noviembre
          abrimos a las 12:00. A las 15:00 de Chelsea el rótulo dorado ya
          lleva tres horas encendido, y Four Corner en Victoria 6 lleva una
          hora abierto, con pantallas de deporte. La hora inglesa no abre este
          pub. Ya lo hizo la excepción de la NFL.
        </p>
        <p>
          <Link href={PL_PATHS.liverpoolEs} className="text-gold underline">
            Liverpool en el cerrojo habitual
          </Link>
          {" · "}
          <Link href={PL_PATHS.unitedEs} className="text-gold underline">
            United a las 17:30, después del par
          </Link>
          {" · "}
          <Link href={PATHS.hubEs} className="text-gold underline">
            Direcciones y Maps
          </Link>
        </p>
      </Section>

      <Section title="Four Corner 14:00 — pantallas, sin listado inventado de Chelsea">
        <p>
          Four Corner, Calle de la Victoria 6, 28012 Madrid, abre el domingo
          desde las 14:00 hasta la madrugada, con pantallas de deporte. No
          listamos Chelsea ahí. No listamos Liverpool ahí. Lo confirmado es
          la hora y las pantallas. Preguntad qué partido echan.
        </p>
      </Section>

      <PremierSundayFourBars locale="es" />
    </PageShell>
  );
}
