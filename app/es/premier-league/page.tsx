import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { SportsPageWayfinding } from "@/components/SportsPageWayfinding";
import { PremierLeagueLines } from "@/components/PremierLeagueLines";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { ADDRESS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Pub de Premier League en Madrid, junto a Sol",
  description:
    "Pub de Premier League en Madrid en Espoz y Mina 7: cruces nombrados solo si la Agenda marca Confirmado. Hora Madrid. Pregunta qué partido. CÓMO LLEGAR.",
  path: "/es/premier-league",
  locale: "es",
});

export default function EsPremierLeaguePage() {
  return (
    <PageShell locale="es" altLangHref="/premier-league">
      <PageHero
        eyebrow="Pub de Premier League en Madrid · pub irlandés"
        title={`Pub de Premier League en Madrid: ${SITE_NAME}`}
        lead="Pub de Premier League en Madrid en Espoz y Mina 7, a un paso de Puerta del Sol. Nombramos un saque inglés solo cuando la Agenda lo marca Confirmado — hora de Madrid en cada fila. Pregunta qué partido echan antes de sentarte."
      />
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Televisiones de deportes en O'Connell St cerca de Sol"
        position="object-[center_40%]"
      />
      <Section title="Pub de Premier League en Madrid" featured>
        <p>
          Si buscas un pub de Premier League en Madrid, esta puerta está en{" "}
          {ADDRESS.full}, junto a Sol. Saques ingleses de sábado y domingo en
          pantalla cuando la emisión está confirmada; jornadas entre semana solo
          si la Agenda las lista. No prometemos cada partido de la Premier en
          cada pared. Los cruces nombrados abajo salen de las mismas filas
          Confirmado que la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>
          . Si tu equipo no aparece, pregunta en la barra — sigue siendo la
          respuesta honesta.
        </p>
        <p>
          Los saques en esta web son relojes de Madrid. Convierte una gráfica del
          sábado una vez:{" "}
          <Link
            href="/es/relojes-madrid-saques-ingleses-sabado-esta-puerta"
            className="text-cream underline"
          >
            relojes de Madrid para saques ingleses de sábado
          </Link>
          . Más días de partido:{" "}
          <Link href="/es/sports" className="text-cream underline">
            deportes en directo
          </Link>
          {" · "}
          <Link href="/es/champions-league" className="text-cream underline">
            Champions League
          </Link>
          {" · "}
          <Link href="/es/watch-football-madrid" className="text-cream underline">
            ver fútbol en Madrid
          </Link>
          .
        </p>
      </Section>
      <Section title="Cruces Premier nombrados (Confirmado, Madrid)">
        <PremierLeagueLines locale="es" windowOnly />
        <p className="mt-4 text-sm text-cream-muted">
          Solo aparecen cruces Confirmado en la Agenda. Las horas se actualizan
          al reconstruir la agenda — no leas una gráfica británica como si fuera
          hora de Madrid dos veces.
        </p>
      </Section>
      <SportsPageWayfinding locale="es" currentPath="/es/premier-league" />
      <Section title="CÓMO LLEGAR — este pin de Maps">
        <p>
          Las búsquedas de pub de Premier League en Madrid deben caer en esta
          ficha, no en la puerta de al lado. CID 10697659365903665225.
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
