import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * NFL meeting point near Puerta del Sol at O'Connell St (ciclo 2, 6–8 Nov 2026).
 * Archived 9 Nov 2026: past event, no 301, stays indexable and in the sitemap.
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
  fourBars: true,
  pastEvent: true,
  copy: {
    en: {
      title: "NFL meeting point near Sol: past event (8 Nov)",
      description:
        "O'Connell St at Espoz y Mina 7 was a meeting point for Bengals at Falcons on Sunday 8 November 2026, 15:30. See What's On for what's next.",
      eyebrow: "Past event · NFL Madrid · Sunday 8 November 2026",
      h1: "NFL meeting point: four bars near Puerta del Sol",
      lead: "On Sunday 8 November 2026, four sibling bars around Puerta del Sol — O'Reilly's, Dubliners, O'Connell's and Four Corner — were a meeting point for the NFL Madrid Game. O'Connell's at Espoz y Mina 7 opened from 12:00 that day.",
      screeningName: "NFL meeting point at O'Connell St, Bengals at Falcons on the screens",
      sections: [
        {
          title: "Sunday 8 November at Espoz y Mina 7",
          list: [
            "Opened from 12:00 that Sunday (usual Sundays from 14:00)",
            "Bengals at Falcons, 15:30 Madrid time — NFL Madrid Game at the Bernabéu, on our screens (DAZN · Cuatro)",
            "From 19:00, regroup at O'Connell St after the stadium",
          ],
          note: "Usual Sundays open at 14:00. Confirmed times for what is next are on What's On.",
        },
        {
          title: "An Irish pub meeting point near Sol",
          paras: [
            "O'Connell St is an Irish pub at Calle de Espoz y Mina 7, a couple of minutes from Puerta del Sol. Independent Irish pub, live sport, international crowd.",
          ],
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
      other: { href: "/es/noticias/punto-encuentro-nfl-sol", label: "Leer en español", lang: "es" },
      alt: "Beer taps at the bar of O'Connell St Irish pub next to Puerta del Sol",
    },
    es: {
      title: "Punto de encuentro NFL en Sol: evento pasado (8 nov)",
      description:
        "O'Connell St en Espoz y Mina 7 fue punto de encuentro para Bengals–Falcons el domingo 8 de noviembre de 2026, a las 15:30. Consulta la Agenda para lo que viene.",
      eyebrow: "Evento pasado · NFL Madrid · domingo 8 de noviembre de 2026",
      h1: "Punto de encuentro NFL: cuatro bares junto a Sol",
      lead: "El domingo 8 de noviembre de 2026, cuatro bares hermanos alrededor de la Puerta del Sol — O'Reilly's, Dubliners, O'Connell's y Four Corner — fueron un punto de encuentro para el partido NFL en Madrid. O'Connell's en Espoz y Mina 7 abrió desde las 12:00 aquel día.",
      screeningName: "Punto de encuentro NFL en O'Connell St, Bengals–Falcons en las pantallas",
      sections: [
        {
          title: "Domingo 8 de noviembre: Espoz y Mina 7",
          list: [
            "Aquel domingo abrimos desde las 12:00 (los domingos habituales, desde las 14:00)",
            "Bengals–Falcons, 15:30 hora de Madrid — partido NFL en el Bernabéu, en nuestras pantallas (DAZN · Cuatro)",
            "A partir de las 19:00, reencuentro en O'Connell St al volver del estadio",
          ],
          note: "Los domingos habituales abrimos a las 14:00. Lo que viene, con hora confirmada, está en la Agenda.",
        },
        {
          title: "Un pub irlandés, punto de encuentro junto a Sol",
          paras: [
            "O'Connell St es un pub irlandés en la Calle de Espoz y Mina 7, a un par de minutos de la Puerta del Sol. Pub irlandés independiente, deporte en directo, ambiente internacional.",
          ],
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
      other: { href: "/news/nfl-meeting-point-sol", label: "Read in English", lang: "en" },
      alt: "Grifos de cerveza en la barra de O'Connell St, pub irlandés junto a la Puerta del Sol",
    },
  },
};
