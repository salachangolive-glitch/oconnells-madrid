import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Premier League en pantallas en Madrid cerca de Sol",
  description:
    "Ver fútbol Premier League en O'Connell St, pub irlandés y bar deportivo cerca de Sol. Pantallas de PL en el centro de Madrid.",
  path: "/es/premier-league",
  locale: "es",
});

export default function EsPremierLeaguePage() {
  return (
    <PageShell locale="es" altLangHref="/premier-league">
      <PageHero
        eyebrow="Premier League · Madrid"
        title={`Pantallas de PL en ${SITE_NAME}`}
        lead="Tardes y noches de Premier League en pantallas grandes — pintas listas, a un paso de Sol."
      />
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Pasillo del pub con pantallas de fútbol — ambiente Premier League en O'Connell St"
        position="object-[center_40%]"
      />
      <Section title="Planificar una tarde o noche de PL">
        <p>
          Los fines de semana se llenan. Si te importa un horario concreto,
          mira{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            Partidos
          </Link>{" "}
          o pregunta en barra.{" "}
          <Link href="/es/location" className="text-cream underline">
            Cómo llegar desde Sol
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
