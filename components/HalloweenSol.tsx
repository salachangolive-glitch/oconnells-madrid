import Link from "next/link";
import { InteriorPhoto } from "@/components/InteriorPhoto";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { PageHero, Section } from "@/components/Prose";
import { absoluteUrl } from "@/lib/seo";
import { ADDRESS, HOURS, MAPS_URL, SITE_NAME } from "@/lib/venue";

/**
 * Halloween at O'Connell St, Sat 31 Oct 2026 from 19:00.
 * Owner order via DG (2026-10-23 09:42, restated 2026-10-24 23:31): costumes,
 * decorations and music. ONLY these data: no prices, promotions or contests.
 * Angle: Halloween night at Sol + groups of friends (no students, no food).
 * Retire after the night with a 301 to What's On (T+1/T+3, 1–3 Nov).
 */
export const HALLOWEEN_PATHS = {
  en: "/halloween-madrid-sol",
  es: "/es/halloween-madrid-sol",
} as const;

/** Home / What's On teaser gate: shown on builds up to and including 31 Oct. */
export const HALLOWEEN_LAST_DAY = "2026-10-31";

export const HALLOWEEN_META = {
  en: {
    title: "Halloween night near Sol, Madrid: Saturday 31 October from 19:00",
    description:
      "Halloween at O'Connell St, just off Puerta del Sol: Saturday 31 October from 19:00, with costumes, decorations and music. Meet your friends in the centre.",
  },
  es: {
    title: "Noche de Halloween junto a Sol, Madrid: sábado 31 de octubre desde las 19:00",
    description:
      "Halloween en O'Connell St, junto a la Puerta del Sol: sábado 31 de octubre desde las 19:00, con disfraces, decoración y música. Quedad con vuestro grupo en el centro.",
  },
} as const;

function eventJsonLd(locale: "en" | "es") {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: locale === "es" ? "Noche de Halloween en O'Connell St" : "Halloween night at O'Connell St",
    description:
      locale === "es"
        ? "Halloween desde las 19:00 con disfraces, decoración y música, junto a la Puerta del Sol."
        : "Halloween from 19:00 with costumes, decorations and music, just off Puerta del Sol.",
    startDate: "2026-10-31T19:00:00+01:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    inLanguage: locale,
    url: absoluteUrl(HALLOWEEN_PATHS[locale]),
    location: {
      "@type": "BarOrPub",
      "@id": "https://oconnellsmadrid.es/#pub",
      name: SITE_NAME,
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        postalCode: ADDRESS.postalCode,
        addressLocality: ADDRESS.city,
        addressCountry: ADDRESS.country,
      },
    },
    organizer: { "@type": "Organization", name: SITE_NAME, url: "https://oconnellsmadrid.es/" },
  };
}

export function HalloweenSol({ locale }: { locale: "en" | "es" }) {
  const es = locale === "es";
  return (
    <PageShell locale={locale} altLangHref={es ? HALLOWEEN_PATHS.en : HALLOWEEN_PATHS.es}>
      <JsonLd data={eventJsonLd(locale)} />
      <PageHero
        eyebrow={es ? "Halloween · sábado 31 de octubre de 2026 · desde las 19:00" : "Halloween · Saturday 31 October 2026 · from 19:00"}
        title={es ? `Noche de Halloween en ${SITE_NAME}, junto a Sol` : `Halloween night at ${SITE_NAME}, by Sol`}
        lead={
          es
            ? "El sábado 31 de octubre, O'Connell St, a un paso de la Puerta del Sol, se viste de Halloween desde las 19:00: disfraces, decoración y música en pleno centro de Madrid."
            : "On Saturday 31 October, O'Connell St, a few steps from Puerta del Sol, turns into a Halloween night from 19:00: costumes, decorations and music in the centre of Madrid."
        }
      />
      <InteriorPhoto
        src="/images/interior/bar-corner.webp"
        alt={es ? "Barra de O'Connell St junto a la Puerta del Sol" : "The bar at O'Connell St near Puerta del Sol"}
        position="object-[center_40%]"
      />
      <Section title={es ? "La noche" : "The night"}>
        <ul className="list-disc space-y-1 pl-5">
          <li>{es ? "Sábado 31 de octubre de 2026, desde las 19:00" : "Saturday 31 October 2026, from 19:00"}</li>
          <li>{es ? "Disfraces, decoración y música" : "Costumes, decorations and music"}</li>
          <li>{es ? `${ADDRESS.full}, junto a la Puerta del Sol` : `${ADDRESS.full}, just off Puerta del Sol`}</li>
        </ul>
      </Section>
      <Section title={es ? "Quedad en Sol con vuestro grupo" : "Meet your friends at Sol"}>
        <p>
          {es
            ? "Sol es el sitio más fácil del centro para quedar: llega el Metro (líneas 1, 2 y 3) y Cercanías. Quedad en la plaza, venid disfrazados y empezad aquí la noche de Halloween con vuestro grupo de amigos."
            : "Sol is the easiest place in the centre to meet up, with Metro lines 1, 2 and 3 and Cercanías trains. Meet in the square, come in costume and start Halloween night here with your group of friends."}
        </p>
        <p>
          {es ? "Se entra directamente, por orden de llegada." : "Just walk in, first come, first served."}
        </p>
      </Section>
      <Section title={es ? "Horario y cómo llegar" : "Hours and directions"}>
        <p>
          {ADDRESS.full}. {es ? HOURS.summaryEs : HOURS.summaryEn}.{" "}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="text-gold underline"
          >
            {es ? "Cómo llegar desde Sol" : "Directions from Sol"}
          </a>
          .
        </p>
        <p>
          <Link href={es ? "/es/whats-on" : "/whats-on"} data-event="whats_on" className="text-gold underline">
            {es ? "Agenda" : "What's On"}
          </Link>
          {" · "}
          <Link href={es ? "/es/location" : "/location"} className="text-gold underline">
            {es ? "Ubicación" : "Location"}
          </Link>
          {" · "}
          <Link href={es ? "/es/contact" : "/contact"} data-event="contact" className="text-gold underline">
            {es ? "Contacto" : "Contact"}
          </Link>
        </p>
      </Section>
    </PageShell>
  );
}

/** Short teaser for the home and What's On (build-time gate). */
export function HalloweenTeaser({ locale, today }: { locale: "en" | "es"; today: string }) {
  if (today > HALLOWEEN_LAST_DAY) return null;
  const es = locale === "es";
  return (
    <p className="mb-12 max-w-2xl border-l-2 border-gold pl-4 text-sm text-cream-muted sm:text-base">
      {es ? "Sábado 31 de octubre, desde las 19:00 — " : "Saturday 31 October, from 19:00 — "}
      <Link href={es ? HALLOWEEN_PATHS.es : HALLOWEEN_PATHS.en} className="text-gold underline">
        {es ? "Noche de Halloween junto a Sol" : "Halloween night by Sol"}
      </Link>
      {es ? ": disfraces, decoración y música." : ": costumes, decorations and music."}
    </p>
  );
}
