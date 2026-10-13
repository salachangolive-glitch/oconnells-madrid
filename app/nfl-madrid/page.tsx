import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "NFL bar in Madrid near Sol – watch NFL in central Madrid",
  description:
    "Where to watch NFL in Madrid: O'Connell St, an Irish sports pub on Calle de Espoz y Mina, a short walk from Sol. Confirmed games on What's On.",
  path: "/nfl-madrid",
});

const faq = [
  {
    q: "Where can I watch NFL in Madrid?",
    a: "O'Connell St is a sports pub in central Madrid, a short walk from Puerta del Sol. We put NFL games on the TVs when we are showing them, and every confirmed game is listed on What's On with the Madrid time.",
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
        lead="An Irish sports pub a few minutes' walk from Puerta del Sol, with American football on the TVs when we're showing it."
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
