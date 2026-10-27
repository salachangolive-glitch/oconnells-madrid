import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const EN_PATH = "/news/bayern-fans-barrio-de-las-letras";

export const metadata = buildMetadata({
  title: "Bayern Fans Madrid: Barrio de las Letras & Plaza de Santa Ana – Irish Pub nahe Sol",
  description:
    "Bayern-Fans in Madrid für Atlético – Bayern (Di 3. November, 21:00 Uhr): Das Barrio de las Letras und die Plaza de Santa Ana beginnen dort, wo die Calle de Espoz y Mina endet. Cervantes, Lope de Vega und ein Irish Pub in der Nummer 7.",
  path: "/de/bayern-fans-barrio-de-las-letras",
  locale: "de",
});

export default function DeBayernFansBarrioLetrasPage() {
  return (
    <PageShell locale="de" altLangHref={EN_PATH}>
      <PageHero
        eyebrow="Champions League · Dienstag, 3. November 2026 · 21:00 Uhr"
        title="Unser Viertel: Das Barrio de las Letras beginnt am Ende unserer Straße"
        lead="Raus aus dem O'Connell St, die Calle de Espoz y Mina bis zum Ende – und ihr steht in dem Viertel, in dem einst Cervantes und Lope de Vega wohnten. Zwei Straßen, vierhundert Jahre Geschichten."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sport-Screens im O'Connell St an der Puerta del Sol"
        position="object-[center_45%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={EN_PATH} hrefLang="en" lang="en" className="text-gold underline">
          Read in English: the Barrio de las Letras for Bayern fans
        </a>
      </p>
      <Section title="Von der Sol zur Plaza del Ángel">
        <p>
          Die Calle de Espoz y Mina führt von der Puerta del Sol bis zur Plaza
          del Ángel, wir sind in der Nummer 7. Am Ende der Straße liegt das
          Callejón del Gato, die kleine Gasse, die Valle-Inclán in seinem
          Theaterstück <em>Luces de bohemia</em> berühmt gemacht hat. Ein
          Schritt weiter, und ihr seid im Barrio de las Letras.
        </p>
      </Section>
      <Section title="Das Viertel der Dichter">
        <p>
          Der Name heißt so viel wie „Viertel der Buchstaben“. Im 16. und 17.
          Jahrhundert wohnten hier die großen Namen des spanischen Goldenen
          Zeitalters: Miguel de Cervantes, Lope de Vega, Quevedo und Góngora.
          Das Haus von Lope de Vega ist heute ein Museum, und Cervantes liegt
          im Kloster der Trinitarias Descalzas begraben, nur ein paar Straßen
          weiter.
        </p>
      </Section>
      <Section title="Plaza de Santa Ana">
        <p>
          Das Herz des Viertels ist die Plaza de Santa Ana, direkt neben der
          Plaza del Ángel. An einer Seite steht das Teatro Español, auf dem
          Platz die Statuen der Dramatiker Calderón de la Barca und Federico
          García Lorca. Ein guter Ort für einen ruhigen Nachmittag, bevor der
          Abend beginnt.
        </p>
      </Section>
      <Section title="Dann zurück zur Nummer 7">
        <p>
          Am Dienstag, 3. November, öffnet O&apos;Connell St um 18:00 Uhr, und
          Atlético – Bayern läuft ab 21:00 Uhr live auf unseren Screens. Von
          der Plaza de Santa Ana sind es nur ein paar Minuten zurück über die
          Espoz y Mina. Die Öffnungszeiten für jeden Tag stehen auf der{" "}
          <Link href="/location" hrefLang="en" className="text-gold underline">
            Anfahrtsseite (Englisch)
          </Link>
          .
        </p>
      </Section>
      <Section title="Drei Irish Pubs nahe Sol, um sich vor dem Spiel zu treffen">
        <ul className="list-disc space-y-1 pl-5">
          <li>O&apos;Connell St · Calle de Espoz y Mina 7</li>
          <li>Dubliners · Calle de Espoz y Mina 7, gleiche Adresse</li>
          <li>O&apos;Reilly&apos;s · 200 m von der Puerta del Sol</li>
        </ul>
        <p>
          Wer noch durchs Letras-Viertel bummelt, weiß, wohin. Atlético-Fans
          sind genauso willkommen.
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
          <Link href="/de/bayern-fans-madrid-uhrzeiten" className="text-cream underline">
            Madrid tickt anders
          </Link>
          {" · "}
          <Link href="/de/bayern-fans-madrid-sol-entdecken" className="text-cream underline">
            Zwei Stunden rund um die Sol
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
