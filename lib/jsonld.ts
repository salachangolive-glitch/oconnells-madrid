import {
  ADDRESS,
  FACTS,
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
    return `${SITE_NAME} — ${SITE_TAGLINE_ES}, en Calle de Espoz y Mina 7. Pantallas con ${FACTS.football.join(", ")}; NFL, NBA, rugby, F1 y tenis cuando se emiten. Chupitos a 1 € los jueves.`;
  }
  return `${SITE_NAME} — ${SITE_TAGLINE}. Screens for ${FACTS.football.join(", ")}; ${FACTS.otherSports.join(" / ")} when shown. ${FACTS.thursdayShots}.`;
}

/**
 * Site-wide BarOrPub entity. Rendered once per page by PageShell with the
 * page locale. No `telephone` (owner decision pending) and no `geo` (no
 * verified GBP coordinates on file). servesCuisine removed ("Irish pub" is
 * not a cuisine).
 */
export function barOrPubJsonLd(locale: SchemaLocale = "en") {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["BarOrPub", "LocalBusiness"],
    "@id": `${site}/#pub`,
    name: SITE_NAME,
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
