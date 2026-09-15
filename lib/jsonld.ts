import {
  ADDRESS,
  FACTS,
  getSiteUrl,
  MAPS_URL,
  PHONE_DISPLAY,
  SITE_NAME,
  SITE_TAGLINE,
} from "./venue";

export function barOrPubJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["BarOrPub", "LocalBusiness"],
    name: SITE_NAME,
    description: `${SITE_NAME} — ${SITE_TAGLINE}. Screens for ${FACTS.football.join(", ")}; ${FACTS.otherSports.join(" / ")} when shown. ${FACTS.thursdayShots}.`,
    url: getSiteUrl(),
    telephone: PHONE_DISPLAY,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: undefined,
    hasMap: MAPS_URL,
    servesCuisine: "Irish pub",
    priceRange: undefined,
    smokingAllowed: undefined,
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Sports screens",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Terrace",
        value: false,
      },
    ],
  };
}
