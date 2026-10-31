import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const EN_PATH = "/news/bayern-atletico-fans-together";

export const metadata = buildMetadata({
  title: "Bayern und Atlético Fans gemeinsam in Madrid: Champions-Abend an der Sol",
  description:
    "Rot-Weiß trifft Rot-Weiß: Bayern- und Atlético-Fans teilen sich den Champions-League-Abend (Di 3. November, 21:00 Uhr) in drei Irish Pubs nahe Sol: O'Connell St, Dubliners und O'Reilly's.",
  path: "/de/bayern-atletico-fans-gemeinsam",
  locale: "de",
});

export default function DeBayernAtleticoGemeinsamPage() {
  return (
    <PageShell locale="de" altLangHref={EN_PATH}>
      <PageHero
        eyebrow="Champions League · Dienstag, 3. November 2026 · 21:00 Uhr"
        title="Rot-Weiß trifft Rot-Weiß: Bayern- und Atlético-Fans, ein Abend an der Sol"
        lead="Zwei Vereine, dieselben zwei Farben. Am Dienstag trägt der Nachbar an der Theke vielleicht das andere Rot-Weiß – und genau das macht einen Champions-League-Abend in Madrid zu etwas Besonderem."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Zapfhähne an der Bar im O'Connell St an der Puerta del Sol"
        position="object-[center_40%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={EN_PATH} hrefLang="en" lang="en" className="text-gold underline">
          Read in English: red and white meets red and white
        </a>
      </p>
      <Section title="Gleiche Farben, andere Lieder">
        <p>
          Atlético spielt in Rot-Weiß gestreift, Bayern ebenfalls in Rot-Weiß.
          Von der anderen Seite des Raums erkennt man oft erst beim Singen,
          wer zu wem gehört. In einem Pub an der Sol ist genau diese Mischung
          das Schöne: Ihr kommt wegen Bayern und erklärt am Ende wahrscheinlich
          einem Madrilenen euren Verein – und hört dafür etwas über seinen.
        </p>
      </Section>
      <Section title="Atlético-Fans sind genauso willkommen">
        <p>
          O&apos;Connell St, Dubliners und O&apos;Reilly&apos;s sind Irish
          Pubs, keine Fankurve. Am Dienstag, 3. November, sind beide Lager
          willkommen. O&apos;Connell St öffnet um 18:00 Uhr, das Spiel läuft
          ab dem Anpfiff um 21:00 Uhr auf unseren Screens.
        </p>
      </Section>
      <Section title="Ein paar einfache Regeln">
        <p>
          Feuert euer Team an, nicht gegen die Leute am Nebentisch. Hebt euch
          die Gesänge für die großen Momente auf, lasst der anderen Seite
          ihre, und lasst Pyro und alles Riskante zu Hause. Ein Handschlag
          nach dem Abpfiff, egal wie es ausgeht, kommt in Madrid gut an.
        </p>
      </Section>
      <Section title="Zwei Adressen, drei Pubs">
        <p>
          O&apos;Connell St und Dubliners teilen sich die Calle de Espoz y
          Mina 7, ein paar Gehminuten von der Puerta del Sol. Das
          O&apos;Reilly&apos;s liegt 200 m von der Sol. Wo ihr auch schaut:
          Platz für beide Sorten Rot-Weiß ist da.
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
          <Link href="/de/bayern-fans-madrid-wochenende" className="text-cream underline">
            Weiter: Früher anreisen?
          </Link>
          {" · "}
          <Link href="/de/bayern-fans-gruppe-madrid" className="text-cream underline">
            Die ganze Truppe, ein Pin
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
