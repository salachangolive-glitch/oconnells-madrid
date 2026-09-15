import {
  ADDRESS,
  FACTS,
  getSiteUrl,
  HOURS,
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
    hasMap: MAPS_URL,
    servesCuisine: "Irish pub",
    image: `${getSiteUrl()}/images/oconnell-fachada.jpg`,
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
