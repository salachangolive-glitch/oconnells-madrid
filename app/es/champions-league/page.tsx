import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Noches de Champions League en el centro de Madrid",
  description:
    "UEFA Champions League en las pantallas de O'Connell St, cerca de Puerta del Sol. Sports bar irlandés en Madrid Centro para noches europeas.",
  path: "/es/champions-league",
  locale: "es",
});

export default function EsChampionsLeaguePage() {
  return (
    <PageShell locale="es" altLangHref="/champions-league">
      <PageHero
        eyebrow="UEFA Champions League"
        title={`Noches de UCL en ${SITE_NAME}`}
        lead="El fútbol europeo entre semana pide pantallas grandes. Únete al público de este pub irlandés cerca de Puerta del Sol para las noches de Champions League en Madrid Centro."
      />
      <VenueHero className="mb-10" aspect="video" caption="Champions League · Sol" />
      <Section title="Antes de venir">
        <p>
          Confirma los cruces de esta noche en{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            what&apos;s on
          </Link>{" "}
          si tu plan depende de un partido. Estamos a poca distancia de Sol —
          fácil para viajeros y locales que entran a Madrid Centro para el
          pitido.
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
