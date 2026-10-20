import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Champions League, Tuesday 20 October: PSG v Barcelona and Atlético at 21:00",
  description:
    "Tuesday 20 October, 21:00 Madrid time: PSG v Barcelona, Stuttgart v Atlético de Madrid and Liverpool v Villarreal on the screens at O'Connell St, Calle de Espoz y Mina 7, just off Puerta del Sol.",
  path: "/news/champions-league-tuesday-20-october",
});

export default function NewsUclTuesday20OctPage() {
  return (
    <PageShell locale="en" altLangHref="/es/noticias/champions-league-martes-20-octubre">
      <PageHero
        eyebrow="News · Tuesday 20 October 2026"
        title="Champions League on Tuesday: PSG v Barcelona, Stuttgart v Atlético and Liverpool v Villarreal"
        lead="Matchday 3 of the Champions League league phase starts on Tuesday 20 October, and three of the evening's games kick off together at 21:00 Madrid time. All three are on the screens at O'Connell St."
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Barrel seating and sports screens at O'Connell St Irish pub near Sol"
        position="object-[center_20%]"
      />
      <Section title="The 21:00 games">
        <ul className="list-disc space-y-1 pl-5">
          <li>Paris Saint-Germain v Barcelona · 21:00</li>
          <li>Stuttgart v Atlético de Madrid · 21:00</li>
          <li>Liverpool v Villarreal · 21:00</li>
        </ul>
        <p>
          Times are Madrid time, from UEFA&apos;s league phase fixture list. Two
          earlier games, Fenerbahçe v Slavia Prague and Sabah v Borussia
          Dortmund, start at 18:45. The full list for the week is on{" "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>
          .
        </p>
      </Section>
      <Section title="A fans meeting point before and after the game">
        <p>
          We open at 18:00 on Tuesdays, so there&apos;s time to meet your group
          before kick-off, and we stay open until 03:00 for the talk afterwards.
          Whether you follow Barça, Atlético, Villarreal or one of the visiting
          sides, O&apos;Connell St is a fans meeting point in the centre of
          Madrid, before and after the game. With three big games at once, it
          helps to come a little early.
        </p>
      </Section>
      <Section title="Getting here from Sol">
        <p>
          O&apos;Connell St is at Calle de Espoz y Mina 7, just off Puerta del
          Sol. Sol station (Metro and Cercanías) comes out on the square: from
          there, walk to Calle de Espoz y Mina and look for number 7, with its
          red facade and gold lettering above the door.
        </p>
        <p>
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
          <Link href="/news/champions-league-wednesday-21-october" className="text-cream underline">
            Wednesday 21 October: Real Madrid v RB Leipzig and Bayern v Arsenal
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
