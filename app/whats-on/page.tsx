import Link from "next/link";
import { PostMatchBanner } from "@/components/PostMatchBanner";
import { FixtureList } from "@/components/FixtureList";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { agendaBuildNow, madridTodayYmd, RECURRING } from "@/lib/fixtures";
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
        title={`Next 7 days at ${SITE_NAME}`}
        lead="All times are shown in Madrid time. Events marked ‘Confirmed’ are scheduled to be shown on our screens."
      />

      <PostMatchBanner locale="en" />
      {/* Champions news links: build-time date gate, gone from the 22 Oct daily rebuild. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-10-21" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Champions League this week:{" "}
          <Link href="/news/champions-league-tuesday-20-october" className="text-gold underline">
            Tuesday 20 October, 21:00
          </Link>
          {" · "}
          <Link href="/news/champions-league-wednesday-21-october" className="text-gold underline">
            Wednesday 21 October, 21:00 (Leipzig fans welcome)
          </Link>
        </p>
      ) : null}
      <FixtureList locale="en" />

      <Section title="Live sports at O'Connell St">
        <p>
          O&apos;Connell St is an Irish pub by Puerta del Sol — Espoz y Mina 7.
          We put major live sport on our screens when it&apos;s confirmed:
          football, NFL, NBA, rugby, Formula 1, tennis and more. See Today and the next 7 days on this page, or ask at the bar if you&apos;re
          looking for a specific game.
        </p>
        <p>
          <Link href="/nfl-madrid" className="text-gold underline">
            NFL at Puerta del Sol — Sunday 8 Nov, every game live
          </Link>
        </p>
      </Section>

      <Section title="Gig night: Fontaines D.C.">
        <p>
          Fontaines D.C. play Movistar Arena on Thursday 22 October, with the
          show listed for 20:45. We open at 18:00 on Thursdays: meet your
          friends here before the show or come back to the centre afterwards.
        </p>
        <p>
          <Link href="/fontaines-dc-madrid" className="text-gold underline">
            Fontaines D.C. before and after
          </Link>
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
