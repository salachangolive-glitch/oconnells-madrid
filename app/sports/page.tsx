import { UpcomingNotes } from "@/components/UpcomingNotes";
import Link from "next/link";
import { FixtureStrip } from "@/components/FixtureStrip";
import { AfterGameSundayHighlight } from "@/components/AfterGameSundayHighlight";
import { PremierSunday8NovHighlight } from "@/components/PremierSunday8NovHighlight";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { LocaloFindUs } from "@/components/LocaloFindUs";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Sports bar Sol Madrid — Irish pub near Sol",
  description:
    "Sports bar Sol Madrid at O'Connell St, Irish pub near Puerta del Sol. Football, NFL, basketball, rugby, Formula 1 and tennis when confirmed. Check What's On.",
  path: "/sports",
});

export default function SportsPage() {
  return (
    <PageShell locale="en" altLangHref="/es/sports">
      <PageHero
        eyebrow="Sports bar Sol Madrid · Irish pub"
        title={`Live sports at ${SITE_NAME}`}
        lead="Sports bar Sol Madrid: an Irish pub near Puerta del Sol with confirmed football, NFL, NBA, rugby, Formula 1, tennis and other sport on the screens. Times are on What’s On."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Live sports screens and seating aisle at O'Connell St Irish pub near Sol"
        position="object-[center_15%]"
      />
      <FixtureStrip locale="en" windowOnly />
      <PremierSunday8NovHighlight locale="en" />
      <AfterGameSundayHighlight locale="en" />
      <Section title="What we put on">
        <p>
          This Irish pub and sports bar shows football most weekends and on
          European nights, plus other sport when that screening is confirmed:
          Premier League, EFL Championship, LaLiga, Segunda, Champions League,
          Europa League, Conference League, internationals, NFL, NBA,
          EuroLeague, rugby, Formula 1, MotoGP, tennis, UFC and boxing when they
          are on at the pub.
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
      <Section title="Premier League pub Madrid">
        <p>
          English fans looking for a Premier League pub Madrid sit this Irish
          pub near Puerta del Sol. Saturday and Sunday English kickoffs go on
          when the screening is confirmed, listed in Madrid time on{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          . Ask which game is on.{" "}
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-gold underline"
          >
            GET DIRECTIONS
          </a>{" "}
          is this listing&apos;s Maps pin. Detail on{" "}
          <Link href="/premier-league" className="text-gold underline">
            Premier League
          </Link>
          {" · "}
          <Link
            href="/madrid-clocks-saturday-english-kickoffs-this-door"
            className="text-gold underline"
          >
            Madrid clocks for Saturday English kick-offs
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
          American football, NBA, rugby, Formula 1 and tennis go on when we are
          showing them. To watch NFL Madrid at this NFL bar Madrid near Sol,
          see{" "}
          <Link href="/nfl-madrid" className="text-gold underline">
            NFL in Madrid
          </Link>
          .           For one specific match, ask at the bar or check{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          . How Confirmed works:{" "}
          <Link
            href="/how-whats-on-marks-confirmed-this-door"
            className="text-gold underline"
          >
            ask which game
          </Link>
          . Four Corner on Victoria 6 is open from 14:00, with sports screens —
          ask which game is on.
        </p>
      </Section>
      <LocaloFindUs locale="en" />
      <UpcomingNotes locale="en" />
    </PageShell>
  );
}
