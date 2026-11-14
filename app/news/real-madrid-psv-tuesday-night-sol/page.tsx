import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { visitingFansNewsJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

/*
 * Real Madrid v PSV, UEFA Champions League league phase MD5.
 * match.uefa.com/v5/matches/2049625 (read 9 Nov 2026): 2026-11-24T20:00:00Z,
 * utcOffsetInHours 1 → 21:00 Madrid, Estadio Santiago Bernabéu,
 * Av. Concha Espina 1. Source page: uefa.com/uefachampionsleague/match/2049625/.
 * Angle: Dutch / PSV fans, fans meeting point near Sol. No TV. No screening claim.
 * Tuesday hours 18:00–03:00 (lib/venue HOURS.monThu).
 */
const PATH = "/news/real-madrid-psv-tuesday-night-sol";
const PUBLISHED = "2026-11-09T10:00:00+01:00";
const START = "2026-11-24T21:00:00+01:00";
const H1 = "PSV in Madrid: a Tuesday Champions League night that starts at Sol";
const DESCRIPTION =
  "PSV fans in Madrid for Real Madrid v PSV, Tue 24 Nov 2026, 21:00 at the Bernabéu. O'Connell St, Espoz y Mina 7 by Sol, a fans meeting point before or after.";

export const metadata = buildMetadata({
  title: "Real Madrid v PSV, Tue 24 Nov 21:00: an Irish pub near Sol before and after",
  description: DESCRIPTION,
  path: PATH,
});

export default function NewsRealMadridPsvTuesdayNightPage() {
  return (
    <PageShell locale="en">
      <JsonLd
        data={visitingFansNewsJsonLd({
          path: PATH,
          headline: H1,
          description: DESCRIPTION,
          datePublished: PUBLISHED,
          sportsEventName: "Real Madrid v PSV (UEFA Champions League)",
          startDate: START,
          sport: "Football",
          homeTeam: "Real Madrid",
          awayTeam: "PSV",
          venue: "Estadio Santiago Bernabéu",
          venueStreet: "Av. Concha Espina 1",
        })}
      />
      <PageHero
        eyebrow="UEFA Champions League · Tuesday 24 November 2026 · 21:00"
        title={H1}
        lead="Real Madrid host PSV at the Santiago Bernabéu on Tuesday 24 November, league-phase matchday 5. If you are travelling from the Netherlands, or already in Madrid, it helps to share one pin in the centre before you head to the stadium — and a place to land afterwards."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title="The match">
        <ul className="list-disc space-y-1 pl-5">
          <li>Real Madrid v PSV, UEFA Champions League, league phase, matchday 5</li>
          <li>Tuesday 24 November 2026, 21:00 Madrid time</li>
          <li>Estadio Santiago Bernabéu, Avenida de Concha Espina 1, Madrid</li>
        </ul>
        <p>
          Date, kick-off and venue are as listed on the{" "}
          <a
            href="https://www.uefa.com/uefachampionsleague/match/2049625/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            UEFA Champions League match page
          </a>
          . Kick-off times can still move, so check again on the day.
        </p>
      </Section>
      <Section title="Coming from the Netherlands? One pin for the group">
        <p>
          Share one location and let people drift in as trains and flights land:
          O&apos;Connell St is at Calle de Espoz y Mina 7, a couple of minutes&apos;
          walk from Puerta del Sol. On Tuesdays we open at 18:00, a fans meeting
          point before you go up to the Bernabéu.
        </p>
        <p>
          From Sol, Metro Line 1 runs to Tribunal; change there for Line 10 to
          Santiago Bernabéu station, next to the stadium. Give yourselves time
          so you are inside before kick-off.
        </p>
        <p lang="nl">
          Welkom in Madrid, PSV-fans! O&apos;Connell St is een Irish pub vlak bij
          de Puerta del Sol om af te spreken vóór de wedstrijd.
        </p>
      </Section>
      <Section title="After the final whistle: back to the centre">
        <p>
          When the match finishes, take Line 10 back towards the centre and walk
          round to Espoz y Mina 7. From Monday to Thursday O&apos;Connell St
          stays open until 03:00, so there is time to talk through the night over
          a pint. If you are staying in the centre, Calle Mayor, Plaza Mayor and
          the streets around Sol are all a short walk away.
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
