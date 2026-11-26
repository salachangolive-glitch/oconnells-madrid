import type { MatchArticleData } from "@/components/MatchNewsArticle";
import { OWNER_PHOTOS_17NOV } from "@/lib/owner-photos-17nov";

/**
 * France v South Africa — Nations Championship Final, Sun 29 Nov 2026 17:40 Madrid.
 * Angle: French and South African fans' meeting point in Madrid for the final.
 * Complements the hub (/news/nations-championship-finals-twickenham-sol) and the weekend plan.
 * Fixture/kick-off: allianzstadiumtwickenham.com + help.englandrugby.com (Radar,
 * FUENTES-PARTIDOS-COMPARTIDAS.md): 16:40 GMT = 17:40 Madrid.
 * Owner 22 Nov 19:42: all six finals matches live on our screens. No channel named.
 * No /fr route on the site: FR line only as an inline `extra` block (same as the weekend plan).
 * Published 26 Nov 2026 by the "OC eventos importantes con antelación" routine.
 */
export const FRANCE_SOUTH_AFRICA_RUGBY_FINAL: MatchArticleData = {
  paths: {
    en: "/news/france-south-africa-rugby-final-sunday-sol",
    es: "/es/noticias/final-rugby-francia-sudafrica-domingo-sol",
  },
  published: "2026-11-26T10:25:00+01:00",
  startDate: "2026-11-29T17:40:00+01:00",
  sport: "Rugby",
  sportsEventName: "Nations Championship Final: France v South Africa (Allianz Stadium, Twickenham)",
  homeTeam: "France",
  awayTeam: "South Africa",
  venue: "Allianz Stadium",
  venueLocality: "Twickenham",
  interiorSrc: OWNER_PHOTOS_17NOV.pantallasFutbol.src,
  interiorPosition: OWNER_PHOTOS_17NOV.pantallasFutbol.position,
  copy: {
    en: {
      title: "France v South Africa rugby final: Sunday near Sol",
      description:
        "Sun 29 Nov 2026, 17:40 Madrid time: France v South Africa, the Nations Championship Final, live on our screens at O'Connell St, Espoz y Mina 7, by Sol.",
      eyebrow: "Nations Championship Final · Sunday 29 Nov · published Thu 26 Nov 2026",
      h1: "France v South Africa, the final: a fans' meeting point in Madrid",
      lead:
        "The Nations Championship ends on Sunday 29 November at Twickenham with France against South Africa, kick-off 17:40 Madrid time. French and South African supporters in Madrid — whether you came for the weekend or live here — can meet at O'Connell St, Calle de Espoz y Mina 7, less than a minute from Sol. The final is live on our screens.",
      screeningName: "France v South Africa, the final, live on our screens at O'Connell St",
      sections: [
        {
          title: "Sunday in Madrid time",
          list: [
            "Sunday 29 November 2026",
            "14:10 — Scotland v Argentina (fourth-place match)",
            "17:40 — France v South Africa (the final, Allianz Stadium, Twickenham)",
          ],
          paras: [
            "Sunday doors open at 14:00, so the final is the second match of the afternoon. Arriving for Scotland v Argentina is the easy way to be settled long before the final kicks off.",
          ],
        },
        {
          title: "Bleus and Springboks, same room",
          paras: [
            "A final brings out supporters who have not watched together all season. If your group is spread around Madrid — some staying near Sol, some coming in by Metro or Cercanías — pick one meeting time and share one pin: Calle de Espoz y Mina 7.",
            "Neutrals are welcome too. Plenty of fans from the other finalist nations will still be in town on Sunday, and the final is the match everyone wants to see.",
          ],
        },
        {
          title: "Plan for a full afternoon",
          paras: [
            "With a 17:40 kick-off, the final finishes in the early evening, leaving Sunday night free in the centre of Madrid. No reservations: first come, first served — for a final, come early.",
          ],
          extra: {
            lang: "fr",
            text: "Supporters français : rendez-vous pour la finale France–Afrique du Sud, dimanche 29 novembre à 17h40 (heure de Madrid), en direct sur nos écrans à O'Connell St, Calle de Espoz y Mina 7, à moins d'une minute de la Puerta del Sol. Sans réservation : premiers arrivés, premiers servis.",
          },
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
        { href: "/news/ireland-australia-rugby-friday-night-sol", label: "Ireland v Australia: Friday night, 21:10" },
        { href: "/whats-on", label: "What's On" },
        { href: "/location", label: "Opening hours" },
      ],
      other: {
        href: "/es/noticias/final-rugby-francia-sudafrica-domingo-sol",
        label: "Leer en español",
        lang: "es",
      },
      alt: OWNER_PHOTOS_17NOV.pantallasFutbol.alt.en,
    },
    es: {
      title: "Final de rugby Francia–Sudáfrica: domingo junto a Sol",
      description:
        "Dom 29 nov 2026, 17:40 hora de Madrid: Francia–Sudáfrica, la final del Nations Championship, en directo en O'Connell St, Espoz y Mina 7, junto a Sol.",
      eyebrow: "Final del Nations Championship · domingo 29 nov · publicado el jue 26 nov 2026",
      h1: "Francia–Sudáfrica, la final: punto de encuentro en Madrid",
      lead:
        "El Nations Championship termina el domingo 29 de noviembre en Twickenham con Francia contra Sudáfrica, a las 17:40 hora de Madrid. Si eres aficionado francés o sudafricano y estás en Madrid — de fin de semana o porque vives aquí —, tu punto de encuentro es O'Connell St, Calle de Espoz y Mina 7, a menos de un minuto de Sol. La final va en directo en nuestras pantallas.",
      screeningName: "Francia–Sudáfrica, la final, en directo en nuestras pantallas en O'Connell St",
      sections: [
        {
          title: "El domingo en hora de Madrid",
          list: [
            "Domingo 29 de noviembre de 2026",
            "14:10 — Escocia–Argentina (partido por el cuarto puesto)",
            "17:40 — Francia–Sudáfrica (la final, Allianz Stadium, Twickenham)",
          ],
          paras: [
            "El domingo abrimos a las 14:00, así que la final es el segundo partido de la tarde. Venir para Escocia–Argentina es la forma más sencilla de estar bien colocado mucho antes de que empiece la final.",
          ],
        },
        {
          title: "Les Bleus y los Springboks, en la misma sala",
          paras: [
            "Una final reúne a aficionados que no han visto juntos ningún partido en toda la temporada. Si tu grupo está repartido por Madrid — unos alojados cerca de Sol, otros llegando en Metro o Cercanías —, fijad una hora de quedada y compartid una sola dirección: Calle de Espoz y Mina 7.",
            "Los neutrales también son bienvenidos. Muchos aficionados de las otras selecciones finalistas seguirán en la ciudad el domingo, y la final es el partido que todos quieren ver.",
          ],
        },
        {
          title: "Planea la tarde entera",
          paras: [
            "Con el saque a las 17:40, la final acaba a primera hora de la noche y deja libre la noche del domingo en el centro de Madrid. Sin reservas: por orden de llegada. Para una final, llega pronto.",
          ],
          extra: {
            lang: "fr",
            text: "Supporters français : rendez-vous pour la finale France–Afrique du Sud, dimanche 29 novembre à 17h40 (heure de Madrid), en direct sur nos écrans à O'Connell St, Calle de Espoz y Mina 7, à moins d'une minute de la Puerta del Sol. Sans réservation : premiers arrivés, premiers servis.",
          },
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
        { href: "/es/noticias/irlanda-australia-rugby-viernes-noche-sol", label: "Irlanda–Australia: viernes noche, 21:10" },
        { href: "/es/whats-on", label: "Agenda" },
        { href: "/es/location", label: "Horario" },
      ],
      other: {
        href: "/news/france-south-africa-rugby-final-sunday-sol",
        label: "Read in English",
        lang: "en",
      },
      alt: OWNER_PHOTOS_17NOV.pantallasFutbol.alt.es,
    },
  },
};
