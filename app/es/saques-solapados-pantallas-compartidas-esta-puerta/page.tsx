import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { OVERLAPPING_KICKOFFS_PATHS } from "@/lib/overlapping-kickoffs-shared-screens";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Saques solapados, pantallas compartidas | O'Connell St",
  description:
    "Dos partidos, una sala en Sol en Espoz y Mina 7: pantallas compartidas, no un reservado. Solo Confirmado en la Agenda. Pregunta qué partido y dónde sentarte. CÓMO LLEGAR.",
  path: OVERLAPPING_KICKOFFS_PATHS.es,
  locale: "es",
});

export default function SaquesSolapadosPantallasPage() {
  return (
    <PageShell locale="es" altLangHref={OVERLAPPING_KICKOFFS_PATHS.en}>
      <PageHero
        eyebrow="Esta puerta · saques solapados · pantallas compartidas"
        title="Los saques solapados comparten una sala de Sol — elige taburete, no un reservado."
        lead="Premier a las 18:30 en Madrid y LaLiga a las 21:00 pueden caer el mismo sábado. La NFL puede apilarse un domingo de noche junto al fútbol. Este pub irlandés en Espoz y Mina 7 es una sala con pantallas compartidas, no una suite de estadio. La pregunta honesta no es cuántas tele hay — es qué cruce confirmado te importa y desde qué taburete lo ves."
      />
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Pasillo deportivo y pantallas compartidas en O'Connell St cerca de Sol"
        position="object-[center_40%]"
      />
      <Section title="Una sala, varios relojes" featured>
        <p>
          {ADDRESS.full}. Cuando dos filas Confirmado en la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>{" "}
          se solapan, el equipo encamina señales a las pantallas esa noche. No
          vendemos un asiento nombrado solo para tu liga. No inventamos aquí un
          recuento de pantallas. Si necesitas certeza antes de entrar, pregunta
          qué partido echan y si tu saque es el de la imagen principal.
        </p>
        <p>
          El sábado puede mezclar tarde inglesa y noche española en el mismo
          cuadrado del calendario — eso es historia de relojes, no de
          reservado. Lee{" "}
          <Link
            href="/es/dos-relojes-futbol-sabado-una-sala-esta-puerta"
            className="text-cream underline"
          >
            dos relojes de fútbol el sábado en una sala
          </Link>{" "}
          para los relojes partidos; esta página es cuando los dos relojes están
          en juego a la vez.
        </p>
      </Section>
      <Section title="Solo Confirmado — y pregunta">
        <p>
          Nombramos una emisión en una página permanente solo cuando la Agenda la
          marca Confirmado, en hora de Madrid. La etiqueta está en{" "}
          <Link
            href="/es/como-marca-confirmado-la-agenda-esta-puerta"
            className="text-cream underline"
          >
            cómo marca Confirmado la Agenda
          </Link>
          . Aquí el punto es el solape: una fila Confirmado no reserva una pared
          solo para ti. Por orden de llegada en la barra.
        </p>
        <p>
          Más contexto de partido en{" "}
          <Link href="/es/sports" className="text-cream underline">
            deportes en directo
          </Link>
          {" · "}
          <Link href="/es/premier-league" className="text-cream underline">
            pub de Premier League en Madrid
          </Link>
          .
        </p>
      </Section>
      <Section title="CÓMO LLEGAR a este pin">
        <p>
          Esta ficha, CID 10697659365903665225. No la puerta de al lado.
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
