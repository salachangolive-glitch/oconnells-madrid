import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const EN_PATH = "/news/bayern-fans-halloween-madrid";

export const metadata = buildMetadata({
  title: "Halloween in Madrid für Bayern Fans: Samstagabend an der Sol",
  description:
    "Schon vor Atlético gegen Bayern (Di 3. November, 21:00 Uhr) in Madrid? Am Samstag, 31. Oktober, ist Halloween im O'Connell St, Irish Pub nahe Sol: ab 19:00 Uhr Kostüme, Deko und Musik, dazu Fußball auf den Screens.",
  path: "/de/bayern-fans-halloween-madrid",
  locale: "de",
});

export default function DeBayernFansHalloweenPage() {
  return (
    <PageShell locale="de" altLangHref={EN_PATH}>
      <PageHero
        eyebrow="Champions League · Dienstag, 3. November 2026 · 21:00 Uhr"
        title="Schon in Madrid? Heute ist Halloween an der Sol"
        lead="Wer vor Dienstag angereist ist, bekommt am Samstag, 31. Oktober, einen Abend, der vor dem Metropolitano hängen bleibt: Halloween im O'Connell St, ein paar Gehminuten von der Puerta del Sol."
      />
      <InteriorPhoto
        src="/images/interior/bar-corner.webp"
        alt="Bar-Ecke im O'Connell St an der Puerta del Sol"
        position="object-[center_40%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={EN_PATH} hrefLang="en" lang="en" className="text-gold underline">
          Read in English: Halloween near Sol
        </a>
      </p>
      <Section title="Halloween ab 19:00 Uhr">
        <p>
          Am Samstag, 31. Oktober, startet die Halloween-Party um 19:00 Uhr:
          Kostüme, Deko und Musik. Verkleiden ist willkommen, aber kein Muss –
          ein rotes Bayern-Trikot geht auch. Drei Tage vor dem Spiel ist ein
          guter Moment, um die Truppe in Madrid zusammenzutrommeln.
        </p>
      </Section>
      <Section title="Den ganzen Nachmittag Fußball auf den Screens">
        <p>
          Samstags öffnen wir um 15:00 Uhr. Die Premier League startet um
          16:00 Uhr, unter anderem mit Manchester City gegen Brighton, danach
          Tottenham gegen Crystal Palace um 18:30 Uhr und Aston Villa gegen
          Fulham um 21:00 Uhr. In LaLiga läuft Barcelona gegen Alavés um
          21:00 Uhr. Zum Fußball kommen, für Halloween bleiben.
        </p>
      </Section>
      <Section title="Drei Pubs, ein Treffpunkt">
        <p>
          O&apos;Connell St und Dubliners teilen sich die Calle de Espoz y
          Mina 7, ein paar Gehminuten von der Puerta del Sol. Das
          O&apos;Reilly&apos;s liegt 200 m von der Sol. Am Dienstag,
          3. November, öffnen wir um 18:00 Uhr, und Atlético gegen Bayern läuft
          ab dem Anpfiff um 21:00 Uhr auf unseren Screens.
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
          <Link href="/halloween-madrid-sol" hrefLang="en" className="text-cream underline">
            Halloween im O&apos;Connell St (Englisch)
          </Link>
          {" · "}
          <Link href="/whats-on" hrefLang="en" className="text-cream underline">
            Programm (Englisch)
          </Link>
          {" · "}
          <Link href="/contact" hrefLang="en" className="text-cream underline">
            Kontakt (Englisch)
          </Link>
          {" · "}
          <Link href="/de/bayern-fans-madrid-wochenende" className="text-cream underline">
            Früher anreisen?
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
