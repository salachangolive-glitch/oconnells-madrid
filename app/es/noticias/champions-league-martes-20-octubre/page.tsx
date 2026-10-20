import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Champions League, martes 20 de octubre: PSG–Barcelona y Atlético a las 21:00",
  description:
    "Martes 20 de octubre, 21:00 hora de Madrid: PSG–Barcelona, Stuttgart–Atlético de Madrid y Liverpool–Villarreal en las pantallas de O'Connell St, Calle de Espoz y Mina 7, junto a la Puerta del Sol.",
  path: "/es/noticias/champions-league-martes-20-octubre",
  locale: "es",
});

export default function EsNewsUclMartes20OctPage() {
  return (
    <PageShell locale="es" altLangHref="/news/champions-league-tuesday-20-october">
      <PageHero
        eyebrow="Noticias · martes 20 de octubre de 2026"
        title="Champions League el martes: PSG–Barcelona, Stuttgart–Atlético y Liverpool–Villarreal"
        lead="La jornada 3 de la fase liga de la Champions League arranca el martes 20 de octubre, y tres de los partidos de la noche empiezan a la vez, a las 21:00 hora de Madrid. Los tres se ven en las pantallas de O'Connell St."
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Asientos con barriles y pantallas de deportes en O'Connell St cerca de Sol"
        position="object-[center_20%]"
      />
      <Section title="Los partidos de las 21:00">
        <ul className="list-disc space-y-1 pl-5">
          <li>Paris Saint-Germain–Barcelona · 21:00</li>
          <li>Stuttgart–Atlético de Madrid · 21:00</li>
          <li>Liverpool–Villarreal · 21:00</li>
        </ul>
        <p>
          Horas de Madrid, según el calendario de la fase liga de la UEFA. Antes,
          a las 18:45, empiezan Fenerbahçe–Slavia Praga y Sabah–Borussia
          Dortmund. La lista completa de la semana está en la{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>
          .
        </p>
      </Section>
      <Section title="Punto de encuentro de aficionados antes y después del partido">
        <p>
          Los martes abrimos a las 18:00, así que hay tiempo para quedar con tu
          grupo antes del inicio, y seguimos abiertos hasta las 03:00 para
          comentar el partido después. Seas del Barça, del Atlético, del
          Villarreal o del equipo visitante, O&apos;Connell St es un punto de
          encuentro de aficionados en el centro de Madrid, antes y después del
          partido. Con tres partidos grandes a la vez, conviene venir un poco
          antes.
        </p>
      </Section>
      <Section title="Cómo llegar desde Sol">
        <p>
          O&apos;Connell St está en Calle de Espoz y Mina 7, junto a la Puerta
          del Sol. La estación de Sol (Metro y Cercanías) sale a la plaza: desde
          allí, camina hasta Calle de Espoz y Mina y busca el número 7, con la
          fachada roja y las letras doradas sobre la puerta.
        </p>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Cómo llegar
          </a>
          {" · "}
          <Link href="/es/noticias/champions-league-miercoles-21-octubre" className="text-cream underline">
            Miércoles 21 de octubre: Real Madrid–RB Leipzig y Bayern–Arsenal
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
