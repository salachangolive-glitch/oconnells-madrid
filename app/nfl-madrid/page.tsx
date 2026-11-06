import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "NFL Madrid weekend · Irish pub meeting point near Sol",
  description:
    "O'Connell St, Calle de Espoz y Mina 7, near Puerta del Sol: Irish pub, live sport and an international meeting point for NFL fans in Madrid. Sunday 8 Nov open from 12:00.",
  path: "/nfl-madrid",
});

const faq = [
  {
    q: "Do you show American football?",
    a: "Yes, on the nights we are showing it. European football comes first at O'Connell St, and every confirmed game is listed on What's On with the Madrid time.",
  },
  {
    q: "Do you show every game?",
    a: "No. Some kickoffs fall after closing time in Madrid, and we only list a game once the screening is confirmed. Screens and slots are shared across the afternoon and night — check What's On or ask at the bar for a particular game.",
  },
  {
    q: "Is O'Connell St near the Bernabéu?",
    a: "We are in the city centre, near Sol, not by the stadium. The metro from Sol makes it an easy stop before or after a day in central Madrid.",
  },
  {
    q: "What time do you open on Sunday 8 November?",
    a: "Exception for Sunday 8 Nov only: we open from 12:00. Usual Sundays open at 14:00.",
  },
];

const SIBLINGS = [
  {
    name: "O'Connell St",
    address: "Calle de Espoz y Mina, 7, 28012 Madrid",
    maps: MAPS_URL,
    web: "https://oconnellsmadrid.es/",
    note: "This pub — Irish pub, live sport, international meeting point.",
  },
  {
    name: "Dubliners",
    address: "Calle de Espoz y Mina, 7, 28012 Madrid",
    maps: "https://www.google.com/maps/search/?api=1&query=Dubliners+Calle+de+Espoz+y+Mina+7+28012+Madrid",
    web: "https://dublinersmadrid.es/",
    note: "Irish pub in the same street / building as O'Connell St.",
  },
  {
    name: "O'Reilly's Restaurant Bar",
    address: "Pasaje de Matheu, 4, 28012 Madrid",
    maps: "https://www.google.com/maps/search/?api=1&query=O%27Reilly%27s+Restaurant+Bar+Pasaje+de+Matheu+4+28012+Madrid",
    web: "https://oreillys-restaurant-bar.localo.site/",
    note: "Restaurant-bar a short walk from Sol.",
  },
  {
    name: "Four Corner",
    address: "Calle de la Victoria, 6, 28012 Madrid",
    maps: "https://www.google.com/maps/search/?api=1&query=Calle+de+la+Victoria+6+28012+Madrid",
    web: null as string | null,
    note: "Sibling venue near Sol for this weekend (commercial name). Check opening times on the day.",
  },
] as const;

export default function NflMadridPage() {
  const showWeekend = madridTodayYmd(agendaBuildNow()) <= "2026-11-08";
  return (
    <PageShell locale="en" altLangHref="/es/nfl-madrid">
      <PageHero
        eyebrow="Irish pub · Live sport · Near Sol"
        title={`NFL Madrid weekend at ${SITE_NAME}`}
        lead="An Irish pub just off Puerta del Sol — live sport on the big screens and an international meeting point for fans in central Madrid."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="TVs along the sports area at O'Connell St near Sol"
        position="object-[center_35%]"
      />
      <Section title="Your NFL meeting point near Puerta del Sol">
        <p>
          O&apos;Connell St sits on {ADDRESS.street}, a short walk from Puerta
          del Sol. We are an Irish pub with live sport and an international
          crowd — a place to meet fellow fans before the game, after the game,
          and through Sunday football.
        </p>
        <p>
          European football is our everyday plan; American football, basketball,
          rugby and Formula 1 go on when we are showing them. Confirmed games
          for the next 7 days, with Madrid times, are on{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>
          .
        </p>
        {showWeekend ? (
          <p className="font-semibold text-gold">
            Exception Sunday 8 Nov: open from 12:00 (usual Sundays from 14:00).
          </p>
        ) : null}
      </Section>
      {showWeekend ? (
        <Section title="This weekend · 7 & 8 November">
          <h3 className="font-serif text-lg font-semibold text-cream">Saturday 7 November</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              NFL Experience Madrid — Plaza de España, 10:00–19:00 (NFL fan
              event, not at our pub).
            </li>
            <li>
              NFL House Madrid — Palacio de las Alhajas, Calle San Martín 1,
              12:00–20:00 (a few minutes&apos; walk from Sol; NFL event, not
              ours). Drop in for a drink after your visit.
            </li>
            <li>
              Valencia v Real Madrid at 21:00 — live near Sol when we are
              showing it. See{" "}
              <Link href="/whats-on" className="text-cream underline">
                What&apos;s On
              </Link>
              .
            </li>
          </ul>
          <p className="mt-2 text-sm text-cream-muted">
            Saturday we open at 15:00. Come early for a good spot near the
            screen.
          </p>
          <h3 className="mt-4 font-serif text-lg font-semibold text-cream">
            Sunday 8 November — from 12:00
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              Open from <strong className="text-gold">12:00</strong> (one-day
              exception; usual Sunday opening is 14:00).
            </li>
            <li>
              Bengals v Falcons at 15:30 — NFL Madrid Game at the Bernabéu;
              live on the big screen at O&apos;Connell St if you are not at the
              stadium.
            </li>
            <li>
              From 19:00 — more NFL windows (and RedZone) on our screens; times
              on What&apos;s On. Later kickoffs around 22:05 / 22:25 as listed.
            </li>
            <li>
              Atlético Madrid v Barcelona at 21:00 — live near Sol when we are
              showing it.
            </li>
          </ul>
          <p className="mt-2 text-sm text-cream-muted">
            We do not promise every kickoff on every screen. Ask at the bar
            which games are up.
          </p>
        </Section>
      ) : null}
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
        <ul className="list-disc space-y-1 pl-5">
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
          at O&apos;Connell St, near Sol, from 15:30. From 19:00, come back from
          the stadium to O&apos;Connell St. Check{" "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          for the rest of Sunday&apos;s games.
        </p>
      </Section>
      {/* This week in Madrid (DG 2 Nov, task 5; nfl.com + Radar): third-party events, NOT at O'Connell St. Gone from 9 Nov rebuild. */}
      {showWeekend ? (
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
            <ul className="list-disc space-y-1 pl-5">
              <li data-oc-sat="">
                O&apos;Connell St is a few minutes&apos; walk from the NFL House
                at Casa de las Alhajas (Plaza de San Martín), an NFL event, not
                ours. Drop in for a drink after your visit.
              </li>
              <li>
                Falcons House: Saturday 7 November, 13:00–17:00, at Irish Rover
                Madrid, Av. de Brasil 7 (Tetuán).
              </li>
              <li>
                Dirty Birds Fan Walk to the Bernabéu: Sunday 8 November,
                13:00–13:15, starting from Mira Miranda Madrid, Paseo de la
                Castellana 89.
              </li>
            </ul>
            <p className="text-sm text-cream-muted">
              Details as published on NFL.com, checked on 2 and 3 November 2026.
              Check there for any changes.
            </p>
          </Section>
        </div>
      ) : null}
      {/* Four bars near Sol — hub URL pending DG / Dubliners publish. */}
      <div id="four-bars">
        <Section title="Four bars near Sol">
          <p>
            Four sibling venues sit within a few minutes of Puerta del Sol —
            different rooms for the same fan weekend. Find the one that suits
            you (or hop between them):
          </p>
          <ul className="mt-3 space-y-3">
            {SIBLINGS.map((s) => (
              <li key={s.name} className="border-l border-gold/40 pl-3">
                <p className="font-semibold text-cream">{s.name}</p>
                <p className="text-sm text-cream-muted">{s.address}</p>
                <p className="text-sm text-cream-muted">{s.note}</p>
                <p className="text-sm">
                  <a
                    href={s.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream underline"
                  >
                    Maps
                  </a>
                  {s.web ? (
                    <>
                      {" · "}
                      <a
                        href={s.web}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cream underline"
                      >
                        Web
                      </a>
                    </>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-cream-muted">
            A shared fan-weekend hub page will be linked here when it is
            published. Until then, use the addresses and maps above.
          </p>
        </Section>
      </div>
      <Section title="Find us">
        <p>
          {ADDRESS.full}. {HOURS.summaryEn}.
          {showWeekend
            ? " Exception Sunday 8 Nov: open from 12:00."
            : null}
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
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
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
