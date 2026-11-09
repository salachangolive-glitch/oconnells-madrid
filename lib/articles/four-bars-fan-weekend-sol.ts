import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Four sibling bars, one fan weekend near Sol (additional note, 6 Nov 2026).
 * Archived 9 Nov 2026: past event, no 301, stays indexable and in the sitemap.
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
  pastEvent: true,
  copy: {
    en: {
      title: "Four bars, one fan weekend near Sol: past event",
      description:
        "Four sibling bars around Puerta del Sol for the NFL weekend of 6–8 November 2026: O'Reilly's, Dubliners, O'Connell's and Four Corner. See What's On for what's next.",
      eyebrow: "Past event · NFL Madrid 2026 · four bars · 6–8 November",
      h1: "Four bars, one fan weekend near Puerta del Sol",
      lead: "The NFL Madrid weekend of 6–8 November 2026 sat around Puerta del Sol. Four sibling bars, one weekend: O'Reilly's Restaurant Bar at Pasaje de Matheu 4, Dubliners at Calle de Espoz y Mina 7, O'Connell's at Calle de Espoz y Mina 7, and Four Corner at Calle de la Victoria 6.",
      screeningName: "Four bars, one fan weekend near Puerta del Sol",
      sections: [
        {
          title: "One meeting point, four rooms",
          paras: [
            "The idea was one fan weekend around Puerta del Sol, not four isolated nights. O'Reilly's Restaurant Bar (Pasaje de Matheu 4), Dubliners (Calle de Espoz y Mina 7), O'Connell's (Calle de Espoz y Mina 7) and Four Corner (Calle de la Victoria 6) sit a few minutes from the square.",
            "Four Corner was the fourth sibling meeting-point bar that weekend, Sunday from 14:00 until late, with NFL on the screens.",
          ],
        },
        {
          title: "At O'Connell's, Espoz y Mina 7",
          paras: [
            "This Irish pub is at Calle de Espoz y Mina 7 — the same street as Dubliners, a short walk from O'Reilly's and from Four Corner. On Sunday 8 November at O'Connell's we opened from 12:00 (usual Sundays from 14:00). Bengals at Falcons at 15:30 was on our screens (DAZN · Cuatro).",
          ],
          note: "Usual Sundays open at 14:00. Confirmed times for what is next are on What's On.",
        },
      ],
      find: "Find us",
      dir: "Get directions (Google Maps)",
      more: "More from O'Connell St",
      links: [
        { href: "/whats-on", label: "What's On" },
        { href: "/nfl-madrid", label: "NFL in Madrid" },
        { href: "/news/where-to-watch-nfl-madrid-sol", label: "Where to watch NFL near Sol" },
        { href: "/location", label: "Opening hours and location" },
      ],
      other: { href: "/es/noticias/cuatro-bares-finde-sol", label: "Leer en español", lang: "es" },
      alt: "Beer taps at the bar of O'Connell St Irish pub next to Puerta del Sol",
    },
    es: {
      title: "Cuatro bares, un finde junto a Sol: evento pasado",
      description:
        "Cuatro bares hermanos junto a Sol el finde NFL del 6–8 de noviembre de 2026: O'Reilly's, Dubliners, O'Connell's y Four Corner. Consulta la Agenda para lo que viene.",
      eyebrow: "Evento pasado · NFL Madrid 2026 · cuatro bares · 6–8 de noviembre",
      h1: "Cuatro bares, un finde junto a la Puerta del Sol",
      lead: "El finde NFL en Madrid del 6–8 de noviembre de 2026 se vivió alrededor de la Puerta del Sol. Cuatro bares hermanos, un finde: O'Reilly's Restaurant Bar en el Pasaje de Matheu 4, Dubliners en la Calle de Espoz y Mina 7, O'Connell's en la Calle de Espoz y Mina 7, y Four Corner en la Calle de la Victoria 6.",
      screeningName: "Cuatro bares, un finde junto a la Puerta del Sol",
      sections: [
        {
          title: "Un punto de encuentro, cuatro salas",
          paras: [
            "La idea fue un finde de aficionados alrededor de la Puerta del Sol, no cuatro noches sueltas. O'Reilly's Restaurant Bar (Pasaje de Matheu 4), Dubliners (Calle de Espoz y Mina 7), O'Connell's (Calle de Espoz y Mina 7) y Four Corner (Calle de la Victoria 6) quedan a pocos minutos de la plaza.",
            "Four Corner fue el cuarto bar hermano, punto de encuentro, de aquel finde. Four Corner, desde las 14:00 hasta la madrugada, con NFL en pantallas.",
          ],
        },
        {
          title: "En O'Connell's, Espoz y Mina 7",
          paras: [
            "Este pub irlandés está en la Calle de Espoz y Mina 7 — la misma calle que Dubliners, a un paso de O'Reilly's y de Four Corner. El domingo 8 de noviembre en O'Connell's abrimos desde las 12:00 (los domingos habituales, desde las 14:00). Bengals–Falcons a las 15:30 estuvo en nuestras pantallas (DAZN · Cuatro).",
          ],
          note: "Los domingos habituales abrimos a las 14:00. Lo que viene, con hora confirmada, está en la Agenda.",
        },
      ],
      find: "Dónde estamos",
      dir: "Cómo llegar (Google Maps)",
      more: "Más en O'Connell St",
      links: [
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/nfl-madrid", label: "NFL en Madrid" },
        { href: "/es/noticias/donde-ver-nfl-madrid-sol", label: "Dónde ver la NFL junto a Sol" },
        { href: "/es/location", label: "Horario y ubicación" },
      ],
      other: { href: "/news/four-bars-fan-weekend-sol", label: "Read in English", lang: "en" },
      alt: "Grifos de cerveza en la barra de O'Connell St, pub irlandés junto a la Puerta del Sol",
    },
  },
};
