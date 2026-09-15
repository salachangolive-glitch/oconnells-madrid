/**
 * Ops-editable fixture list for What's On.
 * Update this file when confirmed matches change.
 * Times: only include kickoffMadrid when verified (Europe/Madrid). Omit if unknown.
 */

export type Fixture = {
  id: string;
  competition: string;
  homeTeam: string;
  awayTeam: string;
  /** ISO date YYYY-MM-DD in Madrid calendar day */
  date: string;
  /** Optional Madrid local time HH:mm — omit if unknown */
  kickoffMadrid?: string;
  note?: string;
};

/** Confirmed fixtures (newest/relevant first). */
export const FIXTURES: Fixture[] = [
  {
    id: "2026-09-15-elche-real-madrid",
    competition: "LaLiga",
    homeTeam: "Elche",
    awayTeam: "Real Madrid",
    date: "2026-09-15",
    // kickoffMadrid omitted — not verified
  },
];

/** Recurring weekly highlights (not dated fixtures). */
export const RECURRING = {
  thursdayShots: {
    en: "Thursday €1 shots — the night for Erasmus, internationals and friends near Sol",
    es: "Jueves chupitos a 1 € — la noche para Erasmus, internacionales y amigos cerca de Sol",
  },
  wednesdayShots: {
    en: "Wednesday €1 shots also on",
    es: "También miércoles chupitos a 1 €",
  },
  football: {
    en: "Premier League, Champions League & LaLiga on the screens",
    es: "Premier League, Champions League y LaLiga en pantallas",
  },
} as const;

function madridTodayYmd(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Madrid",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function getTonightFixtures(today = madridTodayYmd()): Fixture[] {
  return FIXTURES.filter((f) => f.date === today);
}

export function getUpcomingFixtures(today = madridTodayYmd()): Fixture[] {
  return FIXTURES.filter((f) => f.date >= today).sort((a, b) =>
    a.date.localeCompare(b.date),
  );
}

export function formatFixtureDay(date: string, locale: "en" | "es" = "en"): string {
  const d = new Date(`${date}T12:00:00`);
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Europe/Madrid",
  }).format(d);
}
