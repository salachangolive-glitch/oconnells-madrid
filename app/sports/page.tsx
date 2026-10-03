import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Live sports Madrid — Irish pub near Sol",
  description:
    "O'Connell St near Sol shows major live sport when confirmed: football, NFL, NBA, rugby, Formula 1 and tennis. Check What's On.",
  path: "/sports",
});

export default function SportsPage() {
  return (
    <PageShell locale="en" altLangHref="/es/sports">
      <PageHero
        eyebrow="Screens · pints · Sol"
        title={`Live sports at ${SITE_NAME}`}
        lead="We show major live sport throughout the week, including football, NFL, NBA, rugby, Formula 1 and tennis when confirmed."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Live sports screens and seating aisle at O'Connell St Irish pub near Sol"
        position="object-[center_15%]"
      />
      <FixtureStrip locale="en" />
      <Section title="What we put on">
        <p>
          We show major live sport throughout the week, including football,
          NFL, NBA, rugby, Formula 1 and tennis when confirmed. A match appears
          here only after the pub has confirmed the screening.
        </p>
        <p>
          For the diary, see{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          . If you want a deeper dive into football:{" "}
          <Link href="/watch-football-madrid" className="text-gold underline">
            Watch football in Madrid
          </Link>
          , including{" "}
          <Link href="/premier-league" className="text-gold underline">
            Premier League
          </Link>{" "}
          and{" "}
          <Link href="/champions-league" className="text-gold underline">
            Champions League
          </Link>
          .
        </p>
      </Section>
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Interior with F1 and sports on the TVs at O'Connell St"
        position="object-[center_25%]"
      />
      <Section title="Beyond football">
        <p>
          NFL, NBA, rugby, Formula 1 and tennis go on the screens when that
          screening is confirmed. Check{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
