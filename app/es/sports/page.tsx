import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { InteriorPhoto } from "@/components/InteriorPhoto";
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
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Pasillo con varias pantallas de deportes en O'Connell St, con DAZN e iluminación verde"
        position="object-[center_15%]"
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
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Pasillo con mesas y pantallas en la pared mostrando fútbol en directo"
        position="object-[center_25%]"
      />
      <Section title="NFL y NBA">
        <p>
          Fútbol americano y baloncesto cuando tocan — pregunta en barra por la
          cartelería de la noche.
        </p>
      </Section>
    </PageShell>
  );
}
