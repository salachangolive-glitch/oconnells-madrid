import Link from "next/link";
import { HowToGetHere } from "@/components/HowToGetHere";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { SportsPageWayfinding } from "@/components/SportsPageWayfinding";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
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
    a: "Usual Sundays open at 14:00 and close at 03:00.",
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
  return (
    <PageShell locale="en" altLangHref="/es/nfl-madrid">
      <PageHero
        eyebrow="NFL near Puerta del Sol · Espoz y Mina 7"
        title="Watch NFL Madrid at this Irish pub near Sol"
        lead="O'Connell St at Espoz y Mina 7, by Puerta del Sol, puts NFL on the screens when we are showing it, alongside European football. Independent Irish pub and sports bar; usual Sundays open at 14:00. Confirmed games, with Madrid times, are on What's On. Ask which game is on."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="TVs along the sports area at O'Connell St near Sol"
        position="object-[center_35%]"
      />
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
      </Section>
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
      <HowToGetHere locale="en" />
      <SportsPageWayfinding locale="en" currentPath="/nfl-madrid" />
      <Section title="Find us">
        <p>
          {ADDRESS.full}. {HOURS.summaryEn}.
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
