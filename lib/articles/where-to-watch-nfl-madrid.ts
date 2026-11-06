import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Where to watch NFL this weekend at O'Connell St (ciclo 1, campaign 6–8 Nov 2026).
 * Facts:
 *  - Address: Calle de Espoz y Mina 7, 28012 Madrid (lib/venue).
 *  - Sunday 8 Nov open from 12:00 (one-day exception; habitual Sunday 14:00 in venue.ts).
 *  - Bengals at Falcons 15:30 Madrid, Bernabéu, nfl.com REG 9; ES channel DAZN · Cuatro
 *    (Radar 2026-11-06, nfl.com news dónde ver Madrid Game). No other NFL channels named.
 *  - From 19:00 more Sunday NFL on the screens; Atlético–Barça 21:00 same day (laliga.com J12).
 *  - Sibling bars: Dubliners, same street; O'Reilly's, Pasaje de Matheu 4.
 *    Hub: dublinersmadrid.es/4-bars-one-fan-weekend/ (EN) and /es/cuatro-bares-fin-de-semana/ (ES).
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
  copy: {
    en: {
      title: "Where to watch NFL this weekend near Sol",
      description:
        "Irish pub near Sol for NFL weekend: Bengals at Falcons 15:30 on the screens at O'Connell St, Espoz y Mina 7. Sunday 8 Nov open from 12:00. Ask which game is on.",
      eyebrow: "NFL Madrid · Sunday 8 November 2026 · from 12:00",
      h1: "Where to watch NFL in Madrid this weekend, near Sol",
      lead: "Looking for where to watch NFL this weekend in central Madrid? O'Connell St is an Irish pub and meeting point at Espoz y Mina 7, a short walk from Puerta del Sol. Sunday 8 November we open from 12:00 — a full day from midday, not the usual Sunday 14:00.",
      screeningName: "Bengals at Falcons live on the screens at O'Connell St",
      sections: [
        {
          title: "Sunday 8 November at O'Connell St",
          list: [
            "Open from 12:00 (one-day exception; usual Sundays from 14:00)",
            "Bengals at Falcons, 15:30 Madrid time — NFL Madrid Game at the Bernabéu, on our screens (DAZN · Cuatro)",
            "From 19:00, more Sunday NFL on the screens — ask which game is on",
            "Atlético Madrid v Barcelona, 21:00, same day, live near Sol when we are showing it",
          ],
          note: "We do not promise every kickoff on every screen. Confirmed times are on What's On.",
        },
        {
          title: "An Irish pub meeting point near Sol",
          paras: [
            "O'Connell St sits on Calle de Espoz y Mina 7, a couple of minutes from Puerta del Sol. Independent Irish pub, live sport, international crowd — a meeting point before the game, after the game, and through Sunday football.",
            "No ticket for the Bernabéu? Watch Bengals at Falcons on the screens from 15:30. From 19:00, come back from the stadium. First come, first served.",
          ],
        },
        {
          title: "Four bars near Sol",
          paras: [
            "Dubliners is in the same street, Espoz y Mina 7. O'Reilly's Restaurant Bar is at Pasaje de Matheu 4, a short walk from Sol. A shared fan-weekend guide lists the rooms around the square: https://dublinersmadrid.es/4-bars-one-fan-weekend/",
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
        { href: "https://dublinersmadrid.es/4-bars-one-fan-weekend/", label: "4 bars, one fan weekend" },
      ],
      other: { href: "/es/noticias/donde-ver-nfl-madrid-sol", label: "Leer en español", lang: "es" },
      alt: "Beer taps at the bar of O'Connell St Irish pub next to Puerta del Sol",
    },
    es: {
      title: "Dónde ver la NFL este finde junto a Sol",
      description:
        "Pub irlandés junto a Sol este finde NFL: Bengals–Falcons 15:30 en O'Connell St, Espoz y Mina 7. Domingo 8 nov desde las 12:00. Pregunta qué partido echan.",
      eyebrow: "NFL Madrid · domingo 8 de noviembre de 2026 · desde las 12:00",
      h1: "Dónde ver la NFL en Madrid este finde, junto a Sol",
      lead: "¿Dónde ver la NFL este finde en el centro de Madrid? O'Connell St es un pub irlandés y punto de encuentro en Espoz y Mina 7, a un paso de la Puerta del Sol. El domingo 8 de noviembre abrimos desde las 12:00: jornada desde mediodía, no el domingo habitual a las 14:00.",
      screeningName: "Bengals–Falcons en directo en las pantallas de O'Connell St",
      sections: [
        {
          title: "Domingo 8 de noviembre en O'Connell St",
          list: [
            "Abrimos desde las 12:00 (excepción de un solo día; los domingos habituales, desde las 14:00)",
            "Bengals–Falcons, 15:30 hora de Madrid — partido NFL en el Bernabéu, en nuestras pantallas (DAZN · Cuatro)",
            "Desde las 19:00, más NFL del domingo en las pantallas — pregunta qué partido echan",
            "Atlético de Madrid–Barcelona, 21:00, el mismo día, en directo junto a Sol cuando lo estemos emitiendo",
          ],
          note: "No prometemos todos los partidos en todas las pantallas. Los horarios confirmados están en la Agenda.",
        },
        {
          title: "Un pub irlandés, punto de encuentro junto a Sol",
          paras: [
            "O'Connell St está en la Calle de Espoz y Mina 7, a un par de minutos de la Puerta del Sol. Pub irlandés independiente, deporte en directo, ambiente internacional — un punto de encuentro antes del partido, después y durante el fútbol del domingo.",
            "¿Sin entrada para el Bernabéu? Mira Bengals–Falcons en las pantallas desde las 15:30. A partir de las 19:00, el pub es para cuando volváis del estadio. Por orden de llegada.",
          ],
        },
        {
          title: "Cuatro bares cerca de Sol",
          paras: [
            "Dubliners está en la misma calle, Espoz y Mina 7. O'Reilly's Restaurant Bar está en el Pasaje de Matheu 4, a un paso de Sol. La guía común del fin de semana lista las salas alrededor de la plaza: https://dublinersmadrid.es/es/cuatro-bares-fin-de-semana/",
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
        { href: "https://dublinersmadrid.es/es/cuatro-bares-fin-de-semana/", label: "Cuatro bares, un fin de semana" },
      ],
      other: { href: "/news/where-to-watch-nfl-madrid-sol", label: "Read in English", lang: "en" },
      alt: "Grifos de cerveza en la barra de O'Connell St, pub irlandés junto a la Puerta del Sol",
    },
  },
};
