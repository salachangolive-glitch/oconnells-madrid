import Link from "next/link";
import { FourBarsNearSol } from "@/components/FourBarsNearSol";
import { PageShell } from "@/components/PageShell";
import { PastEventNotice } from "@/components/PastEventNotice";
import { PageHero, Section } from "@/components/Prose";
import { PATHS, WEEKEND_HOURS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "NFL fans in Madrid Saturday 7 Nov — past event",
  description:
    "Saturday 7 November 2026 at O'Connell's, Espoz y Mina 7: open 15:00–03:30, no live NFL that day. That Saturday has taken place. Usual Sundays from 14:00. See What's On.",
  path: PATHS.saturdayEn,
});

export default function SaturdayFansPage() {
  return (
    <PageShell locale="en" altLangHref={PATHS.saturdayEs}>
      <PageHero
        eyebrow="Past event · Saturday 7 November 2026 · Espoz y Mina 7"
        title="NFL fans in Madrid that Saturday"
        lead="Saturday 7 November 2026 had no live NFL. O'Connell's opened at 15:00 (until 03:30) at Calle de Espoz y Mina 7, the same street as Dubliners. Independent Irish pub."
      />
      <PastEventNotice locale="en" />

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
          There were no NFL games on Saturday 7 November. That Saturday was
          European football in Sol, not American.
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

      <Section title="The Sunday that followed">
        <p>{WEEKEND_HOURS.sun8NovNoteEn}</p>
        <p>
          Sunday 8 November: Bengals vs Falcons at 15:30 (Madrid game at the
          Bernabéu), NFL windows from 19:00, Atlético vs Barcelona at 21:00.
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
