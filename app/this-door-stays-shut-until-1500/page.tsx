import Link from "next/link";
import { FourBarsNearSol } from "@/components/FourBarsNearSol";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { TonightMeetupCta } from "@/components/TonightMeetupCta";
import { PATHS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "This door stays shut until 15:00 — O'Connell's, Espoz y Mina 7",
  description:
    "O'Connell's is the later lock on Espoz y Mina 7: Saturday from 15:00. Meetup 18:00–19:00 after we open. Four Corner Sunday 14:00 with sports screens. Maps for all four bars.",
  path: PATHS.laterDoorEn,
});

export default function LaterDoorPage() {
  return (
    <PageShell locale="en" altLangHref={PATHS.laterDoorEs}>
      <PageHero
        eyebrow="Saturday 7 November · red facade, gold lettering"
        title="This door stays shut until 15:00"
        lead="If you walk Espoz y Mina at midday looking for our gold lettering, the lock has not turned. That is this pub, not a mistake. O'Connell's opens at 15:00 on Saturday. Independent Irish room. Not an official NFL event."
      />

      <TonightMeetupCta locale="en" />

      <Section title="The later lock on this street" featured>
        <p>
          {ADDRESS.full}. Same street as Dubliners, later door. They are already
          pouring from 12:00. We are the red facade with green trim: 15:00 until
          03:30. If you want kitchen and a terrace first, that is
          O&apos;Reilly&apos;s at Pasaje de Matheu 4 from 11:30 — then walk round
          to this lettering after three.
        </p>
        <p>
          There is no official NFL kickoff on Saturday 7 November. Do not come
          here at 15:01 expecting an American game on the glass. Valencia vs
          Real Madrid is at 21:00 when we are showing it — ask at the bar.
        </p>
      </Section>

      <Section title="Meetup after the lock turns">
        <p>
          The 18:00–19:00 meetup is not a closed-door appointment. It is three
          hours after we open: O&apos;Connell&apos;s, Dubliners on this street,
          O&apos;Reilly&apos;s around the corner. Four Corner on Calle de la
          Victoria 6 is not in tonight&apos;s window.
        </p>
        <p>
          <Link href={PATHS.saturdayEn} className="text-gold underline">
            Saturday at this pub
          </Link>
          {" · "}
          <Link href={PATHS.hubEn} className="text-gold underline">
            All four bars
          </Link>
        </p>
      </Section>

      <Section title="Four Corner is tomorrow, 14:00, with screens">
        <p>
          Four Corner joins Sunday from 14:00 until late, with sports screens —
          ask which game is on. We do not invent their listings. This Sunday we
          ourselves open from 12:00 (usual Sundays from 14:00).
        </p>
        <p>
          <Link href={PATHS.usualSundayEn} className="text-gold underline">
            Usual Sunday is 14:00
          </Link>
          {" · "}
          <Link href={PATHS.sundayEn} className="text-gold underline">
            Sunday screens at O&apos;Connell&apos;s
          </Link>
        </p>
      </Section>

      <FourBarsNearSol locale="en" />
    </PageShell>
  );
}
