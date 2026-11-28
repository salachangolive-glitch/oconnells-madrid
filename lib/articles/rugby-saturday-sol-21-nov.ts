import type { MatchArticleData } from "@/components/MatchNewsArticle";
import { OWNER_PHOTOS_17NOV } from "@/lib/owner-photos-17nov";

/**
 * Nations Championship rugby — Saturday 21 Nov 2026 (17 Nov article).
 * Owner 17 Nov 13:54: all six windows live on screens at O'Connell St;
 * kickoffs Europe/Madrid; no broadcaster named on site.
 */
export const RUGBY_SATURDAY_SOL_21_NOV: MatchArticleData = {
  paths: {
    en: "/news/rugby-saturday-sol-21-nov",
    es: "/es/noticias/rugby-sabado-sol-21-nov",
  },
  published: "2026-11-17T13:54:00+01:00",
  startDate: "2026-11-21T15:10:00+01:00",
  sport: "Rugby",
  sportsEventName:
    "England v New Zealand — Nations Championship (Saturday rugby near Sol)",
  homeTeam: "England",
  awayTeam: "New Zealand",
  venue: "Allianz Stadium",
  venueLocality: "Twickenham",
  interiorSrc: OWNER_PHOTOS_17NOV.pantallasFutbol.src,
  interiorPosition: OWNER_PHOTOS_17NOV.pantallasFutbol.position,
  copy: {
    en: {
      title:
        "Rugby in Madrid Sol: England v New Zealand and Ireland v South Africa, Saturday 21 Nov",
      description:
        "Nations Championship rugby, Saturday 21 November 2026 — live on our screens at O'Connell St, Espoz y Mina 7, by Puerta del Sol. England v New Zealand 15:10, Ireland v South Africa 17:40, and four more kick-offs. Meeting point for fans of every country. No reservations, first come first served.",
      eyebrow: "Rugby · Saturday 21 November 2026 · Puerta del Sol",
      h1: "Saturday rugby near Sol: England v New Zealand and Ireland v South Africa, live on our screens",
      lead:
        "Nations Championship matches stack up on Saturday 21 November, Madrid time, at O'Connell St — an Irish pub at Espoz y Mina 7, by Puerta del Sol. All six are live on our screens. First and most watched: England v New Zealand at 15:10, then Ireland v South Africa at 17:40. A meeting point for fans of every country. No reservations, first come first served.",
      screeningName:
        "Nations Championship rugby live on our screens at O'Connell St — Saturday 21 November",
      sections: [
        {
          title: "Saturday windows (Madrid time)",
          list: [
            "15:10 — England v New Zealand",
            "15:10 — Scotland v Japan",
            "17:40 — Ireland v South Africa",
            "17:40 — Italy v Fiji",
            "21:10 — France v Argentina",
            "21:10 — Wales v Australia",
          ],
          note: "Kick-offs are listed in Madrid time for planning your afternoon and evening. Times can move — check again on matchday.",
        },
        {
          title: "Live on our screens at O'Connell St",
          paras: [
            "All six fixtures above are live on our screens at O'Connell St this Saturday. We do not name a channel or broadcaster on this page — ask at the bar which feed is showing when you arrive.",
            "Saturday doors open 15:00, open until 03:30. Arrive early for England v New Zealand and Ireland v South Africa if you want a seat near a screen. No reservations, first come first served.",
          ],
        },
        {
          title: "Meeting point before and after",
          paras: [
            "O'Connell St at Espoz y Mina 7, by Puerta del Sol, is a meeting point for fans of every country — not tied to one team. Share the address on your group chat and meet before the 15:10 wave or the 17:40 double-header. After the late kick-offs, the pub stays open until 03:30 if you want to stay in the centre.",
          ],
        },
        {
          title: "How to get here from Sol",
          paras: [
            "From Puerta del Sol, walk south-west along the shopping streets — about two minutes to Espoz y Mina 7. Metro station Sol (lines 1, 2 and 3) is on the square.",
          ],
        },
      ],
      find: "Find us",
      dir: "Get directions (Google Maps)",
      more: "More from O'Connell St",
      links: [
        { href: "/whats-on", label: "What's On" },
        { href: "/location", label: "Opening hours and location" },
        { href: "/news/newcastle-arsenal-saturday-night-sol", label: "Newcastle v Arsenal, Saturday evening" },
      ],
      other: {
        href: "/es/noticias/rugby-sabado-sol-21-nov",
        label: "Leer en español",
        lang: "es",
      },
      alt: OWNER_PHOTOS_17NOV.pantallasFutbol.alt.en,
    },
    es: {
      title:
        "Rugby en Sol Madrid: Inglaterra–Nueva Zelanda e Irlanda–Sudáfrica, sábado 21 nov",
      description:
        "Nations Championship, sábado 21 de noviembre de 2026 — en directo en nuestras pantallas en O'Connell St, Espoz y Mina 7, junto a Puerta del Sol. Inglaterra–Nueva Zelanda 15:10, Irlanda–Sudáfrica 17:40 y cuatro partidos más. Punto de encuentro para aficionados de todos los países. Sin reservas, por orden de llegada.",
      eyebrow: "Rugby · sábado 21 de noviembre de 2026 · Puerta del Sol",
      h1: "Rugby el sábado junto a Sol: Inglaterra–Nueva Zelanda e Irlanda–Sudáfrica, en directo en nuestras pantallas",
      lead:
        "Seis partidos del Nations Championship concentran el sábado 21 de noviembre, hora de Madrid, en O'Connell St — pub irlandés en Espoz y Mina 7, junto a Puerta del Sol. Los seis van en directo en nuestras pantallas. Primero y más visibles: Inglaterra–Nueva Zelanda a las 15:10 e Irlanda–Sudáfrica a las 17:40. Un punto de encuentro para aficionados de todos los países. Sin reservas, por orden de llegada.",
      screeningName:
        "Nations Championship rugby en directo en nuestras pantallas en O'Connell St — sábado 21 de noviembre",
      sections: [
        {
          title: "Horarios del sábado (hora de Madrid)",
          list: [
            "15:10 — Inglaterra–Nueva Zelanda",
            "15:10 — Escocia–Japón",
            "17:40 — Irlanda–Sudáfrica",
            "17:40 — Italia–Fiyi",
            "21:10 — Francia–Argentina",
            "21:10 — Gales–Australia",
          ],
          note: "Horas de Madrid para planificar tarde y noche. Pueden cambiar: compruébalo el mismo día.",
        },
        {
          title: "En directo en nuestras pantallas en O'Connell St",
          paras: [
            "Los seis partidos anteriores van en directo en nuestras pantallas en O'Connell St este sábado. No citamos cadena ni operador en esta página — pregunta en barra qué señal hay al llegar.",
            "Sábado: apertura 15:00, abierto hasta las 03:30. Ven con tiempo para Inglaterra–Nueva Zelanda e Irlanda–Sudáfrica si quieres sitio cerca de una pantalla. Sin reservas, por orden de llegada.",
          ],
        },
        {
          title: "Punto de encuentro antes y después",
          paras: [
            "O'Connell St, Espoz y Mina 7, junto a Puerta del Sol, es un punto de encuentro para aficionados de todos los países — no está ligado a un solo equipo. Comparte la dirección en el chat del grupo y queda antes del bloque de las 15:10 o el doble de las 17:40. Después de los últimos saques el local sigue hasta las 03:30.",
          ],
        },
        {
          title: "Cómo llegar desde Sol",
          paras: [
            "Desde la Puerta del Sol, camina hacia el suroeste por las calles comerciales — unos dos minutos hasta Espoz y Mina 7. Metro Sol (líneas 1, 2 y 3) en la plaza.",
          ],
        },
      ],
      find: "Dónde estamos",
      dir: "Cómo llegar (Google Maps)",
      more: "Más en O'Connell St",
      links: [
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/location", label: "Horario y ubicación" },
        { href: "/es/noticias/newcastle-arsenal-sabado-sol", label: "Newcastle–Arsenal, sábado noche" },
      ],
      other: {
        href: "/news/rugby-saturday-sol-21-nov",
        label: "Read in English",
        lang: "en",
      },
      alt: OWNER_PHOTOS_17NOV.pantallasFutbol.alt.es,
    },
  },
};