import type { MetadataRoute } from "next";
import LASTMOD from "@/lib/lastmod.json";
import { ALL_CONTENT_PATHS, getSiteUrl, HREFLANG_GROUPS, HREFLANG_PAIRS } from "@/lib/venue";

const OKT_GROUP = HREFLANG_GROUPS["/oktoberfest-madrid-sol"];

/** Oktoberfest page: en/es/de/x-default alternates. */
function oktAlternates(base: string, path: string) {
  if (!OKT_GROUP || ![OKT_GROUP.en, OKT_GROUP.es, OKT_GROUP.de].includes(path)) return undefined;
  return {
    languages: {
      en: `${base}${OKT_GROUP.en}`,
      es: `${base}${OKT_GROUP.es}`,
      de: `${base}${OKT_GROUP.de}`,
      "x-default": `${base}${OKT_GROUP.en}`,
    },
  };
}

const HOME_GROUP = HREFLANG_GROUPS["/"];

/** Home EN/ES + German index /de: en/es/de/x-default alternates. */
function homeAlternates(base: string, path: string) {
  if (!HOME_GROUP?.es || !HOME_GROUP.de || !["/", "/es", "/de"].includes(path)) return undefined;
  return {
    languages: {
      en: `${base}/`,
      es: `${base}${HOME_GROUP.es}`,
      de: `${base}${HOME_GROUP.de}`,
      "x-default": `${base}/`,
    },
  };
}

/** News pages: sitemap carries en/es/x-default alternates (hreflang). */
function newsAlternates(base: string, path: string) {
  const isNews = path.startsWith("/news/") || path.startsWith("/es/noticias/");
  if (!isNews) return undefined;
  const en = path.startsWith("/es/")
    ? Object.entries(HREFLANG_PAIRS).find(([, es]) => es === path)?.[0]
    : path;
  const es = en ? HREFLANG_PAIRS[en] : undefined;
  if (!en || !es) return undefined;
  return {
    languages: {
      en: `${base}${en}`,
      es: `${base}${es}`,
      "x-default": `${base}${en}`,
    },
  };
}

export const dynamic = "force-static";

/**
 * Event pages leave the sitemap once the event day is over (Madrid date).
 * Pages stay online (they may have traffic); only the sitemap entry goes.
 */
const EVENT_LAST_DAY: Record<string, string> = {
  "/halloween-madrid-sol": "2026-10-31",
  "/es/halloween-madrid-sol": "2026-10-31",
  "/oktoberfest-madrid-sol": "2026-11-15",
  "/es/oktoberfest-madrid-sol": "2026-11-15",
  "/de/oktoberfest-madrid-sol": "2026-11-15",
  "/news/getafe-brighton-thursday-night-sol": "2026-11-05",
  "/es/noticias/getafe-brighton-jueves-sol": "2026-11-05",
  "/news/duran-duran-madrid-gig-night-sol": "2026-11-06",
  "/news/atletico-barcelona-sunday-night-sol": "2026-11-08",
  "/news/where-to-watch-nfl-madrid-sol": "2026-11-08",
  "/es/noticias/donde-ver-nfl-madrid-sol": "2026-11-08",
  "/news/nfl-meeting-point-sol": "2026-11-08",
  "/es/noticias/punto-encuentro-nfl-sol": "2026-11-08",
  "/news/before-after-bernabeu-nfl-sol": "2026-11-08",
  "/es/noticias/antes-despues-bernabeu-nfl-sol": "2026-11-08",
  "/news/sunday-football-sol-8-nov": "2026-11-08",
  "/es/noticias/futbol-domingo-sol-8-nov": "2026-11-08",
  "/news/four-bars-fan-weekend-sol": "2026-11-08",
  "/es/noticias/cuatro-bares-finde-sol": "2026-11-08",
  "/news/bryan-adams-madrid-gig-night-sol": "2026-11-10",
  "/news/england-croatia-thursday-night-sol": "2026-11-12",
  "/news/real-madrid-crvena-zvezda-thursday-sol": "2026-11-12",
  "/es/noticias/real-madrid-crvena-zvezda-jueves-sol": "2026-11-12",
  "/news/serbia-germany-friday-night-sol": "2026-11-13",
  "/news/spain-england-sunday-night-sol": "2026-11-15",
  "/es/noticias/espana-inglaterra-domingo-sol": "2026-11-15",
  "/news/germany-netherlands-monday-night-sol": "2026-11-16",
  "/news/real-madrid-inter-womens-champions-league-sol": "2026-11-18",
  "/es/noticias/real-madrid-inter-champions-femenina-sol": "2026-11-18",
};

function madridYmd(d: Date): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Madrid" }).format(d);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const today = madridYmd(new Date());
  const lastmod = LASTMOD as Record<string, string>;

  return ALL_CONTENT_PATHS.filter((path) => {
    const end = EVENT_LAST_DAY[path];
    return !end || end >= today;
  }).map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    ...(newsAlternates(base, path) ? { alternates: newsAlternates(base, path) } : {}),
    ...(oktAlternates(base, path) ? { alternates: oktAlternates(base, path) } : {}),
    ...(homeAlternates(base, path) ? { alternates: homeAlternates(base, path) } : {}),
    ...(lastmod[path] ? { lastModified: lastmod[path] } : {}),
    changeFrequency: path === "/" || path === "/es" ? "weekly" : "monthly",
    priority: path === "/" || path === "/es" ? 1 : path.includes("thursday") ? 0.9 : 0.7,
  }));
}
