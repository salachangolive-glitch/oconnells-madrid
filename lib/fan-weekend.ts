/**
 * Unique 7–8 Nov 2026 slugs on this Pages branch.
 * Four Corner Sunday 14:00 + sports screens stay as published elsewhere.
 */

export const FAN_WEEKEND = {
  sloganEn: "4 BARS. ONE FAN WEEKEND.",
  sloganEs: "CUATRO BARES. UN GRAN PUNTO DE ENCUENTRO.",
} as const;

export const WEEKEND_HOURS = {
  sun8NovNoteEn:
    "Exception Sunday 8 Nov: open from 12:00 (usual Sundays from 14:00).",
  sun8NovNoteEs:
    "Excepción domingo 8 nov: abrimos desde las 12:00 (los domingos habituales, desde las 14:00).",
} as const;

export const PATHS = {
  hubEn: "/4-bars-one-fan-weekend",
  hubEs: "/es/cuatro-bares-fin-de-semana",
  saturdayEn: "/nfl-fans-saturday-oconnells",
  saturdayEs: "/es/fin-de-semana-nfl-oconnells",
  sundayEn: "/nfl-sunday-8-nov-oconnells",
  sundayEs: "/es/nfl-domingo-8-nov-oconnells",
} as const;

/** Sat 7 Nov 2026 only. Hide from Sunday 8 Nov 00:00 Europe/Madrid. */
export const TONIGHT_MEETUP = {
  day: "2026-11-07",
  start: "18:00",
  end: "19:00",
  hideAfterMs: Date.parse("2026-11-07T23:00:00Z"),
  headlineEn: "Tonight 18:00–19:00 at this door",
  headlineEs: "Esta noche 18:00–19:00 en esta puerta",
  bodyEn:
    "Meetup 18:00–19:00 at O'Connell's, Dubliners (same street, Espoz y Mina 7) and O'Reilly's (Pasaje de Matheu 4). Four Corner is not open tonight — Sunday from 14:00, sports screens. No NFL kickoff Saturday.",
  bodyEs:
    "Quedada 18:00–19:00 en O'Connell's, Dubliners (misma calle, Espoz y Mina 7) y O'Reilly's (Pasaje de Matheu 4). Four Corner no abre esta noche — domingo desde las 14:00, pantallas de deporte. El sábado no hay NFL.",
} as const;
