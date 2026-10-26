import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const EN_PATH = "/news/bayern-fans-madrid-pre-match-meeting-point";

export const metadata = buildMetadata({
  title: "Bayern Fans Madrid: ein Irish Pub nahe Sol, um sich vor dem Spiel zu treffen",
  description:
    "Bayern-Fans in Madrid vor Atlético – Bayern (Di 3. November, 21:00 Uhr): ein Irish Pub nahe Sol, um sich vor dem Spiel zu treffen. Ab 18 Uhr an der Puerta del Sol einstimmen, das Spiel live auf unseren Screens.",
  path: "/de/bayern-fans-madrid-treffpunkt",
  locale: "de",
});

export default function DeBayernFansPreMatchPage() {
  return (
    <PageShell locale="de" altLangHref={EN_PATH}>
      <PageHero
        eyebrow="Champions League · Dienstag, 3. November 2026 · 21:00 Uhr"
        title="Bayern-Fans in Madrid: Hier geht der Abend los"
        lead="Bevor im Metropolitano der Ball rollt, gehört die Innenstadt den Fans. Rund um die Puerta del Sol trifft sich alles – und nur ein paar Schritte vom Platz entfernt ein Irish Pub, um sich vor dem Spiel zu treffen."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sport-Screens im O'Connell St an der Puerta del Sol"
        position="object-[center_45%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={EN_PATH} hrefLang="en" lang="en" className="text-gold underline">
          Read in English: an Irish pub near Sol to meet up before the match
        </a>
      </p>
      <Section title="Das Spiel auf einen Blick">
        <ul className="list-disc space-y-1 pl-5">
          <li>Atlético Madrid – FC Bayern München, UEFA Champions League, Ligaphase</li>
          <li>Dienstag, 3. November 2026, Anpfiff 21:00 Uhr Madrider Zeit</li>
          <li>Riyadh Air Metropolitano, Madrid</li>
          <li>Im spanischen TV: Movistar Plus+</li>
        </ul>
        <p>
          Keine Karte bekommen? Oder ihr wartet auf die Kumpels mit Ticket?
          Bei O&apos;Connell St läuft das Spiel live auf unseren Screens.
        </p>
      </Section>
      <Section title="Nachmittag in der Altstadt, Abend an der Sol">
        <p>
          Auswärtsfahrt nach Madrid heißt: Der Tag beginnt mitten in der Stadt.
          An der Puerta del Sol verabreden sich die Madrilenen, die Plaza Mayor
          liegt nur ein paar Minuten zu Fuß entfernt, und in den Gassen drumherum
          lässt es sich als Gruppe wunderbar treiben.
        </p>
        <p>
          Dienstags öffnet O&apos;Connell St um 18:00 Uhr. Bis zum Anpfiff bleiben
          also drei Stunden, um die ganze Truppe zusammenzutrommeln, Geschichten
          von der Anreise auszutauschen und die Stimme schon mal warmzusingen –
          egal, ob ihr später raus ins Stadion fahrt oder hier mitfiebert.
        </p>
      </Section>
      <Section title="Drei Irish Pubs nahe Sol, um sich vor dem Spiel zu treffen">
        <p>
          Ihr seid eine große Gruppe oder kommt zu unterschiedlichen Zeiten an?
          Drei Irish Pubs im Zentrum, um sich vor dem Spiel zu treffen:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>O&apos;Connell St · Calle de Espoz y Mina 7</li>
          <li>Dubliners · Calle de Espoz y Mina 7, gleiche Adresse</li>
          <li>O&apos;Reilly&apos;s · 200 m von der Puerta del Sol</li>
        </ul>
        <p>
          Einen auswählen, Standort in die Gruppe schicken – fertig. Und auch
          Atlético-Fans sind herzlich willkommen: Ein Champions-League-Abend
          macht mit beiden Lagern im Raum einfach mehr Spaß.
        </p>
      </Section>
      <Section title="So findet ihr uns">
        <p>
          O&apos;Connell St liegt in der Calle de Espoz y Mina 7, gleich an der
          Puerta del Sol. Die Station Sol (Metro und Cercanías) kommt direkt am
          Platz raus. Achtet auf die rote Fassade mit goldener Schrift an
          Hausnummer 7.
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
          <Link href="/location" hrefLang="en" className="text-cream underline">
            Anfahrt (Englisch)
          </Link>
          {" · "}
          <Link href="/contact" hrefLang="en" className="text-cream underline">
            Kontakt (Englisch)
          </Link>
          {" · "}
          <Link href="/de/sports-bar-sol" className="text-cream underline">
            Sports Pub an der Sol
          </Link>
          {" · "}
          <Link href="/de/bayern-fans-madrid-sol-entdecken" className="text-cream underline">
            Weiter: Zwei Stunden rund um die Sol
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
