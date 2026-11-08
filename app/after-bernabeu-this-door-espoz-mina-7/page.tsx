import Link from "next/link";
import { AfterGameSundayFourBars } from "@/components/AfterGameSundayFourBars";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { AFTER_GAME_PATHS } from "@/lib/after-game-sunday-8-nov";
import { PATHS } from "@/lib/fan-weekend";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "After the Bernabéu: this door on Espoz y Mina 7",
  description:
    "Leave the Madrid Game at the Bernabéu for O'Connell's, Calle de Espoz y Mina 7, then Dubliners at the same number, O'Reilly's Pasaje de Matheu 4, and Four Corner Victoria 6. Maps and GET DIRECTIONS. Four Corner open from 14:00 with sports screens.",
  path: AFTER_GAME_PATHS.bernabeuEn,
});

export default function AfterBernabeuThisDoorPage() {
  return (
    <PageShell locale="en" altLangHref={AFTER_GAME_PATHS.bernabeuEs}>
      <PageHero
        eyebrow="Sunday 8 November · stadium-exit to this street"
        title="After the Bernabéu, this door on Espoz y Mina 7"
        lead="When you leave the Madrid Game, the Irish door that owns this street is the red facade with gold lettering. O'Connell's. Then the three sister doors. Independent pub. Not an official NFL event. We do not invent the walk from the stadium."
      />

      <Section title="Stadium-exit lands on this street" featured>
        <p>
          {ADDRESS.full}. That is this pub: O&apos;Connell St on the Maps pin,
          gold lettering on the red facade. Dubliners shares the number and
          keeps its own door. We are not a tourist loop that starts on the
          square and counts four rooms in a row. We are the door you can
          actually name when the stadium lets you out.
        </p>
        <p>
          GET DIRECTIONS below is the CID pin for this listing. We do not
          invent metres, taxi minutes, or a Metro clock from the Bernabéu.
          Open Maps. Walk or ride however you already know. The street you
          want is Calle de Espoz y Mina. The lettering you want is ours.
        </p>
      </Section>

      <Section title="Then the three sister doors">
        <p>
          Same number, different door: Dubliners, still Espoz y Mina 7. Round
          the corner: O&apos;Reilly&apos;s Restaurant Bar, Pasaje de Matheu 4.
          One street over: Four Corner, Calle de la Victoria 6 — already open
          from 14:00 until late, with sports screens. That opening is
          confirmed. What plays on those screens is not listed here. Ask
          which game is on.
        </p>
        <p>
          Hop if the room is full. Stay if the gold lettering still has a
          stool. Four addresses, four Maps links. This door first.
        </p>
        <p>
          <Link href={AFTER_GAME_PATHS.eveningEn} className="text-gold underline">
            Evening NFL, then Atlético–Barcelona 21:00, from this door
          </Link>
          {" · "}
          <Link href={PATHS.hubEn} className="text-gold underline">
            All four bars
          </Link>
        </p>
      </Section>

      <AfterGameSundayFourBars locale="en" />
    </PageShell>
  );
}
