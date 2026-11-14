import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { ATLETICO_VIKING_NEWS } from "@/lib/articles/atletico-viking-wednesday-night-sol";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { visitingFansNewsJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

/*
 * Atlético de Madrid v Viking FK, UEFA Champions League league phase MD5.
 * match.uefa.com/v5/matches/2049636 (read 9 Nov 2026): 2026-11-25T20:00:00Z,
 * utcOffsetInHours 1 → 21:00 Madrid, Riyadh Air Metropolitano.
 * Angle: Norwegian / Viking FK fans, meeting point near Sol — not Minnesota Vikings (NFL).
 * No TV. No screening claim unless What’s On marks Confirmed.
 */
const { paths, published, start, uefaUrl } = ATLETICO_VIKING_NEWS;
const H1 =
  "Viking FK in Madrid: a Wednesday Champions League night that starts at Sol";
const DESCRIPTION =
  "Viking FK fans in Madrid for Atlético v Viking, Wed 25 Nov 2026, 21:00 at the Riyadh Air Metropolitano. O'Connell St, Espoz y Mina 7 by Sol, a meeting point before or after.";

export const metadata = buildMetadata({
  title: "Atlético v Viking, Wed 25 Nov 21:00: Irish pub near Sol before and after",
  description: DESCRIPTION,
  path: paths.en,
});

export default function NewsAtleticoVikingWednesdayNightPage() {
  return (
    <PageShell locale="en" altLangHref={paths.es}>
      <JsonLd
        data={visitingFansNewsJsonLd({
          path: paths.en,
          headline: H1,
          description: DESCRIPTION,
          datePublished: published,
          sportsEventName: "Atlético de Madrid v Viking FK (UEFA Champions League)",
          startDate: start,
          sport: "Football",
          homeTeam: "Atlético de Madrid",
          awayTeam: "Viking FK",
          venue: "Riyadh Air Metropolitano",
        })}
      />
      <PageHero
        eyebrow="UEFA Champions League · Wednesday 25 November 2026 · 21:00"
        title={H1}
        lead="Atlético host Viking FK at the Riyadh Air Metropolitano on Wednesday 25 November, league-phase matchday 5. Travelling from Norway, or already in Madrid? Share one pin in the centre before you head to the stadium — and a place to regroup afterwards. This is Viking FK from Stavanger, not NFL’s Minnesota Vikings."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title="The match">
        <ul className="list-disc space-y-1 pl-5">
          <li>Atlético de Madrid v Viking FK, UEFA Champions League, league phase, matchday 5</li>
          <li>Wednesday 25 November 2026, 21:00 Madrid time</li>
          <li>Riyadh Air Metropolitano, Madrid</li>
        </ul>
        <p>
          Date, kick-off and venue are as listed on the{" "}
          <a
            href={uefaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            UEFA Champions League match page
          </a>
          . Kick-off times can still move, so check again on the day.
        </p>
      </Section>
      <Section title="Coming from Norway? One pin for the group">
        <p>
          Share one location and let people arrive as they can: O&apos;Connell St
          is at Calle de Espoz y Mina 7, a couple of minutes&apos; walk from
          Puerta del Sol. On Wednesdays we open at 18:00 — a meeting point
          before you go out to the Metropolitano.
        </p>
        <p>
          From Sol, Metro line 2 runs to Las Rosas; Atlético list the stadium as
          about a quarter of an hour on foot from there. Line 7 serves Estadio
          Metropolitano station next to the ground. On match days EMT runs the
          SE721 shuttle from Canillejas (line 5) from two hours before kick-off.
          Leave the centre in good time.
        </p>
        <p lang="no">
          Velkommen til Madrid! O&apos;Connell St er et irsk pub ved Puerta del
          Sol — et møtested før kampen på Metropolitano.
        </p>
      </Section>
      <Section title="After the final whistle: back to the centre">
        <p>
          When the match finishes, head back towards Sol and walk round to Espoz
          y Mina 7. From Monday to Thursday O&apos;Connell St stays open until
          03:00. If a screening is marked Confirmed on{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-gold underline">
            What&apos;s On
          </Link>
          , ask at the bar which feed is on; we do not promise every UCL tie on
          every screen.
        </p>
        <p>
          Opening times are on the{" "}
          <Link href="/location" className="text-gold underline">
            location page
          </Link>
          . Champions context:{" "}
          <Link href="/champions-league" className="text-gold underline">
            Champions League near Sol
          </Link>
          .
        </p>
      </Section>
      <Section title="Getting here">
        <p>
          O&apos;Connell St · Calle de Espoz y Mina 7 · near Puerta del Sol,
          Madrid. Maps listing CID 10697659365903665225.{" "}
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            GET DIRECTIONS
          </a>
          {" · "}
          <Link href="/contact" className="text-cream underline">
            Contact
          </Link>
          {" · "}
          <Link href={paths.es} className="text-cream underline">
            Leer en español
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
