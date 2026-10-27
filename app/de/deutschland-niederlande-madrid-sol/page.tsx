import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { HOURS, MAPS_URL } from "@/lib/venue";

/**
 * OC-30 (DG 27 Oct 2026): Germany v Netherlands, UEFA Nations League.
 * Kickoff per match.uefa.com/v5 comp 2014, match 2047909: 2026-11-16T19:45Z = 20:45 Madrid (CET).
 * Venue per the same API: Olympiastadion, Berlin. No TV channel stated (not verified).
 * EN line on /whats-on (date-gated to 16 Nov).
 */
export const metadata = buildMetadata({
  title: "Deutschland – Niederlande in Madrid: Montagabend an der Puerta del Sol",
  description:
    "Deutschland – Niederlande, UEFA Nations League, Montag 16. November, 20:45 Uhr Madrider Zeit: das Spiel im O'Connell St, Irish Pub in der Calle de Espoz y Mina 7 an der Puerta del Sol.",
  path: "/de/deutschland-niederlande-madrid-sol",
  locale: "de",
});

export default function DeDeutschlandNiederlandePage() {
  return (
    <PageShell locale="de" altLangHref="/whats-on">
      <PageHero
        eyebrow="UEFA Nations League · Montag, 16. November 2026 · 20:45 Uhr"
        title="Deutschland – Niederlande: Montagabend an der Puerta del Sol"
        lead="Der Klassiker im Berliner Olympiastadion, und ihr seid in Madrid. Das Spiel läuft bei uns, ein paar Schritte von der Puerta del Sol. Deutsche und Niederländer sind gleichermaßen willkommen."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sport-Screens im O'Connell St an der Puerta del Sol"
        position="object-[center_45%]"
      />
      <Section title="Das Spiel">
        <ul className="list-disc space-y-1 pl-5">
          <li>Deutschland – Niederlande, UEFA Nations League</li>
          <li>Montag, 16. November 2026, 20:45 Uhr (Madrider Zeit, wie in Deutschland)</li>
          <li>Olympiastadion, Berlin</li>
        </ul>
        <p>
          Datum und Anstoß laut{" "}
          <a
            href="https://www.uefa.com/uefanationsleague/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline"
          >
            uefa.com
          </a>
          .
        </p>
      </Section>
      <Section title="Montagabend im O'Connell St">
        <p>
          Montags öffnen wir um 18:00 Uhr, nach Feierabend bleibt also Zeit für
          ein Bier vor dem Anpfiff um 20:45 Uhr. Unsere Öffnungszeiten:{" "}
          {HOURS.summaryDe}.
        </p>
        <p>
          Drei Tage vorher, am Freitag, 13. November, spielt Deutschland in
          Belgrad:{" "}
          <Link href="/de/serbien-deutschland-madrid-sol" className="text-gold underline">
            Länderspiel-Freitag an der Sol
          </Link>
          .
        </p>
        <p lang="en">
          <Link href="/whats-on" hrefLang="en" className="text-gold underline">
            What&apos;s On (English)
          </Link>
        </p>
      </Section>
      <Section title="So findet ihr uns">
        <p>
          Calle de Espoz y Mina 7, ein paar Minuten zu Fuß von der Puerta del
          Sol (Metro und Cercanías Sol).
        </p>
        <p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-cream underline"
          >
            Route öffnen
          </a>
          {" · "}
          <Link href="/de" className="text-cream underline">
            Alle Seiten auf Deutsch
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
