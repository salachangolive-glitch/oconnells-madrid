import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Champions League, miércoles 21 de octubre: Real Madrid–RB Leipzig y Bayern–Arsenal",
  description:
    "Miércoles 21 de octubre, 21:00 hora de Madrid: Real Madrid–RB Leipzig y Bayern–Arsenal en O'Connell St, Calle de Espoz y Mina 7, junto a la Puerta del Sol. Bienvenida a la afición del Leipzig.",
  path: "/es/noticias/champions-league-miercoles-21-octubre",
  locale: "es",
});

export default function EsNewsUclMiercoles21OctPage() {
  return (
    <PageShell locale="es" altLangHref="/news/champions-league-wednesday-21-october">
      <PageHero
        eyebrow="Noticias · miércoles 21 de octubre de 2026"
        title="Champions League el miércoles: Real Madrid–RB Leipzig y Bayern–Arsenal"
        lead="La segunda noche de la jornada 3 de la Champions League trae al RB Leipzig a Madrid. Real Madrid–RB Leipzig y Bayern–Arsenal empiezan a las 21:00 hora de Madrid, y los dos se ven en las pantallas de O'Connell St."
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Asientos con barriles y pantallas de deportes en O'Connell St cerca de Sol"
        position="object-[center_20%]"
      />
      <Section title="Los partidos de las 21:00">
        <ul className="list-disc space-y-1 pl-5">
          <li>Real Madrid–RB Leipzig · 21:00</li>
          <li>Bayern de Múnich–Arsenal · 21:00</li>
        </ul>
        <p>
          Horas de Madrid, según el calendario de la fase liga de la UEFA. Antes,
          a las 18:45, abren la noche Como–Manchester United y Lille–Galatasaray.
          Todos los partidos de la semana están en la{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>
          .
        </p>
      </Section>
      <Section title="Aficionados del Leipzig en Madrid">
        <p>
          ¡Bienvenidos a Madrid! Si habéis venido para el partido del Bernabéu,
          O&apos;Connell St, junto a la Puerta del Sol, es vuestro punto de
          encuentro de aficionados antes y después del partido, en pleno centro
          de la ciudad.
        </p>
        <p lang="de">
          Willkommen in Madrid, Leipzig-Fans! O&apos;Connell St, direkt an der
          Puerta del Sol, ist euer Treffpunkt vor und nach dem Spiel.
        </p>
      </Section>
      <Section title="Punto de encuentro de aficionados antes y después del partido">
        <p>
          Los miércoles abrimos a las 18:00 y seguimos abiertos hasta las 03:00:
          puedes quedar antes del inicio y volver después para comentar el
          partido. Madridistas, aficionados del Arsenal lejos de casa y
          cualquiera que siga el fútbol de la noche: O&apos;Connell St es punto
          de encuentro de aficionados para todos. En una noche con mucha gente,
          conviene venir un poco antes.
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
          <Link href="/es/noticias/champions-league-martes-20-octubre" className="text-cream underline">
            Martes 20 de octubre: PSG–Barcelona, Stuttgart–Atlético y Liverpool–Villarreal
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
