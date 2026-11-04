import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "American football nights at a sports pub by Sol",
  description:
    "O'Connell St, just off Puerta del Sol: European football first, plus American football on the screens on the nights we show it. Confirmed games on What's On.",
  path: "/nfl-madrid",
});

const faq = [
  {
    q: "Do you show American football?",
    a: "Yes, on the nights we are showing it. European football comes first at O'Connell St, and every confirmed game is listed on What's On with the Madrid time.",
  },
  {
    q: "Do you show every game?",
    a: "No. Some kickoffs fall after closing time in Madrid, and we only list a game once the screening is confirmed. If you're after one particular game, check What's On or ask at the bar.",
  },
  {
    q: "Is O'Connell St near the Bernabéu?",
    a: "We are in the city centre, near Sol, not by the stadium. The metro from Sol makes it an easy stop on a day in central Madrid.",
  },
];

export default function NflMadridPage() {
  return (
    <PageShell locale="en" altLangHref="/es/nfl-madrid">
      <PageHero
        eyebrow="Sports pub · Central Madrid"
        title={`American football nights at ${SITE_NAME}`}
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
          St sits on {ADDRESS.street}, right by Sol. European football is our
          everyday plan, and American football, basketball, rugby and Formula 1
          go on when we are showing them.
        </p>
        <p>
          It&apos;s an easy place to meet up with a group of friends in the centre,
          before a game, after it, or for a night out around Sol.
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
      <Section title="Going to the Bernabéu on Sunday 8 November">
        <p>
          Bengals v Falcons kicks off at 15:30 Madrid time at the Bernabéu.
          These are the arrival details Real Madrid lists on{" "}
          <a
            href="https://bernabeu.realmadrid.com/nfl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            the stadium&apos;s NFL page
          </a>
          :
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The stadium perimeter opens at 12:30.</li>
          <li>
            There is no parking at the stadium, so plan on public transport or a
            taxi. By metro, use Concha Espina (L9) or Cuzco (L10).
          </li>
          <li>
            The NFL clear-bag policy applies, and the advice is to bring no bag
            at all. If you need one: a clear bag up to 30.5 × 15.25 × 30.5 cm or a
            small clutch up to 11.5 × 16.5 cm. An empty, clear reusable bottle
            (up to 1 litre) is allowed.
          </li>
        </ul>
        <p>
          No ticket? Watch it on the big screen, with the match-day atmosphere,
          at O&apos;Connell St, near Sol, from 15:30. From 19:00, come back from the stadium to O&apos;Connell St. Check{" "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          for the rest of Sunday&apos;s games.
        </p>
      </Section>
      {/* This week in Madrid (DG 2 Nov, task 5; nfl.com/news/fan-events-in-madrid + Radar 2026-11-02-nfl.md): third-party Falcons fan events, NOT at O'Connell St. Build-time gate, gone from the 9 Nov daily rebuild. */}
      {madridTodayYmd(agendaBuildNow()) <= "2026-11-08" ? (
        <div id="this-week">
          <Section title="This week in Madrid">
            <p>
              Fan events in Madrid this week, listed on NFL.com (
              <a
                href="https://www.nfl.com/news/madrid-la-nfl-ya-esta-aqui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream underline"
              >
                NFL House
              </a>
              ,{" "}
              <a
                href="https://www.nfl.com/news/fan-events-in-madrid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream underline"
              >
                Falcons events
              </a>
              ). They are run by the NFL and the Falcons at other venues, not at
              O&apos;Connell St:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li data-oc-sat="">
                O&apos;Connell St is a few minutes&apos; walk from the NFL House at Casa de las Alhajas (Plaza de San Martín), an NFL event, not ours. Drop in for a drink after your visit.
              </li>
              <li>
                Falcons House: Saturday 7 November, 13:00–17:00, at Irish Rover
                Madrid, Av. de Brasil 7 (Tetuán).
              </li>
              <li>
                Dirty Birds Fan Walk to the Bernabéu: Sunday 8 November, 13:00–13:15,
                starting from Mira Miranda Madrid, Paseo de la Castellana 89.
              </li>
            </ul>
            <p className="text-sm text-cream-muted">
              Details as published on NFL.com, checked on 2 and 3 November 2026. Check
              there for any changes.
            </p>
            <h3 className="mt-4 font-serif text-lg font-semibold text-cream">
              No ticket? Watch the game near Sol
            </h3>
            <p>
              Bengals v Falcons kicks off at 15:30 Madrid time. At O&apos;Connell
              St, {ADDRESS.street}, next to Puerta del Sol, it&apos;s live on the
              big screen from 15:30, with the match-day atmosphere. On Sundays we open at 14:00.
            </p>
            <h3 className="mt-4 font-serif text-lg font-semibold text-cream">
              After the match
            </h3>
            <p>
              From 19:00, come back from the stadium to O&apos;Connell St. The rest of Sunday&apos;s NFL games are on the screens.
            </p>
          </Section>
        </div>
      ) : null}
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
