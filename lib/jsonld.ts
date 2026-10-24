import {
  ADDRESS,
  FACTS,
  GBP_GEO,
  GBP_MAPS_CID_URL,
  getSiteUrl,
  HOURS,
  MAPS_URL,
  PUBLIC_EMAIL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_TAGLINE_ES,
} from "./venue";

type SchemaLocale = "en" | "es" | "de";

/** Per-language description. DE pages keep the EN text (no DE copy approved). */
function description(locale: SchemaLocale): string {
  if (locale === "es") {
    return `${SITE_NAME} — ${SITE_TAGLINE_ES}, en Calle de Espoz y Mina 7, a un paso de Puerta del Sol. Fachada roja con letras doradas. Fútbol europeo en pantalla: ${FACTS.football.join(", ")}; también NFL, NBA, rugby, F1 y tenis cuando se emiten. Abre por la tarde y la noche.`;
  }
  return `${SITE_NAME} — ${SITE_TAGLINE}, at Calle de Espoz y Mina 7, a short walk from Puerta del Sol. Red facade with gold lettering. European football on the screens: ${FACTS.football.join(", ")}; also ${FACTS.otherSports.join(" / ")} when shown. Open afternoons and evenings.`;
}

/**
 * Site-wide BarOrPub entity. Rendered once per page by PageShell with the
 * page locale. No `telephone` (owner decision pending). `geo` = O'Connell St
 * GBP pin. servesCuisine removed ("Irish pub" is not a cuisine).
 */
export function barOrPubJsonLd(locale: SchemaLocale = "en") {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["BarOrPub", "LocalBusiness"],
    "@id": `${site}/#pub`,
    name: SITE_NAME,
    alternateName: `${SITE_NAME} Madrid`,
    description: description(locale),
    url: site,
    email: PUBLIC_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GBP_GEO.latitude,
      longitude: GBP_GEO.longitude,
    },
    hasMap: MAPS_URL,
    sameAs: [GBP_MAPS_CID_URL],
    hasMenu: `${site}${locale === "es" ? "/es/menu" : "/menu"}`,
    image: `${site}/images/oconnell-fachada.jpg`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: HOURS.monThu.open,
        closes: HOURS.monThu.close,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: HOURS.friSat.open,
        closes: HOURS.friSat.close,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: HOURS.sun.open,
        closes: HOURS.sun.close,
      },
    ],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Sports screens",
        value: true,
      },
    ],
  };
}

/**
 * /about and /es/about: AboutPage node with its own @id, pointing at the
 * site-wide O'Connell St entity (`/#pub`). Facts only (lib/venue.ts).
 */
export function aboutPageJsonLd(locale: "en" | "es" = "en") {
  const site = getSiteUrl();
  const path = locale === "es" ? "/es/about" : "/about";
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${site}${path}#webpage`,
    url: `${site}${path}`,
    name: locale === "es" ? `Sobre ${SITE_NAME} Madrid` : `About ${SITE_NAME} Madrid`,
    inLanguage: locale === "es" ? "es-ES" : "en",
    isPartOf: { "@type": "WebSite", "@id": `${site}/#website`, url: site, name: `${SITE_NAME} Madrid` },
    about: { "@id": `${site}/#pub` },
    mainEntity: { "@id": `${site}/#pub` },
    primaryImageOfPage: `${site}/images/oconnell-fachada.jpg`,
  };
}
