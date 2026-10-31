import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const EN_PATH = "/news/bayern-fans-madrid-weekend";

export const metadata = buildMetadata({
  title: "Bayern Fans früher in Madrid: Fußball-Wochenende an der Sol",
  description:
    "Schon vor Atlético gegen Bayern (Di 3. November, 21:00 Uhr) in Madrid? Premier League, LaLiga, NFL und Formel 1 das ganze Wochenende auf den Screens im O'Connell St, Irish Pub nahe Sol.",
  path: "/de/bayern-fans-madrid-wochenende",
  locale: "de",
});

export default function DeBayernFansWochenendePage() {
  return (
    <PageShell locale="de" altLangHref={EN_PATH}>
      <PageHero
        eyebrow="Champions League · Dienstag, 3. November 2026 · 21:00 Uhr"
        title="Früher anreisen? Ein langes Fußball-Wochenende an der Sol"
        lead="Wer aus dem Auswärtsspiel ein paar Tage Madrid macht, muss nicht bis Dienstag warten. Von Freitag bis Montag läuft bei uns jeden Tag Fußball, ein paar Gehminuten von der Puerta del Sol."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Gang mit Screens im O'Connell St an der Puerta del Sol"
        position="object-[center_40%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={EN_PATH} hrefLang="en" lang="en" className="text-gold underline">
          Read in English: arriving early?
        </a>
      </p>
      <Section title="Freitag: locker ankommen">
        <p>
          Freitags öffnet das O&apos;Connell St um 16:00 Uhr. Koffer abstellen,
          Pub finden und um 21:00 Uhr Villarreal gegen Espanyol schauen – ein
          entspannter erster Abend mit spanischem Fußball vor dem großen Spiel.
        </p>
      </Section>
      <Section title="Samstag: Premier League und LaLiga am Stück">
        <p>
          Wir öffnen um 15:00 Uhr. Die Premier League startet um 16:00 Uhr,
          unter anderem mit Manchester City gegen Brighton, dazu Tottenham gegen
          Crystal Palace um 18:30 Uhr und Aston Villa gegen Fulham um 21:00 Uhr.
          In LaLiga laufen Rayo Vallecano gegen Celta um 16:15 Uhr und Barcelona
          gegen Alavés um 21:00 Uhr. Am Samstagabend ist ab 19:00 Uhr außerdem
          Halloween im Pub.
        </p>
      </Section>
      <Section title="Sonntag: der längste Tag auf den Screens">
        <p>
          Wir öffnen um 14:00 Uhr, pünktlich zu Getafe gegen Sevilla. Danach
          Racing Santander gegen Real Madrid um 16:15 Uhr, Liverpool gegen
          Arsenal um 17:30 Uhr, NFL ab 19:00 Uhr, Athletic Club gegen Real
          Sociedad um 21:00 Uhr und der Große Preis von Mexiko um 21:00 Uhr.
          Montag ist in Madrid Feiertag – am Sonntagabend muss also niemand
          früh ins Bett.
        </p>
      </Section>
      <Section title="Montag: noch ein Abend, dann Dienstag">
        <p>
          Am Montag öffnen wir um 18:00 Uhr, um 21:00 Uhr laufen Newcastle gegen
          Everton und RC Deportivo gegen Osasuna. Am Dienstag, 3. November,
          öffnen wir wieder um 18:00 Uhr, und Atlético gegen Bayern läuft ab dem
          Anpfiff um 21:00 Uhr auf unseren Screens.
        </p>
      </Section>
      <Section title="Drei Pubs, ein Treffpunkt">
        <p>
          O&apos;Connell St und Dubliners teilen sich die Calle de Espoz y
          Mina 7, ein paar Gehminuten von der Puerta del Sol. Das
          O&apos;Reilly&apos;s liegt 200 m von der Sol. Anstoßzeiten können sich
          ändern – schaut vorher kurz ins Programm.
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
          <Link href="/whats-on" hrefLang="en" className="text-cream underline">
            Programm (Englisch)
          </Link>
          {" · "}
          <Link href="/contact" hrefLang="en" className="text-cream underline">
            Kontakt (Englisch)
          </Link>
          {" · "}
          <Link href="/de/bayern-fans-halloween-madrid" className="text-cream underline">
            Weiter: Halloween an der Sol
          </Link>
          {" · "}
          <Link href="/de/bayern-atletico-fans-gemeinsam" className="text-cream underline">
            Rot-Weiß trifft Rot-Weiß
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
