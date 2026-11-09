import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Where to watch NFL this weekend at O'Connell St (ciclo 1, campaign 6–8 Nov 2026).
 * Archived 9 Nov 2026: past event, no 301, stays indexable and in the sitemap.
 * Facts:
 *  - Address: Calle de Espoz y Mina 7, 28012 Madrid (lib/venue).
 *  - Sunday 8 Nov opened from 12:00 (one-day exception; habitual Sunday 14:00 in venue.ts).
 *  - Bengals at Falcons 15:30 Madrid, Bernabéu, nfl.com REG 9; ES channel DAZN · Cuatro.
 * Banned in copy: oficial/official, best/mejor/beste, proyector/projector/Beamer.
 */
export const WHERE_TO_WATCH_NFL: MatchArticleData = {
  paths: {
    en: "/news/where-to-watch-nfl-madrid-sol",
    es: "/es/noticias/donde-ver-nfl-madrid-sol",
  },
  published: "2026-11-06T16:00:00+01:00",
  startDate: "2026-11-08T15:30:00+01:00",
  sport: "American football",
  sportsEventName: "Bengals at Falcons (NFL Madrid Game)",
  homeTeam: "Atlanta Falcons",
  awayTeam: "Cincinnati Bengals",
  venue: "Santiago Bernabéu",
  pastEvent: true,
  copy: {
    en: {
      title: "Where to watch NFL near Sol: past event (8 Nov)",
      description:
        "Bengals at Falcons was at the Bernabéu on Sunday 8 November 2026, 15:30. O'Connell St at Espoz y Mina 7 was a place to watch and meet. See What's On for what's next.",
      eyebrow: "Past event · NFL Madrid · Sunday 8 November 2026 · 15:30",
      h1: "Where to watch NFL in Madrid near Sol",
      lead: "Bengals at Falcons was the NFL Madrid Game at the Bernabéu on Sunday 8 November 2026 at 15:30. O'Connell St, an Irish pub at Espoz y Mina 7 by Puerta del Sol, was a place to watch on the screens and to meet before and after.",
      screeningName: "Bengals at Falcons live on the screens at O'Connell St",
      sections: [
        {
          title: "Sunday 8 November at O'Connell St",
          list: [
            "Doors opened from 12:00 that Sunday (usual Sundays from 14:00)",
            "Bengals at Falcons, 15:30 Madrid time — NFL Madrid Game at the Bernabéu, on our screens (DAZN · Cuatro)",
            "From 19:00, more Sunday NFL on the screens",
            "Atlético Madrid v Barcelona, 21:00, the same day",
          ],
          note: "Usual Sundays open at 14:00. Confirmed times for what is next are on What's On.",
        },
        {
          title: "An Irish pub meeting point near Sol",
          paras: [
            "O'Connell St sits on Calle de Espoz y Mina 7, a couple of minutes from Puerta del Sol. Independent Irish pub, live sport, international crowd.",
            "That Sunday the pub opened from midday for the Madrid Game, then later NFL windows and LaLiga in the same room.",
          ],
        },
        {
          title: "Four bars near Sol",
          paras: [
            "Dubliners is in the same street, Espoz y Mina 7. O'Reilly's Restaurant Bar is at Pasaje de Matheu 4. Four Corner is at Calle de la Victoria 6.",
          ],
        },
      ],
      find: "Find us",
      dir: "Get directions (Google Maps)",
      more: "More from O'Connell St",
      links: [
        { href: "/whats-on", label: "What's On" },
        { href: "/nfl-madrid", label: "NFL in Madrid" },
        { href: "/location", label: "Opening hours and location" },
      ],
      other: { href: "/es/noticias/donde-ver-nfl-madrid-sol", label: "Leer en español", lang: "es" },
      alt: "Beer taps at the bar of O'Connell St Irish pub next to Puerta del Sol",
    },
    es: {
      title: "Dónde ver la NFL junto a Sol: evento pasado (8 nov)",
      description:
        "Bengals–Falcons fue en el Bernabéu el domingo 8 de noviembre de 2026, a las 15:30. O'Connell St en Espoz y Mina 7 fue un sitio para verlo y quedar. Consulta la Agenda para lo que viene.",
      eyebrow: "Evento pasado · NFL Madrid · domingo 8 de noviembre de 2026 · 15:30",
      h1: "Dónde ver la NFL en Madrid, junto a Sol",
      lead: "Bengals–Falcons fue el partido NFL en el Bernabéu el domingo 8 de noviembre de 2026 a las 15:30. O'Connell St, pub irlandés en Espoz y Mina 7 junto a Puerta del Sol, fue un sitio para verlo en pantallas y quedar antes y después.",
      screeningName: "Bengals–Falcons en directo en las pantallas de O'Connell St",
      sections: [
        {
          title: "Domingo 8 de noviembre en O'Connell St",
          list: [
            "Aquel domingo abrimos desde las 12:00 (los domingos habituales, desde las 14:00)",
            "Bengals–Falcons, 15:30 hora de Madrid — partido NFL en el Bernabéu, en nuestras pantallas (DAZN · Cuatro)",
            "Desde las 19:00, más NFL del domingo en las pantallas",
            "Atlético de Madrid–Barcelona, 21:00, el mismo día",
          ],
          note: "Los domingos habituales abrimos a las 14:00. Lo que viene, con hora confirmada, está en la Agenda.",
        },
        {
          title: "Un pub irlandés, punto de encuentro junto a Sol",
          paras: [
            "O'Connell St está en la Calle de Espoz y Mina 7, a un par de minutos de la Puerta del Sol. Pub irlandés independiente, deporte en directo, ambiente internacional.",
            "Aquel domingo el pub abrió desde mediodía para el partido de Madrid, y luego más NFL y LaLiga en la misma sala.",
          ],
        },
        {
          title: "Cuatro bares cerca de Sol",
          paras: [
            "Dubliners está en la misma calle, Espoz y Mina 7. O'Reilly's Restaurant Bar está en el Pasaje de Matheu 4. Four Corner está en la Calle de la Victoria 6.",
          ],
        },
      ],
      find: "Dónde estamos",
      dir: "Cómo llegar (Google Maps)",
      more: "Más en O'Connell St",
      links: [
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/nfl-madrid", label: "NFL en Madrid" },
        { href: "/es/location", label: "Horario y ubicación" },
      ],
      other: { href: "/news/where-to-watch-nfl-madrid-sol", label: "Read in English", lang: "en" },
      alt: "Grifos de cerveza en la barra de O'Connell St, pub irlandés junto a la Puerta del Sol",
    },
  },
};
