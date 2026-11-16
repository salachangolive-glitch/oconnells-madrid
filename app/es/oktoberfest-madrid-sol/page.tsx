import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";

/**
 * Guía retirada del Oktoberfest Madrid 2026 (terminó el 15 nov 2026).
 * Orden del dueño 20 oct vía DG: las referencias se retiran después del 15 nov.
 * Se mantiene como stub noindex para que la URL no dé 404; public/_redirects 301! a /es/whats-on.
 */
export const metadata = buildMetadata({
  title: "Agenda junto a la Puerta del Sol",
  description:
    "Deporte en directo en O'Connell St, pub irlandés en Calle de Espoz y Mina 7, junto a la Puerta del Sol. Los partidos confirmados, en hora de Madrid, están en la Agenda.",
  path: "/es/oktoberfest-madrid-sol",
  locale: "es",
  noindex: true,
  canonicalPath: "/es/whats-on",
});

export default function EsRetiredSolGuideStubPage() {
  return (
    <PageShell locale="es" altLangHref="/whats-on">
      <PageHero
        eyebrow="O'Connell St · Madrid"
        title="Agenda junto a la Puerta del Sol"
        lead="Esta página se ha trasladado. El deporte en directo confirmado de la semana está en la Agenda, en hora de Madrid."
      />
      <p>
        <Link href="/es/whats-on" className="text-gold underline">
          Ver la Agenda
        </Link>
      </p>
    </PageShell>
  );
}
