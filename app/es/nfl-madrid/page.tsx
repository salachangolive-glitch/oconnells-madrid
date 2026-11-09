import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PastEventNotice } from "@/components/PastEventNotice";
import { SportsPageWayfinding } from "@/components/SportsPageWayfinding";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";
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
    a: "Los domingos habituales abrimos a las 14:00 y cerramos a las 03:00. El domingo 8 de noviembre de 2026 fue una excepción de un solo día desde las 12:00 para el partido NFL en Madrid; aquel día ya ha tenido lugar.",
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
  const showWeekend = madridTodayYmd(agendaBuildNow()) <= "2026-11-08";
  return (
    <PageShell locale="es" altLangHref="/nfl-madrid">
      <PageHero
        eyebrow="Evento pasado · partido NFL en Madrid · domingo 8 de noviembre de 2026"
        title="Ver la NFL en Madrid en este pub irlandés junto a Sol"
        lead="Bengals–Falcons fue el partido NFL en el Bernabéu el domingo 8 de noviembre de 2026 a las 15:30. O'Connell St en Espoz y Mina 7, junto a Puerta del Sol, fue un sitio para verlo en pantallas y quedar antes y después. Pub irlandés y bar deportivo independiente; los domingos habituales abrimos a las 14:00. Pregunta qué partido echan."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Televisiones en la zona deportiva de O'Connell St cerca de Sol"
        position="object-[center_35%]"
      />
      <PastEventNotice locale="es" />
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
        {showWeekend ? (
          <p className="font-semibold text-gold">
            Excepción domingo 8 nov: abrimos desde las 12:00 (los domingos
            habituales, desde las 14:00).
          </p>
        ) : null}
      </Section>
      {showWeekend ? (
        <>
          <Section title="Este fin de semana · 7 y 8 de noviembre">
            <h3 className="font-serif text-lg font-semibold text-cream">
              Sábado 7 de noviembre
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Valencia–Real Madrid a las 21:00 — Orange TV y DAZN, en directo
                junto a Sol cuando lo estemos emitiendo. Mira la{" "}
                <Link href="/es/whats-on" className="text-cream underline">
                  Agenda
                </Link>
                .
              </li>
            </ul>
            <p className="mt-2 text-sm text-cream-muted">
              El sábado abrimos a las 15:00. Ven con tiempo si quieres un buen
              sitio cerca de la pantalla.
            </p>
            <h3 className="mt-4 font-serif text-lg font-semibold text-cream">
              Domingo 8 de noviembre — jornada desde mediodía
            </h3>
            <p>
              Abrimos desde las <strong className="text-gold">12:00</strong>{" "}
              (excepción de un solo día; el domingo habitual es a las 14:00). El
              partido NFL de Madrid es a las 15:30; el resto de ventanas del
              domingo son a las 19:00, 22:05 y 22:25.
            </p>
          </Section>
          <Section title="Bengals Falcons Madrid">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>15:30</strong> — Bengals–Falcons, partido NFL en el
                Bernabéu (DAZN y Cuatro). En pantalla grande en O&apos;Connell
                St si no estás en el estadio.
              </li>
              <li>
                <strong>19:00</strong> — siete partidos (pregunta cuál echan; no
                nombramos canal de TV para estos): Broncos–Panthers ·
                Cowboys–Colts · Jets–Chiefs · Lions–Dolphins · Browns–Saints ·
                Giants–Eagles · Rams–Commanders. NFL RedZone desde las 19:00.
              </li>
              <li>
                <strong>22:05</strong> — Texans–Chargers.
              </li>
              <li>
                <strong>22:25</strong> — Raiders–49ers · Packers–Patriots ·
                Cardinals–Seahawks.
              </li>
            </ul>
            <p className="mt-2 text-sm text-cream-muted">
              No prometemos todos los partidos en todas las pantallas. Pregunta
              en la barra qué hay puesto.
            </p>
          </Section>
          <Section title="Bar deportivo Sol Madrid">
            <p>
              Este bar deportivo Sol Madrid pone el fútbol del domingo y el
              partido NFL de Madrid en las pantallas de Espoz y Mina 7. Pub
              irlandés independiente — si buscas un partido concreto, pregunta
              cuál echan.
            </p>
          </Section>
          <Section title="Atlético Barcelona bar Sol (dom 21:00)">
            <p>
              Atlético de Madrid–Barcelona a las 21:00 — en directo junto a Sol
              cuando lo estemos emitiendo, en la misma sala que las ventanas
              NFL. Mira la{" "}
              <Link href="/es/whats-on" className="text-cream underline">
                Agenda
              </Link>
              .
            </p>
          </Section>
        </>
      ) : null}
      <Section title="El Bernabéu el domingo 8 de noviembre">
        <p>
          Bengals–Falcons empezó a las 15:30, hora de Madrid, en el Bernabéu.
          Datos de llegada que daba el Real Madrid en{" "}
          <a
            href="https://bernabeu.realmadrid.com/nfl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            la página NFL del estadio
          </a>
          :
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>El perímetro del estadio abre a las 12:30.</li>
          <li>
            No hay parking en el estadio: conviene ir en transporte público o
            taxi. En metro, Concha Espina (L9) o Cuzco (L10).
          </li>
          <li>
            Rige la política de bolsas transparentes de la NFL y se recomienda
            no llevar ninguna bolsa. Si hace falta: bolsa transparente de hasta
            30,5 × 15,25 × 30,5 cm o bolso de mano de hasta 11,5 × 16,5 cm. Se
            puede llevar una botella reutilizable, vacía y transparente, de
            hasta 1 litro.
          </li>
        </ul>
        <p>
          ¿Sin entrada? Aquel domingo el partido estuvo en pantalla grande en
          O&apos;Connell St, junto a Sol, desde las 15:30, y más NFL desde las
          19:00. Lo que viene, en la{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>
          .
        </p>
      </Section>
      {/* Esta semana — solo punto de encuentro (dueño 6 nov: sin propaganda de otros locales). */}
      {showWeekend ? (
        <div id="esta-semana">
          <Section title="Esta semana en O&apos;Connell St">
            <p data-oc-sat="">
              Domingo 8 de noviembre — Punto de encuentro para el gran evento
              desde las 12:00 del mediodía.
            </p>
            <p className="mt-2 text-sm text-cream-muted">
              Pub irlandés independiente en Espoz y Mina 7, junto a la Puerta
              del Sol. Bares hermanos: Dubliners, O&apos;Reilly&apos;s y Four
              Corner.
            </p>
          </Section>
        </div>
      ) : null}
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
      <SportsPageWayfinding locale="es" currentPath="/es/nfl-madrid" />
      <Section title="Dónde estamos">
        <p>
          {ADDRESS.full}. {HOURS.summaryEs}.
          {showWeekend
            ? " Excepción domingo 8 nov: abrimos desde las 12:00."
            : null}
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
