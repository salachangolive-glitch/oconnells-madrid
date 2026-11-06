import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * NFL meeting point near Puerta del Sol at O'Connell St (ciclo 2, 6–8 Nov 2026).
 * Facts:
 *  - Address: Calle de Espoz y Mina 7, 28012 Madrid (lib/venue).
 *  - Sunday 8 Nov open from 12:00 (one-day exception; habitual Sunday 14:00).
 *  - Bengals at Falcons 15:30 Madrid, Bernabéu, nfl.com REG 9; ES channel DAZN · Cuatro.
 *  - Regroup from 19:00. Sibling bars: Dubliners (same street) + O'Reilly's,
 *    Pasaje de Matheu 4. Hub: dublinersmadrid.es/4-bars-one-fan-weekend/
 *    (ES: /es/cuatro-bares-fin-de-semana/).
 * Banned in copy: oficial/official, best/mejor/beste, proyector/projector/Beamer.
 */
export const NFL_MEETING_POINT_SOL: MatchArticleData = {
  paths: {
    en: "/news/nfl-meeting-point-sol",
    es: "/es/noticias/punto-encuentro-nfl-sol",
  },
  published: "2026-11-06T16:30:00+01:00",
  startDate: "2026-11-08T15:30:00+01:00",
  sport: "American football",
  sportsEventName: "Bengals at Falcons (NFL Madrid Game)",
  homeTeam: "Atlanta Falcons",
  awayTeam: "Cincinnati Bengals",
  venue: "Santiago Bernabéu",
  copy: {
    en: {
      title: "NFL meeting point near Sol, Sun 8 Nov",
      description:
        "Meeting point near Puerta del Sol at O'Connell St, Espoz y Mina 7. Sunday 8 Nov open from 12:00 (usual 14:00). Bengals at Falcons 15:30; regroup from 19:00.",
      eyebrow: "NFL Madrid · Sunday 8 November 2026 · meeting point from 12:00",
      h1: "NFL meeting point near Puerta del Sol",
      lead: "Meet near Puerta del Sol at O'Connell St, Espoz y Mina 7. Sunday 8 November we open from 12:00 — not the usual Sunday 14:00 — so the pub is a meeting point from midday, through Bengals at Falcons at 15:30, and again from 19:00.",
      screeningName: "NFL meeting point at O'Connell St, Bengals at Falcons on the screens",
      sections: [
        {
          title: "Sunday 8 November: meet at Espoz y Mina 7",
          list: [
            "Open from 12:00 (one-day exception; usual Sundays from 14:00)",
            "Bengals at Falcons, 15:30 Madrid time — NFL Madrid Game at the Bernabéu, on our screens (DAZN · Cuatro)",
            "From 19:00, regroup at O'Connell St after the stadium",
          ],
          note: "Confirmed times are on What's On. First come, first served.",
        },
        {
          title: "An Irish pub meeting point near Sol",
          paras: [
            "O'Connell St is an Irish pub at Calle de Espoz y Mina 7, a couple of minutes from Puerta del Sol. Independent Irish pub, live sport, international crowd — a meeting point before the game, after the game, and through Sunday football.",
            "No ticket? Watch Bengals at Falcons on the screens from 15:30. Going to the Bernabéu? Start here from 12:00 and come back from 19:00.",
          ],
        },
        {
          title: "Sister pubs around Sol",
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
        { href: "/news/where-to-watch-nfl-madrid-sol", label: "Where to watch NFL this weekend near Sol" },
        { href: "/location", label: "Opening hours and location" },
        { href: "https://dublinersmadrid.es/4-bars-one-fan-weekend/", label: "4 bars, one fan weekend" },
      ],
      other: { href: "/es/noticias/punto-encuentro-nfl-sol", label: "Leer en español", lang: "es" },
      alt: "Beer taps at the bar of O'Connell St Irish pub next to Puerta del Sol",
    },
    es: {
      title: "Punto de encuentro NFL en Sol, 8 nov",
      description:
        "Punto de encuentro junto a Sol en O'Connell St, Espoz y Mina 7. Domingo 8 nov desde las 12:00. Bengals–Falcons 15:30; reencuentro desde las 19:00.",
      eyebrow: "NFL Madrid · domingo 8 de noviembre de 2026 · punto de encuentro desde las 12:00",
      h1: "Punto de encuentro NFL junto a la Puerta del Sol",
      lead: "Quedamos junto a la Puerta del Sol en O'Connell St, Espoz y Mina 7. El domingo 8 de noviembre abrimos desde las 12:00 — no el domingo habitual a las 14:00 — para ser punto de encuentro desde mediodía, durante Bengals–Falcons a las 15:30, y otra vez desde las 19:00.",
      screeningName: "Punto de encuentro NFL en O'Connell St, Bengals–Falcons en las pantallas",
      sections: [
        {
          title: "Domingo 8 de noviembre: Espoz y Mina 7",
          list: [
            "Abrimos desde las 12:00 (excepción de un solo día; los domingos habituales, desde las 14:00)",
            "Bengals–Falcons, 15:30 hora de Madrid — partido NFL en el Bernabéu, en nuestras pantallas (DAZN · Cuatro)",
            "A partir de las 19:00, reencuentro en O'Connell St al volver del estadio",
          ],
          note: "Los horarios confirmados están en la Agenda. Por orden de llegada.",
        },
        {
          title: "Un pub irlandés, punto de encuentro junto a Sol",
          paras: [
            "O'Connell St es un pub irlandés en la Calle de Espoz y Mina 7, a un par de minutos de la Puerta del Sol. Pub irlandés independiente, deporte en directo, ambiente internacional — un punto de encuentro antes del partido, después y durante el fútbol del domingo.",
            "¿Sin entrada? Mira Bengals–Falcons en las pantallas desde las 15:30. ¿Vas al Bernabéu? Empieza aquí desde las 12:00 y vuelve a partir de las 19:00.",
          ],
        },
        {
          title: "Pubs hermanos cerca de Sol",
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
        { href: "/es/noticias/donde-ver-nfl-madrid-sol", label: "Dónde ver la NFL este finde junto a Sol" },
        { href: "/es/location", label: "Horario y ubicación" },
        { href: "https://dublinersmadrid.es/es/cuatro-bares-fin-de-semana/", label: "Cuatro bares, un fin de semana" },
      ],
      other: { href: "/news/nfl-meeting-point-sol", label: "Read in English", lang: "en" },
      alt: "Grifos de cerveza en la barra de O'Connell St, pub irlandés junto a la Puerta del Sol",
    },
  },
};
