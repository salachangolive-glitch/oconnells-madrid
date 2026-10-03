import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sobre O'Connell St Madrid",
  description:
    "Sobre O'Connell St: pub irlandés y bar deportivo en Calle de Espoz y Mina 7, 28012 Madrid, cerca de Sol. Deportes en directo y chupitos a 1 € los jueves.",
  path: "/es/about",
  locale: "es",
});

export default function EsAboutPage() {
  return (
    <PageShell locale="es" altLangHref="/about">
      <PageHero
        eyebrow="Sobre nosotros"
        title={SITE_NAME}
        lead="Un pub irlandés junto a Sol. Se viene a ver el partido cuando está confirmado, a tomar algo, y los jueves a los chupitos a 1 €."
      />
      <InteriorPhoto
        src="/images/interior/about-salon.webp"
        alt="Mesas y televisiones en el salón de O'Connell St cerca de Sol"
        position="object-center"
      />
      <Section title="En resumen">
        <p>
          Estamos en {ADDRESS.full}, a un paso de Puerta del Sol. {HOURS.summaryEs}.
        </p>
        <p>No se reservan mesas. Atendemos por orden de llegada.</p>
        <p>
          Si es tu primera vez, sal en Metro Sol y busca la fachada roja de
          Espoz y Mina. La agenda dice qué hay confirmado esta semana; si no
          sale, pregunta en la barra.
        </p>
        <p>
          <Link href="/es/location" className="text-cream underline">
            Ubicación
          </Link>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">
            Deportes en directo
          </Link>
          {" · "}
          <Link
            href="/es/thursday-1-euro-shots"
            className="text-cream underline"
          >
            Jueves 1 €
          </Link>
          {" · "}
          <Link href="/es/whats-on" className="text-cream underline">
            Agenda
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
