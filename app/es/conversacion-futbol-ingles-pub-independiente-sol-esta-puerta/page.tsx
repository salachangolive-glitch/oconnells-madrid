import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { ENGLISH_FOOTBALL_TALK_PATHS } from "@/lib/english-football-talk-off-sol";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Conversación de fútbol inglés junto a Sol | O'Connell St",
  description:
    "Pub irlandés independiente en Espoz y Mina 7: Premier y Europa cuando está Confirmado. Charla de partido en inglés, no guion de bar estudiantil. Pregunta qué partido. CÓMO LLEGAR.",
  path: ENGLISH_FOOTBALL_TALK_PATHS.es,
  locale: "es",
});

export default function ConversacionFutbolInglesPage() {
  return (
    <PageShell locale="es" altLangHref={ENGLISH_FOOTBALL_TALK_PATHS.en}>
      <PageHero
        eyebrow="Esta puerta · fútbol inglés · pub irlandés independiente"
        title="Conversación de fútbol inglés junto a Sol — el partido, no el discurso de nightlife."
        lead="Muchas puertas cerca de Puerta del Sol te venden una noche genérica. Este pub irlandés independiente en Espoz y Mina 7 vende algo más estrecho: fútbol europeo confirmado en pantalla, discusión de once en la barra y una respuesta honesta cuando preguntas qué partido echan. No es parada de tour Erasmus ni valla que promete todos los saques."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Grifos en el pub irlandés O'Connell St cerca de Sol"
        position="object-[center_50%]"
      />
      <Section title="Premier y Europa, cuando está Confirmado" featured>
        <p>
          {ADDRESS.full}. Habituales y visitantes angloparlantes usan esta sala
          para Premier de sábado y domingo cuando la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>{" "}
          marca Confirmado — hora de Madrid, no una gráfica británica leída dos
          veces. Las noches de Champions entre semana siguen la misma regla.
          Más en:{" "}
          <Link href="/es/premier-league" className="text-cream underline">
            pub de Premier League en Madrid
          </Link>
          {" · "}
          <Link href="/es/champions-league" className="text-cream underline">
            Champions junto a Sol
          </Link>
          .
        </p>
        <p>
          No escribimos tu noche. No garantizamos cada club inglés en cada
          pared. Qué significa Confirmado:{" "}
          <Link
            href="/es/como-marca-confirmado-la-agenda-esta-puerta"
            className="text-cream underline"
          >
            cómo marca Confirmado la Agenda
          </Link>
          . Cuando chocan dos partidos:{" "}
          <Link
            href="/es/saques-solapados-pantallas-compartidas-esta-puerta"
            className="text-cream underline"
          >
            saques solapados
          </Link>
          .
        </p>
      </Section>
      <Section title="Pregunta qué partido — esa es la conversación">
        <p>
          La pregunta útil en barra sigue siendo “¿qué partido echan?” — no si
          esta fachada queda bien en un reel. NFL y otro deporte comparten sala
          cuando lo emitimos; el fútbol lidera el calendario. Más en{" "}
          <Link href="/es/about" className="text-cream underline">
            Sobre nosotros
          </Link>{" "}
          y{" "}
          <Link href="/es/sports" className="text-cream underline">
            deportes en directo
          </Link>
          .
        </p>
      </Section>
      <Section title="CÓMO LLEGAR a este pin">
        <p>
          Esta ficha, CID 10697659365903665225. Desde la plaza:{" "}
          <Link
            href="/es/ultimos-metros-reloj-sol-rotulo-dorado-esta-puerta"
            className="text-cream underline"
          >
            últimos metros del reloj de Sol
          </Link>
          .
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
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
