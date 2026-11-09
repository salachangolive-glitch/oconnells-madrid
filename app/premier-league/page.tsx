import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PremierLeagueLines } from "@/components/PremierLeagueLines";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { ADDRESS, HOURS, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Premier League pub Madrid, by Puerta del Sol",
  description:
    "Premier League pub Madrid at O'Connell St, Espoz y Mina 7. Confirmed English kickoffs in Madrid time on What's On. GET DIRECTIONS on this Maps pin.",
  path: "/premier-league",
});

export default function PremierLeaguePage() {
  return (
    <PageShell locale="en" altLangHref="/es/premier-league">
      <PageHero
        eyebrow="Premier League pub Madrid · Irish pub"
        title={`Premier League pub Madrid: ${SITE_NAME}`}
        lead="This Irish pub at Espoz y Mina 7 is a Premier League pub in Madrid. Confirmed Saturday and Sunday English kickoffs — listed in Madrid time — are on What’s On. Ask which game is on."
      />
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Sports TVs at O'Connell St near Sol"
        position="object-[center_40%]"
      />
      <Section title="Premier League pub Madrid">
        <p>
          English fans looking for a Premier League pub Madrid sit this door, a
          short walk from Puerta del Sol. We put Saturday and Sunday Premier
          League on the screens when the screening is confirmed, plus midweek
          rounds we are showing. Kickoffs on this site are Madrid clocks, not
          UK clocks — open{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          for the next 7 days, or ask at the bar.
        </p>
        <PremierLeagueLines locale="en" />
        <p>
          Also{" "}
          <Link href="/champions-league" className="text-cream underline">
            Champions League
          </Link>{" "}
          and{" "}
          <Link href="/watch-football-madrid" className="text-cream underline">
            watch football in Madrid
          </Link>
          .
        </p>
      </Section>
      <Section title="Hours and GET DIRECTIONS">
        <p>
          {ADDRESS.full}, a short walk from Puerta del Sol. {HOURS.summaryEn}.
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
          . That pin is this listing, CID 10697659365903665225.
        </p>
      </Section>
    </PageShell>
  );
}
