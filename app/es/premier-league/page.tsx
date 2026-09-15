import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Premier League en pantallas en Madrid",
  description:
    "Ver fútbol Premier League en O'Connell St, pub irlandés y sports bar cerca de Puerta del Sol. Pantallas para partidos de PL — no somos partner oficial.",
  path: "/es/premier-league",
  locale: "es",
});

export default function EsPremierLeaguePage() {
  return (
    <PageShell locale="es" altLangHref="/premier-league">
      <PageHero
        eyebrow="Premier League"
        title={`Pantallas de PL en ${SITE_NAME}`}
        lead="El fútbol inglés es una petición habitual en este pub irlandés de la zona de Sol. Ponemos los partidos de Premier League en las pantallas — sin reivindicar estatus oficial de club ni de liga."
      />
      <PhotoPlaceholder
        label="Partido de PL en pantalla — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="Planificar una tarde o noche de PL">
        <p>
          Las jornadas grandes de sábado y domingo llenan el centro pronto. Si a
          tu grupo le importa un horario concreto, llama al bar para confirmar
          que se emite. Combina el día de partido con{" "}
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
