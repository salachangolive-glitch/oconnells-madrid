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
 * Archived 2 Nov 2026 (DG): past event, no 301, stays indexable and in the
 * sitemap; reusable for Halloween 2027. Home / What's On teasers removed.
 */
export const HALLOWEEN_PATHS = {
  en: "/halloween-madrid-sol",
  es: "/es/halloween-madrid-sol",
} as const;

export const HALLOWEEN_META = {
  en: {
    title: "Halloween near Sol, Madrid: past event, Saturday 31 October 2026",
    description:
      "Halloween at O'Connell St, just off Puerta del Sol, took place on Saturday 31 October 2026 from 19:00, with costumes, decorations and music. See What's On for upcoming events.",
  },
  es: {
    title: "Halloween junto a Sol, Madrid: evento pasado, sábado 31 de octubre de 2026",
    description:
      "Halloween en O'Connell St, junto a la Puerta del Sol, se celebró el sábado 31 de octubre de 2026 desde las 19:00, con disfraces, decoración y música. Consulta la Agenda para los próximos eventos.",
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
        eyebrow={es ? "Evento pasado · Halloween · sábado 31 de octubre de 2026" : "Past event · Halloween · Saturday 31 October 2026"}
        title={es ? `Halloween en ${SITE_NAME}, junto a Sol` : `Halloween at ${SITE_NAME}, by Sol`}
        lead={
          es
            ? "La noche de Halloween de O'Connell St, a un paso de la Puerta del Sol, se celebró el sábado 31 de octubre de 2026 desde las 19:00, con disfraces, decoración y música en pleno centro de Madrid."
            : "Halloween night at O'Connell St, a few steps from Puerta del Sol, took place on Saturday 31 October 2026 from 19:00, with costumes, decorations and music in the centre of Madrid."
        }
      />
      <InteriorPhoto
        src="/images/interior/bar-corner.webp"
        alt={es ? "Barra de O'Connell St junto a la Puerta del Sol" : "The bar at O'Connell St near Puerta del Sol"}
        position="object-[center_40%]"
      />
      <Section title={es ? "Cómo fue la noche" : "How the night went"}>
        <ul className="list-disc space-y-1 pl-5">
          <li>{es ? "Se celebró el sábado 31 de octubre de 2026, desde las 19:00" : "Took place on Saturday 31 October 2026, from 19:00"}</li>
          <li>{es ? "Disfraces, decoración y música" : "Costumes, decorations and music"}</li>
          <li>{es ? `${ADDRESS.full}, junto a la Puerta del Sol` : `${ADDRESS.full}, just off Puerta del Sol`}</li>
        </ul>
      </Section>
      <Section title={es ? "Halloween 2027" : "Halloween 2027"}>
        <p>
          {es
            ? "Este evento ya ha pasado. Cuando haya novedades sobre Halloween 2027 las publicaremos en esta misma página y en la Agenda. Mientras tanto, el pub sigue abierto todos los días con deporte en directo."
            : "This event has now taken place. When there is news about Halloween 2027, we will post it on this page and on What's On. In the meantime, the pub is open every day with live sport."}
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
