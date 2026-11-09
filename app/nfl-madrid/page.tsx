import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PastEventNotice } from "@/components/PastEventNotice";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";
import { BAR_MAPS } from "@/lib/after-game-sunday-8-nov";
import { ADDRESS, HOURS } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "NFL bar Madrid: watch NFL near Sol | O'Connell St",
  description:
    "NFL bar Madrid and Irish pub by Puerta del Sol: watch NFL Madrid at O'Connell's, Espoz y Mina 7. Sports bar Sol Madrid. Ask which game is on.",
  path: "/nfl-madrid",
});

const faq = [
  {
    q: "Where can I watch NFL Madrid?",
    a: "At this NFL bar Madrid: O'Connell St, Calle de Espoz y Mina 7, a short walk from Puerta del Sol. Watch NFL Madrid on the screens when we are showing it. Ask which game is on. GET DIRECTIONS is the Maps pin for this listing.",
  },
  {
    q: "Do you show American football?",
    a: "Yes, when we are showing it. European football comes first at O'Connell St, and every confirmed game is listed on What's On with the Madrid time.",
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
    q: "What time do you open on Sunday?",
    a: "Usual Sundays open at 14:00 and close at 03:00. Sunday 8 November 2026 was a one-day exception from 12:00 for the NFL Madrid Game; that day has now taken place.",
  },
];

const SIBLINGS = [
  {
    name: "O'Connell St",
    address: "Calle de Espoz y Mina, 7, 28012 Madrid",
    maps: BAR_MAPS.oconnells,
    web: "https://oconnellsmadrid.es/",
    note: "This NFL bar Madrid — Irish pub and sports bar by Puerta del Sol.",
  },
  {
    name: "Dubliners",
    address: "Calle de Espoz y Mina, 7, 28012 Madrid",
    maps: BAR_MAPS.dubliners,
    web: "https://dublinersmadrid.es/",
    note: "Irish pub in the same street / building as O'Connell St.",
  },
  {
    name: "O'Reilly's Restaurant Bar",
    address: "Pasaje de Matheu, 4, 28012 Madrid",
    maps: BAR_MAPS.oreillys,
    web: "https://oreillys-restaurant-bar.localo.site/",
    note: "Restaurant-bar a short walk from Sol.",
  },
  {
    name: "Four Corner",
    address: "Calle de la Victoria, 6, 28012 Madrid",
    maps: BAR_MAPS.fourCorner,
    web: null as string | null,
    note: "Open from 14:00 until late · sports screens. Ask which game is on.",
  },
] as const;

export default function NflMadridPage() {
  const showWeekend = madridTodayYmd(agendaBuildNow()) <= "2026-11-08";
  return (
    <PageShell locale="en" altLangHref="/es/nfl-madrid">
      <PageHero
        eyebrow="Past event · NFL Madrid Game · Sunday 8 November 2026"
        title="Watch NFL Madrid at this Irish pub near Sol"
        lead="Bengals at Falcons was the NFL Madrid Game at the Bernabéu on Sunday 8 November 2026 at 15:30. O'Connell St at Espoz y Mina 7, by Puerta del Sol, was a place to watch on the screens and to meet before and after. Independent Irish pub and sports bar; usual Sundays open at 14:00. Ask which game is on."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="TVs along the sports area at O'Connell St near Sol"
        position="object-[center_35%]"
      />
      <PastEventNotice locale="en" />
      <Section title="NFL bar Madrid">
        <p>
          O&apos;Connell St sits on {ADDRESS.street}, a short walk from Puerta
          del Sol. This NFL bar Madrid is an Irish pub and sports bar with live
          sport and an international crowd — a meeting point for fans who want
          to watch NFL Madrid near Sol before the game, after the game, and
          through Sunday football. Four Corner on Victoria 6 is open from 14:00,
          with sports screens.
        </p>
        <p>
          European football is our everyday plan — this Irish pub is also a
          Premier League pub in Madrid, and those kickoffs sit alongside NFL,
          not instead of it. American football, basketball, rugby and Formula 1
          go on when we are showing them. Confirmed games for the next 7 days,
          with Madrid times, are on{" "}
          <Link href="/whats-on" data-event="whats_on" className="text-cream underline">
            What&apos;s On
          </Link>
          {" · "}
          <Link href="/premier-league" className="text-cream underline">
            Premier League
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
        <>
          <Section title="This weekend · 7 & 8 November">
            <h3 className="font-serif text-lg font-semibold text-cream">Saturday 7 November</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Valencia v Real Madrid at 21:00 — Orange TV and DAZN, live near
                Sol when we are showing it. See{" "}
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
              Sunday 8 November — full day from midday
            </h3>
            <p>
              Open from <strong className="text-gold">12:00</strong> (one-day
              exception; usual Sunday opening is 14:00). The NFL Madrid Game is
              in the afternoon; the rest of the Sunday windows run into the
              evening.
            </p>
          </Section>
          <Section title="Bengals Falcons Madrid">
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong>15:30</strong> — Bengals at Falcons, NFL Madrid Game at
                the Bernabéu (DAZN and Cuatro). Live on the big screen at
                O&apos;Connell St if you are not at the stadium.
              </li>
              <li>
                <strong>19:00</strong> — seven games (ask which is on; we do not
                name a TV channel for these): Broncos at Panthers · Cowboys at
                Colts · Jets at Chiefs · Lions at Dolphins · Browns at Saints ·
                Giants at Eagles · Rams at Commanders. NFL RedZone from 19:00.
              </li>
              <li>
                <strong>22:05</strong> — Texans at Chargers.
              </li>
              <li>
                <strong>22:25</strong> — Raiders at 49ers · Packers at Patriots ·
                Cardinals at Seahawks.
              </li>
            </ul>
            <p className="mt-2 text-sm text-cream-muted">
              We do not promise every kickoff on every screen. Ask at the bar
              which games are up.
            </p>
          </Section>
          <Section title="Sports bar Sol Madrid">
            <p>
              This sports bar Sol Madrid puts Sunday football and the NFL Madrid
              Game on the screens at Espoz y Mina 7. Independent Irish pub — if
              you are looking for a particular game, ask which one is on.
            </p>
          </Section>
          <Section title="Atlético Barcelona bar Sol (Sun 21:00)">
            <p>
              Atlético Madrid v Barcelona at 21:00 — live near Sol when we are
              showing it, in the same room as the NFL windows. See{" "}
              <Link href="/whats-on" className="text-cream underline">
                What&apos;s On
              </Link>
              .
            </p>
          </Section>
        </>
      ) : null}
      <Section title="The Bernabéu on Sunday 8 November">
        <p>
          Bengals at Falcons kicked off at 15:30 Madrid time at the Bernabéu.
          Arrival details Real Madrid listed on{" "}
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
          No ticket? That Sunday the game was on the big screen at O&apos;Connell
          St, near Sol, from 15:30, with later NFL windows from 19:00. Check{" "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          for what is next.
        </p>
      </Section>
      {/* This week — meeting point only (owner 6 Nov: no third-party venue promo). */}
      {showWeekend ? (
        <div id="this-week">
          <Section title="This week at O&apos;Connell St">
            <p data-oc-sat="">
              Sunday 8 November — Main event meeting point from 12:00 midday.
            </p>
            <p className="mt-2 text-sm text-cream-muted">
              Independent Irish pub at Espoz y Mina 7, near Puerta del Sol.
              Sibling bars: Dubliners, O&apos;Reilly&apos;s and Four Corner.
            </p>
          </Section>
        </div>
      ) : null}
      {/* Four bars near Sol — hub LIVE (DG 6 Nov). */}
      <div id="four-bars">
        <Section title="Four bars near Sol">
          <p>
            Four sibling venues sit within a few minutes of Puerta del Sol —
            Dubliners, O&apos;Connell St, O&apos;Reilly&apos;s and Four Corner.
            Different rooms around the same square. Start from the shared guide:{" "}
            <a
              href="https://dublinersmadrid.es/4-bars-one-fan-weekend/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline"
            >
              4 bars, one fan weekend
            </a>
            .
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
                    data-event="directions"
                    className="text-cream underline"
                  >
                    GET DIRECTIONS
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
          <p className="mt-3 text-sm text-cream">
            Prefer the overview of all four rooms around Sol? See{" "}
            <a
              href="https://dublinersmadrid.es/4-bars-one-fan-weekend/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold underline"
            >
              MEET US NEAR SOL
            </a>{" "}
            — addresses, maps and how the venues sit around Sol.
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
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            GET DIRECTIONS
          </a>
          {" · "}
          <a
            href={BAR_MAPS.oconnells}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream underline"
          >
            FIND US
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
