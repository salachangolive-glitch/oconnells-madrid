import { agendaBuildNow, madridTodayYmd } from "@/lib/fixtures";

export type ComingUpLocaleCopy = {
  href: string;
  label: string;
  detail: string;
};

export type ComingUpItem = {
  id: string;
  /** Last calendar day (Madrid) the card stays on the home page. */
  hideAfterYmd: string;
  en: ComingUpLocaleCopy;
  es: ComingUpLocaleCopy;
};

/** T35: fan-capture news guides; hide each row after its match day (Madrid). */
export const HOME_COMING_UP: ComingUpItem[] = [
  {
    id: "ucl-psv",
    hideAfterYmd: "2026-11-24",
    en: {
      href: "/news/real-madrid-psv-tuesday-night-sol",
      label: "Real Madrid v PSV: Tuesday night near Sol",
      detail:
        "Real Madrid v PSV, UEFA Champions League, Tuesday 24 November, 21:00 (Bernabéu). O'Connell St, Espoz y Mina 7 — less than a minute from Sol. Meeting point before or after; first come, first served.",
    },
    es: {
      href: "/es/noticias/real-madrid-psv-martes-sol",
      label: "Real Madrid–PSV: martes por la noche junto a Sol",
      detail:
        "Real Madrid–PSV, Champions, martes 24 de noviembre, 21:00 (Bernabéu). O'Connell St, Espoz y Mina 7 — a menos de un minuto de Sol. Punto de encuentro antes o después; entrada por orden de llegada.",
    },
  },
  {
    id: "ucl-viking",
    hideAfterYmd: "2026-11-25",
    en: {
      href: "/news/atletico-viking-wednesday-night-sol",
      label: "Atlético v Viking FK: Wednesday night near Sol",
      detail:
        "Champions tonight: Atlético v Viking FK, Wednesday 25 November, 21:00 (Riyadh Air Metropolitano). Norwegian / Viking FK fans: meeting point at O'Connell St — not the NFL Minnesota Vikings.",
    },
    es: {
      href: "/es/noticias/atletico-viking-miercoles-sol",
      label: "Atlético–Viking FK: miércoles de Champions junto a Sol",
      detail:
        "Champions esta noche: Atlético–Viking FK, miércoles 25 de noviembre, 21:00 (Metropolitano). Afición del Viking FK: punto de encuentro en O'Connell St — no los Minnesota Vikings de la NFL.",
    },
  },
  {
    id: "euroleague-zalgiris",
    hideAfterYmd: "2026-11-25",
    en: {
      href: "/news/real-madrid-zalgiris-wednesday-night-sol",
      label: "Real Madrid v Žalgiris: Wednesday night near Sol",
      detail:
        "EuroLeague tonight: Real Madrid v Žalgiris, Wednesday 25 November, 20:45 (Movistar Arena). Lithuanian / Žalgiris fans: meeting point near Sol before or after.",
    },
    es: {
      href: "/news/real-madrid-zalgiris-wednesday-night-sol",
      label: "Real Madrid–Žalgiris: miércoles por la noche junto a Sol",
      detail:
        "Euroliga esta noche: Real Madrid–Žalgiris, miércoles 25 de noviembre, 20:45 (Movistar Arena). Afición Žalgiris: punto de encuentro junto a Sol.",
    },
  },
];

export function getVisibleComingUp(
  locale: "en" | "es",
  now = agendaBuildNow(),
): Array<ComingUpLocaleCopy & { id: string }> {
  const today = madridTodayYmd(now);
  return HOME_COMING_UP.filter((item) => today <= item.hideAfterYmd).map(
    (item) => ({
      id: item.id,
      ...item[locale],
    }),
  );
}
