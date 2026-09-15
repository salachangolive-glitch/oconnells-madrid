import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "About O'Connell St Madrid",
  description:
    "About O'Connell St: Irish pub and sports bar at Calle de Espoz y Mina 7, 28012 Madrid, near Puerta del Sol. Football screens and Thursday €1 shots.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell locale="en" altLangHref="/es/about">
      <PageHero
        eyebrow="About"
        title={SITE_NAME}
        lead="An Irish pub and sports bar in the heart of Madrid — Premier League, Champions League and LaLiga on the screens, Thursday €1 shots for Erasmus and internationals."
      />
      <VenueHero variant="secondary" className="mb-10" />
      <Section title="The short version">
        <p>
          We are at {ADDRESS.full}, near Puerta del Sol in Madrid Centro.{" "}
          {HOURS.summaryEn}.
        </p>
        <p>
          Come for the match, the pint, and Thursday €1 shots — a central Irish
          sports pub built for travellers, students and locals who want Sol-area
          screens without the fuss.
        </p>
        <p>
          <Link href="/location" className="text-cream underline">
            Location
          </Link>
          {" · "}
          <Link href="/sports" className="text-cream underline">
            Sports
          </Link>
          {" · "}
          <Link href="/thursday-1-euro-shots" className="text-cream underline">
            Thursday €1
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            Fixtures
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
