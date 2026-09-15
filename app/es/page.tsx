import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { HomeCtaBand } from "@/components/HomeCtaBand";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Prose";
import { ThursdayFeature } from "@/components/ThursdayFeature";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  HOURS,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: `${SITE_NAME} Madrid — Pub irlandés y sports bar cerca de Sol`,
  description:
    "O'Connell St: pub irlandés y sports bar en Calle de Espoz y Mina 7, Madrid Centro cerca de Puerta del Sol. Premier League, Champions League y LaLiga. Jueves chupitos €1 para Erasmus y viajeros.",
  path: "/es",
  locale: "es",
});

export default function EsHomePage() {
  return (
    <PageShell
      locale="es"
      altLangHref="/"
      cover={
        <>
          <VenueHero variant="hero" />
          <HomeCtaBand locale="es" />
        </>
      }
    >
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
          Espoz y Mina · Puerta del Sol
        </p>
        <h1 className="font-serif text-3xl font-bold leading-tight text-cream sm:text-4xl">
          Pub irlandés y sports bar en Madrid Centro
        </h1>
        <p className="mt-4 text-base leading-relaxed text-cream-muted sm:text-lg">
          Pantallas para el fútbol, jueves chupitos €1 y a un paso de Puerta del
          Sol.
        </p>
      </header>

      <FixtureStrip locale="es" />
      <ThursdayFeature locale="es" />

      <section className="mb-12 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-serif text-xl font-bold text-cream">Noches Erasmus</h2>
          <div className="pub-rule my-3" />
          <p className="text-cream-muted">
            Quedar fácil cerca de Sol — ambiente friendly, pantallas y el jueves
            como la noche que se nota.
          </p>
          <p className="mt-3">
            <Link href="/es/erasmus" className="text-sm text-gold hover:text-cream">
              Erasmus en O&apos;Connell&apos;s →
            </Link>
          </p>
        </div>
        <div>
          <h2 className="font-serif text-xl font-bold text-cream">La fachada</h2>
          <div className="pub-rule my-3" />
          <p className="text-cream-muted">
            {ADDRESS.full}. Rojo, verde y el rótulo dorado — se reconoce a la
            primera.
          </p>
          <p className="mt-3">
            <Link href="/es/location" className="text-sm text-gold hover:text-cream">
              Ubicación y horarios →
            </Link>
          </p>
        </div>
      </section>

      <Section title="Cómo encontrarnos">
        <p>
          Llama al{" "}
          <a href={PHONE_TEL} className="text-gold underline">
            {PHONE_DISPLAY}
          </a>{" "}
          o abre{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Google Maps
          </a>
          . {HOURS.summaryEs}.
        </p>
      </Section>
    </PageShell>
  );
}
