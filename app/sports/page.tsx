import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sports bar Madrid — football, NFL & NBA near Sol",
  description:
    "O'Connell St sports bar near Puerta del Sol: Premier League, Champions League, LaLiga on screens; NFL and NBA when shown. Irish pub in Madrid Centro.",
  path: "/sports",
});

export default function SportsPage() {
  return (
    <PageShell locale="en" altLangHref="/es/sports">
      <PageHero
        eyebrow="Screens · pints · Sol"
        title={`Match nights at ${SITE_NAME}`}
        lead="Premier League Saturdays, Champions League midweeks, LaLiga when it matters — plus NFL and NBA when those games are on."
      />
      <FixtureStrip locale="en" />
      <Section title="Football first">
        <p>
          The pub fills around the screens. Grab a pint, claim a seat, and watch
          the night with the room — a short walk from Puerta del Sol.
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
      <Section title="NFL & NBA">
        <p>
          American football and basketball when those fixtures are showing — ask
          at the bar for the night&apos;s lineup.
        </p>
      </Section>
    </PageShell>
  );
}
