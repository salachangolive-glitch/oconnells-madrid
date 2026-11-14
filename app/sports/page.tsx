import { UpcomingNotes } from "@/components/UpcomingNotes";
import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { LocaloFindUs } from "@/components/LocaloFindUs";
import { SportsPageWayfinding } from "@/components/SportsPageWayfinding";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { ADDRESS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sports bar Sol Madrid — Irish pub near Sol",
  description:
    "Premier League pub Madrid and sports bar Sol at Espoz y Mina 7. Named fixtures only when What's On marks Confirmed. Madrid time. GET DIRECTIONS.",
  path: "/sports",
});

export default function SportsPage() {
  return (
    <PageShell locale="en" altLangHref="/es/sports">
      <PageHero
        eyebrow="Sports bar Sol Madrid · Premier League pub Madrid"
        title="Premier League pub Madrid at this sports bar Sol door"
        lead={`${SITE_NAME} on ${ADDRESS.full}: Irish pub and sports bar Sol Madrid, a short walk from Puerta del Sol. We name a screening only when What’s On marks it Confirmed — Madrid time on every row. Ask which game is on.`}
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Live sports screens and seating aisle at O'Connell St Irish pub near Sol"
        position="object-[center_15%]"
      />
      <Section title="Named fixtures — Confirmed, Madrid time" featured>
        <p>
          The list below is the same confirmed agenda as{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-gold underline">
            What&apos;s On
          </Link>
          . We do not invent kickoffs or promise every league at once. If two
          games overlap, ask at the bar which feed is on the main picture.
        </p>
        <FixtureStrip locale="en" windowOnly showHeading={false} />
      </Section>
      <Section title="Live football at this door">
        <p>
          Football leads the room: Premier League, LaLiga, Champions League and
          other competitions when the screening is confirmed. English weekends:
          see{" "}
          <Link href="/premier-league" className="text-gold underline">
            Premier League pub Madrid
          </Link>
          {" · "}
          <Link
            href="/madrid-clocks-saturday-english-kickoffs-this-door"
            className="text-gold underline"
          >
            Madrid clocks for Saturday English kick-offs
          </Link>
          . Broader football:{" "}
          <Link href="/watch-football-madrid" className="text-gold underline">
            watch football in Madrid
          </Link>
          {" · "}
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
          NFL, NBA, rugby, Formula 1 and tennis go on when we are showing them —
          only if What&apos;s On marks them Confirmed. For NFL near Sol:{" "}
          <Link href="/nfl-madrid" className="text-gold underline">
            NFL in Madrid
          </Link>
          . One specific match? Ask at the bar; the agenda is on{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-gold underline">
            What&apos;s On
          </Link>
          .
        </p>
      </Section>
      <Section title="GET DIRECTIONS — this Maps pin">
        <p>
          Sports bar Sol Madrid searches should land on this listing at Espoz y
          Mina 7, not a neighbouring door. CID 10697659365903665225.
        </p>
        <p>
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
          .
        </p>
      </Section>
      <SportsPageWayfinding locale="en" currentPath="/sports" />
      <LocaloFindUs locale="en" />
      <UpcomingNotes locale="en" />
    </PageShell>
  );
}
