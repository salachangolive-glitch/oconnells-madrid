import Link from "next/link";
import { FixtureList } from "@/components/FixtureList";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { RECURRING } from "@/lib/fixtures";
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
        lead="All times are shown in Madrid time. Events marked ‘Confirmed’ are scheduled to be shown on our screens."
      />

      <FixtureList locale="en" />

      <Section title="Live sports at O'Connell St">
        <p>
          O&apos;Connell St is an Irish pub by Puerta del Sol — Espoz y Mina 7.
          We put major live sport on our screens when it&apos;s confirmed:
          football, NFL, NBA, rugby, Formula 1, tennis and more. See Today and This week on this page, or ask at the bar if you&apos;re
          looking for a specific game.
        </p>
      </Section>

      <Section title="Thursday €1 shots">
        <p>
          {RECURRING.thursdayShots.en}{" "}
          <Link href="/thursday-1-euro-shots" className="text-gold underline">
            Thursday €1 shots
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
