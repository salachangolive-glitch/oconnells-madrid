import type { MatchArticleData } from "@/components/MatchNewsArticle";

/**
 * Spain v Chile, World Rugby Nations Cup, Leganés (12 Nov 2026 article).
 * lib/fixtures 2026-11-14-spain-chile: 17:00 Madrid, Estadio Ontime Butarque;
 * ferugby.es + Radar 9 Nov; channel Movistar Plus+ (fixture row).
 * Saturday doors 15:00 (lib/venue).
 */
export const SPAIN_CHILE_RUGBY: MatchArticleData = {
  paths: {
    en: "/news/spain-chile-rugby-saturday-sol",
    es: "/es/noticias/espana-chile-rugby-sabado-sol",
  },
  published: "2026-11-12T10:00:00+01:00",
  startDate: "2026-11-14T17:00:00+01:00",
  sport: "Rugby",
  sportsEventName: "Spain v Chile (World Rugby Nations Cup)",
  homeTeam: "Spain",
  awayTeam: "Chile",
  venue: "Estadio Ontime Butarque",
  venueLocality: "Leganés",
  copy: {
    en: {
      title:
        "Spain v Chile rugby, Sat 14 Nov 17:00: Irish pub near Sol before Butarque",
      description:
        "Spain v Chile, World Rugby Nations Cup, Saturday 14 November 2026, 17:00 at Estadio Ontime Butarque in Leganés. Chilean fans in Madrid: meeting point at O'Connell St, Espoz y Mina 7, next to Puerta del Sol.",
      eyebrow: "Rugby · Saturday 14 November 2026 · 17:00",
      h1: "Spain v Chile rugby: Saturday afternoon near Sol and Leganés",
      lead:
        "Spain welcome Chile at Estadio Ontime Butarque in Leganés on Saturday 14 November. Travelling from Chile or already in central Madrid? O'Connell St, an Irish pub at Espoz y Mina 7 next to Puerta del Sol, is a meeting point before you head south-west to the stadium, and stays open until 03:30 if you are back in the centre afterwards.",
      screeningName: "Spain v Chile rugby live on screen at O'Connell St",
      sections: [
        {
          title: "The match",
          list: [
            "Spain v Chile, World Rugby Nations Cup",
            "Saturday 14 November 2026, 17:00 Madrid time",
            "Estadio Ontime Butarque, Leganés (Greater Madrid)",
            "On Movistar Plus+",
          ],
          note: "Kick-off, venue and broadcast as listed on the fixture list for O'Connell St. Times can move, so check again on the day.",
        },
        {
          title: "Meeting point near Puerta del Sol",
          paras: [
            "On Saturdays O'Connell St opens at 15:00, open until 03:30. Puerta del Sol is an easy place for Chilean visitors, Erasmus groups and friends to agree a pin in the centre before metro or Cercanías towards Leganés.",
            "If you are watching at the pub instead of at the ground, the match is on our screens on Movistar Plus+. Ask at the bar which feed is on. No reservations: first come, first served.",
          ],
        },
        {
          title: "Sunday: Spain v England in Madrid",
          paras: [
            "The next evening, Sunday 15 November, Spain play England in football at the Riyadh Air Metropolitano at 20:45 on La 1. See the guide in the links below.",
          ],
        },
      ],
      find: "Find us",
      dir: "Get directions (Google Maps)",
      more: "More from O'Connell St",
      links: [
        { href: "/news/spain-england-sunday-night-sol", label: "Spain v England, Sunday 15 Nov" },
        { href: "/whats-on", label: "What's On" },
        { href: "/location", label: "Opening hours and location" },
      ],
      other: {
        href: "/es/noticias/espana-chile-rugby-sabado-sol",
        label: "Leer en español",
        lang: "es",
      },
      alt: "Sports screens and seating inside O'Connell St Irish pub near Puerta del Sol",
    },
    es: {
      title:
        "España–Chile rugby, sáb 14 nov 17:00: pub junto a Sol antes de Butarque",
      description:
        "España–Chile, Nations Cup de rugby, sábado 14 de noviembre de 2026, 17:00 en el Estadio Ontime Butarque (Leganés). Aficionados chilenos en Madrid: punto de encuentro en O'Connell St, Espoz y Mina 7, junto a Puerta del Sol.",
      eyebrow: "Rugby · sábado 14 de noviembre de 2026 · 17:00",
      h1: "España–Chile rugby: sábado entre Sol y Leganés",
      lead:
        "España recibe a Chile en el Estadio Ontime Butarque (Leganés) el sábado 14 de noviembre. ¿Vienes de Chile o estás en el centro de Madrid? O'Connell St, pub irlandés en Espoz y Mina 7 junto a Puerta del Sol, es un punto de encuentro antes de ir al sur-oeste al estadio, y sigue abierto hasta las 03:30 si vuelves al centro.",
      screeningName:
        "España–Chile rugby en directo en pantalla en O'Connell St",
      sections: [
        {
          title: "El partido",
          list: [
            "España–Chile, Nations Cup de rugby",
            "Sábado 14 de noviembre de 2026, 17:00 hora de Madrid",
            "Estadio Ontime Butarque, Leganés",
            "En Movistar Plus+",
          ],
          note: "Hora, estadio y emisión según la Agenda de O'Connell St. Los horarios pueden cambiar: compruébalo el mismo día.",
        },
        {
          title: "Punto de encuentro junto a Sol",
          paras: [
            "Los sábados O'Connell St abre a las 15:00, abierto hasta las 03:30. Puerta del Sol es un sitio fácil para quedar con visitantes chilenos, grupos Erasmus y amigos en el centro antes del metro o Cercanías hacia Leganés.",
            "Si prefieres verlo en el pub y no en el campo, el partido está en nuestras pantallas en Movistar Plus+. Pregunta en barra qué señal hay. Por orden de llegada.",
          ],
        },
        {
          title: "Domingo: España–Inglaterra en Madrid",
          paras: [
            "Al día siguiente, domingo 15 de noviembre, España juega contra Inglaterra en fútbol en el Riyadh Air Metropolitano a las 20:45 en La 1. Consulta la guía en los enlaces.",
          ],
        },
      ],
      find: "Dónde estamos",
      dir: "Cómo llegar (Google Maps)",
      more: "Más en O'Connell St",
      links: [
        {
          href: "/es/noticias/espana-inglaterra-domingo-sol",
          label: "España–Inglaterra, domingo 15 nov",
        },
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/location", label: "Horario y ubicación" },
      ],
      other: {
        href: "/news/spain-chile-rugby-saturday-sol",
        label: "Read in English",
        lang: "en",
      },
      alt: "Pantallas deportivas y mesas en O'Connell St, pub irlandés junto a Puerta del Sol",
    },
  },
};
