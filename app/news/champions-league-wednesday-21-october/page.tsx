import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Champions League, Wednesday 21 October: Real Madrid v RB Leipzig and Bayern v Arsenal",
  description:
    "Wednesday 21 October, 21:00 Madrid time: Real Madrid v RB Leipzig and Bayern v Arsenal at O'Connell St, Calle de Espoz y Mina 7, just off Puerta del Sol. Leipzig fans welcome.",
  path: "/news/champions-league-wednesday-21-october",
});

export default function NewsUclWednesday21OctPage() {
  return (
    <PageShell locale="en" altLangHref="/es/noticias/champions-league-miercoles-21-octubre">
      <PageHero
        eyebrow="News · Wednesday 21 October 2026"
        title="Champions League on Wednesday: Real Madrid v RB Leipzig and Bayern v Arsenal"
        lead="The second night of Champions League matchday 3 brings RB Leipzig to Madrid. Real Madrid v RB Leipzig and Bayern v Arsenal both kick off at 21:00 Madrid time, and both are on the screens at O'Connell St."
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Barrel seating and sports screens at O'Connell St Irish pub near Sol"
        position="object-[center_20%]"
      />
      <Section title="The 21:00 games">
        <ul className="list-disc space-y-1 pl-5">
          <li>Real Madrid v RB Leipzig · 21:00</li>
          <li>Bayern Munich v Arsenal · 21:00</li>
        </ul>
        <p>
          Times are Madrid time, from UEFA&apos;s league phase fixture list. Earlier,
          at 18:45, Como v Manchester United and Lille v Galatasaray get the
          evening started. Every game of the week is on{" "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>
          .
        </p>
      </Section>
      <Section title="Leipzig fans in Madrid">
        <p>
          Welcome to Madrid! If you&apos;re in town for the game at the
          Bernabéu, O&apos;Connell St, just off Puerta del Sol, is your fans
          meeting point before and after the game, right in the centre of the
          city.
        </p>
        <p lang="de">
          Willkommen in Madrid, Leipzig-Fans! O&apos;Connell St, direkt an der
          Puerta del Sol, ist euer Treffpunkt vor und nach dem Spiel.
        </p>
      </Section>
      <Section title="A fans meeting point before and after the game">
        <p>
          We open at 18:00 on Wednesdays and stay open until 03:00, so you can
          meet up before kick-off and come back for the talk afterwards. Real
          Madrid supporters, Arsenal fans away from home and anyone following
          the night&apos;s football: O&apos;Connell St is a fans meeting point for
          all of them. On a busy night, come a little early.
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
          <Link href="/news/champions-league-tuesday-20-october" className="text-cream underline">
            Tuesday 20 October: PSG v Barcelona, Stuttgart v Atlético and Liverpool v Villarreal
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
