import Link from "next/link";
import { PostMatchBanner } from "@/components/PostMatchBanner";
import { FixtureList } from "@/components/FixtureList";
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
        lead="Live sport at our Irish pub near Puerta del Sol. All times are shown in Madrid time. Events marked ‘Confirmed’ are scheduled to be shown on our screens."
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
      {/* Concerts (DG 25 Oct; times per movistararena.es): build-time date gates, each line gone from the daily rebuild after its date. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-06" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Duran Duran at the Movistar Arena, Friday 6 November, 21:00: meet at O&apos;Connell St, near Sol, before or after the concert.{" "}
          <Link href="/news/duran-duran-madrid-gig-night-sol" className="text-gold underline">
            Duran Duran gig night guide
          </Link>
        </p>
      ) : null}
      {/* Where to watch NFL this weekend (ciclo 1, DG 6 Nov): build-time date gate. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-08" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          NFL Madrid Game weekend: Bengals at Falcons, Sunday 8 November, 15:30, plus Sunday NFL from 19:00, live near Sol. Open from 12:00.{" "}
          <Link href="/news/where-to-watch-nfl-madrid-sol" className="text-gold underline">
            Where to watch NFL this weekend near Sol
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
      {/* Serbia v Germany, UEFA Nations League (DG 2 Nov via Radar; match.uefa.com id 2047887, 19:45Z = 20:45 CET, Belgrade): build-time date gate, gone from the 14 Nov daily rebuild. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-13" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          UEFA Nations League: Serbia v Germany, Friday 13 November, 20:45 Madrid time (Belgrade), live near Sol.{" "}
          <Link href="/news/serbia-germany-friday-night-sol" className="text-gold underline">
            Serbia v Germany: Friday night in Sol
          </Link>{" "}
          <span lang="de">Serbien – Deutschland, Freitag, 13. November, 20:45 Uhr: live im O&apos;Connell St an der Puerta del Sol.</span>
        </p>
      ) : null}
      {/* Germany v Netherlands, UEFA Nations League (Radar OC11; match.uefa.com id 2047909, 19:45Z = 20:45 CET): build-time date gate. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-16" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          UEFA Nations League: Germany v Netherlands, Monday 16 November, 20:45 (Berlin), live near Sol.{" "}
          <Link href="/news/germany-netherlands-monday-night-sol" className="text-gold underline">
            Germany v Netherlands: Monday night in Sol
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
          Women&apos;s Champions League: Real Madrid v Inter, Wednesday 18 November, 18:45 (Di Stéfano), live near Sol. TV channel TBC.{" "}
          <Link href="/news/real-madrid-inter-womens-champions-league-sol" className="text-gold underline">
            Real Madrid v Inter in Sol
          </Link>
        </p>
      ) : null}
      {/* Getafe v Brighton + Real Madrid v Crvena Zvezda, visiting-fans articles (owner order 4 Nov 2026 via DG; uefa.com / euroleague.net): build-time date gates. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-05" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          UEFA Conference League: Getafe v Brighton, Thursday 5 November, 21:00 (Coliseum, Getafe), live on the big screen near Sol. We open at 18:00.{" "}
          <Link href="/news/getafe-brighton-thursday-night-sol" className="text-gold underline">
            Brighton fans in Madrid: Getafe v Brighton near Sol
          </Link>
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-12" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          EuroLeague: Real Madrid v Crvena Zvezda, Thursday 12 November, 21:00 (Movistar Arena), live near Sol.{" "}
          <Link href="/news/real-madrid-crvena-zvezda-thursday-sol" className="text-gold underline">
            Crvena Zvezda in Madrid: Thursday night near Sol
          </Link>
        </p>
      ) : null}
      {/* Spain v England, UEFA Nations League (DG 26 Oct via Radar; kickoff per match.uefa.com id 2047904, 19:45Z = 20:45 CET; date per rfef.es): build-time date gate, gone from the 16 Nov daily rebuild. No channel named (DG 4 Nov: not confirmed by rtve.es for this match); Sunday 14:00–03:00 owner-confirmed. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-15" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          UEFA Nations League: Spain v England, Sunday 15 November, 20:45 (Riyadh Air Metropolitano), live on the big screen near Sol, open on Sundays from 14:00 until 03:00. No reservations: first come, first served.{" "}
          <Link href="/news/spain-england-sunday-night-sol" className="text-gold underline">
            Spain v England: Sunday night in Sol
          </Link>
        </p>
      ) : null}
      <NflSunday8Nov locale="en" today={madridTodayYmd(agendaBuildNow())} context="whats-on" />
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
