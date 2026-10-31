import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const EN_PATH = "/news/bayern-fans-madrid-group";

export const metadata = buildMetadata({
  title: "Bayern Fans Madrid in der Gruppe: drei Irish Pubs nahe Sol, ein Plan",
  description:
    "Mit einer großen Gruppe Bayern-Fans in Madrid für Atlético – Bayern (Di 3. November, 21:00 Uhr)? Ein Pin, zwei Adressen, drei Irish Pubs nahe Sol: O'Connell St, Dubliners und O'Reilly's.",
  path: "/de/bayern-fans-gruppe-madrid",
  locale: "de",
});

export default function DeBayernFansGruppePage() {
  return (
    <PageShell locale="de" altLangHref={EN_PATH}>
      <PageHero
        eyebrow="Champions League · Dienstag, 3. November 2026 · 21:00 Uhr"
        title="Die ganze Truppe, ein Pin: So findet eure Bayern-Gruppe an der Sol zusammen"
        lead="Die einen landen morgens, die anderen kommen direkt aus dem Hotel, ein paar bummeln noch durchs Letras-Viertel. Zwanzig Leute, drei Pubs an der Sol – ihr braucht nur einen Plan, den alle auf dem Handy haben."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sport-Screens im O'Connell St an der Puerta del Sol"
        position="object-[center_45%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={EN_PATH} hrefLang="en" lang="en" className="text-gold underline">
          Read in English: the whole crew, one pin
        </a>
      </p>
      <Section title="Zwei Adressen, drei Pubs">
        <p>
          Das Einfache zuerst: O&apos;Connell St und Dubliners haben dieselbe
          Adresse, Calle de Espoz y Mina 7, ein paar Gehminuten von der Puerta
          del Sol. Das O&apos;Reilly&apos;s ist der dritte, 200 m von der Sol.
          Eure Gruppe muss sich also nur zwei Orte merken, und einer davon sind
          gleich zwei Pubs.
        </p>
      </Section>
      <Section title="Ein Pin in die Gruppe">
        <p>
          Bevor jemand das Hotel verlässt, schickt eine Person den Standort
          Espoz y Mina 7 in den Gruppenchat und pinnt ihn an. Wer zuerst da
          ist, teilt seinen Live-Standort, alle anderen folgen einfach dem
          Punkt. Keine langen Anrufe auf einem lauten Platz, kein „An welcher
          Ecke der Sol steht ihr?“.
        </p>
      </Section>
      <Section title="Eine Uhrzeit und ein Plan B">
        <p>
          Am Dienstag, 3. November, öffnet O&apos;Connell St um 18:00 Uhr,
          Anstoß ist um 21:00 Uhr. Macht eine Uhrzeit aus, zu der alle da
          sind, und gleich auch den Plan B: Ist ein Pub voll, ist der nächste
          direkt nebenan unter derselben Hausnummer oder 200 m weiter im
          O&apos;Reilly&apos;s. Einmal in den Chat geschrieben, und niemand
          geht verloren.
        </p>
      </Section>
      <Section title="Aufteilen ist kein Problem">
        <p>
          Eine richtig große Gruppe muss nicht an einem Tisch schauen. Teilt
          euch in kleinere Runden auf die drei Pubs auf, lasst den Chat
          laufen und trefft euch nach dem Abpfiff wieder in der Espoz y Mina.
          Atlético-Fans sind genauso willkommen, und ein Champions-League-Abend
          an der Sol macht zusammen mehr Spaß.
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
          <Link href="/de/bayern-atletico-fans-gemeinsam" className="text-cream underline">
            Weiter: Rot-Weiß trifft Rot-Weiß
          </Link>
          {" · "}
          <Link href="/de/bayern-fans-barrio-de-las-letras" className="text-cream underline">
            Unser Viertel, das Barrio de las Letras
          </Link>
          {" · "}
          <Link href="/de/bayern-fans-madrid-uhrzeiten" className="text-cream underline">
            Madrid tickt anders
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
