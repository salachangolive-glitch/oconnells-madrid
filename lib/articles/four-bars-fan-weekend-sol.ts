import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Four sibling bars, one fan weekend near Sol (additional note, 6 Nov 2026).
 * Owner order: O'Reilly's Pasaje de Matheu 4; Dubliners Espoz y Mina 7;
 * O'Connell's Espoz y Mina 7 (Maps from lib/venue.ts); Four Corner Calle de
 * la Victoria 6 (Sunday from 14:00 until late / madrugada; NFL on screens, owner 7 Nov).
 * Hub: dublinersmadrid.es/4-bars-one-fan-weekend/
 *   (ES: /es/cuatro-bares-fin-de-semana/).
 * Banned in copy: oficial/official, best/mejor/beste, proyector/projector/Beamer.
 */
export const FOUR_BARS_FAN_WEEKEND_SOL: MatchArticleData = {
  paths: {
    en: "/news/four-bars-fan-weekend-sol",
    es: "/es/noticias/cuatro-bares-finde-sol",
  },
  published: "2026-11-06T17:10:00+01:00",
  startDate: "2026-11-08T15:30:00+01:00",
  sport: "American football",
  sportsEventName: "Bengals at Falcons (NFL Madrid Game)",
  homeTeam: "Atlanta Falcons",
  awayTeam: "Cincinnati Bengals",
  venue: "Santiago Bernabéu",
  fourBars: true,
  copy: {
    en: {
      title: "Four bars, one fan weekend near Sol",
      description:
        "Four sibling bars around Puerta del Sol: O'Reilly's (Pasaje de Matheu 4), Dubliners and O'Connell's (Espoz y Mina 7), Four Corner (Victoria 6). Maps for each.",
      eyebrow: "NFL Madrid 2026 · four bars · one fan weekend",
      h1: "Four bars, one fan weekend near Puerta del Sol",
      lead: "NFL Madrid 2026 — a fan meeting point near Puerta del Sol. Four sibling bars, one weekend: O'Reilly's Restaurant Bar at Pasaje de Matheu 4, Dubliners at Calle de Espoz y Mina 7, O'Connell's at Calle de Espoz y Mina 7, and Four Corner at Calle de la Victoria 6. Same square, four rooms — pick one, hop between them, or start from the shared guide.",
      screeningName: "Four bars, one fan weekend near Puerta del Sol",
      sections: [
        {
          title: "One meeting point, four rooms",
          paras: [
            "The idea is one fan weekend around Puerta del Sol, not four isolated campaigns. O'Reilly's Restaurant Bar (Pasaje de Matheu 4), Dubliners (Calle de Espoz y Mina 7), O'Connell's (Calle de Espoz y Mina 7) and Four Corner (Calle de la Victoria 6) sit a few minutes from the square. Each listing above has its street address and a Google Maps link.",
            "Four Corner is the fourth sibling meeting-point bar for this weekend. Sunday from 14:00 until late, with NFL on the screens — ask which game is on.",
          ],
        },
        {
          title: "At O'Connell's, Espoz y Mina 7",
          paras: [
            "This Irish pub is at Calle de Espoz y Mina 7 — the same street as Dubliners, a short walk from O'Reilly's and from Four Corner. Sunday 8 November at O'Connell's: we open from 12:00 (usual Sundays from 14:00). Bengals at Falcons at 15:30 is on our screens when we are showing it (DAZN · Cuatro). Those hours and screens are for O'Connell's only.",
          ],
          note: "Confirmed times for this pub are on What's On. First come, first served.",
        },
      ],
      find: "Find us",
      dir: "Get directions (Google Maps)",
      more: "More from O'Connell St",
      links: [
        { href: "/whats-on", label: "What's On" },
        { href: "/nfl-madrid", label: "NFL in Madrid" },
        { href: "/news/where-to-watch-nfl-madrid-sol", label: "Where to watch NFL this weekend near Sol" },
        { href: "/location", label: "Opening hours and location" },
        { href: "https://dublinersmadrid.es/4-bars-one-fan-weekend/", label: "4 bars, one fan weekend" },
      ],
      other: { href: "/es/noticias/cuatro-bares-finde-sol", label: "Leer en español", lang: "es" },
      alt: "Beer taps at the bar of O'Connell St Irish pub next to Puerta del Sol",
    },
    es: {
      title: "Cuatro bares, un finde junto a Sol",
      description:
        "Cuatro bares hermanos junto a Sol: O'Reilly's (Pasaje de Matheu 4), Dubliners y O'Connell's (Espoz y Mina 7), Four Corner (Victoria 6). Maps de cada uno.",
      eyebrow: "NFL Madrid 2026 · cuatro bares · un finde",
      h1: "Cuatro bares, un finde junto a la Puerta del Sol",
      lead: "NFL Madrid 2026 — un punto de encuentro junto a la Puerta del Sol. Cuatro bares hermanos, un finde: O'Reilly's Restaurant Bar en el Pasaje de Matheu 4, Dubliners en la Calle de Espoz y Mina 7, O'Connell's en la Calle de Espoz y Mina 7, y Four Corner en la Calle de la Victoria 6. La misma plaza, cuatro salas — elige una, salta de una a otra, o empieza por la guía común.",
      screeningName: "Cuatro bares, un finde junto a la Puerta del Sol",
      sections: [
        {
          title: "Un punto de encuentro, cuatro salas",
          paras: [
            "La idea es un finde de aficionados alrededor de la Puerta del Sol, no cuatro campañas sueltas. O'Reilly's Restaurant Bar (Pasaje de Matheu 4), Dubliners (Calle de Espoz y Mina 7), O'Connell's (Calle de Espoz y Mina 7) y Four Corner (Calle de la Victoria 6) quedan a pocos minutos de la plaza. Cada ficha de arriba tiene su dirección y un enlace a Google Maps.",
            "Four Corner es el cuarto bar hermano, punto de encuentro, de este finde. Four Corner, desde las 14:00 hasta la madrugada, con NFL en pantallas — pregunta qué partido echan.",
          ],
        },
        {
          title: "En O'Connell's, Espoz y Mina 7",
          paras: [
            "Este pub irlandés está en la Calle de Espoz y Mina 7 — la misma calle que Dubliners, a un paso de O'Reilly's y de Four Corner. El domingo 8 de noviembre en O'Connell's: abrimos desde las 12:00 (los domingos habituales, desde las 14:00). Bengals–Falcons a las 15:30 está en nuestras pantallas cuando lo emitimos (DAZN · Cuatro). Ese horario y esas pantallas son solo de O'Connell's.",
          ],
          note: "Los horarios confirmados de este pub están en la Agenda. Por orden de llegada.",
        },
      ],
      find: "Dónde estamos",
      dir: "Cómo llegar (Google Maps)",
      more: "Más en O'Connell St",
      links: [
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/nfl-madrid", label: "NFL en Madrid" },
        { href: "/es/noticias/donde-ver-nfl-madrid-sol", label: "Dónde ver la NFL este finde junto a Sol" },
        { href: "/es/location", label: "Horario y ubicación" },
        { href: "https://dublinersmadrid.es/es/cuatro-bares-fin-de-semana/", label: "Cuatro bares, un fin de semana" },
      ],
      other: { href: "/news/four-bars-fan-weekend-sol", label: "Read in English", lang: "en" },
      alt: "Grifos de cerveza en la barra de O'Connell St, pub irlandés junto a la Puerta del Sol",
    },
  },
};
