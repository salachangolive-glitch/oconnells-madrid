import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Premier League en pantallas en Madrid cerca de Sol",
  description:
    "Ver fútbol Premier League en O'Connell St, pub irlandés y sports bar cerca de Puerta del Sol. Pantallas de PL en Madrid Centro.",
  path: "/es/premier-league",
  locale: "es",
});

export default function EsPremierLeaguePage() {
  return (
    <PageShell locale="es" altLangHref="/premier-league">
      <PageHero
        eyebrow="Premier League · Madrid Centro"
        title={`Pantallas de PL en ${SITE_NAME}`}
        lead="El fútbol inglés es una petición habitual en este pub irlandés de la zona de Sol. Ven por las tardes y noches de Premier League en pantallas — pintas listas, centro de Madrid."
      />
      <VenueHero className="mb-10" aspect="video" caption="Premier League · Sol" />
      <Section title="Planificar una tarde o noche de PL">
        <p>
          Las jornadas grandes de sábado y domingo llenan Madrid Centro pronto.
          Si a tu grupo le importa un horario concreto, mira{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            what&apos;s on
          </Link>{" "}
          o llama al bar. Combina el día de partido con{" "}
          <Link href="/es/location" className="text-cream underline">
            cómo llegar desde Sol
          </Link>
          .
        </p>
        <p>
          También{" "}
          <Link href="/es/champions-league" className="text-cream underline">
            Champions League
          </Link>{" "}
          y{" "}
          <Link
            href="/es/watch-football-madrid"
            className="text-cream underline"
          >
            ver fútbol en Madrid
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
