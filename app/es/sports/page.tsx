import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sports bar Madrid — fútbol, NFL y NBA cerca de Sol",
  description:
    "O'Connell St bar de deportes cerca de Sol: Premier League, Champions League, LaLiga en pantallas; NFL y NBA cuando tocan.",
  path: "/es/sports",
  locale: "es",
});

export default function EsSportsPage() {
  return (
    <PageShell locale="es" altLangHref="/sports">
      <PageHero
        eyebrow="Pantallas · pintas · Sol"
        title={`Noches de partido en ${SITE_NAME}`}
        lead="Premier League los sábados, Champions entre semana, LaLiga cuando importa — y NFL o NBA cuando se emiten."
      />
      <FixtureStrip locale="es" />
      <Section title="Primero el fútbol">
        <p>
          El pub se llena alrededor de las pantallas. Pinta, buen sitio y el
          partido con la sala — a un paso de Puerta del Sol.
        </p>
        <p>
          <Link href="/es/watch-football-madrid" className="text-gold underline">
            Ver fútbol en Madrid
          </Link>
          {" · "}
          <Link href="/es/premier-league" className="text-gold underline">
            Premier League
          </Link>
          {" · "}
          <Link href="/es/champions-league" className="text-gold underline">
            Champions League
          </Link>
        </p>
      </Section>
      <Section title="NFL y NBA">
        <p>
          Fútbol americano y baloncesto cuando tocan — pregunta en barra por la
          cartelería de la noche.
        </p>
      </Section>
    </PageShell>
  );
}
