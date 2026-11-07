import Link from "next/link";
import { FourBarsNearSol } from "@/components/FourBarsNearSol";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { TonightMeetupCta } from "@/components/TonightMeetupCta";
import { PATHS, WEEKEND_HOURS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "NFL fans in Madrid this Saturday — O'Connell's near Sol",
  description:
    "NFL fans in Madrid this Saturday: O'Connell's on Espoz y Mina 7 opens 15:00–03:30. No live NFL today. Valencia vs Real Madrid 21:00 when we are showing it. Sunday we open from 12:00.",
  path: PATHS.saturdayEn,
});

export default function SaturdayFansPage() {
  return (
    <PageShell locale="en" altLangHref={PATHS.saturdayEs}>
      <PageHero
        eyebrow="Saturday 7 November · Espoz y Mina 7"
        title="NFL fans in Madrid this Saturday"
        lead="The weekend is already on — just not on an NFL clock. O'Connell's opens at 15:00 (until 03:30) at Calle de Espoz y Mina 7, the same street as Dubliners. Independent Irish pub. Not an official NFL event."
      />

      <TonightMeetupCta locale="en" />

      <Section title="Meetup 18:00–19:00 at this door">
        <p>
          Saturday 7 November meetup is 18:00–19:00 at O&apos;Connell&apos;s
          (this room, Espoz y Mina 7), Dubliners on the same street, and
          O&apos;Reilly&apos;s at Pasaje de Matheu 4. We open at 15:00, so the
          window starts after the lock turns. Four Corner is not open tonight —
          Sunday from 14:00 until late, with sports screens. No Saturday NFL
          games. Valencia vs Real Madrid is at 21:00 when we are showing it.
        </p>
      </Section>

      <Section title="No live NFL today" featured>
        <p>
          There are no official NFL games on Saturday 7 November. Do not come
          looking for a kickoff on our screens today. Stay in Sol, meet the
          four-bar crowd, and ask which football is on.
        </p>
        <p>
          Valencia vs Real Madrid is at 21:00. We put it on when we are showing
          it — ask at the bar. Saturday football around here is European, not
          American.
        </p>
      </Section>

      <Section title="This room, this hour">
        <p>
          {ADDRESS.full}. Red facade, green trim, gold lettering. We open later
          than the restaurant-bar around the corner: 15:00 today, then we stay
          until 03:30. If you want lunch and a terrace first, that is
          O&apos;Reilly&apos;s on Pasaje de Matheu 4 from 11:30. Dubliners is
          already open on this street from 12:00.
        </p>
        <p>
          Four Corner on Calle de la Victoria 6 joins Sunday from 14:00 until
          late, with NFL on the screens — ask which game is on.
        </p>
      </Section>

      <Section title="Sunday is public today">
        <p>{WEEKEND_HOURS.sun8NovNoteEn}</p>
        <p>
          Tomorrow: Bengals vs Falcons at 15:30 (Madrid game at the Bernabéu;
          big screen here if you are not at the stadium), NFL windows from
          19:00, Atlético vs Barcelona at 21:00. Ask which game is on. We do
          not promise every kickoff on every screen.
        </p>
        <p>
          <Link href={PATHS.sundayEn} className="text-gold underline">
            Sunday 8 Nov at O&apos;Connell&apos;s
          </Link>
          {" · "}
          <Link href={PATHS.hubEn} className="text-gold underline">
            All four bars
          </Link>
        </p>
      </Section>

      <FourBarsNearSol locale="en" />
    </PageShell>
  );
}
