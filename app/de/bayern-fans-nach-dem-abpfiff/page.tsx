import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const EN_PATH = "/news/bayern-fans-after-the-final-whistle";

export const metadata = buildMetadata({
  title: "Bayern Fans Madrid nach dem Spiel: zurück an die Sol, offen bis 03:00",
  description:
    "Atlético – Bayern, Dienstag, 3. November, 21:00 Uhr: Nach dem Abpfiff zurück ins Zentrum. Euer Treffpunkt an der Puerta del Sol: O'Connell St und Dubliners (Espoz y Mina 7) und O'Reilly's. O'Connell St hat bis 03:00 Uhr geöffnet.",
  path: "/de/bayern-fans-nach-dem-abpfiff",
  locale: "de",
});

export default function DeBayernFansNachDemAbpfiffPage() {
  return (
    <PageShell locale="de" altLangHref={EN_PATH}>
      <PageHero
        eyebrow="Champions League · Dienstag, 3. November 2026 · 21:00 Uhr"
        title="Nach dem Abpfiff: zurück an die Sol"
        lead="Gegen 23:00 Uhr ist im Metropolitano Schluss. Die Nacht in Madrid fängt dann gerade erst an – und an der Puerta del Sol warten drei Irish Pubs, in denen man das Spiel noch einmal durchgehen kann."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Zapfhähne an der Bar im O'Connell St an der Puerta del Sol"
        position="object-[center_40%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={EN_PATH} hrefLang="en" lang="en" className="text-gold underline">
          Read in English: after the final whistle
        </a>
      </p>
      <p className="mb-8 border-l-2 border-gold pl-4 text-sm sm:text-base">
        <a href="/de/bayern-fans-madrid-treffpunkt-sol" className="font-semibold text-gold underline">
          Heute, 21:00 Uhr: Atlético – Bayern live auf der Großleinwand – euer Treffpunkt an der Sol →
        </a>
      </p>
      <Section title="Madrid geht nicht früh schlafen">
        <p>
          In Madrid wird spät gegessen und spät ausgegangen. Ein Spiel, das um
          21:00 Uhr beginnt, ist hier kein Abschluss, sondern die Mitte des
          Abends. Wer nach dem Abpfiff noch nicht ins Hotel will, ist im
          Zentrum genau richtig.
        </p>
      </Section>
      <Section title="Zurück ins Zentrum">
        <p>
          Laut Stadion fährt die Metro bis etwa 01:30 Uhr. Die Details zur
          Strecke stehen in unserem{" "}
          <a href="/de/bayern-fans-madrid-treffpunkt-sol" className="text-gold underline">
            Artikel zum Treffpunkt an der Sol
          </a>
          . Unser Tipp: Macht vorher aus, wo ihr euch wiederfindet – ein Pin
          auf der Karte reicht.
        </p>
      </Section>
      <Section title="Drei Pubs, ein Treffpunkt">
        <p>
          O&apos;Connell St und Dubliners teilen sich die Calle de Espoz y
          Mina 7, ein paar Gehminuten von der Puerta del Sol. Das
          O&apos;Reilly&apos;s liegt rund 200 m von der Sol. Das O&apos;Connell
          St hat am Dienstag bis 03:00 Uhr geöffnet: Zeit für ein Bier nach dem
          Spiel, für die Analyse der großen Szenen und für ein paar Lieder.
        </p>
        <p>
          Wer das Spiel lieber im Pub sieht: Atlético – Bayern läuft ab dem
          Anpfiff um 21:00 Uhr auf unseren Screens, wir öffnen um 18:00 Uhr.
        </p>
      </Section>
      <Section title="So findet ihr uns">
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
          <Link href="/contact" hrefLang="en" data-event="contact" className="text-cream underline">
            Kontakt (Englisch)
          </Link>
          {" · "}
          <Link href="/de/spanisch-fuer-bayern-fans" className="text-cream underline">
            Spanisch für Bayern Fans: zehn Sätze
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
