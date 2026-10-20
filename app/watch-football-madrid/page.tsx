import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Football pub in Sol, Madrid — live matches",
  description:
    "Football pub just off Puerta del Sol: O'Connell St, Calle de Espoz y Mina 7. Confirmed matches with Madrid times, hours and directions.",
  path: "/watch-football-madrid",
});

export default function WatchFootballPage() {
  return (
    <PageShell locale="en" altLangHref="/es/watch-football-madrid">
      <PageHero
        eyebrow="Watch football · Madrid"
        title="A football pub in Sol, Madrid"
        lead="Watch the matches live at O'Connell St: Calle de Espoz y Mina 7, just off Puerta del Sol, with Premier League, LaLiga and Champions League on the screens. This week's confirmed games, with Madrid times, are below."
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Barrel seating and sports screens at O'Connell St Irish pub near Sol"
        position="object-[center_20%]"
      />
      <Section title="Confirmed matches">
        <FixtureStrip locale="en" />
        <p>
          Premier League, LaLiga, Champions League and other confirmed football
          go on the screens. The list, with Madrid times, is on{" "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>
          . If a game is not listed, ask at the bar.
        </p>
        <p>
          {ADDRESS.full}. {HOURS.summaryEn}.
        </p>
      </Section>
      <Section title="Brighton fans in Madrid · Getafe v Brighton, Thu 5 November, 21:00">
        <p>
          Over for the Conference League trip? O&apos;Connell St is an Irish pub
          just off Puerta del Sol, a good place to meet up in the centre before
          heading out to Getafe and to come back to afterwards. We&apos;re showing
          the match live.
        </p>
      </Section>
      <Section title="FAQ">
        <div>
          <h3 className="font-semibold">What matches do you show?</h3>
          <p>
            Premier League, LaLiga, Champions League and other confirmed football,
            plus NFL and more. Every confirmed game is listed on What&apos;s On with
            the Madrid time.
          </p>
        </div>
      </Section>
      <Section title="Getting here">
        <p>
          Aim for Puerta del Sol, then walk to Calle de Espoz y Mina.{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Open directions
          </a>
          .
        </p>
        <p>
          Pages for{" "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League
          </Link>{" "}
          and{" "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League
          </Link>
          ,{" "}
          <Link href="/nfl-madrid" className="text-cream underline">
            NFL in Madrid
          </Link>
          , our{" "}
          <Link href="/sports-bar-sol" className="text-cream underline">
            sports bar in Sol
          </Link>{" "}
          page, plus other sport on{" "}
          <Link href="/sports" className="text-cream underline">
            Live Sports
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
