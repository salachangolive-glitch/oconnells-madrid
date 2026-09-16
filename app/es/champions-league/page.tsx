import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Noches de Champions League en el centro de Madrid",
  description:
    "UEFA Champions League en las pantallas de O'Connell St, cerca de Sol. Bar deportivo irlandés para noches europeas en Madrid.",
  path: "/es/champions-league",
  locale: "es",
});

export default function EsChampionsLeaguePage() {
  return (
    <PageShell locale="es" altLangHref="/champions-league">
      <PageHero
        eyebrow="UEFA Champions League"
        title={`Noches de UCL en ${SITE_NAME}`}
        lead="El fútbol europeo entre semana pide pantallas grandes. Únete al público de este pub irlandés cerca de Sol para las noches de Champions League."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Pasillo amplio con varias pantallas grandes para noches de Champions League"
        position="object-[center_45%]"
      />
      <Section title="Antes de venir">
        <p>
          Confirma los cruces de esta noche en{" "}
          <Link href="/es/whats-on" className="text-cream underline">
            la cartelera
          </Link>{" "}
          si tu plan depende de un partido. Estamos a poca distancia de Sol —
          cómodo para viajeros y locales que vienen a ver el partido.
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
