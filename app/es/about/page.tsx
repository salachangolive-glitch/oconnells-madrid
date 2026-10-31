import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { aboutPageJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sobre O'Connell St Madrid — pub irlandés de fútbol europeo en Sol",
  description:
    "Sobre O'Connell St: pub irlandés en Calle de Espoz y Mina 7, junto a Puerta del Sol. Premier League, Champions League y LaLiga en pantalla grande y 9 pantallas.",
  path: "/es/about",
  locale: "es",
});

export default function EsAboutPage() {
  return (
    <PageShell locale="es" altLangHref="/about">
      <JsonLd data={aboutPageJsonLd("es")} />
      <PageHero
        eyebrow="Sobre nosotros"
        title={`Sobre ${SITE_NAME} Madrid`}
        lead="Un pub irlandés a un paso de Puerta del Sol, donde el fútbol europeo es lo principal en las pantallas."
      />
      <InteriorPhoto
        src="/images/interior/about-salon.webp"
        alt="Mesas y televisiones en el salón de O'Connell St cerca de Sol"
        position="object-center"
      />
      <Section title="Quiénes somos">
        <p>
          {SITE_NAME} es un pub irlandés y bar deportivo en {ADDRESS.full}, en
          el centro de Madrid, a un paso de Puerta del Sol. Lo reconocerás por
          la fachada roja con las letras doradas O&apos;CONNELL ST. sobre la
          puerta.
        </p>
        <p>
          Dentro hay una barra larga de madera con grifos de cerveza, asientos
          de barril, mesas bajo las televisiones y escaleras entre plantas. El
          ambiente mezcla gente de Madrid, estudiantes y visitantes de
          muchos países.
        </p>
      </Section>
      <Section title="Fútbol europeo en Sol">
        <p>
          El fútbol es el centro del local. Ponemos la Premier League, la UEFA
          Champions League y LaLiga, con el partido en la pantalla grande y 9
          pantallas. En las grandes noches europeas es un pub en Sol para quedar
          antes del partido y verlo en directo.
        </p>
        <p>
          También hay otros deportes cuando se emiten: fútbol americano, NBA, rugby,
          Fórmula 1 y tenis. Cada partido confirmado aparece en la{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>{" "}
          de los próximos 7 días, siempre en hora de Madrid. Si un partido aún
          no sale, pregunta en la barra.
        </p>
        <p>
          Una semana normal: la Premier League se juega sobre todo sábados y
          domingos, desde primera hora de la tarde en horario de Madrid. Las
          noches de Champions League son martes y miércoles, con partidos por
          la noche. LaLiga reparte sus partidos durante el fin de semana, desde
          la hora de comer hasta última hora. Cuando coinciden varios partidos,
          la Agenda indica cuáles están confirmados en el pub, y se actualiza
          cada mañana para seguir el calendario confirmado más reciente.
        </p>
        <p>
          Más sobre el fútbol:{" "}
          <Link href="/es/premier-league" className="text-cream underline">
            Premier League
          </Link>
          {" · "}
          <Link href="/es/champions-league" className="text-cream underline">
            Champions League
          </Link>
          {" · "}
          <Link href="/es/watch-football-madrid" className="text-cream underline">
            Ver fútbol en Madrid
          </Link>
        </p>
      </Section>
      <Section title="Horario">
        <ul className="list-none space-y-1">
          {HOURS.linesEs.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>
          Abrimos por la tarde y cerramos tarde todos los días de la semana,
          así que los partidos de noche y los que acaban tarde encajan sin
          problema.
        </p>
      </Section>
      <Section title="Comida">
        <p>
          La{" "}
          <Link href="/es/menu" className="text-cream underline">
            carta
          </Link>{" "}
          tiene raciones para compartir, arroces, hamburguesas, pizza y
          desayuno irlandés, para comer mientras ves el partido.
        </p>
      </Section>
      <Section title="Cómo llegar">
        <p>
          Ve en Metro o Cercanías hasta Sol, camina desde la plaza hasta la
          calle de Espoz y Mina y busca el número 7.{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Google Maps
          </a>{" "}
          abre nuestra ficha directamente. Si tienes preguntas sobre una noche
          de partido o un grupo, escríbenos con el{" "}
          <Link href="/es/contact" className="text-cream underline">
            formulario de contacto
          </Link>
          .
        </p>
        <p>
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">
            Deportes en directo
          </Link>
          {" · "}
          <Link href="/es/erasmus" className="text-cream underline">
            Ambiente internacional
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
