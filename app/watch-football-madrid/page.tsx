import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { SportsPageWayfinding } from "@/components/SportsPageWayfinding";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { ADDRESS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Watch Football in Sol, Madrid | O'Connell St Irish Pub",
  description:
    "Watch football in Sol at Espoz y Mina 7: named fixtures only when What's On marks Confirmed. Madrid time. Ask which game. GET DIRECTIONS.",
  path: "/watch-football-madrid",
});

export default function WatchFootballPage() {
  return (
    <PageShell locale="en" altLangHref="/es/watch-football-madrid">
      <PageHero
        eyebrow="Watch football in Madrid · live football at this door"
        title={`Watch football in Sol at ${SITE_NAME}`}
        lead={`${SITE_NAME} on ${ADDRESS.full}: Irish pub just off Puerta del Sol for live football. We name a screening only when What’s On marks it Confirmed — Madrid time on every row. Ask which game is on.`}
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Barrel seating and sports screens at O'Connell St Irish pub near Sol"
        position="object-[center_20%]"
      />
      <Section title="Named fixtures — Confirmed, Madrid time" featured>
        <p>
          The list below matches the confirmed rows on{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>
          . We do not invent kickoffs or promise every league at once. If two
          games overlap, ask at the bar which feed is on the main picture.
        </p>
        <FixtureStrip locale="en" windowOnly showHeading={false} showDirections={false} />
      </Section>
      <Section title="Live football at this door">
        <p>
          Premier League, LaLiga, Champions League and other competitions when
          the screening is confirmed. English weekends:{" "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League pub Madrid
          </Link>
          {" · "}
          <Link
            href="/madrid-clocks-saturday-english-kickoffs-this-door"
            className="text-cream underline"
          >
            Madrid clocks for Saturday English kick-offs
          </Link>
          . Two Saturday clocks in one Sol room:{" "}
          <Link
            href="/two-saturday-football-clocks-one-sol-room-this-door"
            className="text-cream underline"
          >
            two Saturday football clocks
          </Link>
          . More sport:{" "}
          <Link href="/sports" className="text-cream underline">
            live sports
          </Link>
          {" · "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League
          </Link>
          .
        </p>
      </Section>
      <Section title="FAQ">
        <div>
          <h3 className="font-semibold">What matches do you show?</h3>
          <p>
            Only football (and other sport) that What&apos;s On marks Confirmed,
            with Madrid time on each row. If it is not listed, ask at the bar —
            we do not promise every match on every screen.
          </p>
        </div>
      </Section>
      <SportsPageWayfinding locale="en" currentPath="/watch-football-madrid" />
      <Section title="GET DIRECTIONS — this Maps pin">
        <p>
          Watch football in Madrid searches should land on this listing at Espoz
          y Mina 7, not a neighbouring door. CID 10697659365903665225.
        </p>
        <p>
          From Puerta del Sol, walk to Calle de Espoz y Mina — red front, gold
          lettering.{" "}
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            GET DIRECTIONS
          </a>
          {" · "}
          <Link href="/location" className="text-cream underline">
            Location
          </Link>
          {" · "}
          <Link href="/sports-bar-sol" className="text-cream underline">
            Sports bar in Sol
          </Link>
          {" · "}
          <Link href="/nfl-madrid" className="text-cream underline">
            NFL nights
          </Link>
          .
        </p>
      </Section>
    </PageShell>
  );
}
