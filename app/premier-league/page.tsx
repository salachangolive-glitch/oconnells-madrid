import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PremierLeagueLines } from "@/components/PremierLeagueLines";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Premier League on screens in Madrid near Sol",
  description:
    "Premier League at O'Connell St near Sol when the screening is confirmed. Hours, walk-in, and What's On.",
  path: "/premier-league",
});

export default function PremierLeaguePage() {
  return (
    <PageShell locale="en" altLangHref="/es/premier-league">
      <PageHero
        eyebrow="Premier League · Madrid"
        title={`Premier League at ${SITE_NAME}`}
        lead="Premier League at an Irish pub a short walk from Puerta del Sol. Confirmed kickoffs for the next 7 days are on What’s On."
      />
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Sports TVs at O'Connell St near Sol"
        position="object-[center_40%]"
      />
      <Section title="Confirmed Premier League games">
        <p>
          Saturday and Sunday Premier League matches are the usual plan, plus
          the midweek games we are showing. Open{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          for the Madrid times, or ask at the bar.
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
      <Section title="Hours and directions">
        <p>
          {ADDRESS.full}, a short walk from Puerta del Sol. {HOURS.summaryEn}.
          No table reservations — walk in, first come, first served.
        </p>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Directions from Puerta del Sol
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
