import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { visitingFansNewsJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

/*
 * Locale ES de /news/real-madrid-psv-tuesday-night-sol (mismo partido, misma fecha).
 * match.uefa.com/v5/matches/2049625 → 21:00 Madrid, Bernabéu. Punto de encuentro;
 * sin emisión en pantalla prometida. Owner 17 Nov 2026.
 */
const PATH_EN = "/news/real-madrid-psv-tuesday-night-sol";
const PATH_ES = "/es/noticias/real-madrid-psv-martes-sol";
const PUBLISHED = "2026-11-09T10:00:00+01:00";
const START = "2026-11-24T21:00:00+01:00";
const H1 =
  "PSV en Madrid: un martes de Champions que empieza en Sol";
const DESCRIPTION =
  "Aficionados del PSV en Madrid: Real Madrid–PSV, mar 24 nov 2026, 21:00, Bernabéu. O'Connell St, Espoz y Mina 7 junto a Sol, punto de encuentro antes o después.";

export const metadata = buildMetadata({
  title: "Real Madrid–PSV, mar 24 nov 21:00: pub irlandés junto a Sol",
  description: DESCRIPTION,
  path: PATH_ES,
  locale: "es",
});

export default function EsNoticiasRealMadridPsvMartesSolPage() {
  return (
    <PageShell locale="es" altLangHref={PATH_EN}>
      <JsonLd
        data={visitingFansNewsJsonLd({
          path: PATH_ES,
          headline: H1,
          description: DESCRIPTION,
          datePublished: PUBLISHED,
          sportsEventName: "Real Madrid v PSV (UEFA Champions League)",
          startDate: START,
          sport: "Football",
          homeTeam: "Real Madrid",
          awayTeam: "PSV",
          venue: "Estadio Santiago Bernabéu",
          venueStreet: "Av. Concha Espina 1",
        })}
      />
      <PageHero
        eyebrow="UEFA Champions League · martes 24 de noviembre de 2026 · 21:00"
        title={H1}
        lead="El Real Madrid recibe al PSV en el Santiago Bernabéu el martes 24 de noviembre, jornada 5 de la fase de liga. ¿Vienes de los Países Bajos o ya estás en Madrid? Comparte un pin en el centro antes de ir al estadio — y un sitio para reunirse después."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Grifos de cerveza en el pub irlandés O'Connell St junto a Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title="El partido">
        <ul className="list-disc space-y-1 pl-5">
          <li>Real Madrid–PSV, UEFA Champions League, fase de liga, jornada 5</li>
          <li>Martes 24 de noviembre de 2026, 21:00 hora de Madrid</li>
          <li>Estadio Santiago Bernabéu, Avenida de Concha Espina 1, Madrid</li>
        </ul>
        <p>
          Fecha, hora y estadio según la{" "}
          <a
            href="https://www.uefa.com/uefachampionsleague/match/2049625/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            ficha del partido en UEFA
          </a>
          . Los horarios pueden cambiar: compruébalo el mismo día.
        </p>
      </Section>
      <Section title="¿Vienes de los Países Bajos? Un pin para el grupo">
        <p>
          Comparte una dirección y que cada uno llegue cuando pueda:
          O&apos;Connell St está en Calle de Espoz y Mina 7, a dos minutos de
          Puerta del Sol. Los martes abrimos a las 18:00 — punto de encuentro
          antes de ir al Bernabéu.
        </p>
        <p>
          Desde Sol, la línea 1 del Metro va a Tribunal; cambia allí a la línea
          10 hasta la estación Santiago Bernabéu, junto al estadio. Sal del
          centro con tiempo para estar dentro antes del saque.
        </p>
        <p lang="nl">
          Welkom in Madrid, PSV-fans! O&apos;Connell St is een Irish pub vlak bij
          de Puerta del Sol om af te spreken vóór de wedstrijd.
        </p>
      </Section>
      <Section title="Después del pitido final: vuelta al centro">
        <p>
          Cuando termine el partido, regresa con la línea 10 hacia el centro y
          camina hasta Espoz y Mina 7. De lunes a jueves O&apos;Connell St sigue
          abierto hasta las 03:00 para comentar el partido con una pinta. Si te
          alojas en el centro, Calle Mayor, Plaza Mayor y las calles de Sol
          quedan a un paseo.
        </p>
        <p>
          Horarios en{" "}
          <Link href="/es/location" className="text-gold underline">
            Ubicación
          </Link>
          , y el resto de la semana en la{" "}
          <Link href="/es/whats-on" className="text-gold underline">
            Agenda
          </Link>
          .
        </p>
      </Section>
      <Section title="Cómo llegar">
        <p>
          O&apos;Connell St · Calle de Espoz y Mina 7 · junto a Puerta del Sol,
          Madrid.{" "}
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
          <Link href="/es/contact" className="text-cream underline">
            Contacto
          </Link>
          {" · "}
          <Link href={PATH_EN} className="text-cream underline">
            Read in English
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}