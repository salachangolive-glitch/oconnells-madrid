import Link from "next/link";
import { FourBarsNearSol } from "@/components/FourBarsNearSol";
import { PageShell } from "@/components/PageShell";
import { PastEventNotice } from "@/components/PastEventNotice";
import { PageHero, Section } from "@/components/Prose";
import { FAN_WEEKEND, PATHS, WEEKEND_HOURS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "4 bars, one fan weekend near Sol — past event",
  description:
    "O'Reilly's, Dubliners, O'Connell's and Four Corner: the fan weekend near Puerta del Sol, 7–8 November 2026, has taken place. Addresses and Maps. Independent Irish pubs.",
  path: PATHS.hubEn,
});

export default function FourBarsHubPage() {
  return (
    <PageShell locale="en" altLangHref={PATHS.hubEs}>
      <PageHero
        eyebrow={`Past event · ${FAN_WEEKEND.sloganEn}`}
        title="Four sister bars, one meeting point near Sol"
        lead="Saturday 7 and Sunday 8 November 2026. Four rooms a few minutes from Puerta del Sol: O'Reilly's, Dubliners, O'Connell's and Four Corner. Independent Irish pubs."
      />
      <PastEventNotice locale="en" />

      <Section title="How the weekend sat">
        <p>
          Saturday had no NFL kickoffs. Three rooms were already open:
          O&apos;Reilly&apos;s from 11:30, Dubliners from 12:00,
          O&apos;Connell&apos;s from 15:00 on Espoz y Mina 7. Four Corner
          joined on Sunday from 14:00 until late, with NFL on the screens.
        </p>
        <p>{WEEKEND_HOURS.sun8NovNoteEn}</p>
        <p>
          Sunday was the NFL day: Bengals vs Falcons at 15:30 (the Madrid game at
          the Bernabéu), more NFL from 19:00, Atlético vs Barcelona at 21:00.
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
