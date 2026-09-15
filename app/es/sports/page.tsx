import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sports bar — fútbol, NFL y NBA",
  description:
    "Sports bar O'Connell St Madrid: Premier League, Champions League, LaLiga en pantallas; NFL y NBA cuando se emiten. Cerca de Puerta del Sol.",
  path: "/es/sports",
  locale: "es",
});

export default function EsSportsPage() {
  return (
    <PageShell locale="es" altLangHref="/sports">
      <PageHero
        eyebrow="Sports bar"
        title={`Deporte en ${SITE_NAME}`}
        lead="Pantallas para las grandes competiciones de fútbol — y NFL/NBA cuando tocan esos partidos."
      />
      <PhotoPlaceholder
        label="Pared de TVs / noche de partido — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="Fútbol">
        <p>
          Interés habitual: Premier League, UEFA Champions League y LaLiga. Para
          planificar el partido, mira{" "}
          <Link
            href="/es/watch-football-madrid"
            className="text-cream underline"
          >
            ver fútbol en Madrid
          </Link>
          .
        </p>
      </Section>
      <Section title="NFL y NBA">
        <p>
          NFL y NBA aparecen cuando se emiten — pregunta en barra por la
          cartelera de la noche. No reivindicamos estatus oficial de equipo o
          liga.
        </p>
      </Section>
      <Section title="Ambiente">
        <p>
          Sports bar interior cerca de Sol — sin terraza, sin música en vivo
          habitual. El foco son las pantallas y la pinta.
        </p>
      </Section>
    </PageShell>
  );
}
