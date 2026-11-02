import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { MAPS_URL } from "@/lib/venue";

const EN_PATH = "/news/spanish-phrases-football-fans";

const PHRASES: { es: string; de: string }[] = [
  { es: "¡Hola! ¿Qué tal?", de: "Hallo! Wie geht's?" },
  { es: "Una cerveza, por favor.", de: "Ein Bier, bitte." },
  { es: "Otra ronda, por favor.", de: "Noch eine Runde, bitte." },
  { es: "¡Salud!", de: "Prost!" },
  { es: "¿Está libre?", de: "Ist hier frei?" },
  { es: "¿Dónde está el baño?", de: "Wo ist die Toilette?" },
  { es: "¿A qué hora empieza el partido?", de: "Wann beginnt das Spiel?" },
  { es: "¡Gol! ¡Golazo!", de: "Tor! Was für ein Tor!" },
  { es: "¡Qué partido!", de: "Was für ein Spiel!" },
  { es: "Gracias, ¡hasta luego!", de: "Danke, bis später!" },
];

export const metadata = buildMetadata({
  title: "Spanisch für Bayern Fans: zehn Sätze für Bar und Straße in Madrid",
  description:
    "Atlético gegen Bayern am Dienstag, 3. November, um 21:00 Uhr: zehn einfache Sätze Spanisch für die Bar und die Straße – und drei Irish Pubs an der Puerta del Sol: O'Connell St, Dubliners und O'Reilly's.",
  path: "/de/spanisch-fuer-bayern-fans",
  locale: "de",
});

export default function DeSpanischFuerBayernFansPage() {
  return (
    <PageShell locale="de" altLangHref={EN_PATH}>
      <PageHero
        eyebrow="Champions League · Dienstag, 3. November 2026 · 21:00 Uhr"
        title="Spanisch für Bayern Fans: zehn Sätze für Bar und Straße"
        lead="Am Dienstag spielt Atlético gegen Bayern. Wer schon in Madrid ist, kommt mit ein paar Wörtern Spanisch weit – und ein Pub an der Puerta del Sol ist ein guter Ort, um sie auszuprobieren."
      />
      <InteriorPhoto
        src="/images/interior/bar-taps.webp"
        alt="Zapfhähne an der Bar im O'Connell St an der Puerta del Sol"
        position="object-[center_40%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <a href={EN_PATH} hrefLang="en" lang="en" className="text-gold underline">
          Read in English: ten Spanish phrases for football fans
        </a>
      </p>
      <p className="mb-8 border-l-2 border-gold pl-4 text-sm sm:text-base">
        <a href="/de/bayern-fans-madrid-treffpunkt-sol" className="font-semibold text-gold underline">
          Dienstag, 3. November: Atlético – Bayern live auf der Großleinwand – euer Treffpunkt an der Sol und die Metro zum Stadion →
        </a>
      </p>
      <Section title="Zehn Sätze">
        <ol className="list-decimal space-y-2 pl-5">
          {PHRASES.map((p) => (
            <li key={p.es}>
              <strong lang="es" className="text-cream">{p.es}</strong> – {p.de}
            </li>
          ))}
        </ol>
        <p>
          Mit «por favor» und «gracias» ist schon die halbe Miete drin. In
          Spanien grüßt man viel, ein einfaches «¡Hola!» beim Reinkommen ist
          also immer ein guter Anfang.
        </p>
      </Section>
      <Section title="Drei Irish Pubs an der Sol">
        <p>
          O&apos;Connell St und Dubliners teilen sich die Calle de Espoz y
          Mina 7, ein paar Gehminuten von der Puerta del Sol. Das
          O&apos;Reilly&apos;s liegt rund 200 m von der Sol. Von Montag bis
          Donnerstag öffnet das O&apos;Connell St um 18:00 Uhr. Am Dienstag,
          3. November, läuft Atlético gegen Bayern ab dem Anpfiff um 21:00 Uhr
          auf unseren Screens.
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
          <Link href="/contact" hrefLang="en" data-event="contact" className="text-cream underline">
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
