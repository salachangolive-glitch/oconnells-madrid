import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { LocaloFindUs } from "@/components/LocaloFindUs";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  HOURS,
  PUBLIC_EMAIL,
  PUBLIC_EMAIL_MAILTO,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Pub irlandés cerca de Sol — cómo llegar",
  description:
    "Pub irlandés y bar deportivo en Calle de Espoz y Mina 7, 28012 Madrid, junto a Puerta del Sol. CÓMO LLEGAR en el pin de O'Connell St.",
  path: "/es/location",
  locale: "es",
});

export default function EsLocationPage() {
  return (
    <PageShell locale="es" altLangHref="/location">
      <PageHero
        eyebrow="Pub irlandés · bar deportivo · Puerta del Sol"
        title={`Cómo llegar a este pub irlandés junto a Sol — ${SITE_NAME}`}
        lead={`${ADDRESS.full} — pub irlandés y bar deportivo, a un paso de Puerta del Sol. Punto de encuentro para la NFL del domingo y Atlético–Barcelona 21:00.`}
      />
      <VenueHero
        variant="secondary"
        alt="O'Connell St en Calle de Espoz y Mina, cerca de Sol"
        className="mb-10"
      />
      <Section title="Dirección y horarios">
        <p>{ADDRESS.full}</p>
        <p>
          <a
            href={PUBLIC_EMAIL_MAILTO}
            data-event="email_click"
            className="text-cream underline"
          >
            {PUBLIC_EMAIL}
          </a>
          {" · "}
          <a href="/es/contact" className="text-cream underline">
            Contacto
          </a>
        </p>
        <ul className="list-none space-y-1">
          {HOURS.linesEs.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="inline-flex rounded-md bg-pub-green px-4 py-2 font-semibold text-cream hover:bg-pub-green-light"
          >
            CÓMO LLEGAR
          </a>
        </p>
      </Section>
      <InteriorPhoto
        src="/images/interior/stairs-levels.webp"
        alt="Escaleras entre plantas del pub irlandés O'Connell St cerca de Sol"
        position="object-[center_40%]"
      />
      <Section title="Cómo llegar desde la Puerta del Sol">
        <p>
          La estación más cercana es Sol (Metro y Cercanías), que sale
          directamente a la Puerta del Sol. Desde la plaza, busca la Calle de
          Espoz y Mina y el número 7: fachada roja con el rótulo dorado
          O&apos;CONNELL ST. sobre la puerta.
        </p>
        <p>
          ¿No sabes bien por dónde ir? CÓMO LLEGAR, arriba, abre el pin de este
          pub irlandés, así puedes seguir la ruta desde cualquier punto del
          centro.
        </p>
        <p>
          Dirígete a Puerta del Sol y camina hasta Calle de Espoz y Mina. Esta
          puerta es el punto de encuentro: NFL de domingo por la tarde en
          pantallas (Bengals–Falcons 15:30 si no estás en el estadio), RedZone
          desde las 19:00, luego Atlético–Barcelona a las 21:00 cuando lo
          estemos emitiendo. Four Corner en Victoria 6 está abierto desde las
          14:00, con pantallas de deporte. Pregunta qué partido echan. Mira{" "}
          <Link href="/es/nfl-madrid" className="text-cream underline">
            bar NFL Madrid
          </Link>
          {" · "}
          <Link href="/es/nfl-noche-luego-atleti-barca-esta-puerta" className="text-cream underline">
            NFL noche y Atleti 21:00
          </Link>
          .
        </p>
        <p>
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">
            Deportes en directo
          </Link>
          {" · "}
          <Link href="/es/sports-bar-sol" className="text-cream underline">
            Bar deportivo en Sol
          </Link>
          {" · "}
          <Link
            href="/es/thursday-1-euro-shots"
            className="text-cream underline"
          >
            Jueves 1 €
          </Link>
        </p>
      </Section>
      <LocaloFindUs locale="es" />
      <Section title="Horario">
        <p>
          Abrimos todos los días: de lunes a jueves desde las {HOURS.monThu.open},
          viernes desde las {HOURS.fri.open}, sábado desde las {HOURS.sat.open} y domingo desde las{" "}
          {HOURS.sun.open}. Cerramos a las {HOURS.monThu.close} de domingo a
          jueves y a las {HOURS.fri.close} las noches de viernes y sábado.
        </p>
      </Section>
    </PageShell>
  );
}
