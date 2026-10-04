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
        eyebrow="Live sports · Sol"
        title={`Live sports at ${SITE_NAME}`}
        lead="Irish pub near Puerta del Sol with confirmed football, NFL, NBA, rugby, Formula 1, tennis and other sport on the screens. Times are on What’s On."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Live sports screens and seating aisle at O'Connell St Irish pub near Sol"
        position="object-[center_15%]"
      />
      <FixtureStrip locale="en" />
      <Section title="What we put on">
        <p>
          We show football most weekends and on European nights, plus other
          sport when that screening is confirmed: Premier League, EFL
          Championship, LaLiga, Segunda, Champions League, Europa League,
          Conference League, internationals, NFL, NBA, EuroLeague, rugby,
          Formula 1, MotoGP, tennis, UFC and boxing when they are on at the pub.
        </p>
        <p>
          For kickoff times, see{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          . For football:{" "}
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
          NFL, NBA, rugby, Formula 1 and tennis go on when we are showing them.
          For one specific match, ask at the bar or check{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
