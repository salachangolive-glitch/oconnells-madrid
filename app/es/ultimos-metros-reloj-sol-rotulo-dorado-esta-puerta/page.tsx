import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { SOL_CLOCK_WAYFIND_PATHS } from "@/lib/sol-clock-to-gold-lettering";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Del reloj de Sol al rótulo dorado | O'Connell St",
  description:
    "Últimos metros desde el reloj de Puerta del Sol a O'Connell St en Espoz y Mina 7. Este pin de Maps para fútbol confirmado. CÓMO LLEGAR — CID en ficha.",
  path: SOL_CLOCK_WAYFIND_PATHS.es,
  locale: "es",
});

export default function UltimosMetrosRelojSolPage() {
  return (
    <PageShell locale="es" altLangHref={SOL_CLOCK_WAYFIND_PATHS.en}>
      <PageHero
        eyebrow="Esta puerta · Puerta del Sol · cómo llegar"
        title="Últimos metros desde el reloj de Sol al rótulo dorado de esta puerta."
        lead="Ya miraste el saque en la Agenda en hora de Madrid. Lo que falta no es otra app — es la fachada roja y el rótulo dorado en Espoz y Mina 7 desde la plaza que todos siguen llamando Sol. Esta página son esos últimos metros para el fútbol en este pub irlandés, no un paseo turístico por el centro."
      />
      <InteriorPhoto
        src="/images/interior/bar-corner.webp"
        alt="Rincón de barra en el pub irlandés O'Connell St cerca de Puerta del Sol"
        position="object-[center_35%]"
      />
      <Section title="Sal del reloj, busca el rótulo" featured>
        <p>
          {ADDRESS.full}. Desde Puerta del Sol, entra en la calle Espoz y Mina
          — el pasaje que lleva a los aficionados fuera de la plaza. Buscas el
          rótulo dorado de esta ficha en la fachada roja, no un cartel genérico
          de pub irlandés en una galería. Cuando abras Google Maps, usa{" "}
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            CÓMO LLEGAR
          </a>{" "}
          con CID 10697659365903665225 para que el pin sea esta puerta.
        </p>
        <p>
          No inventamos minutos a pie desde el reloj ni desde un estadio. Abre
          Maps, sigue la ruta en vivo y lee la pantalla al llegar. La dirección
          completa sigue en{" "}
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          .
        </p>
      </Section>
      <Section title="Fútbol en la puerta que encontraste">
        <p>
          Los saques confirmados de este pub están en la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>
          . Pregunta qué partido echan cuando chocan dos ligas — los{" "}
          <Link
            href="/es/saques-solapados-pantallas-compartidas-esta-puerta"
            className="text-cream underline"
          >
            saques solapados
          </Link>{" "}
          son una sala, no dos reservados. Contexto Premier y Champions:{" "}
          <Link href="/es/premier-league" className="text-cream underline">
            pub de Premier League en Madrid
          </Link>
          {" · "}
          <Link href="/es/champions-league" className="text-cream underline">
            Champions junto a Sol
          </Link>
          .
        </p>
      </Section>
      <Section title="CÓMO LLEGAR a este pin">
        <p>Esta ficha, no otra puerta con el mismo número en la calle.</p>
        <p>
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            CÓMO LLEGAR
          </a>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">
            Deportes en directo
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
