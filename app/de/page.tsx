import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL } from "@/lib/venue";

/**
 * German index /de (DG order 27 Oct 2026). Lists the German pages that exist.
 * /de/bayern-fans-madrid-sol (moved 27 Oct 2026 from the old slug, 301 in
 * public/_redirects) is listed with the other Bayern pages.
 * To add OC-29 / OC-30 once Radar assigns them and the pages exist: append { href, title, text } to the right group below
 * (or to DE_UPCOMING), add the path to DE_PATHS in lib/venue.ts, done.
 */
type DeItem = { href: string; title: string; text: string };

const DE_GROUPS: { title: string; items: DeItem[] }[] = [
  {
    title: "Oktoberfest-Saison an der Puerta del Sol",
    items: [
      {
        href: "/de/oktoberfest-madrid-sol",
        title: "Oktoberfest Madrid 2026: ein Bier an der Puerta del Sol",
        text: "Das Fest läuft bis 15. November, donnerstags bis sonntags, in Parquesur (Leganés). Die Wochenenden, die Anfahrt von Sol und ein Bier im Zentrum.",
      },
    ],
  },
  {
    title: "Champions League: Atlético – Bayern, Di 3. November, 21:00 Uhr",
    items: [
      {
        href: "/de/sports-bar-sol",
        title: "Atlético – Bayern live an der Puerta del Sol",
        text: "Das Spiel auf unseren Screens, mitten im Zentrum, und danach noch ein Bier.",
      },
      {
        href: "/de/bayern-fans-madrid-sol",
        title: "Bayern-Fans in Madrid: Hier geht der Abend los",
        text: "Ein Irish Pub nahe Sol, um das Spiel zu sehen: der Nachmittag in der Altstadt, der Abend an der Puerta del Sol.",
      },
      {
        href: "/de/bayern-fans-madrid-uhrzeiten",
        title: "Madrid tickt anders: Uhrzeiten und Abendessen",
        text: "Wann man in Madrid isst und wie euer Tag zum Anstoß um 21:00 Uhr passt.",
      },
      {
        href: "/de/bayern-fans-madrid-sol-entdecken",
        title: "Zwei Stunden rund um die Sol",
        text: "Ein Spaziergang durchs Zentrum, bevor die Truppe zusammenkommt.",
      },
      {
        href: "/de/bayern-fans-barrio-de-las-letras",
        title: "Das Barrio de las Letras beginnt am Ende unserer Straße",
        text: "Cervantes, Lope de Vega und die Plaza de Santa Ana, ein paar Minuten von der Nummer 7.",
      },
    ],
  },
];

/** Next German pieces (OC-29, OC-30): add here when the pages are live. */
const DE_UPCOMING: DeItem[] = [];

export const metadata = buildMetadata({
  title: "O'Connell St Madrid auf Deutsch: Irish Pub an der Puerta del Sol",
  description:
    "Alle deutschen Seiten von O'Connell St, dem Irish Pub in der Calle de Espoz y Mina 7 an der Puerta del Sol: Oktoberfest-Saison in Madrid, Atlético – Bayern und Tipps rund um Sol.",
  path: "/de",
  locale: "de",
});

function ItemList({ items }: { items: DeItem[] }) {
  return (
    <ul className="space-y-4">
      {items.map((it) => (
        <li key={it.href}>
          <Link href={it.href} hrefLang="de" className="text-cream underline">
            {it.title}
          </Link>
          <p className="mt-1">{it.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default function DeIndexPage() {
  return (
    <PageShell locale="de" altLangHref="/">
      <PageHero
        eyebrow="Auf Deutsch · Madrid"
        title="O'Connell St auf Deutsch: Irish Pub an der Puerta del Sol"
        lead="O'Connell St ist ein Irish Pub in der Calle de Espoz y Mina 7, gleich an der Puerta del Sol, mit Fußball auf den Screens und Gästen aus aller Welt. Hier findet ihr alle Seiten, die es bei uns auf Deutsch gibt."
      />
      <InteriorPhoto
        src="/images/interior/sports-aisle.webp"
        alt="Sport-Screens im O'Connell St an der Puerta del Sol"
        position="object-[center_45%]"
      />
      <p className="mb-8 text-sm text-cream-muted">
        <Link href="/" hrefLang="en" lang="en" className="text-gold underline">
          English
        </Link>
        {" · "}
        <Link href="/es" hrefLang="es" lang="es" className="text-gold underline">
          Español
        </Link>
      </p>
      {DE_GROUPS.map((g) => (
        <Section key={g.title} title={g.title}>
          <ItemList items={g.items} />
        </Section>
      ))}
      {DE_UPCOMING.length > 0 ? (
        <Section title="Neu auf Deutsch">
          <ItemList items={DE_UPCOMING} />
        </Section>
      ) : null}
      <Section title="So findet ihr uns">
        <p>
          {ADDRESS.full}, gleich an der Puerta del Sol. Öffnungszeiten:{" "}
          {HOURS.summaryDe}.
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
          <Link href="/whats-on" hrefLang="en" className="text-cream underline">
            What&apos;s On (Englisch)
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}
