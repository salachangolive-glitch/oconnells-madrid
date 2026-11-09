import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { visitingFansNewsJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

/*
 * Real Madrid Femenino v Inter, UEFA Women's Champions League league phase MD5.
 * match.uefa.com/v5/matches/2050566 (read 9 Nov 2026): 2026-11-18T17:45:00Z,
 * utcOffsetInHours 1 → 18:45 Madrid, Estadio Alfredo Di Stéfano,
 * Camino de Sintra, s/n. Source page:
 * uefa.com/uefawomenschampionsleague/match/2050566/.
 * Angle: Italian / Inter fans, fans meeting point near Sol. No TV. No screening
 * claim (existing /news/real-madrid-inter-womens-champions-league-sol is a
 * separate page). Wednesday hours 18:00–03:00 (lib/venue HOURS.monThu).
 */
const PATH = "/news/inter-fans-madrid-womens-champions-league-sol";
const PUBLISHED = "2026-11-09T10:00:00+01:00";
const START = "2026-11-18T18:45:00+01:00";
const H1 = "Inter in Madrid: a Wednesday Women's Champions League night that starts at Sol";
const DESCRIPTION =
  "Inter fans in Madrid: Real Madrid Femenino v Inter, Wed 18 Nov 2026, 18:45, Di Stéfano. O'Connell St, Espoz y Mina 7 by Sol, fans meeting point before or after.";

export const metadata = buildMetadata({
  title: "Real Madrid Femenino v Inter, Wed 18 Nov 18:45: an Irish pub near Sol before and after",
  description: DESCRIPTION,
  path: PATH,
});

export default function NewsInterFansWomensChampionsLeaguePage() {
  return (
    <PageShell locale="en">
      <JsonLd
        data={visitingFansNewsJsonLd({
          path: PATH,
          headline: H1,
          description: DESCRIPTION,
          datePublished: PUBLISHED,
          sportsEventName: "Real Madrid Femenino v Inter (UEFA Women's Champions League)",
          startDate: START,
          sport: "Football",
          homeTeam: "Real Madrid Femenino",
          awayTeam: "Inter",
          venue: "Estadio Alfredo Di Stéfano",
          venueStreet: "Camino de Sintra, s/n",
        })}
      />
      <PageHero
        eyebrow="UEFA Women's Champions League · Wednesday 18 November 2026 · 18:45"
        title={H1}
        lead="Real Madrid Femenino host Inter at the Estadio Alfredo Di Stéfano on Wednesday 18 November, league-phase matchday 5. Travelling from Italy, or already in Madrid? Share one pin in the centre before you go out to Valdebebas — and a place to come back to afterwards."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Beer taps at the bar of O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <Section title="The match">
        <ul className="list-disc space-y-1 pl-5">
          <li>Real Madrid Femenino v Inter, UEFA Women&apos;s Champions League, league phase, matchday 5</li>
          <li>Wednesday 18 November 2026, 18:45 Madrid time</li>
          <li>Estadio Alfredo Di Stéfano, Valdebebas (Madrid)</li>
        </ul>
        <p>
          Date, kick-off and venue are as listed on the{" "}
          <a
            href="https://www.uefa.com/uefawomenschampionsleague/match/2050566/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            UEFA Women&apos;s Champions League match page
          </a>
          . Kick-off times can still move, so check again on the day.
        </p>
      </Section>
      <Section title="Coming from Italy? One pin for the group">
        <p>
          The Di Stéfano is in Valdebebas, north of the centre, so groups
          meeting in town need a simple pin first. O&apos;Connell St is at
          Calle de Espoz y Mina 7, a couple of minutes&apos; walk from Puerta
          del Sol. On Wednesdays we open at 18:00. Kick-off is 18:45, so if you
          are meeting before the match, come at opening; if you are going to
          the stadium, leave enough time for the trip out to Valdebebas.
        </p>
        <p lang="it">
          Tifosi dell&apos;Inter a Madrid: O&apos;Connell St è un pub irlandese
          vicino a Puerta del Sol per incontrarsi prima e dopo la partita.
        </p>
      </Section>
      <Section title="After the match: back to the centre">
        <p>
          When you get back from Valdebebas, walk round to Espoz y Mina 7.
          From Monday to Thursday O&apos;Connell St stays open until 03:00, so
          there is time for a pint after the final whistle. If you are staying
          in the centre, Calle Mayor, Plaza Mayor and the streets around Sol
          are all a short walk away.
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
