import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { NEWS_HUB_ES } from "@/lib/news-hub";
import { buildMetadata } from "@/lib/seo";
import { HREFLANG_PAIRS } from "@/lib/venue";
import { SEO_SHORT } from "@/lib/seo-short";

function esTitle(path: string): string {
  const short = SEO_SHORT[path]?.title;
  if (short) return short.replace(/\s*\|\s*O'Connell St\s*$/i, "").trim();
  return path.replace(/^\/es\/noticias\//, "").replace(/-/g, " ");
}

export const metadata = buildMetadata({
  title: "Noticias y guías de partido junto a Sol | O'Connell St Madrid",
  description:
    "Noticias y guías para aficionados en O'Connell St, pub irlandés en Espoz y Mina 7 junto a Puerta del Sol. Enlaces a la Agenda y partidos confirmados.",
  path: "/es/noticias",
  locale: "es",
});

export default function EsNoticiasIndexPage() {
  const items = NEWS_HUB_ES.map((item) => ({
    ...item,
    title: esTitle(item.path),
    enPath: Object.entries(HREFLANG_PAIRS).find(([, es]) => es === item.path)?.[0],
  }));

  return (
    <PageShell locale="es" altLangHref="/news">
      <PageHero
        eyebrow="Noticias"
        title="Guías y notas de partido"
        lead="Textos cortos para quien visita Sol. Para emisiones confirmadas y horarios, usa la Agenda — solo hora de Madrid, y pregunta en la barra qué partido echan."
      />
      <Section title="Artículos">
        <ul className="list-disc space-y-2 pl-5 text-cream">
          {items.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="text-gold underline hover:text-cream">
                {item.title}
              </Link>
              {item.enPath ? (
                <span className="ml-2 text-sm text-cream-muted">
                  ·{" "}
                  <Link href={item.enPath} className="text-cream-muted underline hover:text-gold">
                    In English
                  </Link>
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Agenda">
        <p>
          <Link href="/es/whats-on" className="text-gold underline">
            Agenda
          </Link>{" "}
          muestra los próximos siete días con partidos confirmados.
        </p>
      </Section>
    </PageShell>
  );
}
