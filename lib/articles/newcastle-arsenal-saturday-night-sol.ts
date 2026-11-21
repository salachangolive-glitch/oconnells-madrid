import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Newcastle v Arsenal, Premier League MW11 (13 Nov 2026 article).
 * lib/fixtures 2026-11-21-newcastle-arsenal: 18:30 Madrid, St James' Park;
 * premierleague.com + Radar 9 Nov; DAZN. Saturday doors 15:00.
 */
export const NEWCASTLE_ARSENAL: MatchArticleData = {
  paths: {
    en: "/news/newcastle-arsenal-saturday-night-sol",
    es: "/es/noticias/newcastle-arsenal-sabado-sol",
  },
  published: "2026-11-13T08:30:00+01:00",
  startDate: "2026-11-21T18:30:00+01:00",
  sport: "Football",
  sportsEventName: "Newcastle United v Arsenal (Premier League)",
  homeTeam: "Newcastle United",
  awayTeam: "Arsenal",
  venue: "St James' Park",
  venueLocality: "Newcastle upon Tyne",
  copy: {
    en: {
      title:
        "Newcastle v Arsenal, Sat 21 Nov 18:30: Premier League at an Irish pub near Sol",
      description:
        "Newcastle v Arsenal, Premier League matchweek 11, Saturday 21 November 2026, 18:30 Madrid time at St James' Park. Watch on DAZN at O'Connell St, Espoz y Mina 7, next to Puerta del Sol.",
      eyebrow: "Premier League · Saturday 21 November 2026 · 18:30",
      h1: "Newcastle v Arsenal: Saturday Premier League from St James' Park",
      lead:
        "Newcastle host Arsenal at St James' Park on Saturday 21 November, the Saturday after the Nations League break in Madrid. English football on the screens at O'Connell St, an Irish pub at Espoz y Mina 7 next to Puerta del Sol, opens at 15:00 and runs until 03:30 — a meeting point near Sol for Premier League fans.",
      screeningName: "Newcastle v Arsenal live on screen at O'Connell St",
      sections: [
        {
          title: "The match",
          list: [
            "Newcastle United v Arsenal, Premier League, matchweek 11",
            "Saturday 21 November 2026, 18:30 Madrid time",
            "St James' Park, Newcastle upon Tyne",
            "On DAZN",
          ],
          note: "Kick-off and broadcast as listed on the fixture list for O'Connell St. Premier League times can move, so check again on the day.",
        },
        {
          title: "Watch it near Puerta del Sol",
          paras: [
            "On Saturdays O'Connell St opens at 15:00. Come in early if several Premier League or LaLiga games overlap — ask at the bar which feed is on DAZN. No reservations: first come, first served.",
            "The same weekend, Real Madrid play Celta at the Bernabéu on Saturday night. See the guide in the links below if you are planning a double-header.",
          ],
        },
        {
          title: "Sunday in Madrid",
          paras: [
            "On Sunday 22 November Liverpool play Manchester United at Anfield at 17:30 Madrid time, also on DAZN — another English headline if your weekend in Sol is all about the Premier League.",
          ],
        },
      ],
      find: "Find us",
      dir: "Get directions (Google Maps)",
      more: "More from O'Connell St",
      links: [
        {
          href: "/news/real-madrid-celta-saturday-night-sol",
          label: "Real Madrid v Celta, Saturday 21 Nov",
        },
        { href: "/premier-league", label: "Premier League in Madrid" },
        { href: "/whats-on", label: "What's On" },
      ],
      other: {
        href: "/es/noticias/newcastle-arsenal-sabado-sol",
        label: "Leer en español",
        lang: "es",
      },
      alt: "Sports screens inside O'Connell St Irish pub near Puerta del Sol",
    },
    es: {
      title:
        "Newcastle–Arsenal, sáb 21 nov 18:30: Premier League en pub junto a Sol",
      description:
        "Newcastle–Arsenal, Premier League jornada 11, sábado 21 de noviembre de 2026, 18:30 hora de Madrid en St James' Park. En DAZN en O'Connell St, Espoz y Mina 7, junto a Puerta del Sol.",
      eyebrow: "Premier League · sábado 21 de noviembre de 2026 · 18:30",
      h1: "Newcastle–Arsenal: sábado de Premier desde St James' Park",
      lead:
        "El Newcastle recibe al Arsenal en St James' Park el sábado 21 de noviembre, el sábado después del parón de Liga de Naciones en Madrid. Fútbol inglés en pantalla en O'Connell St, pub irlandés en Espoz y Mina 7 junto a Puerta del Sol: abre a las 15:00 y cierra a las 03:30 — punto de encuentro junto a Sol para aficionados de la Premier.",
      screeningName:
        "Newcastle–Arsenal en directo en pantalla en O'Connell St",
      sections: [
        {
          title: "El partido",
          list: [
            "Newcastle United–Arsenal, Premier League, jornada 11",
            "Sábado 21 de noviembre de 2026, 18:30 hora de Madrid",
            "St James' Park, Newcastle",
            "En DAZN",
          ],
          note: "Hora y retransmisión según la Agenda de O'Connell St. Los horarios de la Premier pueden cambiar: compruébalo el mismo día.",
        },
        {
          title: "Verlo junto a Puerta del Sol",
          paras: [
            "Los sábados O'Connell St abre a las 15:00. Ven con tiempo si coinciden varios partidos de Premier o LaLiga — pregunta en barra qué señal está en DAZN. Por orden de llegada.",
            "Ese mismo fin de semana, el Real Madrid juega contra el Celta en el Bernabéu el sábado por la noche. Consulta la guía en los enlaces si quieres encadenar partidos.",
          ],
        },
        {
          title: "Domingo en Madrid",
          paras: [
            "El domingo 22 de noviembre el Liverpool juega contra el Manchester United en Anfield a las 17:30 hora de Madrid, también en DAZN — otra cabecera inglesa si tu finde en Sol es de Premier.",
          ],
        },
      ],
      find: "Dónde estamos",
      dir: "Cómo llegar (Google Maps)",
      more: "Más en O'Connell St",
      links: [
        {
          href: "/news/real-madrid-celta-saturday-night-sol",
          label: "Real Madrid–Celta, sábado 21 nov",
        },
        { href: "/es/premier-league", label: "Premier League en Madrid" },
        { href: "/es/whats-on", label: "Agenda" },
      ],
      other: {
        href: "/news/newcastle-arsenal-saturday-night-sol",
        label: "Read in English",
        lang: "en",
      },
      alt: "Pantallas deportivas en O'Connell St, pub irlandés junto a Puerta del Sol",
    },
  },
};
