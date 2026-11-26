import type { MatchArticleData } from "@/components/MatchNewsArticle";
import { OWNER_PHOTOS_17NOV } from "@/lib/owner-photos-17nov";

/**
 * Ireland v Australia — Nations Championship Finals third-place match, Fri 27 Nov 2026 21:10 Madrid.
 * Angle: Irish and Australian fans' meeting point in Madrid, Friday night before/after.
 * Complements the hub (/news/nations-championship-finals-twickenham-sol) and the weekend plan.
 * Fixture/kick-off: allianzstadiumtwickenham.com + help.englandrugby.com (Radar,
 * FUENTES-PARTIDOS-COMPARTIDAS.md): 20:10 GMT = 21:10 Madrid.
 * Owner 22 Nov 19:42: all six finals matches live on our screens. No channel named.
 * Published 26 Nov 2026 by the "OC eventos importantes con antelación" routine.
 */
export const IRELAND_AUSTRALIA_RUGBY_FRIDAY: MatchArticleData = {
  paths: {
    en: "/news/ireland-australia-rugby-friday-night-sol",
    es: "/es/noticias/irlanda-australia-rugby-viernes-noche-sol",
  },
  published: "2026-11-26T10:20:00+01:00",
  startDate: "2026-11-27T21:10:00+01:00",
  sport: "Rugby",
  sportsEventName: "Nations Championship Finals — third-place match: Ireland v Australia (Allianz Stadium, Twickenham)",
  homeTeam: "Ireland",
  awayTeam: "Australia",
  venue: "Allianz Stadium",
  venueLocality: "Twickenham",
  interiorSrc: OWNER_PHOTOS_17NOV.pantallasFutbol.src,
  interiorPosition: OWNER_PHOTOS_17NOV.pantallasFutbol.position,
  copy: {
    en: {
      title: "Ireland v Australia rugby: Friday night near Sol",
      description:
        "Fri 27 Nov 2026, 21:10 Madrid time: Ireland v Australia, Nations Championship Finals third-place match, live on our screens at O'Connell St, Espoz y Mina 7, by Sol.",
      eyebrow: "Nations Championship Finals · third-place match · published Thu 26 Nov 2026",
      h1: "Ireland v Australia: the Friday-night rugby meeting point in Madrid",
      lead:
        "Ireland and Australia meet at Twickenham on Friday 27 November for third place in the Nations Championship Finals, kick-off 21:10 Madrid time. If you are Irish or Australian and in Madrid that night — on a weekend trip, studying, or living here — O'Connell St at Calle de Espoz y Mina 7 is your fans' meeting point, less than a minute from Sol. The match is live on our screens.",
      screeningName: "Ireland v Australia live on our screens at O'Connell St",
      sections: [
        {
          title: "The match in Madrid time",
          list: [
            "Friday 27 November 2026",
            "21:10 — Ireland v Australia (third-place match, Allianz Stadium, Twickenham)",
            "Earlier the same evening: 17:40 — Italy v Fiji",
          ],
          paras: [
            "A late kick-off by Madrid standards, which suits a Friday: finish work, have dinner, and still be in place well before the anthems.",
          ],
        },
        {
          title: "Before the game: one place to gather",
          paras: [
            "Friday doors open at 16:00. Some will come for Italy v Fiji first and stay on; others will arrive after dinner. Either way, agree one meeting time with your group, well before 21:10 — Friday night around Sol is busy and groups split up easily.",
            "Green shirts and gold shirts are both welcome. There is no Irish-only or Australian-only corner: it is one room, two sets of supporters, and the match on the screens.",
          ],
        },
        {
          title: "After the final whistle",
          paras: [
            "Whatever the result, Friday night in the centre of Madrid is only starting when the match ends. O'Connell St is less than a minute from Sol, so it works as a point to regroup with friends who arrive late, or as the place to talk the game through before heading out.",
          ],
        },
        {
          title: "Finding us",
          paras: [
            "Send your group to Puerta del Sol (Metro lines 1, 2 and 3, and Cercanías), then Calle de Espoz y Mina 7. No reservations: first come, first served.",
          ],
          note:
            "Fixture and kick-off from allianzstadiumtwickenham.com (Twickenham time + 1 hour = Madrid time). Kick-offs can move — check on the day. We do not name a broadcaster on this page.",
        },
      ],
      find: "Getting here",
      dir: "Open directions (Google Maps)",
      more: "More",
      links: [
        { href: "/news/nations-championship-finals-twickenham-sol", label: "Nations Championship Finals: meeting point for rugby fans" },
        { href: "/news/nations-championship-finals-weekend-plan-sol", label: "Weekend plan: when to arrive for each match" },
        { href: "/news/france-south-africa-rugby-final-sunday-sol", label: "The final: France v South Africa, Sunday 17:40" },
        { href: "/whats-on", label: "What's On" },
        { href: "/location", label: "Opening hours" },
      ],
      other: {
        href: "/es/noticias/irlanda-australia-rugby-viernes-noche-sol",
        label: "Leer en español",
        lang: "es",
      },
      alt: OWNER_PHOTOS_17NOV.pantallasFutbol.alt.en,
    },
    es: {
      title: "Rugby Irlanda–Australia: viernes noche junto a Sol",
      description:
        "Vie 27 nov 2026, 21:10 hora de Madrid: Irlanda–Australia, partido por el tercer puesto de las finales del Nations Championship, en directo en O'Connell St, Espoz y Mina 7, junto a Sol.",
      eyebrow: "Finales del Nations Championship · tercer puesto · publicado el jue 26 nov 2026",
      h1: "Irlanda–Australia: el punto de encuentro del rugby el viernes por la noche en Madrid",
      lead:
        "Irlanda y Australia se juegan el tercer puesto de las finales del Nations Championship en Twickenham el viernes 27 de noviembre, a las 21:10 hora de Madrid. Si eres irlandés o australiano y estás en Madrid esa noche — de escapada, de Erasmus o porque vives aquí —, O'Connell St, en la Calle de Espoz y Mina 7, es tu punto de encuentro, a menos de un minuto de Sol. El partido va en directo en nuestras pantallas.",
      screeningName: "Irlanda–Australia en directo en nuestras pantallas en O'Connell St",
      sections: [
        {
          title: "El partido en hora de Madrid",
          list: [
            "Viernes 27 de noviembre de 2026",
            "21:10 — Irlanda–Australia (tercer puesto, Allianz Stadium, Twickenham)",
            "Antes, esa misma tarde: 17:40 — Italia–Fiyi",
          ],
          paras: [
            "Una hora tardía para un partido de rugby, ideal para un viernes: sales del trabajo, cenas y llegas con tiempo antes de los himnos.",
          ],
        },
        {
          title: "Antes del partido: un solo sitio para reunirse",
          paras: [
            "El viernes abrimos a las 16:00. Hay quien vendrá a ver primero Italia–Fiyi y se quedará; otros llegarán después de cenar. En cualquier caso, fijad una sola hora de quedada, bastante antes de las 21:10: el viernes por la noche la zona de Sol está muy concurrida y es fácil que el grupo se disperse.",
            "Camisetas verdes y doradas, todas bienvenidas. No hay rincón solo para irlandeses ni solo para australianos: una sala, dos aficiones y el partido en las pantallas.",
          ],
        },
        {
          title: "Después del pitido final",
          paras: [
            "Gane quien gane, el viernes por la noche en el centro de Madrid apenas empieza cuando acaba el partido. O'Connell St está a menos de un minuto de Sol: sirve para reagruparse con quien llegue tarde o para comentar el partido antes de seguir la noche.",
          ],
        },
        {
          title: "Cómo encontrarnos",
          paras: [
            "Que tu grupo vaya a la Puerta del Sol (Metro líneas 1, 2 y 3, y Cercanías) y de ahí a la Calle de Espoz y Mina 7. Sin reservas: por orden de llegada.",
          ],
          note:
            "Cruce y horario según allianzstadiumtwickenham.com (hora de Twickenham + 1 hora = hora de Madrid). Pueden cambiar: compruébalo el mismo día. No citamos cadena en esta página.",
        },
      ],
      find: "Cómo llegar",
      dir: "Cómo llegar (Google Maps)",
      more: "Más",
      links: [
        { href: "/es/noticias/nations-championship-finals-fin-de-semana-sol", label: "Finales del Nations Championship: punto de encuentro para el rugby" },
        { href: "/es/noticias/finales-nations-championship-plan-finde-sol", label: "Plan del finde: a qué hora llegar a cada partido" },
        { href: "/es/noticias/final-rugby-francia-sudafrica-domingo-sol", label: "La final: Francia–Sudáfrica, domingo 17:40" },
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/location", label: "Horario" },
      ],
      other: {
        href: "/news/ireland-australia-rugby-friday-night-sol",
        label: "Read in English",
        lang: "en",
      },
      alt: OWNER_PHOTOS_17NOV.pantallasFutbol.alt.es,
    },
  },
};
