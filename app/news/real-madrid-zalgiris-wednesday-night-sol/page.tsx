import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { visitingFansNewsJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

/*
 * Real Madrid v Žalgiris Kaunas, EuroLeague regular season.
 * Sources (read 9 Nov 2026): Movistar Arena event page 25 Nov 2026, 20:45,
 * Jornada 14, Av. de Felipe II, doors 19:45; JMP EuroLeague game 139 (E2026),
 * Round 14, Wed 25 Nov 2026, Movistar Arena. User brief said round 13; arena
 * and game-139 listings say round 14 — article follows the sources.
 * Angle: Lithuanian / Žalgiris fans, fans meeting point near Sol. No TV.
 * Wednesday hours 18:00–03:00 (lib/venue HOURS.monThu).
 */
const PATH = "/news/real-madrid-zalgiris-wednesday-night-sol";
const PUBLISHED = "2026-11-09T10:00:00+01:00";
const START = "2026-11-25T20:45:00+01:00";
const H1 = "Žalgiris in Madrid: a Wednesday EuroLeague night that starts at Sol";
const DESCRIPTION =
  "Žalgiris fans in Madrid: Real Madrid v Žalgiris, 25 Nov 2026, 20:45, Movistar Arena. O'Connell St, Espoz y Mina 7 by Sol, fans meeting point before or after.";

export const metadata = buildMetadata({
  title: "Real Madrid v Žalgiris, Wed 25 Nov 20:45: an Irish pub near Sol before and after",
  description: DESCRIPTION,
  path: PATH,
});

export default function NewsRealMadridZalgirisWednesdayNightPage() {
  return (
    <PageShell locale="en">
      <JsonLd
        data={visitingFansNewsJsonLd({
          path: PATH,
          headline: H1,
          description: DESCRIPTION,
          datePublished: PUBLISHED,
          sportsEventName: "Real Madrid v Žalgiris Kaunas (EuroLeague)",
          startDate: START,
          sport: "Basketball",
          homeTeam: "Real Madrid",
          awayTeam: "Žalgiris Kaunas",
          venue: "Movistar Arena",
          venueStreet: "Avenida de Felipe II",
        })}
      />
      <PageHero
        eyebrow="EuroLeague · Wednesday 25 November 2026 · 20:45"
        title={H1}
        lead="Real Madrid host Žalgiris Kaunas at the Movistar Arena on Wednesday 25 November, round 14 of the EuroLeague. Coming over from Lithuania, or already in Madrid? Pick one pin in the centre before you head to the arena — and a place to come back to afterwards."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title="The game">
        <ul className="list-disc space-y-1 pl-5">
          <li>Real Madrid v Žalgiris Kaunas, EuroLeague, round 14</li>
          <li>Wednesday 25 November 2026, 20:45 Madrid time</li>
          <li>Movistar Arena, Avenida de Felipe II, Madrid. The arena lists doors at 19:45</li>
        </ul>
        <p>
          Date, tip-off and venue are as listed on the{" "}
          <a
            href="https://www.movistararena.es/en/programacion/evento/real-madrid-vs-zalgiris-kaunas-jornada-14-euroliga-26-27/25-11-2026/20:45"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            Movistar Arena event page
          </a>
          {" "}
          and as EuroLeague game E2026 / 139. Times can still move, so check
          again on the day.
        </p>
      </Section>
      <Section title="Coming from Lithuania? One pin for the group">
        <p>
          Share one location and let people arrive as they can: O&apos;Connell St
          is at Calle de Espoz y Mina 7, a couple of minutes&apos; walk from
          Puerta del Sol. On Wednesdays we open at 18:00, a fans meeting point
          before you go out to the arena.
        </p>
        <p>
          From Sol, Metro Line 2 runs direct to Goya, the stop for the Movistar
          Arena, with no change of line. With a 20:45 start and doors at 19:45,
          leave the centre in good time.
        </p>
      </Section>
      <Section title="After the final buzzer: back to the centre">
        <p>
          When the game finishes, take Line 2 back to Sol and walk round the
          corner to Espoz y Mina 7. From Monday to Thursday O&apos;Connell St
          stays open until 03:00, so there is no rush to call it a night
          straight after the last possession. If you are visiting Madrid, the
          streets around Sol, Calle Mayor and Plaza Mayor are all a short walk
          away.
        </p>
        <p>
          Opening times for every day are on the{" "}
          <Link href="/location" className="text-gold underline">
            location page
          </Link>
          , and the rest of the week is on{" "}
          <Link href="/whats-on" className="text-gold underline">
            What&apos;s On
          </Link>
          .
        </p>
      </Section>
      <Section title="Getting here">
        <p>
          O&apos;Connell St · Calle de Espoz y Mina 7 · near Puerta del Sol,
          Madrid.{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Open directions
          </a>
          {" · "}
          <Link href="/contact" className="text-cream underline">
            Contact
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
