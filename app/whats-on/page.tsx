import Link from "next/link";
import { FixtureList } from "@/components/FixtureList";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { RECURRING } from "@/lib/fixtures";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "What's On — live sports & Thursday €1 shots",
  description:
    "What's On at O'Connell St Madrid: confirmed live sports with Madrid kickoff times, plus Thursday €1 shots near Sol.",
  path: "/whats-on",
});

export default function WhatsOnPage() {
  return (
    <PageShell locale="en" altLangHref="/es/whats-on">
      <PageHero
        eyebrow="What's On"
        title={`This week at ${SITE_NAME}`}
        lead="Confirmed events with Madrid kickoff times when we have them — football and multi-sport nights, plus the weekly Thursday that keeps the pub busy."
      />

      <FixtureList locale="en" />

      <Section title="Every week">
        <ul className="list-disc space-y-2 pl-5">
          <li>{RECURRING.liveSports.en}</li>
          <li>
            {RECURRING.thursdayShots.en} —{" "}
            <Link href="/thursday-1-euro-shots" className="text-gold underline">
              Thursday €1 shots
            </Link>
          </li>
        </ul>
      </Section>
    </PageShell>
  );
}
