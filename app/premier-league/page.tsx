import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Premier League on screens in Madrid near Sol",
  description:
    "Premier League at O'Connell St near Sol when the screening is confirmed. Hours, directions and What's On.",
  path: "/premier-league",
});

export default function PremierLeaguePage() {
  return (
    <PageShell locale="en" altLangHref="/es/premier-league">
      <PageHero
        eyebrow="Premier League · Madrid"
        title={`Premier League at ${SITE_NAME}`}
        lead="Premier League goes on the screens when that screening is confirmed. Times for this week are on What's On."
      />
      <InteriorPhoto
        src="/images/interior/sports-corridor.webp"
        alt="Sports TVs at O'Connell St near Sol"
        position="object-[center_40%]"
      />
      <Section title="This week's confirmed games">
        <p>
          We do not list a kick-off here unless the pub is showing it. Open{" "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          for confirmed times in Madrid, or ask at the bar.
        </p>
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
          {ADDRESS.full}. {HOURS.summaryEn}. No table reservations.
        </p>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
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
