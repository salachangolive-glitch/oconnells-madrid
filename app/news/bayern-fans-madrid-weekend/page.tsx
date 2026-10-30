import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const DE_PATH = "/de/bayern-fans-madrid-wochenende";

export const metadata = buildMetadata({
  title: "Bayern Fans Arriving Early in Madrid: a Football Weekend near Sol",
  description:
    "Flying in before Atlético v Bayern (Tue 3 Nov, 21:00)? Premier League, LaLiga, NFL and F1 on the screens all weekend at O'Connell St, an Irish pub near Sol. Opening hours and what's on.",
  path: "/news/bayern-fans-madrid-weekend",
});

export default function NewsBayernFansWeekendPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="Champions League · Tuesday 3 November 2026 · 21:00"
        title="Arriving early? A long football weekend near Sol before Tuesday"
        lead="If you've turned the Bayern away trip into a few days in Madrid, the warm-up starts long before Tuesday. From Friday to Monday there's football on our screens every day, a couple of minutes' walk from Puerta del Sol."
      />
      <InteriorPhoto
        src="/images/interior/stairs-levels.webp"
        alt="Stairs between the levels at O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_40%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={DE_PATH} hrefLang="de" lang="de" className="text-gold underline">
          Auf Deutsch lesen: Früher anreisen?
        </a>
      </p>
      <Section title="Friday: ease into it">
        <p>
          O&apos;Connell St opens at 16:00 on Fridays. Drop your bags, find the
          pub, and settle in for Villarreal v Espanyol at 21:00, a gentle
          first night of Spanish football before the big one.
        </p>
      </Section>
      <Section title="Saturday: Premier League and LaLiga back to back">
        <p>
          We open at 15:00. Premier League kicks off at 16:00, Manchester City v
          Brighton among them, with Tottenham v Crystal Palace at 18:30 and
          Aston Villa v Fulham at 21:00. On the LaLiga side there&apos;s Rayo
          Vallecano v Celta at 16:15 and Barcelona v Alavés at 21:00. Saturday
          evening is also Halloween at the pub, from 19:00.
        </p>
      </Section>
      <Section title="Sunday: the longest day on the screens">
        <p>
          Doors open at 14:00, just in time for Getafe v Sevilla. Then Racing
          Santander v Real Madrid at 16:15, Liverpool v Arsenal at 17:30, NFL
          from 19:00, Athletic Club v Real Sociedad at 21:00 and the Mexico City
          Grand Prix at 21:00. Monday is a public holiday in Madrid, so Sunday
          night has no rush.
        </p>
      </Section>
      <Section title="Monday: one more night, then Tuesday">
        <p>
          On Monday we open at 18:00, with Newcastle v Everton and RC Deportivo
          v Osasuna at 21:00. On Tuesday 3 November we open at 18:00 again, and
          Atlético v Bayern is on our screens from kick-off at 21:00.
        </p>
      </Section>
      <Section title="Three pubs, one meeting place">
        <p>
          O&apos;Connell St and Dubliners share Calle de Espoz y Mina 7, a
          couple of minutes&apos; walk from Puerta del Sol, and
          O&apos;Reilly&apos;s is 200 m from Sol. Times can change, so check
          What&apos;s On before you head over.
        </p>
      </Section>
      <Section title="Find us">
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Get directions
          </a>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>
          {" · "}
          <Link href="/contact" className="text-cream underline">
            Contact
          </Link>
          {" · "}
          <Link href="/news/bayern-atletico-fans-together" className="text-cream underline">
            Red and white meets red and white
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
