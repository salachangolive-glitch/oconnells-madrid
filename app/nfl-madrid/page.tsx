import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
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
            taxi. The accessible metro station is Nuevos Ministerios (lines 6, 8
            and 10), about 15 minutes on foot from the accessible entrance.
          </li>
          <li>
            The NFL clear-bag policy applies, and the advice is to bring no bag
            at all. If you need one: a clear bag up to 30.5 × 15.25 × 30.5 cm or a
            small clutch up to 11.5 × 16.5 cm. An empty, clear reusable bottle
            (up to 1 litre) is allowed.
          </li>
        </ul>
        <p>
          No ticket? The game is on our screens at O&apos;Connell St, near Sol,
          from 15:30. Check{" "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>{" "}
          for the rest of Sunday&apos;s games.
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
