import { JsonLd } from "@/components/JsonLd";
import {
  agendaBuildNow,
  displayCompetition,
  fixtureMatchLabel,
  fixtureStartMs,
  getAgendaCandidatesWindow,
  isScreeningTbc,
  isTodaySlot,
  isWeekSlot,
  madridIso,
  madridTodayYmd,
  type Fixture,
} from "@/lib/fixtures";
import { ADDRESS, getSiteUrl, SITE_NAME } from "@/lib/venue";

type Locale = "en" | "es";

/**
 * schema.org Event per match on What's On (owner order 23 Nov 2026, GEO).
 * Only rows the page shows at build time (Today + Next 7 days), only
 * Confirmed screenings (TBC rows and in-pub events are left out), no prices,
 * no end time (none is published). startDate carries the Madrid offset.
 */
export function whatsOnEventFixtures(now = agendaBuildNow()): Fixture[] {
  const today = madridTodayYmd(now);
  return getAgendaCandidatesWindow(now).filter(
    (f) =>
      (isTodaySlot(f, today, now) || isWeekSlot(f, today, now)) &&
      !isScreeningTbc(f) &&
      !f.pubEvent &&
      fixtureStartMs(f) != null,
  );
}

export function whatsOnEventsJsonLd(locale: Locale, now = agendaBuildNow()) {
  const site = getSiteUrl();
  const pageUrl = `${site}${locale === "es" ? "/es/whats-on" : "/whats-on"}`;
  const place = {
    "@type": "Place",
    name: SITE_NAME,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      postalCode: ADDRESS.postalCode,
      addressLocality: ADDRESS.city,
      addressCountry: ADDRESS.country,
    },
  };
  const organizer = { "@type": "Organization", name: SITE_NAME, url: `${site}/` };
  const events = whatsOnEventFixtures(now).map((f) => {
    const label = fixtureMatchLabel(f, locale);
    const competition = displayCompetition(f.competition);
    return {
      "@type": "Event",
      "@id": `${pageUrl}#event-${f.id}`,
      name: `${label} (${competition}) · ${SITE_NAME}`,
      description:
        locale === "es"
          ? `${competition}: ${label}, en las pantallas de ${SITE_NAME}, ${ADDRESS.full}.`
          : `${competition}: ${label}, on the screens at ${SITE_NAME}, ${ADDRESS.full}.`,
      inLanguage: locale,
      url: pageUrl,
      startDate: madridIso(fixtureStartMs(f) as number),
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: place,
      organizer,
    };
  });
  return { "@context": "https://schema.org", "@graph": events };
}

export function WhatsOnEventsJsonLd({ locale }: { locale: Locale }) {
  return <JsonLd data={whatsOnEventsJsonLd(locale)} />;
}
