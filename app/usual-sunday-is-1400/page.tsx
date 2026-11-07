import Link from "next/link";
import { FourBarsNearSol } from "@/components/FourBarsNearSol";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PATHS, WEEKEND_HOURS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Usual Sunday is 14:00 — this Sunday O'Connell's opens at 12:00",
  description:
    "O'Connell's usual Sunday is 14:00. Sunday 8 Nov we open at 12:00. Four Corner still 14:00 on Victoria 6, sports screens. Addresses and Maps for all four bars near Sol.",
  path: PATHS.usualSundayEn,
});

export default function UsualSundayPage() {
  return (
    <PageShell locale="en" altLangHref={PATHS.usualSundayEs}>
      <PageHero
        eyebrow="Sunday 8 November · one-day break in the hours"
        title="Usual Sunday is 14:00. This one is not."
        lead="The hours on this pub still read Sunday from 14:00. Keep that for every other week. Sunday 8 November the lock turns at 12:00 so the room exists before the Madrid NFL game. Independent Irish pub on Espoz y Mina 7. Not an official NFL event."
      />

      <Section title="Why the chalkboard is wrong for one date" featured>
        <p>
          {ADDRESS.full}. {WEEKEND_HOURS.sun8NovNoteEn} We are not copying
          anyone else&apos;s lunch service. This is a one-day exception so the
          Irish room is already a room at midday, not a shuttered facade while
          kickoff talk starts on the square.
        </p>
        <p>
          Bengals vs Falcons is at 15:30 at the Bernabéu. You can watch it here
          on the big screen if you are not at the stadium. From 19:00 this is
          also where you land if you come back into Sol. Ask which game is on.
          We do not promise every kickoff on every set.
        </p>
      </Section>

      <Section title="Four Corner still opens at 14:00 — with screens">
        <p>
          Do not mix the two Sunday clocks. Four Corner at Calle de la Victoria
          6 still opens from 14:00 until late, with sports screens — ask which
          game is on. That is their hour, not ours. We are already open two
          hours by then.
        </p>
        <p>
          O&apos;Reilly&apos;s at Pasaje de Matheu 4 keeps 11:30–01:30.
          Dubliners on this street is from 12:00. Three rooms besides Four
          Corner, then Four Corner from 14:00.
        </p>
        <p>
          <Link href={PATHS.sundayEn} className="text-gold underline">
            Sunday windows at this pub
          </Link>
          {" · "}
          <Link href={PATHS.hubEn} className="text-gold underline">
            Addresses and Maps
          </Link>
          {" · "}
          <Link href={PATHS.laterDoorEn} className="text-gold underline">
            Saturday: this door until 15:00
          </Link>
        </p>
      </Section>

      <FourBarsNearSol locale="en" />
    </PageShell>
  );
}
