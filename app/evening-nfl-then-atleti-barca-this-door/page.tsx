import Link from "next/link";
import { AfterGameSundayFourBars } from "@/components/AfterGameSundayFourBars";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { AFTER_GAME_PATHS } from "@/lib/after-game-sunday-8-nov";
import { PATHS } from "@/lib/fan-weekend";
import { PL_PATHS } from "@/lib/premier-sunday-8-nov";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Evening NFL then Atlético–Barcelona 21:00 from this door",
  description:
    "From O'Connell's, Espoz y Mina 7: NFL RedZone from 19:00, then Atlético vs Barcelona at 21:00. Named listings only where this site already confirms them. Ask which game is on. Premier League sits alongside. Four Corner from 14:00 with sports screens.",
  path: AFTER_GAME_PATHS.eveningEn,
});

export default function EveningNflThenAtletiPage() {
  return (
    <PageShell locale="en" altLangHref={AFTER_GAME_PATHS.eveningEs}>
      <PageHero
        eyebrow="Sunday 8 November · this door after the Madrid Game"
        title="Evening NFL, then Atlético–Barcelona at 21:00, from this door"
        lead="From the gold lettering on Espoz y Mina 7 the evening is American football first, then Atlético vs Barcelona at 21:00. We name a match only where this site already confirms it. Ask which game is on. Premier League is still this Sunday — we do not swap it out."
      />

      <Section title="What this door already confirms" featured>
        <p>
          {ADDRESS.full}. From 19:00, NFL RedZone is live in this room —
          that screening is already on our own listing. Evening NFL windows
          sit on the same night. We do not name those kickoffs as broadcasts
          here. If you walked in for a specific American game, ask which
          one is up. We would rather say so than invent a card.
        </p>
        <p>
          At 21:00, Atlético Madrid vs Barcelona is the LaLiga night already
          published on this site as live near Sol when we are showing it.
          Same room. Shared screens. Ask at the bar. First come, first
          served.
        </p>
      </Section>

      <Section title="Premier League sits alongside">
        <p>
          The English Sunday is not cancelled because the NFL played in
          Madrid. Crystal Palace vs Liverpool, Sunderland vs Chelsea,
          Brighton vs Brentford and Ipswich vs Bournemouth share the 15:00
          hour; Manchester United vs Aston Villa is 17:30. Those clocks
          belong to the same date. This page does not substitute them with
          RedZone or with Atleti. It also does not promise a named Premier
          League feed on a named set. Ask which game is on.
        </p>
        <p>
          <Link href={PL_PATHS.liverpoolEn} className="text-gold underline">
            Liverpool at 15:00
          </Link>
          {" · "}
          <Link href={PL_PATHS.unitedEn} className="text-gold underline">
            United at 17:30
          </Link>
          {" · "}
          <Link href={PATHS.sundayEn} className="text-gold underline">
            Sunday windows at this door
          </Link>
        </p>
      </Section>

      <Section title="Four Corner is already open, with screens">
        <p>
          Four Corner at Calle de la Victoria 6 opened from 14:00 until
          late, with sports screens. That hour is confirmed. Listings there
          are not. Dubliners is the other door on this number. O&apos;Reilly&apos;s
          is Pasaje de Matheu 4. Hop if you need another room. This door
          stays the one with the gold lettering.
        </p>
        <p>
          <Link href={AFTER_GAME_PATHS.bernabeuEn} className="text-gold underline">
            After the Bernabéu, this door first
          </Link>
          {" · "}
          <Link href={PATHS.hubEn} className="text-gold underline">
            Addresses and Maps
          </Link>
        </p>
      </Section>

      <AfterGameSundayFourBars locale="en" />
    </PageShell>
  );
}
