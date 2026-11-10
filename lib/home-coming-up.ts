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
        "UEFA Champions League, Tuesday 24 November, 21:00 (Bernabéu). Dutch / PSV fans: a fans meeting point near Sol before or after.",
    },
    es: {
      href: "/news/real-madrid-psv-tuesday-night-sol",
      label: "Real Madrid–PSV: martes por la noche junto a Sol",
      detail:
        "Champions: Real Madrid–PSV, martes 24 de noviembre, 21:00 (Bernabéu). Afición neerlandesa / PSV: punto de encuentro junto a Sol antes o después.",
    },
  },
  {
    id: "euroleague-zalgiris",
    hideAfterYmd: "2026-11-25",
    en: {
      href: "/news/real-madrid-zalgiris-wednesday-night-sol",
      label: "Real Madrid v Žalgiris: Wednesday night near Sol",
      detail:
        "EuroLeague, Wednesday 25 November, 20:45 (Movistar Arena). Lithuanian / Žalgiris fans: a fans meeting point near Sol before or after.",
    },
    es: {
      href: "/news/real-madrid-zalgiris-wednesday-night-sol",
      label: "Real Madrid–Žalgiris: miércoles por la noche junto a Sol",
      detail:
        "Euroliga, miércoles 25 de noviembre, 20:45 (Movistar Arena). Afición lituana / Žalgiris: punto de encuentro junto a Sol antes o después.",
    },
  },
  {
    id: "ucl-viking",
    hideAfterYmd: "2026-11-25",
    en: {
      href: "/news/atletico-viking-wednesday-night-sol",
      label: "Atlético v Viking FK: Wednesday night near Sol",
      detail:
        "UEFA Champions League, Wednesday 25 November, 21:00 (Riyadh Air Metropolitano). Norwegian / Viking FK fans: a meeting point near Sol before or after — not the NFL Minnesota Vikings.",
    },
    es: {
      href: "/es/noticias/atletico-viking-miercoles-sol",
      label: "Atlético–Viking FK: miércoles de Champions junto a Sol",
      detail:
        "Champions: Atlético–Viking FK, miércoles 25 de noviembre, 21:00 (Riyadh Air Metropolitano). Afición noruega del Viking FK: punto de encuentro junto a Sol — no los Minnesota Vikings de la NFL.",
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
