import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const EN_PATH = "/news/bayern-fans-things-to-do-near-sol";

export const metadata = buildMetadata({
  title: "Bayern Fans Madrid: Was tun an der Puerta del Sol? Zwei Stunden zu Fuß",
  description:
    "Bayern-Fans in Madrid vor Atlético – Bayern (Di 3. November, 21:00 Uhr): ein kurzer Spaziergang ab der Puerta del Sol über Calle Mayor und Plaza Mayor, der in der Calle de Espoz y Mina 7 endet.",
  path: "/de/bayern-fans-madrid-sol-entdecken",
  locale: "de",
});

export default function DeBayernFansSolEntdeckenPage() {
  return (
    <PageShell locale="de" altLangHref={EN_PATH}>
      <PageHero
        eyebrow="Champions League · Dienstag, 3. November 2026 · 21:00 Uhr"
        title="Zwei Stunden rund um die Sol: Madrid zu Fuß, bevor die Truppe zusammenkommt"
        lead="Der Flieger ist gelandet, das Hotel ist bezogen, bis zum Treffen ist noch Zeit. Gute Nachricht: Die Altstadt beginnt direkt vor der Haustür – und der Spaziergang endet genau dort, wo der Abend beginnt."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sport-Screens im O'Connell St an der Puerta del Sol"
        position="object-[center_45%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={EN_PATH} hrefLang="en" lang="en" className="text-gold underline">
          Read in English: things to do near Sol before you meet up
        </a>
      </p>
      <Section title="Start: Puerta del Sol">
        <p>
          Die Sol ist das Herz von Madrid. Vor der Real Casa de Correos mit
          ihrer Uhr liegt im Pflaster die Plakette „Kilómetro Cero“, von der
          aus die spanischen Nationalstraßen gemessen werden – das Foto mit
          den Füßen darauf gehört dazu. Ein paar Meter weiter steht der Bär
          mit dem Erdbeerbaum, das Wappentier der Stadt und der
          Treffpunkt-Klassiker der Madrilenen.
        </p>
      </Section>
      <Section title="Calle Mayor und Plaza Mayor">
        <p>
          Von der Sol führt die Calle Mayor nach Westen. Nach wenigen Minuten
          geht es durch einen der Torbögen auf die Plaza Mayor: ein riesiger,
          rundum geschlossener Platz mit Arkaden und dem Reiterstandbild
          Philipps III. in der Mitte. Ein guter Ort, um das erste
          Gruppenfoto der Auswärtsfahrt zu machen.
        </p>
        <p>
          Wer Zeit hat, verlässt den Platz durch den Arco de Cuchilleros an
          der Südwestecke und schaut sich die steilen Gassen der Altstadt an.
        </p>
      </Section>
      <Section title="Zurück Richtung Sol – Ziel: Espoz y Mina 7">
        <p>
          Über die Gassen geht es zurück in Richtung Sol. Gleich an der Sol
          beginnt die Calle de Espoz y Mina, die hinüber ins Barrio de las
          Letras führt. An Hausnummer 7, mit der roten Fassade und der
          goldenen Schrift, endet die Runde.
        </p>
        <p>
          Am Spieltag öffnet O&apos;Connell St um 18:00 Uhr, das Spiel läuft
          live auf unseren Screens. Wer schon vorher in der Stadt ist: Die
          Zeiten für jeden Tag stehen auf der{" "}
          <Link href="/location" hrefLang="en" className="text-gold underline">
            Anfahrtsseite (Englisch)
          </Link>
          .
        </p>
      </Section>
      <Section title="Drei Irish Pubs, ein Treffpunkt">
        <ul className="list-disc space-y-1 pl-5">
          <li>O&apos;Connell St · Calle de Espoz y Mina 7</li>
          <li>Dubliners · Calle de Espoz y Mina 7, gleiche Adresse</li>
          <li>O&apos;Reilly&apos;s · 200 m von der Puerta del Sol</li>
        </ul>
        <p>
          Einen auswählen, Standort in die Gruppe schicken – und wer noch auf
          Sightseeing-Tour ist, weiß, wo er hinmuss. Atlético-Fans sind
          genauso willkommen.
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
          <Link href="/contact" hrefLang="en" className="text-cream underline">
            Kontakt (Englisch)
          </Link>
          {" · "}
          <Link href="/de/bayern-fans-madrid-treffpunkt" className="text-cream underline">
            Treffpunkt für Bayern-Fans an der Sol
          </Link>
          {" · "}
          <Link href="/de/sports-bar-sol" className="text-cream underline">
            Sports Pub an der Sol
          </Link>
          {" · "}
          <Link href="/de/bayern-fans-madrid-uhrzeiten" className="text-cream underline">
            Weiter: Madrid tickt anders
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
