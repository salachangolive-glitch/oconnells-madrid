import Link from "next/link";
import { PremierSundayFourBars } from "@/components/PremierSundayFourBars";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { PATHS } from "@/lib/fan-weekend";
import { PL_KICKOFFS, PL_PATHS } from "@/lib/premier-sunday-8-nov";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Chelsea 15:00 — same English hour as Liverpool, O'Connell's",
  description:
    "Sunderland vs Chelsea is 15:00 Madrid Sunday 8 Nov, the same hour as Palace–Liverpool. O'Connell's, Espoz y Mina 7. Ask which game is on. Four bars, Maps, Four Corner 14:00 screens.",
  path: PL_PATHS.chelseaEn,
});

export default function Chelsea1500Page() {
  return (
    <PageShell locale="en" altLangHref={PL_PATHS.chelseaEs}>
      <PageHero
        eyebrow="Sunday 8 November · one hour, four English matches"
        title="Chelsea is not a second clock. Chelsea is the same 15:00."
        lead="Sunderland vs Chelsea kicks off at 15:00 Madrid — the same hour as Crystal Palace vs Liverpool. This Irish room on Espoz y Mina does not get a second English afternoon. Independent pub. Ask which game is on the glass."
      />

      <Section title="Four names, one Madrid hour" featured>
        <p>
          {ADDRESS.full}. {PL_KICKOFFS.sunderlandChelsea.madrid} is Sunderland
          vs Chelsea. It is also Palace vs Liverpool, Brighton vs Brentford,
          and Ipswich vs Bournemouth. The Premier League moved three of those
          Sunday ties off the old 15:00 UK slot; in Madrid they still land
          together at 15:00. That is a crowd problem, not a listing.
        </p>
        <p>
          We will not print “Chelsea live here” as if the other three matches
          vanished. If your group cares about the blue shirts, say so at the
          bar. If the set is already on Liverpool, that is the honest answer
          — not a website inventing a grid.
        </p>
      </Section>

      <Section title="This door was already open">
        <p>
          Usual Sunday here is 14:00. That Sunday 8 November we opened at 12:00.
          By Chelsea’s 15:00 the gold lettering has been lit for three hours,
          and Four Corner on Victoria 6 has been open for one hour with sports
          screens. The English hour does not open this pub. The NFL exception
          already did.
        </p>
        <p>
          <Link href={PL_PATHS.liverpoolEn} className="text-gold underline">
            Liverpool at the usual lock
          </Link>
          {" · "}
          <Link href={PL_PATHS.unitedEn} className="text-gold underline">
            United at 17:30, after the pair
          </Link>
          {" · "}
          <Link href={PATHS.hubEn} className="text-gold underline">
            Addresses and Maps
          </Link>
        </p>
      </Section>

      <Section title="Four Corner 14:00 — screens, no invented Chelsea listing">
        <p>
          Four Corner, Calle de la Victoria 6, 28012 Madrid, opens Sunday from
          14:00 until late, with sports screens. We do not list Chelsea there.
          We do not list Liverpool there. The confirmed fact is the hour and
          the screens. Ask which game is on.
        </p>
      </Section>

      <PremierSundayFourBars locale="en" />
    </PageShell>
  );
}
