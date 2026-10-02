import Link from "next/link";
import { FixtureList } from "@/components/FixtureList";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "What's On — Live Sports | O'Connell St Madrid",
  description:
    "What's On at O'Connell St Madrid: confirmed live sports with Madrid kickoff times. Football, NFL, NBA, rugby, Formula 1, tennis and more when marked Confirmed.",
  path: "/whats-on",
});

export default function WhatsOnPage() {
  return (
    <PageShell locale="en" altLangHref="/es/whats-on">
      <PageHero
        eyebrow="What's On"
        title={`This week at ${SITE_NAME}`}
        lead="See this week's live sport at O'Connell St — football, NFL, NBA, rugby, Formula 1, tennis and more. Times are Madrid time; only screenings marked Confirmed are confirmed to show on our screens."
      />

      <FixtureList locale="en" />

      <Section title="Live sports at O'Connell St">
        <p>
          O&apos;Connell St is an Irish pub by Puerta del Sol — Espoz y Mina 7.
          We put major live sport on our screens when it&apos;s confirmed:
          football, NFL, NBA, rugby, Formula 1, tennis and more. Check What&apos;s
          On above for this week&apos;s schedule, or ask at the bar if you&apos;re
          looking for a specific game.
        </p>
      </Section>

      <Section title="Thursday €1 shots">
        <p>
          Every Thursday: €1 shots at the pub. Ask at the bar when you arrive.{" "}
          <Link href="/thursday-1-euro-shots" className="text-gold underline">
            Thursday €1 shots
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
