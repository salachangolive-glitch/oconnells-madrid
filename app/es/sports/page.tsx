import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sports bar Madrid — fútbol, NFL y NBA cerca de Sol",
  description:
    "Sports bar O'Connell St cerca de Puerta del Sol: Premier League, Champions League, LaLiga en pantallas; NFL y NBA cuando se emiten. Pub irlandés en Madrid Centro.",
  path: "/es/sports",
  locale: "es",
});

export default function EsSportsPage() {
  return (
    <PageShell locale="es" altLangHref="/sports">
      <PageHero
        eyebrow="Sports bar · Madrid Centro"
        title={`Deporte en ${SITE_NAME}`}
        lead="Pantallas para Premier League, Champions League y LaLiga — y NFL/NBA cuando tocan esos partidos — a poca distancia de Puerta del Sol."
      />
      <VenueHero className="mb-10" aspect="video" caption="Pantallas · Sol" />
      <Section title="Fútbol">
        <p>
          Quien busca dónde ver fútbol en Madrid Centro llega aquí por Premier
          League, UEFA Champions League y LaLiga. Los días de partido se llenan
          pronto — pide una pinta y quédate con buen sitio.
        </p>
        <p>
          <Link
            href="/es/watch-football-madrid"
            className="text-cream underline"
          >
            Ver fútbol en Madrid
          </Link>
          {" · "}
          <Link href="/es/premier-league" className="text-cream underline">
            Premier League
          </Link>
          {" · "}
          <Link href="/es/champions-league" className="text-cream underline">
            Champions League
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s on
          </Link>
        </p>
      </Section>
      <Section title="NFL y NBA">
        <p>
          NFL y NBA aparecen cuando se emiten — pregunta en barra por la
          cartelera de la noche.
        </p>
      </Section>
      <Section title="Ambiente de pub irlandés">
        <p>
          Un sports bar irlandés cerca de Sol pensado para las pantallas y el
          público — fácil para grupos, internacionales y quien quiere el partido
          sin salir de Madrid Centro.
        </p>
      </Section>
    </PageShell>
  );
}
