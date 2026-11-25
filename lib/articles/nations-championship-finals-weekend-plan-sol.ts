import type { MatchArticleData } from "@/components/MatchNewsArticle";
import { OWNER_PHOTOS_17NOV } from "@/lib/owner-photos-17nov";

/**
 * Nations Championship Finals Weekend — day-by-day plan (when to arrive).
 * Complements /news/nations-championship-finals-twickenham-sol (hub).
 * Fixtures/kick-offs: allianzstadiumtwickenham.com (Radar evidencia-2026-11-23/twick.html,
 * help.englandrugby.com finals-day pages): GMT + 1 h = Madrid.
 * Owner 22 Nov 19:42: all six live on our screens. No channel named.
 * Published 25 Nov 2026 by the "OC eventos importantes con antelación" routine.
 */
export const NATIONS_FINALS_WEEKEND_PLAN: MatchArticleData = {
  paths: {
    en: "/news/nations-championship-finals-weekend-plan-sol",
    es: "/es/noticias/finales-nations-championship-plan-finde-sol",
  },
  published: "2026-11-25T17:30:00+01:00",
  startDate: "2026-11-27T17:40:00+01:00",
  sport: "Rugby",
  sportsEventName: "Nations Championship Finals Weekend (Allianz Stadium, Twickenham)",
  homeTeam: "France",
  awayTeam: "South Africa",
  venue: "Allianz Stadium",
  venueLocality: "Twickenham",
  interiorSrc: OWNER_PHOTOS_17NOV.pantallasFutbol.src,
  interiorPosition: OWNER_PHOTOS_17NOV.pantallasFutbol.position,
  copy: {
    en: {
      title: "Nations Championship Finals: weekend plan near Sol",
      description:
        "Fri 27–Sun 29 Nov 2026, Madrid time: when to arrive for each Twickenham finals match. All six live on our screens at O'Connell St, Espoz y Mina 7, by Sol.",
      eyebrow: "Nations Championship · Finals Weekend · plan published Wed 25 Nov 2026",
      h1: "Nations Championship Finals: your weekend plan in Madrid",
      lead:
        "Six matches, three days, one address. Here is a simple plan for the Nations Championship Finals Weekend at Twickenham — kick-offs in Madrid time, when to turn up, and where to meet if you are in Madrid from Dublin, London, Edinburgh, Paris, Cape Town, Auckland or Buenos Aires. All six matches are live on our screens at O'Connell St, Calle de Espoz y Mina 7, less than a minute from Puerta del Sol — a fans meeting point for every rugby nation.",
      screeningName: "Nations Championship Finals Weekend live on our screens at O'Connell St",
      sections: [
        {
          title: "Friday 27 November: the opening double",
          list: [
            "17:40 — Italy v Fiji (sixth-place match)",
            "21:10 — Ireland v Australia (third-place match)",
          ],
          paras: [
            "Friday doors open at 16:00, so there is time to settle in before Italy v Fiji. If your group is mainly here for Ireland v Australia, set your meeting time well before 21:10: Friday night in the centre of Madrid is busy.",
          ],
        },
        {
          title: "Saturday 28 November: England v New Zealand",
          list: [
            "14:10 — Wales v Japan (fifth-place match)",
            "17:40 — England v New Zealand (second-place match)",
          ],
          paras: [
            "England v New Zealand is the Saturday headline. Agree a meeting time with your group well before 17:40 and come early. For Wales v Japan at 14:10, check our opening hours page first.",
          ],
        },
        {
          title: "Sunday 29 November: the final",
          list: [
            "14:10 — Scotland v Argentina (fourth-place match)",
            "17:40 — France v South Africa (the final)",
          ],
          paras: [
            "Sunday doors open at 14:00, just before Scotland v Argentina. For the final, arrive well before 17:40. No reservations: first come, first served.",
          ],
        },
        {
          title: "In Madrid from abroad?",
          paras: [
            "Flying in for the weekend or living here far from home — Irish, English, Scottish, Welsh, French, South African, Kiwi, Australian, Argentine, Italian, Fijian or Japanese — O'Connell St is a fans meeting point less than a minute from Sol. Sol station (Metro lines 1, 2 and 3, and Cercanías) is the easiest landmark to send your group.",
            "Pick one meeting time per day and share the pin: Calle de Espoz y Mina 7.",
          ],
          extra: {
            lang: "fr",
            text: "Supporters français : point de rendez-vous à O'Connell St, Calle de Espoz y Mina 7, à moins d'une minute de la Puerta del Sol, pour la finale France–Afrique du Sud, dimanche 29 novembre à 17h40 (heure de Madrid).",
          },
          note:
            "Fixtures and kick-offs from allianzstadiumtwickenham.com (Twickenham time + 1 hour = Madrid time). Kick-offs can move — check on the day. We do not name a broadcaster on this page.",
        },
      ],
      find: "Getting here",
      dir: "Open directions (Google Maps)",
      more: "More",
      links: [
        { href: "/news/nations-championship-finals-twickenham-sol", label: "Nations Championship Finals: meeting point for rugby fans" },
        { href: "/whats-on", label: "What's On" },
        { href: "/location", label: "Opening hours" },
      ],
      other: {
        href: "/es/noticias/finales-nations-championship-plan-finde-sol",
        label: "Leer en español",
        lang: "es",
      },
      alt: OWNER_PHOTOS_17NOV.pantallasFutbol.alt.en,
    },
    es: {
      title: "Finales del Nations Championship: plan del finde en Sol",
      description:
        "Vie 27–dom 29 nov 2026, hora de Madrid: a qué hora llegar a cada partido de las finales de Twickenham. Los seis en directo en O'Connell St, Espoz y Mina 7, junto a Sol.",
      eyebrow: "Nations Championship · fin de semana de finales · plan publicado el mié 25 nov 2026",
      h1: "Finales del Nations Championship: tu plan del fin de semana en Madrid",
      lead:
        "Seis partidos, tres días, una dirección. Este es un plan sencillo para el fin de semana de finales del Nations Championship en Twickenham: horarios en hora de Madrid, a qué hora llegar y dónde quedar si estás en Madrid y vienes de Dublín, Londres, Edimburgo, París, Ciudad del Cabo, Auckland o Buenos Aires. Los seis partidos van en directo en nuestras pantallas en O'Connell St, Calle de Espoz y Mina 7, a menos de un minuto de Puerta del Sol: punto de encuentro para todas las selecciones.",
      screeningName: "Finales del Nations Championship en directo en nuestras pantallas en O'Connell St",
      sections: [
        {
          title: "Viernes 27 de noviembre: el doble de apertura",
          list: [
            "17:40 — Italia–Fiyi (partido por el sexto puesto)",
            "21:10 — Irlanda–Australia (partido por el tercer puesto)",
          ],
          paras: [
            "El viernes abrimos a las 16:00, así que hay margen para llegar antes de Italia–Fiyi. Si tu grupo viene sobre todo por Irlanda–Australia, fija la hora de quedada bastante antes de las 21:10: el viernes por la noche el centro de Madrid está muy animado.",
          ],
        },
        {
          title: "Sábado 28 de noviembre: Inglaterra–Nueva Zelanda",
          list: [
            "14:10 — Gales–Japón (partido por el quinto puesto)",
            "17:40 — Inglaterra–Nueva Zelanda (partido por el segundo puesto)",
          ],
          paras: [
            "Inglaterra–Nueva Zelanda es el plato fuerte del sábado. Quedad con tiempo, bastante antes de las 17:40. Para Gales–Japón a las 14:10, consulta antes nuestra página de horario.",
          ],
        },
        {
          title: "Domingo 29 de noviembre: la final",
          list: [
            "14:10 — Escocia–Argentina (partido por el cuarto puesto)",
            "17:40 — Francia–Sudáfrica (la final)",
          ],
          paras: [
            "El domingo abrimos a las 14:00, justo antes de Escocia–Argentina. Para la final, llega con margen antes de las 17:40. Sin reservas: por orden de llegada.",
          ],
        },
        {
          title: "¿Vienes de fuera?",
          paras: [
            "Si vienes a Madrid a pasar el fin de semana o vives aquí lejos de casa — irlandeses, ingleses, escoceses, galeses, franceses, sudafricanos, neozelandeses, australianos, argentinos, italianos, fiyianos o japoneses —, O'Connell St es punto de encuentro a menos de un minuto de Sol. La estación de Sol (Metro líneas 1, 2 y 3, y Cercanías) es la referencia más fácil para tu grupo.",
            "Fijad una hora por día y compartid la dirección: Calle de Espoz y Mina 7.",
          ],
          extra: {
            lang: "fr",
            text: "Supporters français : point de rendez-vous à O'Connell St, Calle de Espoz y Mina 7, à moins d'une minute de la Puerta del Sol, pour la finale France–Afrique du Sud, dimanche 29 novembre à 17h40 (heure de Madrid).",
          },
          note:
            "Cruces y horarios según allianzstadiumtwickenham.com (hora de Twickenham + 1 hora = hora de Madrid). Pueden cambiar: compruébalo el mismo día. No citamos cadena en esta página.",
        },
      ],
      find: "Cómo llegar",
      dir: "Cómo llegar (Google Maps)",
      more: "Más",
      links: [
        { href: "/es/noticias/nations-championship-finals-fin-de-semana-sol", label: "Finales del Nations Championship: punto de encuentro para el rugby" },
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/location", label: "Horario" },
      ],
      other: {
        href: "/news/nations-championship-finals-weekend-plan-sol",
        label: "Read in English",
        lang: "en",
      },
      alt: OWNER_PHOTOS_17NOV.pantallasFutbol.alt.es,
    },
  },
};
