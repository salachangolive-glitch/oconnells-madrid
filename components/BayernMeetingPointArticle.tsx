import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { absoluteUrl } from "@/lib/seo";
import { ADDRESS, MAPS_URL, SITE_NAME } from "@/lib/venue";

/**
 * Bayern fans article, DE + EN + ES (owner order via DG, Mon 2 Nov 2026
 * 09:45–09:46): where to watch Atlético–Bayern near Sol (UCL Tue 3 Nov 21:00,
 * Riyadh Air Metropolitano), live on the big screen at O'Connell St
 * (EMISION-CONFIRMADA). Owner exception for this Bayern campaign only:
 * «Treffpunkt» / «meeting point» / «punto de encuentro» allowed.
 * Metro facts (checked 2 Nov 2026):
 *  - en.atleticodemadrid.com/atm/organise-your-visit: Estadio Metropolitano
 *    station (line 7) next to the stadium; Las Rosas (line 2) alternative;
 *    estimated metro time from Sol 26 minutes.
 *  - atleticodemadrid.com/atm/como-llegar: Las Rosas (L2) a quarter of an hour
 *    on foot.
 *  - riyadhairmetropolitano.com/planifica-tu-visita: Metro open until about 01:30.
 *  - Line 2 runs Cuatro Caminos – Las Rosas and stops at Sol (lines 1, 2, 3).
 * Hours: Mon–Thu 18:00–03:00 (lib/venue HOURS).
 */
export const BAYERN_MP_PATHS = {
  de: "/de/bayern-fans-madrid-treffpunkt-sol",
  en: "/news/bayern-fans-madrid-meeting-point-sol",
  es: "/es/noticias/aficion-bayern-madrid-punto-de-encuentro-sol",
} as const;

type L = "de" | "en" | "es";

export const BAYERN_MP_META: Record<L, { title: string; description: string }> = {
  de: {
    title: "Atlético – Bayern an der Sol: Treffpunkt für Bayern-Fans in Madrid",
    description:
      "Atlético gegen Bayern, Dienstag, 3. November, 21:00 Uhr: live auf der Großleinwand im O'Connell St, Irish Pub in der Calle de Espoz y Mina 7 neben der Puerta del Sol. Bier, Essen, Metro zum Metropolitano und zurück bis 03:00 Uhr.",
  },
  en: {
    title: "Atlético v Bayern near Sol: a meeting point for Bayern fans in Madrid",
    description:
      "Atlético v Bayern, Tuesday 3 November, 21:00: live on the big screen at O'Connell St, an Irish pub at Calle de Espoz y Mina 7 next to Puerta del Sol. Beer, food, the metro to the Metropolitano and back until 03:00.",
  },
  es: {
    title: "Atlético–Bayern en Sol: punto de encuentro para la afición del Bayern",
    description:
      "Atlético–Bayern, martes 3 de noviembre, 21:00: en directo en pantalla grande en O'Connell St, pub irlandés en Calle de Espoz y Mina 7, junto a la Puerta del Sol. Cerveza, comida, metro al Metropolitano y vuelta hasta las 03:00.",
  },
};

const T = {
  de: {
    eyebrow: "Champions League · Dienstag, 3. November 2026 · 21:00 Uhr",
    h1: "Atlético – Bayern: euer Treffpunkt an der Puerta del Sol",
    lead: "Am Dienstag, 3. November, um 21:00 Uhr spielt Atlético gegen Bayern im Riyadh Air Metropolitano. Wer kein Ticket hat oder vorher und nachher im Zentrum sein will: Das O'Connell St, ein Irish Pub direkt neben der Puerta del Sol, zeigt das Spiel live auf der Großleinwand.",
    s1: "Das Spiel live auf der Großleinwand",
    p1: [
      "Atlético – Bayern, UEFA Champions League, Dienstag, 3. November, 21:00 Uhr (Madrider Zeit), live auf der Großleinwand im O'Connell St.",
      `Adresse: ${ADDRESS.full}, ein paar Schritte von der Puerta del Sol.`,
      "Am Dienstag geöffnet von 18:00 bis 03:00 Uhr – genug Zeit vor dem Anpfiff und für danach.",
    ],
    s2: "Bier, Essen und Stimmung",
    p2: "Irisches Pub-Ambiente mitten in Madrid: Bier vom Hahn, etwas zu essen und Fußball auf den Bildschirmen. Das O'Connell St ist euer Treffpunkt an der Sol – vor dem Spiel, während des Spiels und nach dem Abpfiff.",
    s3: "Mit der Metro zum Stadion",
    metro: [
      "Direkt am Stadion liegt die Station Estadio Metropolitano der Linie 7.",
      "Ab Sol fährt die Linie 2 Richtung Las Rosas bis zur Endstation Las Rosas; laut Atlético de Madrid sind es von dort etwa eine Viertelstunde zu Fuß zum Stadion.",
      "Atlético de Madrid gibt für die Fahrt mit der Metro ab Sol rund 26 Minuten an.",
      "Laut Stadion fährt die Metro bis etwa 01:30 Uhr.",
    ],
    src: "Quellen: atleticodemadrid.com und riyadhairmetropolitano.com, abgerufen am 2. November 2026.",
    s4: "Nach dem Spiel zurück an die Sol",
    p4: "Mit der Linie 2 geht es von Las Rosas direkt zurück nach Sol. Das O'Connell St hat am Dienstag bis 03:00 Uhr geöffnet – Zeit für ein Bier nach dem Abpfiff.",
    s5: "So findet ihr uns",
    dir: "Wegbeschreibung (Google Maps)",
    more: "Mehr für Bayern-Fans",
    links: [
      { href: "/de/spanisch-fuer-bayern-fans", label: "Spanisch für Bayern Fans: zehn Sätze" },
      { href: "/de/bayern-fans-madrid-uhrzeiten", label: "Uhrzeiten für den Spieltag" },
      { href: "/de/bayern-fans-madrid-sol", label: "Bayern-Fans in Madrid: der Abend an der Sol" },
      { href: "/de", label: "Alle deutschen Seiten" },
    ],
    other: [
      { href: BAYERN_MP_PATHS.en, label: "Read in English", lang: "en" },
      { href: BAYERN_MP_PATHS.es, label: "Leer en español", lang: "es" },
    ],
    alt: "Bar und Zapfhähne im O'Connell St, Irish Pub an der Puerta del Sol",
  },
  en: {
    eyebrow: "Champions League · Tuesday 3 November 2026 · 21:00",
    h1: "Atlético v Bayern: your meeting point at Puerta del Sol",
    lead: "Atlético play Bayern at the Riyadh Air Metropolitano on Tuesday 3 November at 21:00. No ticket, or want to be in the centre before and after? O'Connell St, an Irish pub right next to Puerta del Sol, shows the match live on the big screen.",
    s1: "The match live on the big screen",
    p1: [
      "Atlético v Bayern, UEFA Champions League, Tuesday 3 November, 21:00 Madrid time, live on the big screen at O'Connell St.",
      `Address: ${ADDRESS.full}, a few steps from Puerta del Sol.`,
      "Open on Tuesday from 18:00 to 03:00 — time before kick-off and after the final whistle.",
    ],
    s2: "Beer, food and atmosphere",
    p2: "An Irish pub in the heart of Madrid: beer on tap, something to eat and football on the screens. O'Connell St is your meeting point at Sol — before the match, during it and after the final whistle.",
    s3: "Getting to the stadium by metro",
    metro: [
      "Estadio Metropolitano station, on line 7, is right next to the stadium.",
      "From Sol, line 2 runs towards Las Rosas; get off at the end of the line, Las Rosas. Atlético de Madrid says the stadium is about a quarter of an hour on foot from there.",
      "Atlético de Madrid estimates about 26 minutes by metro from Sol.",
      "The stadium says the metro runs until about 01:30.",
    ],
    src: "Sources: atleticodemadrid.com and riyadhairmetropolitano.com, checked on 2 November 2026.",
    s4: "After the match, back to Sol",
    p4: "Line 2 takes you straight from Las Rosas back to Sol. O'Connell St is open until 03:00 on Tuesday — time for a beer after the final whistle.",
    s5: "Find us",
    dir: "Get directions (Google Maps)",
    more: "More for Bayern fans",
    links: [
      { href: "/news/spanish-phrases-football-fans", label: "Ten Spanish phrases for the bar and the street" },
      { href: "/news/bayern-fans-madrid-timing", label: "Match-day timings" },
      { href: "/news/bayern-fans-madrid-sol-pre-match", label: "Bayern fans in Madrid: the evening near Sol" },
      { href: "/whats-on", label: "What's On" },
    ],
    other: [
      { href: BAYERN_MP_PATHS.de, label: "Auf Deutsch lesen", lang: "de" },
      { href: BAYERN_MP_PATHS.es, label: "Leer en español", lang: "es" },
    ],
    alt: "Bar and beer taps at O'Connell St, Irish pub by Puerta del Sol",
  },
  es: {
    eyebrow: "Champions League · martes 3 de noviembre de 2026 · 21:00",
    h1: "Atlético–Bayern: tu punto de encuentro en la Puerta del Sol",
    lead: "El Atlético recibe al Bayern en el Riyadh Air Metropolitano el martes 3 de noviembre a las 21:00. Si no tienes entrada o quieres estar en el centro antes y después, O'Connell St, pub irlandés junto a la Puerta del Sol, pone el partido en directo en pantalla grande.",
    s1: "El partido en directo en pantalla grande",
    p1: [
      "Atlético–Bayern, UEFA Champions League, martes 3 de noviembre, 21:00 (hora de Madrid), en directo en pantalla grande en O'Connell St.",
      `Dirección: ${ADDRESS.full}, a unos pasos de la Puerta del Sol.`,
      "El martes abrimos de 18:00 a 03:00: hay tiempo antes del partido y después del pitido final.",
    ],
    s2: "Cerveza, comida y ambiente",
    p2: "Un pub irlandés en pleno centro de Madrid: cerveza de barril, algo de comer y fútbol en las pantallas. O'Connell St es tu punto de encuentro en Sol, antes, durante y después del partido.",
    s3: "Cómo llegar al estadio en metro",
    metro: [
      "La estación Estadio Metropolitano, de la línea 7, está junto al estadio.",
      "Desde Sol, la línea 2 en dirección Las Rosas llega hasta su final, Las Rosas; según el Atlético de Madrid, desde allí hay un cuarto de hora a pie hasta el estadio.",
      "El Atlético de Madrid calcula unos 26 minutos en metro desde Sol.",
      "Según el estadio, el metro funciona hasta la 01:30, aproximadamente.",
    ],
    src: "Fuentes: atleticodemadrid.com y riyadhairmetropolitano.com, consultadas el 2 de noviembre de 2026.",
    s4: "Después del partido, de vuelta a Sol",
    p4: "La línea 2 te lleva directamente de Las Rosas a Sol. O'Connell St abre el martes hasta las 03:00: tiempo para una cerveza después del partido.",
    s5: "Dónde estamos",
    dir: "Cómo llegar (Google Maps)",
    more: "Más para la afición del Bayern",
    links: [
      { href: "/news/spanish-phrases-football-fans", label: "Diez frases en español para el bar y la calle (en inglés)" },
      { href: "/de/spanisch-fuer-bayern-fans", label: "Spanisch für Bayern Fans (en alemán)" },
      { href: "/es/whats-on", label: "Agenda" },
    ],
    other: [
      { href: BAYERN_MP_PATHS.de, label: "Auf Deutsch lesen", lang: "de" },
      { href: BAYERN_MP_PATHS.en, label: "Read in English", lang: "en" },
    ],
    alt: "Barra y grifos de cerveza de O'Connell St, pub irlandés junto a la Puerta del Sol",
  },
} as const;

const PUB = {
  "@type": "BarOrPub",
  "@id": "https://oconnellsmadrid.es/#pub",
  name: SITE_NAME,
  url: "https://oconnellsmadrid.es/",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    postalCode: ADDRESS.postalCode,
    addressLocality: ADDRESS.city,
    addressCountry: ADDRESS.country,
  },
};

function jsonLd(l: L) {
  const url = absoluteUrl(BAYERN_MP_PATHS[l]);
  const m = BAYERN_MP_META[l];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        headline: T[l].h1,
        description: m.description,
        inLanguage: l,
        url,
        mainEntityOfPage: url,
        datePublished: "2026-11-02T10:00:00+01:00",
        dateModified: "2026-11-02T10:00:00+01:00",
        image: [absoluteUrl("/og.jpg")],
        author: { "@type": "Organization", name: SITE_NAME, url: "https://oconnellsmadrid.es/" },
        publisher: { "@type": "Organization", name: SITE_NAME, url: "https://oconnellsmadrid.es/" },
        about: { "@id": `${url}#screening` },
      },
      {
        "@type": "Event",
        "@id": `${url}#screening`,
        name:
          l === "de"
            ? "Atlético – Bayern live auf der Großleinwand im O'Connell St"
            : l === "es"
              ? "Atlético–Bayern en directo en pantalla grande en O'Connell St"
              : "Atlético v Bayern live on the big screen at O'Connell St",
        description: m.description,
        inLanguage: l,
        url,
        startDate: "2026-11-03T21:00:00+01:00",
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        location: PUB,
        organizer: { "@type": "Organization", name: SITE_NAME, url: "https://oconnellsmadrid.es/" },
        about: {
          "@type": "SportsEvent",
          name: "Atlético de Madrid – FC Bayern München (UEFA Champions League)",
          startDate: "2026-11-03T21:00:00+01:00",
          sport: "Football",
          homeTeam: { "@type": "SportsTeam", name: "Atlético de Madrid" },
          awayTeam: { "@type": "SportsTeam", name: "FC Bayern München" },
          location: {
            "@type": "StadiumOrArena",
            name: "Riyadh Air Metropolitano",
            address: { "@type": "PostalAddress", addressLocality: "Madrid", addressCountry: "ES" },
          },
        },
      },
    ],
  };
}

export function BayernMeetingPointArticle({ locale }: { locale: L }) {
  const t = T[locale];
  const alt = locale === "en" ? BAYERN_MP_PATHS.de : BAYERN_MP_PATHS.en;
  return (
    <PageShell locale={locale} altLangHref={locale === "es" ? BAYERN_MP_PATHS.en : alt}>
      <JsonLd data={jsonLd(locale)} />
      <PageHero eyebrow={t.eyebrow} title={t.h1} lead={t.lead} />
      <InteriorPhoto src="/images/interior/bar-taps.webp" alt={t.alt} position="object-[center_40%]" />
      <p className="mb-8 text-sm text-cream-muted">
        {t.other.map((o, i) => (
          <span key={o.href}>
            {i > 0 ? " · " : null}
            <a href={o.href} hrefLang={o.lang} lang={o.lang} className="text-gold underline">
              {o.label}
            </a>
          </span>
        ))}
      </p>
      <Section title={t.s1}>
        <ul className="list-disc space-y-1 pl-5">
          {t.p1.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </Section>
      <Section title={t.s2}>
        <p>{t.p2}</p>
      </Section>
      <Section title={t.s3}>
        <ul className="list-disc space-y-1 pl-5">
          {t.metro.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <p className="text-sm text-cream-muted">{t.src}</p>
      </Section>
      <Section title={t.s4}>
        <p>{t.p4}</p>
      </Section>
      <Section title={t.s5}>
        <p>
          {ADDRESS.full} ·{" "}
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" data-event="directions" className="text-cream underline">
            {t.dir}
          </a>
        </p>
      </Section>
      <Section title={t.more}>
        <ul className="space-y-1">
          {t.links.map((x) => (
            <li key={x.href}>
              <Link href={x.href} className="text-cream underline">
                {x.label} →
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </PageShell>
  );
}
