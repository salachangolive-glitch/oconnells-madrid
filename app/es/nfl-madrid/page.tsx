import Link from "next/link";
import { HowToGetHere } from "@/components/HowToGetHere";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { SportsPageWayfinding } from "@/components/SportsPageWayfinding";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { ADDRESS, HOURS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Bar NFL Madrid: ver la NFL cerca de Sol | O'Connell St",
  description:
    "Bar NFL Madrid y pub irlandés junto a Puerta del Sol: ver la NFL en Madrid en O'Connell's, Espoz y Mina 7. Pregunta qué partido echan.",
  path: "/es/nfl-madrid",
  locale: "es",
});

const faq = [
  {
    q: "¿Dónde ver la NFL en Madrid?",
    a: "En este bar NFL Madrid: O'Connell St, Calle de Espoz y Mina 7, a un paso de Puerta del Sol. Ver la NFL en Madrid en pantallas cuando lo emitimos. Pregunta qué partido echan. CÓMO LLEGAR es el pin Maps de esta ficha.",
  },
  {
    q: "¿Ponéis fútbol americano?",
    a: "Sí, cuando lo emitimos. En O'Connell St el fútbol europeo va primero, y cada partido confirmado aparece en la Agenda con la hora de Madrid.",
  },
  {
    q: "¿Ponéis todos los partidos?",
    a: "No. Algunos empiezan después del cierre en horario de Madrid, y solo anunciamos un partido cuando la emisión está confirmada. Las pantallas se reparte entre la tarde y la noche: mira la Agenda o pregunta en la barra si buscas uno concreto.",
  },
  {
    q: "¿Estáis cerca del Bernabéu?",
    a: "Estamos en el centro, junto a Sol, no al lado del estadio. En metro desde Sol es fácil pasar por aquí antes o después de un día por el centro.",
  },
  {
    q: "¿A qué hora abrís el domingo?",
    a: "Los domingos habituales abrimos a las 14:00 y cerramos a las 03:00.",
  },
];

const SIBLINGS = [
  {
    name: "O'Connell St",
    address: "Calle de Espoz y Mina, 7, 28012 Madrid",
    maps: BAR_MAPS.oconnells,
    web: "https://oconnellsmadrid.es/",
    note: "Este bar NFL Madrid — pub irlandés y bar deportivo junto a Puerta del Sol.",
  },
  {
    name: "Dubliners",
    address: "Calle de Espoz y Mina, 7, 28012 Madrid",
    maps: BAR_MAPS.dubliners,
    web: "https://dublinersmadrid.es/",
    note: "Pub irlandés en la misma calle / edificio que O'Connell St.",
  },
  {
    name: "O'Reilly's Restaurant Bar",
    address: "Pasaje de Matheu, 4, 28012 Madrid",
    maps: BAR_MAPS.oreillys,
    web: "https://oreillys-restaurant-bar.localo.site/",
    note: "Restaurante-bar a un paso de Sol.",
  },
  {
    name: "Four Corner",
    address: "Calle de la Victoria, 6, 28012 Madrid",
    maps: BAR_MAPS.fourCorner,
    web: null as string | null,
    note: "Abierto desde las 14:00 hasta la madrugada · pantallas de deporte. Pregunta qué partido echan.",
  },
] as const;

export default function NflMadridPageEs() {
  return (
    <PageShell locale="es" altLangHref="/nfl-madrid">
      <PageHero
        eyebrow="NFL junto a la Puerta del Sol · Espoz y Mina 7"
        title="Ver la NFL en Madrid en este pub irlandés junto a Sol"
        lead="O'Connell St, en Espoz y Mina 7, junto a la Puerta del Sol, pone la NFL en las pantallas cuando la emitimos, junto al fútbol europeo. Pub irlandés y bar deportivo independiente; los domingos habituales abrimos a las 14:00. Los partidos confirmados, en hora de Madrid, están en la Agenda. Pregunta qué partido echan."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Televisiones en la zona deportiva de O'Connell St cerca de Sol"
        position="object-[center_35%]"
      />
      <Section title="NFL bar Madrid">
        <p>
          O&apos;Connell St está en {ADDRESS.street}, a un paso de la Puerta del
          Sol. Este bar NFL Madrid es un pub irlandés y bar deportivo con
          deporte en directo y ambiente internacional — un punto de encuentro
          para ver la NFL en Madrid cerca de Sol antes del partido, después y
          durante toda la jornada del domingo. Four Corner en Victoria 6 está
          abierto desde las 14:00, con pantallas de deporte.
        </p>
        <p>
          El fútbol europeo es lo de cada día — este pub irlandés es también un
          pub de Premier League en Madrid, y esos saques van junto a la NFL, no
          en su lugar. El fútbol americano, el baloncesto, el rugby y la Fórmula
          1 se ponen cuando los emitimos. Los partidos confirmados de los
          próximos 7 días, en hora de Madrid, están en la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>
          {" · "}
          <Link href="/es/premier-league" className="text-cream underline">
            Premier League
          </Link>
          .
        </p>
      </Section>
      {/* Cuatro bares cerca de Sol — hub LIVE (DG 6 nov). */}
      <div id="cuatro-bares">
        <Section title="Cuatro bares cerca de Sol">
          <p>
            Cuatro locales hermanos a pocos minutos de la Puerta del Sol —
            Dubliners, O&apos;Connell St, O&apos;Reilly&apos;s y Four Corner.
            Distintas salas alrededor de la misma plaza. Empieza por la guía
            común:{" "}
            <a
              href="https://dublinersmadrid.es/es/cuatro-bares-fin-de-semana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline"
            >
              cuatro bares, un fin de semana
            </a>
            .
          </p>
          <ul className="mt-3 space-y-3">
            {SIBLINGS.map((s) => (
              <li key={s.name} className="border-l border-gold/40 pl-3">
                <p className="font-semibold text-cream">{s.name}</p>
                <p className="text-sm text-cream-muted">{s.address}</p>
                <p className="text-sm text-cream-muted">{s.note}</p>
                <p className="text-sm">
                  <a
                    href={s.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-event="directions"
                    className="text-cream underline"
                  >
                    CÓMO LLEGAR
                  </a>
                  {s.web ? (
                    <>
                      {" · "}
                      <a
                        href={s.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream underline"
                      >
                        Web
                      </a>
                    </>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-cream">
            ¿Quieres el resumen de las cuatro salas alrededor de Sol? Mira{" "}
            <a
              href="https://dublinersmadrid.es/es/cuatro-bares-fin-de-semana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline"
            >
              MEET US NEAR SOL
            </a>{" "}
            — direcciones, mapas y cómo quedan los locales alrededor de Sol.
          </p>
        </Section>
      </div>
      <HowToGetHere locale="es" />
      <SportsPageWayfinding locale="es" currentPath="/es/nfl-madrid" />
      <Section title="Dónde estamos">
        <p>
          {ADDRESS.full}. {HOURS.summaryEs}.
        </p>
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
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            FIND US
          </a>
          {" · "}
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          {" · "}
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>
        </p>
      </Section>
      <Section title="Preguntas frecuentes">
        {faq.map((f) => (
          <div key={f.q}>
            <h3 className="font-semibold">{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </Section>
    </PageShell>
  );
}
