import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "NFL bar in Madrid near Sol – watch NFL in central Madrid",
  description:
    "Where to watch NFL in Madrid: an Irish sports pub near Sol for NFL fans, before and after the game. Confirmed games on What's On.",
  path: "/nfl-madrid",
});

const faq = [
  {
    q: "Where can I watch NFL in Madrid?",
    a: "O'Connell St is a sports pub in central Madrid, just off Puerta del Sol. We put NFL games on the TVs when we are showing them, and every confirmed game is listed on What's On with the Madrid time.",
  },
  {
    q: "Do you show every NFL game?",
    a: "No. Some kickoffs fall after closing time in Madrid, and we only list a game once the screening is confirmed. If you're after one particular game, check What's On or ask at the bar.",
  },
  {
    q: "Is O'Connell St near the Bernabéu?",
    a: "We are in the city centre, near Sol, not by the stadium. The metro from Sol makes it an easy stop on a day in central Madrid.",
  },
  {
    q: "Do I need to book?",
    a: "No. There are no table reservations: walk in, first come, first served.",
  },
];

export default function NflMadridPage() {
  return (
    <PageShell locale="en" altLangHref="/es/nfl-madrid">
      <PageHero
        eyebrow="NFL · Central Madrid"
        title={`Watch NFL in Madrid at ${SITE_NAME}`}
        lead="An Irish sports pub just off Puerta del Sol, with American football on the TVs when we're showing it."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="TVs along the sports area at O'Connell St near Sol"
        position="object-[center_35%]"
      />
      <Section title="A sports pub in central Madrid">
        <p>
          If you are looking for a sports bar in Madrid to catch a game, O&apos;Connell
          St sits on {ADDRESS.street}, right by Sol. Football is our everyday
          plan, and NFL, NBA, rugby and Formula 1 go on when we are showing them.
        </p>
        <p>
          NFL fans in Madrid are welcome before the game, after it, or any
          time it&apos;s packed elsewhere. On an NFL weekend in Madrid, we&apos;re an
          easy stop in the centre.
        </p>
        <p>
          Confirmed games for the next 7 days, with Madrid times, are on{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>
          . More on the{" "}
          <Link href="/sports" className="text-cream underline">
            sports we show
          </Link>{" "}
          and{" "}
          <Link href="/watch-football-madrid" className="text-cream underline">
            football in Madrid
          </Link>
          .
        </p>
      </Section>
      <Section title="Watch Bengals vs Falcons LIVE near Sol">
        <p>
          We&apos;re showing the 2026 NFL Madrid Game live: Falcons v Bengals,
          Sunday 8 November, kickoff 15:30. Doors open at 14:00 on Sundays. Walk
          in, first come, first served. It&apos;s also on{" "}
          <Link href="/whats-on" className="text-cream underline">What&apos;s On</Link>.
        </p>
      </Section>
      <Section title="After the Madrid game">
        <p>
          Heading back into the centre after the game at the Bernabéu? We&apos;re
          on Calle de Espoz y Mina, just off Puerta del Sol. Join us to talk it
          over with other NFL fans, whichever side you were on.
        </p>
        <h3 className="font-semibold">All Sunday NFL games LIVE near Sol</h3>
        <p>Every Week 9 Sunday game is on at O&apos;Connell, Madrid times:</p>
        <ul>
          <li>15:30 · Bengals v Falcons (Madrid)</li>
          <li>19:00 · Broncos v Panthers, Cowboys v Colts, Jets v Chiefs, Lions v Dolphins, Browns v Saints, Giants v Eagles, Rams v Commanders</li>
          <li>22:05 · Texans v Chargers, Raiders v 49ers</li>
          <li>22:25 · Packers v Patriots, Cardinals v Seahawks</li>
        </ul>
      </Section>
      <Section title="The 2026 NFL Madrid Game">
        <p>
          Atlanta Falcons v Cincinnati Bengals, Sunday 8 November 2026, kickoff
          15:30 Madrid time at the Bernabéu. Tickets, stadium rules and game
          details are on the{" "}
          <a href="https://www.nfl.com/international/games/madrid/" target="_blank" rel="noopener noreferrer" className="text-cream underline">
            NFL&apos;s Madrid Game page
          </a>{" "}
          and its{" "}
          <a href="https://www.nfl.com/international/games/madrid/faqs" target="_blank" rel="noopener noreferrer" className="text-cream underline">
            FAQ
          </a>
          .
        </p>
        <p>
          Getting back to the centre: the stadium has its own metro stop, Santiago
          Bernabéu. Plan your route to Sol with the{" "}
          <a href="https://www.metromadrid.es/en" target="_blank" rel="noopener noreferrer" className="text-cream underline">Metro de Madrid</a>{" "}
          journey planner. Expect busy trains straight after the game.
        </p>
      </Section>
      <Section title="Find us">
        <p>
          {ADDRESS.full}. {HOURS.summaryEn}.
        </p>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            How to get here from Puerta del Sol
          </a>
          {" · "}
          <Link href="/location" className="text-cream underline">
            Location
          </Link>
        </p>
      </Section>
      <Section title="FAQ">
        {faq.map((f) => (
          <div key={f.q}>
            <h3 className="font-semibold">{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </Section>
    </PageShell>
  );
}
