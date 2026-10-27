import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const EN_PATH = "/news/bayern-fans-madrid-timing";

export const metadata = buildMetadata({
  title: "Bayern Fans Madrid: Uhrzeiten, Abendessen & ein Irish Pub nahe Sol, um sich vor dem Spiel um 21:00 Uhr zu treffen",
  description:
    "Madrid tickt anders: Abendessen spät, Anstoß Atlético – Bayern um 21:00 Uhr (Di 3. November). Wann sich die Truppe an der Puerta del Sol trifft – O'Connell St öffnet um 18:00 Uhr.",
  path: "/de/bayern-fans-madrid-uhrzeiten",
  locale: "de",
});

export default function DeBayernFansUhrzeitenPage() {
  return (
    <PageShell locale="de" altLangHref={EN_PATH}>
      <PageHero
        eyebrow="Champions League · Dienstag, 3. November 2026 · 21:00 Uhr"
        title="Madrid tickt anders: So passt euer Tag zum spanischen Rhythmus"
        lead="Gleiche Uhrzeit wie in München, aber ein ganz anderer Takt. Wer um 18 Uhr ans Abendessen denkt, sitzt in Madrid oft allein. Hier ist der Fahrplan für einen Champions-League-Dienstag an der Sol."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sport-Screens im O'Connell St an der Puerta del Sol"
        position="object-[center_45%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={EN_PATH} hrefLang="en" lang="en" className="text-gold underline">
          Read in English: Madrid timing for Bayern fans
        </a>
      </p>
      <Section title="Keine Zeitverschiebung, trotzdem eine andere Uhr">
        <p>
          Madrid und München liegen in derselben Zeitzone, die Handyuhr bleibt
          also, wie sie ist. Was sich verschiebt, ist der Alltag: In Spanien
          wird mittags meist erst gegen 14 Uhr gegessen und abends selten vor
          21 Uhr. Ein Anstoß um 21:00 Uhr fällt für Madrilenen also mitten in
          die Abendessenszeit.
        </p>
      </Section>
      <Section title="Der Dienstag in drei Etappen">
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <strong>Mittag:</strong> spät und ausgiebig essen, dann hält man
            bis in die Nacht durch.
          </li>
          <li>
            <strong>Ab 18:00 Uhr:</strong> O&apos;Connell St öffnet, die Truppe
            sammelt sich in Ruhe an der Calle de Espoz y Mina 7.
          </li>
          <li>
            <strong>21:00 Uhr:</strong> Anstoß. Das Spiel läuft bei uns live
            auf den Screens.
          </li>
        </ul>
      </Section>
      <Section title="Nach dem Spiel ist in Madrid noch nicht Schluss">
        <p>
          Die Stadt lebt spät: Rund um die Sol ist um Mitternacht noch viel
          los. Montag bis Donnerstag haben wir bis 03:00 Uhr geöffnet, die Zeiten für
          jeden Tag stehen auf der{" "}
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
          Uhrzeit in die Gruppe, Standort dazu – fertig. Atlético-Fans sind
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
          <Link href="/de/bayern-fans-madrid-sol-entdecken" className="text-cream underline">
            Zwei Stunden rund um die Sol
          </Link>
          {" · "}
          <Link href="/de/bayern-fans-barrio-de-las-letras" className="text-cream underline">
            Weiter: Unser Viertel, das Barrio de las Letras
          </Link>
          {" · "}
          <Link href="/de/bayern-fans-madrid-sol" className="text-cream underline">
            Bayern-Fans: ein Irish Pub nahe Sol, um sich vor dem Spiel zu treffen
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
