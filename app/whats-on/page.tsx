import Link from "next/link";
import { PostMatchBanner } from "@/components/PostMatchBanner";
import { FixtureList } from "@/components/FixtureList";
import { HalloweenTeaser } from "@/components/HalloweenSol";
import { NflSunday8Nov } from "@/components/NflSunday8Nov";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { agendaBuildNow, madridTodayYmd, RECURRING } from "@/lib/fixtures";
import { SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "What's On — Live Sports | O'Connell St Madrid",
  description:
    "What's On at O'Connell St Madrid: confirmed live sports with Madrid kickoff times. Football first, plus basketball, rugby, Formula 1, tennis and more when marked Confirmed.",
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
      {/* Oktoberfest Madrid link: build-time date gate, gone from the 16 Nov daily rebuild. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-15" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Oktoberfest Madrid season (22 Oct – 15 Nov, Thursday to Sunday):{" "}
          <Link href="/oktoberfest-madrid-sol" className="text-gold underline">
            getting there from Sol, and a beer in the centre
          </Link>
        </p>
      ) : null}
      {/* Bayern fans articles (Atlético–Bayern 3 Nov): build-time date gate, gone from the 4 Nov daily rebuild. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-03" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Atlético v Bayern, Tuesday 3 November, 21:00:{" "}
          <Link href="/news/bayern-fans-halloween-madrid" className="text-gold underline">
            Bayern fans in Madrid early: Halloween near Sol
          </Link>
          {" · "}
          <a href="/de/bayern-fans-halloween-madrid" hrefLang="de" lang="de" className="text-gold underline">
            Halloween an der Sol (Deutsch)
          </a>
        </p>
      ) : null}
      {/* Concerts (DG 25 Oct; times per movistararena.es): build-time date gates, each line gone from the daily rebuild after its date. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-06" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Duran Duran at the Movistar Arena, Friday 6 November, 21:00: meet at O&apos;Connell St, near Sol, before or after the concert.{" "}
          <Link href="/news/duran-duran-madrid-gig-night-sol" className="text-gold underline">
            Duran Duran gig night guide
          </Link>
        </p>
      ) : null}
      {/* Atlético–Barcelona LaLiga J12 (Radar OC3, laliga.com J12): build-time date gate. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-08" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          LaLiga: Atlético Madrid v Barcelona, Sunday 8 November, 21:00, live near Sol.{" "}
          <Link href="/news/atletico-barcelona-sunday-night-sol" className="text-gold underline">
            Big LaLiga Sunday night in Sol
          </Link>
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-10" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Bryan Adams «Roll with the Punches» at the Movistar Arena, Tuesday 10 November, 20:30: meet at O&apos;Connell St, near Sol, before or after the concert.{" "}
          <Link href="/news/bryan-adams-madrid-gig-night-sol" className="text-gold underline">
            Bryan Adams gig night guide
          </Link>
        </p>
      ) : null}
      {/* England v Croatia, UEFA Nations League (Radar OC5; match.uefa.com id 2047879, 19:45Z = 20:45 CET): build-time date gate. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-12" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          UEFA Nations League: England v Croatia, Thursday 12 November, 20:45 (Wembley), live near Sol.{" "}
          <Link href="/news/england-croatia-thursday-night-sol" className="text-gold underline">
            England Thursday in Sol
          </Link>
        </p>
      ) : null}
      {/* Real Madrid Femenino UWCL (DG 26 Oct; times per match.uefa.com + realmadrid.com): build-time date gates, each line gone from the daily rebuild after its date. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-10" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Women&apos;s Champions League: Real Madrid v Paris FC, Tuesday 10 November, 18:45 (Di Stéfano), live near Sol.{" "}
          <span lang="fr">Supporters du Paris FC : O&apos;Connell St, un pub près de Sol pour se retrouver avant le match.</span>
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-18" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Women&apos;s Champions League: Real Madrid v Inter, Wednesday 18 November, 18:45 (Di Stéfano), live near Sol.
        </p>
      ) : null}
      {/* Spain v England, UEFA Nations League (DG 26 Oct via Radar; kickoff per match.uefa.com id 2047904, 19:45Z = 20:45 CET; date per rfef.es): build-time date gate, gone from the 16 Nov daily rebuild. Channel TBC until RTVE publishes. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-15" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          UEFA Nations League: Spain v England, Sunday 15 November, 20:45 (Riyadh Air Metropolitano), live near Sol. TV channel TBC.
        </p>
      ) : null}
      <NflSunday8Nov locale="en" today={madridTodayYmd(agendaBuildNow())} context="whats-on" />
      <HalloweenTeaser locale="en" today={madridTodayYmd(agendaBuildNow())} />
      <FixtureList locale="en" />

      <Section title="Live sports at O'Connell St">
        <p>
          O&apos;Connell St is an Irish pub by Puerta del Sol — Espoz y Mina 7.
          We put major live sport on our screens when it&apos;s confirmed:
          football, NBA, rugby, Formula 1, tennis and more. See Today and the next 7 days on this page, or ask at the bar if you&apos;re
          looking for a specific game.
        </p>
        <p>
          Matchday plans? Here&apos;s how to{" "}
          <Link href="/watch-football-madrid" className="text-gold underline">
            watch football in Sol
          </Link>{" "}
          with us, with this week&apos;s confirmed games.
        </p>
        <p>
          <Link href="/nfl-madrid" className="text-gold underline">
            NFL in Madrid
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
