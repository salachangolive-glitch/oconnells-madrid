import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Before/after Bengals–Falcons at the Bernabéu, from O'Connell St (ciclo 3).
 * Archived 9 Nov 2026: past event, no 301, stays indexable and in the sitemap.
 * Banned in copy: oficial/official, best/mejor/beste, proyector/projector/Beamer.
 */
export const BEFORE_AFTER_BERNABEU_NFL: MatchArticleData = {
  paths: {
    en: "/news/before-after-bernabeu-nfl-sol",
    es: "/es/noticias/antes-despues-bernabeu-nfl-sol",
  },
  published: "2026-11-06T16:40:00+01:00",
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
      title: "Before and after Bernabéu NFL, near Sol: past event",
      description:
        "Bengals at Falcons was at the Bernabéu on Sunday 8 November 2026, 15:30. O'Connell St at Espoz y Mina 7 was a stop before and after. See What's On for what's next.",
      eyebrow: "Past event · NFL Madrid · Sunday 8 November 2026",
      h1: "Before and after Bengals at Falcons: Irish pub near Sol",
      lead: "Bengals at Falcons kicked off at 15:30 at the Bernabéu on Sunday 8 November 2026. Four sibling bars sat around Puerta del Sol — O'Reilly's, Dubliners, O'Connell's and Four Corner. O'Connell's at Espoz y Mina 7 opened from 12:00 that Sunday: a stop before the stadium, and a place to come back to after.",
      screeningName: "Before and after Bengals at Falcons at O'Connell St",
      sections: [
        {
          title: "Before the kickoff",
          list: [
            "Opened from 12:00 on Sunday 8 November (usual Sundays from 14:00)",
            "Bengals at Falcons, 15:30 Madrid time, at the Bernabéu",
            "No stadium ticket? The game was on our screens from 15:30 (DAZN · Cuatro)",
          ],
          note: "Usual Sundays open at 14:00.",
        },
        {
          title: "After the game: from 19:00",
          paras: [
            "From 19:00 that Sunday, O'Connell St was for when people came back from the stadium. More Sunday NFL went on the screens. The pub stayed open until 03:00.",
          ],
        },
        {
          title: "Meeting point that Sunday",
          paras: [
            "Sunday 8 November was a meeting point from 12:00 midday at this Irish pub near Sol — Espoz y Mina 7, a short walk from Puerta del Sol.",
          ],
        },
      ],
      find: "Find us",
      dir: "Get directions (Google Maps)",
      more: "More from O'Connell St",
      links: [
        { href: "/whats-on", label: "What's On" },
        { href: "/nfl-madrid", label: "NFL in Madrid" },
        { href: "/news/nfl-meeting-point-sol", label: "NFL meeting point near Sol" },
        { href: "/news/where-to-watch-nfl-madrid-sol", label: "Where to watch NFL near Sol" },
        { href: "/location", label: "Opening hours and location" },
      ],
      other: { href: "/es/noticias/antes-despues-bernabeu-nfl-sol", label: "Leer en español", lang: "es" },
      alt: "Beer taps at the bar of O'Connell St Irish pub next to Puerta del Sol",
    },
    es: {
      title: "Antes y después NFL Bernabéu, Sol: evento pasado",
      description:
        "Bengals–Falcons fue en el Bernabéu el domingo 8 de noviembre de 2026, a las 15:30. O'Connell St en Espoz y Mina 7 fue una parada antes y después. Consulta la Agenda para lo que viene.",
      eyebrow: "Evento pasado · NFL Madrid · domingo 8 de noviembre de 2026",
      h1: "Antes y después de Bengals–Falcons: pub irlandés junto a Sol",
      lead: "Bengals–Falcons empezó a las 15:30 en el Bernabéu el domingo 8 de noviembre de 2026. Cuatro bares hermanos alrededor de la Puerta del Sol: O'Reilly's, Dubliners, O'Connell's y Four Corner. O'Connell's en Espoz y Mina 7 abrió desde las 12:00 aquel domingo: una parada antes del estadio, y un sitio al que volver después.",
      screeningName: "Antes y después de Bengals–Falcons en O'Connell St",
      sections: [
        {
          title: "Antes del partido",
          list: [
            "Aquel domingo 8 de noviembre abrimos desde las 12:00 (los domingos habituales, desde las 14:00)",
            "Bengals–Falcons, 15:30 hora de Madrid, en el Bernabéu",
            "¿Sin entrada? El partido estuvo en nuestras pantallas desde las 15:30 (DAZN · Cuatro)",
          ],
          note: "Los domingos habituales abrimos a las 14:00.",
        },
        {
          title: "Después del partido: desde las 19:00",
          paras: [
            "A partir de las 19:00 aquel domingo, O'Connell St era para cuando volvíais del estadio. Hubo más NFL del domingo en las pantallas. El pub abrió hasta las 03:00.",
          ],
        },
        {
          title: "Punto de encuentro aquel domingo",
          paras: [
            "El domingo 8 de noviembre fue un punto de encuentro desde las 12:00 del mediodía en este pub irlandés junto a Sol — Espoz y Mina 7, a un paso de la Puerta del Sol.",
          ],
        },
      ],
      find: "Dónde estamos",
      dir: "Cómo llegar (Google Maps)",
      more: "Más en O'Connell St",
      links: [
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/nfl-madrid", label: "NFL en Madrid" },
        { href: "/es/noticias/punto-encuentro-nfl-sol", label: "Punto de encuentro NFL junto a Sol" },
        { href: "/es/noticias/donde-ver-nfl-madrid-sol", label: "Dónde ver la NFL junto a Sol" },
        { href: "/es/location", label: "Horario y ubicación" },
      ],
      other: { href: "/news/before-after-bernabeu-nfl-sol", label: "Read in English", lang: "en" },
      alt: "Grifos de cerveza en la barra de O'Connell St, pub irlandés junto a la Puerta del Sol",
    },
  },
};
