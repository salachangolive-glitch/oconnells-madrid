import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PremierLeagueLines } from "@/components/PremierLeagueLines";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { ADDRESS, HOURS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Pub de Premier League en Madrid, junto a Sol",
  description:
    "Pub de Premier League en Madrid en O'Connell St, Espoz y Mina 7. Saques ingleses confirmados en hora de Madrid. CÓMO LLEGAR en este pin.",
  path: "/es/premier-league",
  locale: "es",
});

export default function EsPremierLeaguePage() {
  return (
    <PageShell locale="es" altLangHref="/premier-league">
      <PageHero
        eyebrow="Pub de Premier League en Madrid · pub irlandés"
        title={`Pub de Premier League en Madrid: ${SITE_NAME}`}
        lead="Este pub irlandés en Espoz y Mina 7 es un pub de Premier League en Madrid. Los saques ingleses de sábado y domingo confirmados — en hora de Madrid — están en la Agenda. Pregunta qué partido echan."
      />
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Televisiones de deportes en O'Connell St cerca de Sol"
        position="object-[center_40%]"
      />
      <Section title="Pub de Premier League en Madrid">
        <p>
          Si buscas un pub de Premier League en Madrid, esta puerta está a un
          paso de Puerta del Sol. Ponemos la Premier de sábado y domingo cuando
          la emisión está confirmada, y las jornadas entre semana que echemos.
          En esta web los saques van en hora de Madrid, no en hora del Reino
          Unido — abre la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>{" "}
          de los próximos 7 días, o pregunta en la barra. Si conviertes una
          gráfica del sábado en hora británica:{" "}
          <Link
            href="/es/relojes-madrid-saques-ingleses-sabado-esta-puerta"
            className="text-cream underline"
          >
            relojes de Madrid para saques ingleses de sábado
          </Link>
          .
        </p>
        <PremierLeagueLines locale="es" />
        <p>
          También{" "}
          <Link href="/es/champions-league" className="text-cream underline">
            Champions League
          </Link>{" "}
          y{" "}
          <Link href="/es/watch-football-madrid" className="text-cream underline">
            ver fútbol en Madrid
          </Link>
          .
        </p>
      </Section>
      <Section title="Horario y CÓMO LLEGAR">
        <p>
          {ADDRESS.full}, a un paso de Puerta del Sol. {HOURS.summaryEs}.
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
          . Ese pin es esta ficha, CID 10697659365903665225.
        </p>
      </Section>
    </PageShell>
  );
}
