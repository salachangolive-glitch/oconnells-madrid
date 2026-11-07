import Link from "next/link";
import { PremierSundayFourBars } from "@/components/PremierSundayFourBars";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PATHS } from "@/lib/fan-weekend";
import { PL_KICKOFFS, PL_PATHS } from "@/lib/premier-sunday-8-nov";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "United 17:30 after the English pair — O'Connell's, Sol",
  description:
    "Manchester United vs Aston Villa is 17:30 Madrid Sunday 8 Nov, after Liverpool and Chelsea at 15:00. O'Connell's, Espoz y Mina 7. Ask which game is on. Four bars, Maps, Four Corner 14:00.",
  path: PL_PATHS.unitedEn,
});

export default function United1730Page() {
  return (
    <PageShell locale="en" altLangHref={PL_PATHS.unitedEs}>
      <PageHero
        eyebrow="Sunday 8 November · the later English kickoff"
        title="United is 17:30. After the pair. After the NFL kickoff too."
        lead="Manchester United vs Aston Villa is 17:30 Madrid. Liverpool and Chelsea already went at 15:00. The NFL Madrid game already went at 15:30. This Irish door on Espoz y Mina 7 does not pretend those clocks are empty. Ask which game is on."
      />

      <Section title="The later English lock" featured>
        <p>
          {ADDRESS.full}. {PL_KICKOFFS.unitedVilla.madrid} is the only Premier
          League kickoff on Sunday 8 November that is not stacked at 15:00.
          Palace vs Liverpool, Sunderland vs Chelsea, Brighton vs Brentford,
          Ipswich vs Bournemouth — all 15:00 Madrid. United vs Villa is the
          one that waits.
        </p>
        <p>
          Waiting does not mean the room is waiting for United. At 15:30
          Bengals vs Falcons is the Madrid NFL game. If you arrive at 17:20
          for Old Trafford, you may walk into American football still on the
          glass. That overlap is the point of saying it out loud. We do not
          take United off a website promise. We tell you to ask.
        </p>
      </Section>

      <Section title="How the afternoon actually stacks">
        <ul className="list-disc space-y-2 pl-5">
          <li>12:00 — this door opens (usual Sunday is 14:00).</li>
          <li>
            14:00 — Four Corner, Victoria 6, opens until late, sports screens.
          </li>
          <li>15:00 — Liverpool, Chelsea, Brighton, Ipswich (English hour).</li>
          <li>15:30 — Bengals vs Falcons (NFL Madrid Game).</li>
          <li>17:30 — Manchester United vs Aston Villa.</li>
        </ul>
        <p className="mt-3">
          Atlético vs Barcelona is 21:00 — not Real Madrid vs Barcelona. Still
          ask. Not every game on every screen.
        </p>
        <p>
          <Link href={PL_PATHS.liverpoolEn} className="text-gold underline">
            Liverpool 15:00
          </Link>
          {" · "}
          <Link href={PL_PATHS.chelseaEn} className="text-gold underline">
            Chelsea 15:00
          </Link>
          {" · "}
          <Link href={PATHS.sundayEn} className="text-gold underline">
            NFL Sunday at this pub
          </Link>
        </p>
      </Section>

      <Section title="Four sister doors, one later English kickoff">
        <p>
          O’Reilly’s kitchen is already on from 11:30 in the passage. Dubliners
          from 12:00 on this street. We from 12:00 this Sunday. Four Corner
          from 14:00 with screens. United at 17:30 is late enough that all four
          locks have turned. It is not late enough to invent a United listing
          for Victoria 6.
        </p>
        <p>
          <Link href={PATHS.hubEn} className="text-gold underline">
            Four bars near Sol
          </Link>
        </p>
      </Section>

      <PremierSundayFourBars locale="en" />
    </PageShell>
  );
}
