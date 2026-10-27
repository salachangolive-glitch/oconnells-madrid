import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { HOURS, MAPS_URL } from "@/lib/venue";

/**
 * OC-29 (DG 27 Oct 2026): Serbia v Germany, UEFA Nations League.
 * Kickoff per match.uefa.com/v5 comp 2014, match 2047887: 2026-11-13T19:45Z = 20:45 Madrid (CET).
 * Venue per the same API: Stadion Rajko Mitić, Belgrade. No TV channel stated (not verified).
 */
export const metadata = buildMetadata({
  title: "Serbien – Deutschland in Madrid: Länderspiel-Freitag an der Puerta del Sol",
  description:
    "Serbien – Deutschland, UEFA Nations League, Freitag 13. November, 20:45 Uhr Madrider Zeit: das Spiel im O'Connell St, Irish Pub in der Calle de Espoz y Mina 7 an der Puerta del Sol.",
  path: "/de/serbien-deutschland-madrid-sol",
  locale: "de",
});

export default function DeSerbienDeutschlandPage() {
  return (
    <PageShell locale="de">
      <PageHero
        eyebrow="UEFA Nations League · Freitag, 13. November 2026 · 20:45 Uhr"
        title="Länderspiel-Freitag an der Puerta del Sol: Serbien – Deutschland"
        lead="Die Nationalmannschaft spielt am Freitagabend in Belgrad, und ihr seid in Madrid. Das Spiel läuft bei uns, ein paar Schritte von der Puerta del Sol."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sport-Screens im O'Connell St an der Puerta del Sol"
        position="object-[center_45%]"
      />
      <Section title="Das Spiel">
        <ul className="list-disc space-y-1 pl-5">
          <li>Serbien – Deutschland, UEFA Nations League</li>
          <li>Freitag, 13. November 2026, 20:45 Uhr (Madrider Zeit, wie in Deutschland)</li>
          <li>Stadion Rajko Mitić, Belgrad</li>
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
      <Section title="Freitagabend im O'Connell St">
        <p>
          Freitags öffnen wir um 16:00 Uhr, genug Zeit für ein Bier nach der
          Arbeit oder nach dem Stadtbummel, bevor um 20:45 Uhr angepfiffen wird.
          Unsere Öffnungszeiten: {HOURS.summaryDe}.
        </p>
        <p>
          Und am Montag, 16. November, spielt Deutschland gegen die Niederlande:{" "}
          <Link href="/de/deutschland-niederlande-madrid-sol" className="text-gold underline">
            Montagabend an der Sol
          </Link>
          .
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
