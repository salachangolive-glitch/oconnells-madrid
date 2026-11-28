import type { MatchArticleData } from "@/components/MatchNewsArticle";
import { OWNER_PHOTOS_17NOV } from "@/lib/owner-photos-17nov";
import { ADDRESS } from "@/lib/venue";

/**
 * Scotland v Argentina — Nations Championship Finals Weekend, Sun 29 Nov 2026 14:10 Madrid.
 * Angle: Scottish and Argentine fans' meeting point for the Sunday opener, then how to
 * plan the rest of finals day (France v South Africa 17:40) without losing the group.
 * Complements the hub, the weekend plan and the France v South Africa final article.
 * Fixture/kick-off: allianzstadiumtwickenham.com (Sun 29 13:10 GMT = 14:10 Madrid),
 * re-verified by Radar; final 16:40 GMT = 17:40 Madrid.
 * Owner 22 Nov 19:42: all six finals matches live on our screens. No channel named.
 * Sunday hours 14:00–03:00 (hub + RugbyFinalsWeekendBanner, commit 628ff9c).
 * Published 28 Nov 2026 by the "OC eventos importantes con antelación" routine.
 */
export const SCOTLAND_ARGENTINA_RUGBY_SUNDAY: MatchArticleData = {
  paths: {
    en: "/news/scotland-argentina-rugby-sunday-sol",
    es: "/es/noticias/escocia-argentina-rugby-domingo-sol",
  },
  published: "2026-11-28T10:30:00+01:00",
  startDate: "2026-11-29T14:10:00+01:00",
  sport: "Rugby",
  sportsEventName: "Nations Championship Finals Weekend: Scotland v Argentina (Allianz Stadium, Twickenham)",
  homeTeam: "Scotland",
  awayTeam: "Argentina",
  venue: "Allianz Stadium",
  venueLocality: "Twickenham",
  interiorSrc: OWNER_PHOTOS_17NOV.ambientePartido.src,
  interiorPosition: OWNER_PHOTOS_17NOV.ambientePartido.position,
  meetingFold: {
    en: {
      address: ADDRESS.full,
      mapsLabel: "Open directions (Google Maps)",
      fcfs: "No reservations — first come, first served.",
      solProximity: "Less than a minute from Puerta del Sol. Sunday doors open at 14:00.",
    },
    es: {
      address: ADDRESS.full,
      mapsLabel: "Cómo llegar (Google Maps)",
      fcfs: "Sin reservas: por orden de llegada.",
      solProximity: "A menos de un minuto de la Puerta del Sol. El domingo abrimos a las 14:00.",
    },
  },
  copy: {
    en: {
      title: "Scotland v Argentina rugby: Sunday 14:10 near Sol",
      description:
        "Sun 29 Nov 2026, 14:10 Madrid time: Scotland v Argentina, Nations Championship Finals Weekend, live on our screens at O'Connell St, Espoz y Mina 7, by Sol. Then the final at 17:40.",
      eyebrow: "Nations Championship Finals Weekend · Sunday 29 Nov · published Sat 28 Nov 2026",
      h1: "Scotland v Argentina on Sunday: a meeting point for both sets of fans, then the final",
      lead:
        "Finals day at Twickenham starts with Scotland against Argentina, kick-off 14:10 Madrid time on Sunday 29 November. Scottish and Argentine supporters in Madrid can meet at O'Connell St, Calle de Espoz y Mina 7, less than a minute from Sol. The match is live on our screens, and France v South Africa, the final, follows at 17:40.",
      screeningName: "Scotland v Argentina live on our screens at O'Connell St",
      sections: [
        {
          title: "Sunday at a glance (Madrid time)",
          list: [
            "14:00 — doors open at O'Connell St",
            "14:10 — Scotland v Argentina",
            "17:40 — France v South Africa, the final",
          ],
          paras: [
            "Doors open just ten minutes before the first kick-off, so the simple plan is to arrive at opening time rather than at 14:10.",
          ],
        },
        {
          title: "Scots and Pumas, one address",
          paras: [
            "Whether you flew in for finals weekend or live in Madrid, Sunday lunchtime is the moment to get your group in one place. Send everyone the same pin — Calle de Espoz y Mina 7 — and use Puerta del Sol as the landmark: Sol station (Metro lines 1, 2 and 3, and Cercanías) is right there.",
            "Scotland shirts, Pumas shirts and neutrals all share the same room. A Sunday afternoon of rugby is easier to enjoy when nobody is still searching for the door at kick-off.",
          ],
        },
        {
          title: "Between the two matches",
          paras: [
            "The two kick-offs are three and a half hours apart. If you only came for Scotland v Argentina, the centre of Madrid is on the doorstep. If you are staying for the final, keep your spot in mind: it is the match everyone in the room wants to see, and there are no reservations.",
            "Football fans will be in too: Deportivo v Barcelona (16:15) and Arsenal v Manchester City (17:30) are also on Sunday's list, and the staff set which game goes on which screen.",
          ],
          extra: {
            lang: "es-AR",
            text: "Hinchas de Los Pumas: Escocia–Argentina, domingo 29 de noviembre a las 14:10 (hora de Madrid), en directo en nuestras pantallas en O'Connell St, Calle de Espoz y Mina 7, a menos de un minuto de la Puerta del Sol. Abrimos a las 14:00; sin reservas.",
          },
        },
        {
          title: "After the final",
          paras: [
            "On Sunday we are open from 14:00 until 03:00, so there is no rush once the final whistle goes at Twickenham. Same door before, between and after.",
          ],
          note:
            "Fixtures and kick-offs from allianzstadiumtwickenham.com (Twickenham time + 1 hour = Madrid time). Kick-offs can move — check on the day. We do not name a broadcaster on this page.",
        },
      ],
      find: "Getting here",
      dir: "Open directions (Google Maps)",
      more: "More",
      links: [
        { href: "/news/france-south-africa-rugby-final-sunday-sol", label: "The final: France v South Africa, Sunday 17:40" },
        { href: "/news/nations-championship-finals-weekend-plan-sol", label: "Weekend plan: when to arrive for each match" },
        { href: "/news/nations-championship-finals-twickenham-sol", label: "Nations Championship Finals: meeting point for rugby fans" },
        { href: "/whats-on", label: "What's On" },
        { href: "/location", label: "Opening hours" },
      ],
      other: {
        href: "/es/noticias/escocia-argentina-rugby-domingo-sol",
        label: "Leer en español",
        lang: "es",
      },
      alt: OWNER_PHOTOS_17NOV.ambientePartido.alt.en,
    },
    es: {
      title: "Rugby Escocia–Argentina: domingo 14:10 junto a Sol",
      description:
        "Dom 29 nov 2026, 14:10 hora de Madrid: Escocia–Argentina, finales del Nations Championship, en directo en O'Connell St, Espoz y Mina 7, junto a Sol. Y a las 17:40, la final.",
      eyebrow: "Finales del Nations Championship · domingo 29 nov · publicado el sáb 28 nov 2026",
      h1: "Escocia–Argentina el domingo: punto de encuentro para las dos aficiones, y después la final",
      lead:
        "El domingo de finales en Twickenham empieza con Escocia contra Argentina, a las 14:10 hora de Madrid, el 29 de noviembre. Si eres hincha escocés o argentino y estás en Madrid, tu punto de encuentro es O'Connell St, Calle de Espoz y Mina 7, a menos de un minuto de Sol. El partido va en directo en nuestras pantallas y a las 17:40 llega la final, Francia–Sudáfrica.",
      screeningName: "Escocia–Argentina en directo en nuestras pantallas en O'Connell St",
      sections: [
        {
          title: "El domingo de un vistazo (hora de Madrid)",
          list: [
            "14:00 — abrimos en O'Connell St",
            "14:10 — Escocia–Argentina",
            "17:40 — Francia–Sudáfrica, la final",
          ],
          paras: [
            "Abrimos solo diez minutos antes del primer partido, así que lo más sencillo es venir a la hora de apertura y no a las 14:10.",
          ],
        },
        {
          title: "Escoceses y Pumas, una sola dirección",
          paras: [
            "Tanto si has venido para el fin de semana de finales como si vives en Madrid, el domingo a mediodía es el momento de juntar al grupo. Compartid la misma ubicación — Calle de Espoz y Mina 7 — y usad la Puerta del Sol como referencia: la estación de Sol (Metro líneas 1, 2 y 3, y Cercanías) está al lado.",
            "Camisetas de Escocia, de Los Pumas y neutrales comparten sala. Una tarde de rugby se disfruta más si nadie sigue buscando la puerta cuando empieza el partido.",
          ],
        },
        {
          title: "Entre los dos partidos",
          paras: [
            "Entre un saque y otro hay tres horas y media. Si solo vienes al Escocia–Argentina, tienes el centro de Madrid a la puerta. Si te quedas a la final, tenlo en cuenta: es el partido que toda la sala quiere ver y no hay reservas.",
            "También habrá fútbol: el Deportivo–Barcelona (16:15) y el Arsenal–Manchester City (17:30) están en la lista del domingo, y el equipo reparte qué partido va en cada pantalla.",
          ],
          extra: {
            lang: "en",
            text: "Scotland fans: Scotland v Argentina, Sunday 29 November at 14:10 Madrid time, live on our screens at O'Connell St, Calle de Espoz y Mina 7, less than a minute from Puerta del Sol. Doors at 14:00; no reservations.",
          },
        },
        {
          title: "Después de la final",
          paras: [
            "El domingo abrimos de 14:00 a 03:00, así que no hay prisa cuando suene el pitido final en Twickenham. La misma puerta antes, entre partidos y después.",
          ],
          note:
            "Cruces y horarios según allianzstadiumtwickenham.com (hora de Twickenham + 1 hora = hora de Madrid). Pueden cambiar: compruébalo el mismo día. No citamos cadena en esta página.",
        },
      ],
      find: "Cómo llegar",
      dir: "Cómo llegar (Google Maps)",
      more: "Más",
      links: [
        { href: "/es/noticias/final-rugby-francia-sudafrica-domingo-sol", label: "La final: Francia–Sudáfrica, domingo 17:40" },
        { href: "/es/noticias/finales-nations-championship-plan-finde-sol", label: "Plan del finde: a qué hora llegar a cada partido" },
        { href: "/es/noticias/nations-championship-finals-fin-de-semana-sol", label: "Finales del Nations Championship: punto de encuentro para el rugby" },
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/location", label: "Horario" },
      ],
      other: {
        href: "/news/scotland-argentina-rugby-sunday-sol",
        label: "Read in English",
        lang: "en",
      },
      alt: OWNER_PHOTOS_17NOV.ambientePartido.alt.es,
    },
  },
};
