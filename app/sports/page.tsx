import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sports bar Madrid — football, NFL & NBA near Sol",
  description:
    "O'Connell St sports bar near Sol: Premier League, Champions League and LaLiga on the screens; NFL and NBA when shown.",
  path: "/sports",
});

export default function SportsPage() {
  return (
    <PageShell locale="en" altLangHref="/es/sports">
      <PageHero
        eyebrow="Screens · pints · Sol"
        title={`Match nights at ${SITE_NAME}`}
        lead="Premier League Saturdays, Champions League nights, LaLiga when it matters — plus NFL and NBA when those games are on."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Multi-screen sports aisle at O'Connell St with DAZN displays and green ceiling lights"
        position="object-[center_15%]"
      />
      <FixtureStrip locale="en" />
      <Section title="Football first">
        <p>
          The pub fills around the screens. Grab a pint, find a seat, and settle
          in for the match — a short walk from Sol.
        </p>
        <p>
          <Link href="/watch-football-madrid" className="text-gold underline">
            Watch football in Madrid
          </Link>
          {" · "}
          <Link href="/premier-league" className="text-gold underline">
            Premier League
          </Link>
          {" · "}
          <Link href="/champions-league" className="text-gold underline">
            Champions League
          </Link>
        </p>
      </Section>
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Corridor seating with wall-mounted screens showing live football"
        position="object-[center_25%]"
      />
      <Section title="NFL & NBA">
        <p>
          American football and basketball when those fixtures are showing — ask
          at the bar for the night&apos;s lineup.
        </p>
      </Section>
    </PageShell>
  );
}
