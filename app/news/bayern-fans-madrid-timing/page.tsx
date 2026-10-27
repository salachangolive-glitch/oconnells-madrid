import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const DE_PATH = "/de/bayern-fans-madrid-uhrzeiten";

export const metadata = buildMetadata({
  title: "Bayern Fans in Madrid: Late Dinners, 21:00 Kick-off & When to Meet",
  description:
    "Madrid runs on a different clock: late dinners and a 21:00 kick-off for Atlético v Bayern (Tue 3 Nov). When to get the group together by Puerta del Sol; O'Connell St opens at 18:00.",
  path: "/news/bayern-fans-madrid-timing",
});

export default function NewsBayernFansTimingPage() {
  return (
    <PageShell locale="en">
      <PageHero
        eyebrow="Champions League · Tuesday 3 November 2026 · 21:00"
        title="Madrid runs on a different clock: fitting your day to the Spanish rhythm"
        lead="Same time zone as Munich, completely different pace. Turn up for dinner at six and you'll often have the place to yourself. Here's how a Champions League Tuesday by Sol plays out."
      />
      <InteriorPhoto
        src="/images/interior/football-seating.webp"
        alt="Sports screens and seating at O'Connell St Irish pub by Puerta del Sol"
        position="object-[center_20%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={DE_PATH} hrefLang="de" lang="de" className="text-gold underline">
          Auf Deutsch lesen: Madrid tickt anders
        </a>
      </p>
      <Section title="No time difference, different routine">
        <p>
          Madrid and Munich share a time zone, so your phone stays as it is.
          What shifts is the day: in Spain lunch is usually around 14:00 and
          dinner rarely before 21:00. A 21:00 kick-off lands right in the
          middle of a Madrileño&apos;s dinner time.
        </p>
      </Section>
      <Section title="Tuesday in three stages">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Lunch:</strong> eat late and properly, and you&apos;ll last
            well into the night.
          </li>
          <li>
            <strong>From 18:00:</strong> O&apos;Connell St opens and the group
            can gather without a rush at Calle de Espoz y Mina 7.
          </li>
          <li>
            <strong>21:00:</strong> kick-off, live on our screens.
          </li>
        </ul>
      </Section>
      <Section title="The night doesn't end at the final whistle">
        <p>
          Madrid keeps late hours, and the streets around Sol are still busy
          at midnight. Monday to Thursday we&apos;re open until 03:00; hours for
          every day are on the{" "}
          <Link href="/location" className="text-gold underline">
            location page
          </Link>
          .
        </p>
      </Section>
      <Section title="Three Irish pubs near Sol to meet up before the match">
        <ul className="list-disc space-y-1 pl-5">
          <li>O&apos;Connell St · Calle de Espoz y Mina 7</li>
          <li>Dubliners · Calle de Espoz y Mina 7, same address</li>
          <li>O&apos;Reilly&apos;s · 200 m from Puerta del Sol</li>
        </ul>
        <p>
          Drop the time and a pin in the group chat and you&apos;re sorted.
          Atlético fans are just as welcome.
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
          <Link href="/contact" className="text-cream underline">
            Contact
          </Link>
          {" · "}
          <Link href="/news/bayern-fans-things-to-do-near-sol" className="text-cream underline">
            Two hours around Sol
          </Link>
          {" · "}
          <Link href="/news/bayern-fans-barrio-de-las-letras" className="text-cream underline">
            Next: the Barrio de las Letras
          </Link>
          {" · "}
          <Link href="/whats-on" className="text-cream underline">
            What&apos;s On
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
