import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const DE_PATH = "/de/bayern-fans-madrid-sol-entdecken";

export const metadata = buildMetadata({
  title: "Things to do near Puerta del Sol: a short walk for Bayern fans in Madrid",
  description:
    "Bayern fans in Madrid for Atlético v Bayern, Tue 3 Nov, 21:00: a two-hour walk from Puerta del Sol via Calle Mayor and Plaza Mayor that ends at Calle de Espoz y Mina 7.",
  path: "/news/bayern-fans-things-to-do-near-sol",
});

export default function NewsBayernFansNearSolPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="Champions League · Tuesday 3 November 2026 · 21:00"
        title="Two hours around Sol: see old Madrid on foot before the crew meets up"
        lead="You've landed, dropped the bags, and there's time to kill before everyone arrives. Old Madrid starts right on the doorstep, and this walk finishes exactly where the evening starts."
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Sports screens and seating at O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_20%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={DE_PATH} hrefLang="de" lang="de" className="text-gold underline">
          Auf Deutsch lesen: Zwei Stunden rund um die Sol
        </a>
      </p>
      <Section title="Start at Puerta del Sol">
        <p>
          Sol is the heart of Madrid. In the pavement in front of the Real Casa
          de Correos, the building with the clock, is the Kilómetro Cero
          plaque, the point Spain&apos;s national roads are measured from. A
          photo with your feet on it is compulsory. A few steps away stands the
          bear and strawberry tree statue, the city&apos;s symbol and the
          classic spot where Madrileños arrange to meet.
        </p>
      </Section>
      <Section title="Calle Mayor and Plaza Mayor">
        <p>
          From Sol, Calle Mayor heads west. A few minutes along, an archway
          leads into Plaza Mayor: a huge enclosed square ringed by arcades,
          with the equestrian statue of Philip III in the middle. It&apos;s a
          good place for the first group photo of the trip.
        </p>
        <p>
          If you have time, leave through the Arco de Cuchilleros in the
          south-west corner and take in the steep lanes of the old town.
        </p>
      </Section>
      <Section title="Back towards Sol, finishing at Espoz y Mina 7">
        <p>
          Wind your way back towards Sol. Right off the square, Calle de Espoz
          y Mina runs towards the Barrio de las Letras. The walk ends at number
          7: red facade, gold lettering.
        </p>
        <p>
          On match day O&apos;Connell St opens at 18:00 and the game is live on
          our screens. In town earlier? Opening times for every day are on the{" "}
          <Link href="/location" className="text-gold underline">
            location page
          </Link>
          .
        </p>
      </Section>
      <Section title="Three Irish pubs, one meeting point">
        <ul className="list-disc space-y-1 pl-5">
          <li>O&apos;Connell St · Calle de Espoz y Mina 7</li>
          <li>Dubliners · Calle de Espoz y Mina 7, the same address</li>
          <li>O&apos;Reilly&apos;s · 200 m from Puerta del Sol</li>
        </ul>
        <p>
          Pick one, share the pin, and whoever is still sightseeing knows where
          to head. Atleti fans are just as welcome.
        </p>
      </Section>
      <Section title="Getting here">
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
          <Link href="/contact" className="text-cream underline">
            Contact
          </Link>
          {" · "}
          <Link href="/news/bayern-fans-madrid-pre-match-meeting-point" className="text-cream underline">
            Bayern fans meeting point by Sol
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>
          {" · "}
          <Link href="/news/bayern-fans-madrid-timing" className="text-cream underline">
            Next: Madrid timing for match night
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
