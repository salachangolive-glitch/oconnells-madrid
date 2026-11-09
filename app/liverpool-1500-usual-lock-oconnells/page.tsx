import Link from "next/link";
import { PremierSundayFourBars } from "@/components/PremierSundayFourBars";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PATHS } from "@/lib/fan-weekend";
import { PL_KICKOFFS, PL_PATHS } from "@/lib/premier-sunday-8-nov";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Liverpool 15:00 at the usual Sunday lock — O'Connell's",
  description:
    "Crystal Palace vs Liverpool was 15:00 Madrid on Sunday 8 Nov — the hour O'Connell's usually opens. That Sunday we opened at 12:00. Usual Sundays from 14:00.",
  path: PL_PATHS.liverpoolEn,
});

export default function Liverpool1500Page() {
  return (
    <PageShell locale="en" altLangHref={PL_PATHS.liverpoolEs}>
      <PageHero
        eyebrow="Sunday 8 November · gold lettering, Espoz y Mina 7"
        title="Liverpool is 15:00. That is this door's usual lock."
        lead="Crystal Palace vs Liverpool kicked off at 15:00 Madrid time on Sunday 8 November 2026. On every other Sunday that is when O'Connell's turns the key. That Sunday the red facade was already open from 12:00. Independent Irish pub."
      />

      <Section title="The chalkboard still says 14:00" featured>
        <p>
          {ADDRESS.full}. Usual Sunday is 14:00. The English clock this week
          puts Palace vs Liverpool at {PL_KICKOFFS.palaceLiverpool.madrid} — one
          hour after that chalkboard, and the same hour a traveller still
          treats as “when the Irish door wakes.” This Sunday 8 November the
          exception was earlier: we unlocked at 12:00 so the room existed before
          the NFL Madrid game, not because we listed a Premier League grid.
        </p>
        <p>
          If you walk to the gold lettering for Liverpool, you are walking into
          a room that has already been pouring for three hours, not a shuttered
          facade at 14:59. That is this pub’s story. It is not a broadcast
          card.
        </p>
      </Section>

      <Section title="The rest of the 15:00 English hour">
        <p>
          Liverpool is not alone at 15:00. Sunderland vs Chelsea, Brighton vs
          Brentford, and Ipswich vs Bournemouth share that Madrid hour. Four
          matches, one clock. This room cannot invent four feeds. Chelsea’s
          same-hour page and United’s later 17:30 sit on this site as
          orientation — not as a promise that every set shows the name you
          want.
        </p>
        <p>
          <Link href={PL_PATHS.chelseaEn} className="text-gold underline">
            Chelsea at the same 15:00
          </Link>
          {" · "}
          <Link href={PL_PATHS.unitedEn} className="text-gold underline">
            United at 17:30
          </Link>
          {" · "}
          <Link href={PATHS.sundayEn} className="text-gold underline">
            Sunday NFL windows at this door
          </Link>
        </p>
      </Section>

      <Section title="Four Corner is 14:00, with sports screens">
        <p>
          Do not wait on Calle de la Victoria at midday. Four Corner, Victoria
          6, opens Sunday from 14:00 until late, with sports screens. That
          hour is confirmed. What plays on those screens is not. One hour
          later the English 15:00 cluster starts. Ask in each room.
        </p>
        <p>
          <Link href={PATHS.usualSundayEn} className="text-gold underline">
            Usual Sunday is 14:00
          </Link>
          {" · "}
          <Link href={PATHS.hubEn} className="text-gold underline">
            All four bars
          </Link>
        </p>
      </Section>

      <PremierSundayFourBars locale="en" />
    </PageShell>
  );
}
