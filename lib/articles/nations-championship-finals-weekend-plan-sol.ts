import type { MatchArticleData } from "@/components/MatchNewsArticle";
import { OWNER_PHOTOS_17NOV } from "@/lib/owner-photos-17nov";
import { ADDRESS, GBP_MAPS_CID_URL } from "@/lib/venue";

/**
 * Nations Championship Finals Weekend — day-by-day plan (when to arrive).
 * Complements /news/nations-championship-finals-twickenham-sol (hub).
 * Fixtures/kick-offs: allianzstadiumtwickenham.com (Radar evidencia-2026-11-23/twick.html,
 * help.englandrugby.com finals-day pages): GMT + 1 h = Madrid.
 * Owner 22 Nov 19:42: all six live on our screens. No channel named.
 * Published 25 Nov 2026 by the "OC eventos importantes con antelación" routine.
 * Strengthened Fri 27 Nov 2026 (daily 08:00): meetingFold → GBP CID, Sat 28 doors 14:00,
 * weekend football section. Kick-offs re-read 27 Nov: laliga.com match pages
 * (Real Madrid–Alavés 2026-11-28T20:00Z, Elche–Atlético 2026-11-28T17:30Z,
 * Deportivo–Barcelona 2026-11-29T15:15Z) and premierleague.com fixture 129033
 * (Arsenal–Man City Sun 29 Nov 16:30 GMT).
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
  showSat28NovNotice: true,
  meetingFold: {
    en: {
      address: ADDRESS.full,
      mapsLabel: "Open directions (Google Maps)",
      fcfs: "No reservations — first come, first served.",
      solProximity: "Next to Puerta del Sol: rugby and football live on our screens all weekend.",
      mapsUrl: GBP_MAPS_CID_URL,
    },
    es: {
      address: ADDRESS.full,
      mapsLabel: "Cómo llegar",
      fcfs: "Por orden de llegada. Sin reservas.",
      solProximity: "Junto a la Puerta del Sol: rugby y fútbol en directo en nuestras pantallas todo el fin de semana.",
      mapsUrl: GBP_MAPS_CID_URL,
    },
  },
  copy: {
    en: {
      title: "Nations Championship Finals: weekend plan near Sol",
      description:
        "Fri 27–Sun 29 Nov 2026, Madrid time: when to arrive for each Twickenham finals match. All six live on our screens at O'Connell St, Espoz y Mina 7, by Sol.",
      eyebrow: "Nations Championship · Finals Weekend · plan published Wed 25 Nov 2026 · updated Fri 27 Nov",
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
            "England v New Zealand is the Saturday headline. Agree a meeting time with your group well before 17:40 and come early. For Wales v Japan at 14:10: on Saturday 28 November we open exceptionally at 14:00.",
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
          title: "The weekend's main football, also live",
          list: [
            "Saturday 18:30 — Elche v Atlético de Madrid (LaLiga)",
            "Saturday 21:00 — Real Madrid v Alavés (LaLiga, Bernabéu)",
            "Sunday 16:15 — Deportivo v Barcelona (LaLiga)",
            "Sunday 17:30 — Arsenal v Manchester City (Premier League)",
          ],
          paras: [
            "Rugby and football share the room this weekend. After England v New Zealand on Saturday, stay for Atlético and then Real Madrid. On Sunday, Arsenal v Manchester City kicks off ten minutes before the rugby final: both are live on our screens, and the staff set which game goes on which screen.",
            "The full list, Madrid time, is on What's On.",
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
        { href: "/news/ireland-australia-rugby-friday-night-sol", label: "Ireland v Australia: Friday night meeting point" },
        { href: "/news/france-south-africa-rugby-final-sunday-sol", label: "The final: France v South Africa, Sunday" },
        { href: "/news/scotland-argentina-rugby-sunday-sol", label: "Scotland v Argentina: Sunday 14:10, then the final" },
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
      eyebrow: "Nations Championship · fin de semana de finales · plan publicado el mié 25 nov 2026 · actualizado el vie 27 nov",
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
            "Inglaterra–Nueva Zelanda es el plato fuerte del sábado. Quedad con tiempo, bastante antes de las 17:40. Para Gales–Japón a las 14:10: el sábado 28 de noviembre abrimos de forma excepcional a las 14:00.",
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
          title: "El fútbol grande del finde, también en directo",
          list: [
            "Sábado 18:30 — Elche–Atlético de Madrid (LaLiga)",
            "Sábado 21:00 — Real Madrid–Alavés (LaLiga, Bernabéu)",
            "Domingo 16:15 — Deportivo–Barcelona (LaLiga)",
            "Domingo 17:30 — Arsenal–Manchester City (Premier League)",
          ],
          paras: [
            "Este fin de semana el rugby y el fútbol comparten sala. Después del Inglaterra–Nueva Zelanda del sábado, quédate al Atlético y luego al Real Madrid. El domingo, el Arsenal–Manchester City empieza diez minutos antes de la final de rugby: los dos van en directo en nuestras pantallas y el equipo reparte qué partido va en cada pantalla.",
            "La lista completa, en hora de Madrid, está en la Agenda.",
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
        { href: "/es/noticias/irlanda-australia-rugby-viernes-noche-sol", label: "Irlanda–Australia: punto de encuentro el viernes" },
        { href: "/es/noticias/final-rugby-francia-sudafrica-domingo-sol", label: "La final: Francia–Sudáfrica, domingo" },
        { href: "/es/noticias/escocia-argentina-rugby-domingo-sol", label: "Escocia–Argentina: domingo 14:10 y después la final" },
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
