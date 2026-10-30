import Link from "next/link";
import { MenuView } from "@/components/MenuView";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Carta de comida y bebida – comer cerca de Sol, Madrid",
  description:
    "Carta de O'Connell St con precios: arroces, raciones y tapas, hamburguesas, pizza, desayuno irlandés y más, en un pub irlandés junto a la Puerta del Sol.",
  path: "/es/menu",
  locale: "es",
});

export default function MenuPageEs() {
  return (
    <PageShell locale="es" altLangHref="/menu">
      <PageHero
        eyebrow="Comida y bebida · Carta"
        title="Comer en un pub junto a Sol"
        lead="Raciones para compartir, arroces, hamburguesas, pizza y desayuno irlandés, con el partido en la pantalla grande y 9 pantallas."
      />
      <Section title="Nuestra carta">
        <p>
          Precios según nuestra carta impresa. Pregunta en la barra por los
          alérgenos y las bebidas.
        </p>
        <MenuView locale="es" />
      </Section>
      <Section title="Dónde estamos">
        <p>
          {ADDRESS.full}, junto a la Puerta del Sol. {HOURS.summaryEs}. Los
          partidos con hora de Madrid están en la{" "}
          <Link href="/es/whats-on" className="text-cream underline">Agenda</Link>.
        </p>
      </Section>
    </PageShell>
  );
}
