import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { SportsPageWayfinding } from "@/components/SportsPageWayfinding";
import { PremierLeagueLines } from "@/components/PremierLeagueLines";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { ADDRESS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Premier League pub Madrid, by Puerta del Sol",
  description:
    "Premier League pub Madrid at Espoz y Mina 7: named fixtures only when What's On marks Confirmed. Madrid time. Ask which game. GET DIRECTIONS.",
  path: "/premier-league",
});

export default function PremierLeaguePage() {
  return (
    <PageShell locale="en" altLangHref="/es/premier-league">
      <PageHero
        eyebrow="Premier League pub Madrid · Irish pub"
        title={`Premier League pub Madrid: ${SITE_NAME}`}
        lead="Premier League pub Madrid at Espoz y Mina 7, a short walk from Puerta del Sol. We name an English kickoff only when What’s On marks it Confirmed — Madrid time on every row. Ask which game is on before you sit down."
      />
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Sports TVs at O'Connell St near Sol"
        position="object-[center_40%]"
      />
      <Section title="Premier League pub Madrid" featured>
        <p>
          English fans looking for a Premier League pub Madrid use this Irish
          pub near Sol — {ADDRESS.full}. Saturday and Sunday English kickoffs go
          on the screens when the screening is confirmed; midweek rounds only
          when What&apos;s On lists them. We do not promise every Premier match on
          every wall. The named ties below are pulled from the same confirmed
          rows as{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>
          . If your club is not there, ask at the bar — that is still the honest
          answer.
        </p>
        <p>
          Kickoffs on this site are Madrid clocks. Converting a UK Saturday
          graphic once:{" "}
          <Link
            href="/madrid-clocks-saturday-english-kickoffs-this-door"
            className="text-cream underline"
          >
            Madrid clocks for Saturday English kick-offs
          </Link>
          . Broader match days:{" "}
          <Link href="/sports" className="text-cream underline">
            live sports
          </Link>
          {" · "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League
          </Link>
          {" · "}
          <Link href="/watch-football-madrid" className="text-cream underline">
            watch football in Madrid
          </Link>
          .
        </p>
      </Section>
      <Section title="Named Premier fixtures (Confirmed, Madrid time)">
        <PremierLeagueLines locale="en" windowOnly />
        <p className="mt-4 text-sm text-cream-muted">
          Only ties marked Confirmed on What&apos;s On appear here. Times update
          when the agenda rebuilds — do not read a UK graphic as if it were
          Madrid time twice.
        </p>
      </Section>
      <SportsPageWayfinding locale="en" currentPath="/premier-league" />
      <Section title="GET DIRECTIONS — this Maps pin">
        <p>
          Premier League pub Madrid searches should land on this listing, not a
          neighbouring door. CID 10697659365903665225.
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
    </PageShell>
  );
}
