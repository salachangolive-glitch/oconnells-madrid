import Link from "next/link";
import { FixtureList } from "@/components/FixtureList";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { RECURRING } from "@/lib/fixtures";
import { buildMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Fixtures — football & Thursday €1 shots",
  description:
    "Fixtures at O'Connell St Madrid: confirmed football matches, Premier League / Champions League / LaLiga on the screens, Thursday €1 shots.",
  path: "/whats-on",
});

export default function WhatsOnPage() {
  return (
    <PageShell locale="en" altLangHref="/es/whats-on">
      <PageHero
        eyebrow="Fixtures"
        title={`This week at ${SITE_NAME}`}
        lead="Confirmed matches when we have them, plus the weekly nights that keep the pub busy."
      />

      <FixtureList locale="en" />

      <Section title="Every week">
        <ul className="list-disc space-y-2 pl-5">
          <li>{RECURRING.football.en}</li>
          <li>
            {RECURRING.thursdayShots.en} —{" "}
            <Link href="/thursday-1-euro-shots" className="text-gold underline">
              Thursday €1 shots
            </Link>
          </li>
          <li>{RECURRING.wednesdayShots.en}</li>
        </ul>
      </Section>
    </PageShell>
  );
}
