import Link from "next/link";
import { FourBarsNearSol } from "@/components/FourBarsNearSol";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { TonightMeetupCta } from "@/components/TonightMeetupCta";
import { FAN_WEEKEND, PATHS, WEEKEND_HOURS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "4 bars, one fan weekend near Sol — 7–8 Nov",
  description:
    "O'Reilly's, Dubliners, O'Connell's and Four Corner: one fan weekend near Puerta del Sol, 7–8 November. Addresses, Maps and hours. Independent Irish pubs — not an official NFL event.",
  path: PATHS.hubEn,
});

export default function FourBarsHubPage() {
  return (
    <PageShell locale="en" altLangHref={PATHS.hubEs}>
      <PageHero
        eyebrow={FAN_WEEKEND.sloganEn}
        title="Four sister bars, one meeting point near Sol"
        lead="Saturday 7 and Sunday 8 November. Not four separate nights out — four rooms a few minutes from Puerta del Sol. Independent Irish pubs. Not an official NFL event."
      />

      <TonightMeetupCta locale="en" />

      <Section title="Tonight 18:00–19:00 — three rooms, not Four Corner">
        <p>
          Meetup 18:00–19:00 at O&apos;Reilly&apos;s, Dubliners and
          O&apos;Connell&apos;s. Four Corner is Sunday from 14:00 only, with
          sports screens. No Saturday NFL. Valencia vs Real Madrid at 21:00
          when we are showing it.
        </p>
      </Section>

      <Section title="How the weekend sits">
        <p>
          Saturday has no official NFL kickoffs. Lead with the three rooms that
          are already open: O&apos;Reilly&apos;s from 11:30, Dubliners from
          12:00, O&apos;Connell&apos;s from 15:00 on Espoz y Mina 7. Four Corner
          joins on Sunday from 14:00 until late, with NFL on the screens — ask
          which game is on.
        </p>
        <p>{WEEKEND_HOURS.sun8NovNoteEn}</p>
        <p>
          Sunday is the NFL day: Bengals vs Falcons at 15:30 (the Madrid game at
          the Bernabéu), more NFL from 19:00, Atlético vs Barcelona at 21:00.
          Ask which game is on. We do not promise every kickoff on every screen.
        </p>
        <p>
          <Link href={PATHS.saturdayEn} className="text-gold underline">
            Saturday at O&apos;Connell&apos;s
          </Link>
          {" · "}
          <Link href={PATHS.laterDoorEn} className="text-gold underline">
            This door until 15:00
          </Link>
          {" · "}
          <Link href={PATHS.sundayEn} className="text-gold underline">
            Sunday screens
          </Link>
          {" · "}
          <Link href={PATHS.usualSundayEn} className="text-gold underline">
            Usual Sunday is 14:00
          </Link>
        </p>
      </Section>

      <FourBarsNearSol locale="en" />
    </PageShell>
  );
}
