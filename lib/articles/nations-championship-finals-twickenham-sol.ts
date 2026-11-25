import type { MatchArticleData } from "@/components/MatchNewsArticle";
import { SAT_28_NOV_EXCEPTIONAL_OPEN } from "@/lib/hours-exceptions";
import { OWNER_PHOTOS_17NOV } from "@/lib/owner-photos-17nov";
import { ADDRESS } from "@/lib/venue";

/**
 * Nations Championship Finals Weekend — Allianz Stadium, Twickenham.
 * Fri 27 – Sun 29 Nov 2026, Madrid time (allianzstadiumtwickenham.com).
 * Owner 22 Nov 19:43: neutral H1/title/meta (meeting point for rugby fans);
 * all six live on our screens; meeting point before/after at O'Connell St.
 */
export const NATIONS_FINALS_TWICKENHAM: MatchArticleData = {
  paths: {
    en: "/news/nations-championship-finals-twickenham-sol",
    es: "/es/noticias/nations-championship-finals-fin-de-semana-sol",
  },
  published: "2026-11-25T19:10:00+01:00",
  startDate: "2026-11-29T17:40:00+01:00",
  sport: "Rugby",
  sportsEventName:
    "France v South Africa — Nations Championship final (Finals Weekend)",
  homeTeam: "France",
  awayTeam: "South Africa",
  venue: "Allianz Stadium",
  venueLocality: "Twickenham",
  showSat28NovNotice: true,
  interiorSrc: OWNER_PHOTOS_17NOV.pantallasFutbol.src,
  interiorPosition: OWNER_PHOTOS_17NOV.pantallasFutbol.position,
  meetingFold: {
    en: {
      address: ADDRESS.full,
      mapsLabel: "Open directions (Google Maps)",
      fcfs: "No reservations — first come, first served.",
      solProximity: "Less than a minute on foot from Puerta del Sol.",
    },
    es: {
      address: ADDRESS.full,
      mapsLabel: "Cómo llegar",
      fcfs: "Por orden de llegada. Sin reservas.",
      solProximity: "A menos de un minuto de Sol (Puerta del Sol).",
    },
  },
  copy: {
    en: {
      title: "Meeting point for rugby fans in Madrid",
      description:
        "Nations Championship Finals Weekend, Twickenham, 27–29 November 2026, Madrid time. Meeting point before and after at O'Connell St, Espoz y Mina 7 near Puerta del Sol. All six matches live on our screens. Every rugby nation welcome; no channel named.",
      eyebrow:
        "Nations Championship · Finals Weekend · Fri 27 – Sun 29 Nov 2026",
      h1: "Meeting point for rugby fans in Madrid",
      lead:
        "The Nations Championship ends at Twickenham on Sunday 29 November at 17:40 Madrid time with France v South Africa in the final — the headline window for groups in the centre. All six Finals Weekend matches are live on our screens at O'Connell St, Calle de Espoz y Mina 7, a couple of minutes from Puerta del Sol: meeting point before kick-off, debrief after the final. Dubliners and O'Reilly's are sibling Irish pubs the same walk from Sol if friends name another door; this page is O'Connell St only. No channel named here.",
      screeningName:
        "Nations Championship Finals live on our screens at O'Connell St",
      sections: [
        {
          title: "All six kick-offs (Madrid time)",
          list: [
            "Sunday 29 November, 17:40 — France v South Africa (final)",
            "Sunday 29 November, 14:10 — Scotland v Argentina",
            "Saturday 28 November, 17:40 — England v New Zealand",
            "Saturday 28 November, 14:10 — Wales v Japan",
            "Friday 27 November, 21:10 — Ireland v Australia",
            "Friday 27 November, 17:40 — Italy v Fiji",
          ],
          note:
            "Times from allianzstadiumtwickenham.com (read 22 November 2026). Kick-offs can move — check on the day. We do not name a broadcaster on this page.",
        },
        {
          title: "Live on our screens at O'Connell St",
          paras: [
            "Owner confirmed 22 November: every Finals Weekend tie is live on our screens at O'Connell St. Ask at the bar which screen when you arrive; no reservations, first come first served.",
            "Every jersey and every flag is welcome at the same address — a meeting point in the centre, not a seat guarantee.",
          ],
        },
        {
          title: "Before and after",
          paras: [
            `Meet here before the Friday night double-header or the Saturday afternoon pair, then come back after Scotland v Argentina and the France v South Africa final on Sunday. This weekend: Friday 16:00–03:30; Saturday 28 November we open exceptionally at ${SAT_28_NOV_EXCEPTIONAL_OPEN} (not the usual 15:00) until 03:30; Sunday 14:00–03:00.`,
          ],
        },
        {
          title: "Other doors near Sol",
          paras: [
            "Some groups pin Dubliners or O'Reilly's — independent venues we do not run — then regroup at Espoz y Mina 7. Pick one pin for the weekend and stick to it.",
          ],
        },
      ],
      find: "Getting here",
      dir: "Open directions (Google Maps)",
      more: "More",
      links: [
        { href: "/news/nations-championship-finals-weekend-plan-sol", label: "Weekend plan: when to arrive for each match" },
        { href: "/whats-on", label: "What's On — all six listed" },
        { href: "/location", label: "Opening hours" },
      ],
      other: {
        href: "/es/noticias/nations-championship-finals-fin-de-semana-sol",
        label: "Leer en español",
        lang: "es",
      },
      alt: OWNER_PHOTOS_17NOV.pantallasFutbol.alt.en,
    },
    es: {
      title: "Punto de encuentro en Madrid para los aficionados al rugby",
      description:
        "Fin de semana de finales del Nations Championship, Twickenham, 27–29 nov 2026, hora de Madrid. Punto de encuentro antes y después en O'Connell St, Espoz y Mina 7 junto a Puerta del Sol. Los seis en directo en nuestras pantallas. Todas las selecciones bienvenidas; sin cadena.",
      eyebrow:
        "Nations Championship · fin de semana de finales · vie 27 – dom 29 nov 2026",
      h1: "Punto de encuentro en Madrid para los aficionados al rugby",
      lead:
        "El Nations Championship cierra en Twickenham el domingo 29 de noviembre a las 17:40, hora de Madrid, con la final Francia–Sudáfrica — la ventana que muchos grupos fijan en el centro. Los seis partidos del fin de semana de finales van en directo en nuestras pantallas en O'Connell St, Calle de Espoz y Mina 7, a dos minutos de Puerta del Sol: punto de encuentro antes del saque y charla después del pitido final. Dubliners y O'Reilly's son pubs hermanos en la misma zona si el grupo nombra otra puerta; esta página es solo O'Connell St. Sin cadena en esta página.",
      screeningName:
        "Finales del Nations Championship en directo en nuestras pantallas en O'Connell St",
      sections: [
        {
          title: "Los seis horarios (hora de Madrid)",
          list: [
            "Domingo 29 de noviembre, 17:40 — Francia–Sudáfrica (final)",
            "Domingo 29 de noviembre, 14:10 — Escocia–Argentina",
            "Sábado 28 de noviembre, 17:40 — Inglaterra–Nueva Zelanda",
            "Sábado 28 de noviembre, 14:10 — Gales–Japón",
            "Viernes 27 de noviembre, 21:10 — Irlanda–Australia",
            "Viernes 27 de noviembre, 17:40 — Italia–Fiyi",
          ],
          note:
            "Horas según allianzstadiumtwickenham.com (lectura 22 nov 2026). Pueden cambiar — comprueba el día. No citamos cadena.",
        },
        {
          title: "En directo en nuestras pantallas en O'Connell St",
          paras: [
            "Confirmado 22 de noviembre: los seis partidos del fin de semana de finales van en directo en nuestras pantallas en O'Connell St. Pregunta en barra al llegar; sin reservas, por orden de llegada.",
            "Todas las camisetas y banderas son bienvenidas en la misma dirección — punto de encuentro en el centro.",
          ],
        },
        {
          title: "Antes y después",
          paras: [
            `Queda aquí antes del doble del viernes o del sábado por la tarde, y vuelve después de Escocia–Argentina y la final Francia–Sudáfrica del domingo. Este fin de semana: viernes 16:00–03:30; sábado 28 de noviembre abrimos excepcionalmente a las ${SAT_28_NOV_EXCEPTIONAL_OPEN} (no a las 15:00 habituales) hasta las 03:30; domingo 14:00–03:00.`,
          ],
        },
        {
          title: "Otras puertas junto a Sol",
          paras: [
            "Algunos grupos fijan Dubliners u O'Reilly's — locales independientes que no gestionamos — y luego vuelven a Espoz y Mina 7. Un solo pin para el fin de semana.",
          ],
        },
      ],
      find: "Cómo llegar",
      dir: "Cómo llegar (Google Maps)",
      more: "Más",
      links: [
        { href: "/es/noticias/finales-nations-championship-plan-finde-sol", label: "Plan del finde: a qué hora llegar a cada partido" },
        { href: "/es/whats-on", label: "Agenda — los seis horarios" },
        { href: "/es/location", label: "Horario" },
      ],
      other: {
        href: "/news/nations-championship-finals-twickenham-sol",
        label: "Read in English",
        lang: "en",
      },
      alt: OWNER_PHOTOS_17NOV.pantallasFutbol.alt.es,
    },
  },
};