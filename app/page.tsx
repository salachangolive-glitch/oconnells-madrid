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
  title: `${SITE_NAME} Madrid — Irish pub & sports bar near Puerta del Sol`,
  description:
    "O'Connell St: Irish sports pub at Calle de Espoz y Mina 7, Madrid Centro near Puerta del Sol. Watch Premier League, Champions League & LaLiga. Thursday €1 shots for Erasmus & travellers.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageShell
      locale="en"
      altLangHref="/es"
      cover={
        <>
          <VenueHero variant="hero" />
          <HomeCtaBand locale="en" />
        </>
      }
    >
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
          Espoz y Mina · Puerta del Sol
        </p>
        <h1 className="font-serif text-3xl font-bold leading-tight text-cream sm:text-4xl">
          Irish pub & sports bar in Madrid Centro
        </h1>
        <p className="mt-4 text-base leading-relaxed text-cream-muted sm:text-lg">
          Big screens for football, Thursday €1 shots and a short walk from
          Puerta del Sol.
        </p>
      </header>

      <FixtureStrip locale="en" />
      <ThursdayFeature locale="en" />

      <section className="mb-12 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-serif text-xl font-bold text-cream">Erasmus nights</h2>
          <div className="pub-rule my-3" />
          <p className="text-cream-muted">
            An easy meetup near Sol — English-friendly, screens on, and Thursday
            as the night everyone remembers.
          </p>
          <p className="mt-3">
            <Link href="/erasmus" className="text-sm text-gold hover:text-cream">
              Erasmus at O&apos;Connell&apos;s →
            </Link>
          </p>
        </div>
        <div>
          <h2 className="font-serif text-xl font-bold text-cream">Find the door</h2>
          <div className="pub-rule my-3" />
          <p className="text-cream-muted">
            {ADDRESS.full}. Red facade, green trim, gold lettering — you will
            know it when you see it.
          </p>
          <p className="mt-3">
            <Link href="/location" className="text-sm text-gold hover:text-cream">
              Location &amp; hours →
            </Link>
          </p>
        </div>
      </section>

      <Section title="Find us">
        <p>
          Call{" "}
          <a href={PHONE_TEL} className="text-gold underline">
            {PHONE_DISPLAY}
          </a>{" "}
          or open{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Google Maps
          </a>
          . {HOURS.summaryEn}.
        </p>
      </Section>
    </PageShell>
  );
}
