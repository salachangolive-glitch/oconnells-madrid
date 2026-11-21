import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { LocaloFindUs } from "@/components/LocaloFindUs";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { SportsPageWayfinding } from "@/components/SportsPageWayfinding";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sports bar Sol Madrid — pub irlandés",
  description:
    "Bar deportivo Sol Madrid en Calle de Espoz y Mina 7, junto a Puerta del Sol: pub irlandés con fútbol y NFL en pantallas. Horarios en la Agenda.",
  path: "/es/sports-bar-sol",
  locale: "es",
  canonicalPath: "/es/sports",
});

export default function EsSportsBarSolPage() {
  return (
    <PageShell locale="es" altLangHref="/sports-bar-sol">
      <PageHero
        eyebrow="Bar deportivo Sol Madrid · pub irlandés"
        title="Bar deportivo Sol Madrid para noches de fútbol"
        lead={`${SITE_NAME} está en Calle de Espoz y Mina 7, junto a Puerta del Sol: un pub irlandés y bar deportivo en Sol para quedar antes del partido, con fútbol en pantallas y la charla de después.`}
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Pantallas de deportes en O'Connell St junto a Puerta del Sol"
        position="object-[center_45%]"
      />
      <Section title="Champions League en el centro">
        <p>
          Cuando hay Champions, mucha gente se concentra en Sol antes de ir al
          estadio y vuelve al centro después. O&apos;Connell St es un pub
          irlandés y bar deportivo en esa misma zona: entra, busca una pantalla
          y quedad aquí antes del partido.
        </p>
        <p>
          Los horarios confirmados en hora de Madrid están siempre en la{" "}
          <Link href="/es/whats-on" data-event="whats_on" className="text-cream underline">
            Agenda
          </Link>
          . Para ver la NFL en Madrid en este bar NFL Madrid, mira{" "}
          <Link href="/es/nfl-madrid" className="text-cream underline">
            NFL en Madrid
          </Link>
          . La carta está en el{" "}
          <Link href="/es/menu" className="text-cream underline">
            menú
          </Link>
          . Four Corner en Victoria 6 está abierto desde las 14:00, con
          pantallas de deporte.
        </p>
      </Section>
      <SportsPageWayfinding locale="es" currentPath="/es/sports-bar-sol" />
      <LocaloFindUs locale="es" />
      <Section>
        <p>
          {ADDRESS.full}, junto a Puerta del Sol. {HOURS.summaryEs}.
        </p>
        <p>
          <Link href="/es/champions-league" className="text-cream underline">
            Champions League
          </Link>
          {" · "}
          <Link href="/es/sports" className="text-cream underline">
            Deportes en directo
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
