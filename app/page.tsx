import Link from "next/link";
import { FanWeekendBanner } from "@/components/FanWeekendBanner";
import { FixtureStrip } from "@/components/FixtureStrip";
import { HomeCtaBand } from "@/components/HomeCtaBand";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { PATHS, WEEKEND_HOURS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  HOURS,
  MAPS_URL,
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
          <FanWeekendBanner locale="en" />
        </>
      }
    >
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
          Espoz y Mina · Puerta del Sol
        </p>
        <h1 className="font-serif text-2xl font-bold leading-snug text-cream sm:text-3xl lg:text-4xl">
          Your Irish pub in the heart of Madrid
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-cream-muted sm:mt-4 sm:text-base">
          Big screens for the football, Thursday €1 shots, and a short walk from
          Puerta del Sol.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="font-serif text-xl font-bold text-cream sm:text-2xl">
          This weekend near Sol
        </h2>
        <div className="pub-rule my-3" />
        <p className="text-sm text-cream-muted sm:text-base">
          Saturday 7 Nov we open 15:00–03:30 — no live NFL today. Sunday 8 Nov
          we open from 12:00 for Bengals vs Falcons 15:30, NFL from 19:00, and
          Atlético vs Barcelona 21:00. Four sister bars; Four Corner Sunday
          from 14:00 until late.
        </p>
        <p className="mt-3 text-sm text-gold">{WEEKEND_HOURS.sun8NovNoteEn}</p>
        <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
          <Link href={PATHS.saturdayEn} className="text-sm text-gold hover:text-cream">
            Saturday →
          </Link>
          <Link href={PATHS.sundayEn} className="text-sm text-gold hover:text-cream">
            Sunday NFL →
          </Link>
          <Link href={PATHS.hubEn} className="text-sm text-gold hover:text-cream">
            The four bars →
          </Link>
        </p>
      </section>

      <FixtureStrip locale="en" />

      <section className="mb-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-serif text-xl font-bold text-cream">
            Erasmus nights
          </h2>
          <div className="pub-rule my-3" />
          <p className="text-sm text-cream-muted sm:text-base">
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
          <p className="text-sm text-cream-muted sm:text-base">
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
          Open{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Google Maps
          </a>{" "}
          or{" "}
          <a href="/contact" className="text-gold underline">
            contact us
          </a>
          . {HOURS.summaryEn}.
        </p>
      </Section>
    </PageShell>
  );
}
