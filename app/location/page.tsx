import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { VenueHero } from "@/components/VenueHero";
import { buildMetadata } from "@/lib/seo";
import {
  ADDRESS,
  HOURS,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  SITE_NAME,
} from "@/lib/venue";

export const metadata = buildMetadata({
  title: "Location — Calle de Espoz y Mina 7, near Sol",
  description:
    "Find O'Connell St at Calle de Espoz y Mina 7, 28012 Madrid, near Puerta del Sol. Google Maps directions. Phone +34 915 32 79 56.",
  path: "/location",
});

export default function LocationPage() {
  return (
    <PageShell locale="en" altLangHref="/es/location">
      <PageHero
        eyebrow="Location · Madrid Centro"
        title={`How to find ${SITE_NAME}`}
        lead={`${ADDRESS.full} — a short walk from Puerta del Sol.`}
      />
      <VenueHero
        src="/images/oconnell-fachada.jpg"
        alt="O'Connell St facade on Calle de Espoz y Mina near Puerta del Sol"
        className="mb-10"
        aspect="wide"
      />
      <Section title="Address & contact">
        <p>{ADDRESS.full}</p>
        <p>
          Phone:{" "}
          <a href={PHONE_TEL} className="text-cream underline">
            {PHONE_DISPLAY}
          </a>
        </p>
        <ul className="list-none space-y-1">
          {HOURS.linesEn.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md bg-pub-green px-4 py-2 font-semibold text-cream hover:bg-pub-green-light"
          >
            Open in Google Maps
          </a>
        </p>
      </Section>
      <Section title="Getting here">
        <p>
          Aim for Puerta del Sol, then walk to Calle de Espoz y Mina. Perfect
          before a Premier League, Champions League or LaLiga kick-off — or for
          Thursday €1 shots with your Erasmus crew.
        </p>
        <p>
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s on
          </Link>
          {" · "}
          <Link href="/sports" className="text-cream underline">
            Sports
          </Link>
          {" · "}
          <Link href="/thursday-1-euro-shots" className="text-cream underline">
            Thursday €1
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
