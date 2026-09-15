import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Noches de Champions League en el centro de Madrid",
  description:
    "UEFA Champions League en las pantallas de O'Connell St, cerca de Puerta del Sol. Sports bar irlandés interior — no es un local oficial de la UCL.",
  path: "/es/champions-league",
  locale: "es",
});

export default function EsChampionsLeaguePage() {
  return (
    <PageShell locale="es" altLangHref="/champions-league">
      <PageHero
        eyebrow="UEFA Champions League"
        title={`UCL en ${SITE_NAME}`}
        lead="Las noches europeas entre semana piden pantallas. Mostramos interés de Champions League cuando hay partidos — como pub, no como partner oficial."
      />
      <PhotoPlaceholder
        label="Ambiente de noche UCL — NEED_REAL_PHOTO"
        className="mb-10"
      />
      <Section title="Antes de venir">
        <p>
          Confirma que se emite el partido si tu noche depende de un cruce.
          Estamos en interior cerca de Sol, sin terraza y sin música en vivo
          habitual — la noche es el partido y el público.
        </p>
        <p>
          <Link href="/es/premier-league" className="text-cream underline">
            Premier League
          </Link>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">
            Deportes
          </Link>
          {" · "}
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
