import Link from "next/link";
import { PostMatchBanner } from "@/components/PostMatchBanner";
import { NflSunday15NovWhatsOn } from "@/components/NflSunday15NovWhatsOn";
import { FixtureList } from "@/components/FixtureList";
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
      {/* Spain v Chile rugby (ferugby.es 31 Aug 2026 calendar: sáb 14 nov 17:00 h, Butarque). */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-14" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          World Rugby Nations Cup: Spain v Chile, Saturday 14 November, 17:00 (Estadio Ontime Butarque, Leganés), live near Sol. Chilean fans: a meeting point near Sol.
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-14" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Nations Championship rugby: Ireland v Fiji, Saturday 14 November, 21:10 Madrid time (Aviva Stadium, Dublin), live near Sol.
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
      {/* Serbia v Germany, UEFA Nations League (match.uefa.com id 2047887, 19:45Z = 20:45 CET; DFB 20:45 +0100; owner 12 Nov 14:58): build-time date gate. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-13" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          UEFA Nations League: Serbia v Germany, Friday 13 November, 20:45 (Belgrade), live near Sol.{" "}
          <Link href="/news/serbia-germany-friday-night-sol" className="text-gold underline">
            Serbia v Germany: Friday night in Sol
          </Link>
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
      {/* Real Madrid v Celta, LaLiga J13 (Radar OC9; realmadrid.com 21/10/2026 21:00 CET, Bernabéu): build-time date gate. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-21" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          LaLiga: Real Madrid v Celta, Saturday 21 November, 21:00 (Bernabéu), live near Sol.{" "}
          <Link href="/news/real-madrid-celta-saturday-night-sol" className="text-gold underline">
            Real Madrid v Celta: Saturday night in Sol
          </Link>
        </p>
      ) : null}
      {/* Tokio Hotel gig night (Radar OC14; palaciovistalegre.com: Mon 23 Nov 2026, start time TBC): build-time date gate. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-23" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          Tokio Hotel at Palacio Vistalegre, Monday 23 November, their only date in Spain: meet at O&apos;Connell St, near Sol, before or after the concert.{" "}
          <Link href="/news/tokio-hotel-madrid-gig-night-sol" className="text-gold underline">
            Tokio Hotel gig night guide
          </Link>
        </p>
      ) : null}
      {/* Real Madrid v PSV, UCL MD5 (match.uefa.com/v5 id 2049625, 2026-11-24T20:00Z = 21:00 CET): build-time date gate. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-24" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          UEFA Champions League: Real Madrid v PSV, Tuesday 24 November, 21:00 (Bernabéu). Dutch / PSV fans: a fans meeting point near Sol before or after.{" "}
          <Link href="/news/real-madrid-psv-tuesday-night-sol" className="text-gold underline">
            Real Madrid v PSV: Tuesday night near Sol
          </Link>
        </p>
      ) : null}
      {/* Real Madrid v Žalgiris, EuroLeague (Movistar Arena 25 Nov 20:45, E2026 game 139, round 14): build-time date gate. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-25" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          EuroLeague: Real Madrid v Žalgiris, Wednesday 25 November, 20:45 (Movistar Arena). Lithuanian / Žalgiris fans: a fans meeting point near Sol before or after.{" "}
          <Link href="/news/real-madrid-zalgiris-wednesday-night-sol" className="text-gold underline">
            Real Madrid v Žalgiris: Wednesday night near Sol
          </Link>
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-25" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          UEFA Champions League: Atlético de Madrid v Viking FK, Wednesday 25 November, 21:00 (Riyadh Air Metropolitano). Norwegian / Viking FK fans: a meeting point near Sol before or after — not the NFL Minnesota Vikings.{" "}
          <Link href="/news/atletico-viking-wednesday-night-sol" className="text-gold underline">
            Atlético v Viking FK: Wednesday night near Sol
          </Link>
          {" · "}
          <Link href="/es/noticias/atletico-viking-miercoles-sol" className="text-gold underline">
            En español
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
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-13" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          EuroLeague: Panathinaikos v FC Barcelona, Friday 13 November, 20:15, live near Sol.
        </p>
      ) : null}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-15" ? (
        <NflSunday15NovWhatsOn locale="en" />
      ) : null}
      {/* Spain v England, UEFA Nations League; Radar file verified UEFA; on La 1. Sunday 14:00–03:00. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-15" ? (
        <p className="mb-6 text-sm text-cream-muted sm:text-base">
          UEFA Nations League: Spain v England, Sunday 15 November, 20:45 (Riyadh Air Metropolitano), on La 1, live on the big screen near Sol. Open on Sundays from 14:00 until 03:00. English fans: a meeting point near Sol. No reservations: first come, first served.{" "}
          <Link href="/news/spain-england-sunday-night-sol" className="text-gold underline">
            Spain v England: Sunday night in Sol
          </Link>
        </p>
      ) : null}
      <p className="mb-6 text-sm text-cream-muted sm:text-base">
        How the Confirmed label works on this list — Madrid time only, ask which
        game at the bar:{" "}
        <Link
          href="/how-whats-on-marks-confirmed-this-door"
          className="text-gold underline"
        >
          how What&apos;s On marks Confirmed at this door
        </Link>
        .
      </p>
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
