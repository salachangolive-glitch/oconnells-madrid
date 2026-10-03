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
        lead="Come for the pint and stay for whatever is actually on. Football when the night calls for it, and NFL, NBA, rugby, F1 or tennis when we’ve confirmed it — a short walk from Sol. We don’t promise every game. Check What’s On."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Live sports screens and seating aisle at O'Connell St Irish pub near Sol"
        position="object-[center_15%]"
      />
      <FixtureStrip locale="en" />
      <Section title="What we put on">
        <p>
          You come for a pint and end up watching whatever is actually on.
          Football most weekends and on European nights, and other sport when
          we’ve confirmed a big game for the bar. We don’t fill the diary with
          matches we aren’t showing.
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
          NFL and NBA when those games are on our screens; rugby, F1 and
          tennis on the nights we’ve confirmed. If you need one specific
          match, ask at the bar or check{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
