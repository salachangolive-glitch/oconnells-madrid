/** Public contact reasons — labels only; values are stable keys for subjects. */
export const CONTACT_REASONS = [
  {
    value: "general",
    en: "General information",
    es: "Información general",
    subjectEn: "General information",
    subjectEs: "Información general",
  },
  {
    value: "groups",
    en: "Groups",
    es: "Grupos",
    subjectEn: "Groups",
    subjectEs: "Grupos",
  },
  {
    value: "sports",
    en: "Sports & matches",
    es: "Deportes y partidos",
    subjectEn: "Sports & matches",
    subjectEs: "Deportes y partidos",
  },
  {
    value: "events",
    en: "Events",
    es: "Eventos",
    subjectEn: "Events",
    subjectEs: "Eventos",
  },
  {
    value: "other",
    en: "Other",
    es: "Otros",
    subjectEn: "Other",
    subjectEs: "Otros",
  },
] as const;

export type ContactReasonValue = (typeof CONTACT_REASONS)[number]["value"];

export function reasonSubjectLabel(
  value: string,
  locale: "en" | "es",
): string {
  const row = CONTACT_REASONS.find((r) => r.value === value);
  if (!row) return locale === "es" ? "Otros" : "Other";
  return locale === "es" ? row.subjectEs : row.subjectEn;
}

/** Lead subject for the shared inbox — never expose internal addresses. */
export function buildContactSubject(
  reasonValue: string,
  name: string,
  locale: "en" | "es",
): string {
  const reason = reasonSubjectLabel(reasonValue, locale);
  const safeName = name.trim().slice(0, 80) || (locale === "es" ? "Sin nombre" : "No name");
  return `[OCONNELLS] ${reason} — ${safeName}`;
}
