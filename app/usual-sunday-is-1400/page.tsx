import Link from "next/link";
import { FourBarsNearSol } from "@/components/FourBarsNearSol";
import { PageShell } from "@/components/PageShell";
import { PastEventNotice } from "@/components/PastEventNotice";
import { PageHero, Section } from "@/components/Prose";
import { PATHS, WEEKEND_HOURS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Usual Sunday is 14:00 — 8 Nov 12:00 was a one-day exception",
  description:
    "O'Connell's usual Sunday is 14:00. Sunday 8 November 2026 opened at 12:00 as a one-day exception. That day has taken place. Usual hours are on the location page.",
  path: PATHS.usualSundayEn,
});

export default function UsualSundayPage() {
  return (
    <PageShell locale="en" altLangHref={PATHS.usualSundayEs}>
      <PageHero
        eyebrow="Past event · Sunday 8 November 2026 · one-day hours exception"
        title="Usual Sunday is 14:00. That one was not."
        lead="The hours on this pub still read Sunday from 14:00. Keep that for every other week. Sunday 8 November 2026 the lock turned at 12:00 so the room existed before the Madrid NFL game. Independent Irish pub on Espoz y Mina 7."
      />
      <PastEventNotice locale="en" />

      <Section title="Why the chalkboard is wrong for one date" featured>
        <p>
          {ADDRESS.full}. {WEEKEND_HOURS.sun8NovNoteEn}           We were not copying
          anyone else&apos;s lunch service. That was a one-day exception so the
          Irish room was already a room at midday.
        </p>
        <p>
          Bengals vs Falcons was at 15:30 at the Bernabéu. From 19:00 that
          Sunday this was also where people landed if they came back into Sol.
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
