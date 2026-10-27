import type { MetadataRoute } from "next";
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

const BAYERN_GROUPS = [
  HREFLANG_GROUPS["/news/bayern-fans-madrid-pre-match-meeting-point"],
  HREFLANG_GROUPS["/news/bayern-fans-things-to-do-near-sol"],
  HREFLANG_GROUPS["/news/bayern-fans-madrid-timing"],
  HREFLANG_GROUPS["/news/bayern-fans-barrio-de-las-letras"],
];

/** Bayern fans articles: en/de/x-default alternates. */
function bayernAlternates(base: string, path: string) {
  const g = BAYERN_GROUPS.find((x) => x?.de && [x.en, x.de].includes(path));
  if (!g?.de) return undefined;
  return {
    languages: {
      en: `${base}${g.en}`,
      de: `${base}${g.de}`,
      "x-default": `${base}${g.en}`,
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

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  return ALL_CONTENT_PATHS.map((path) => ({
    url: path === "/" ? base : `${base}${path}`,
    ...(newsAlternates(base, path) ? { alternates: newsAlternates(base, path) } : {}),
    ...(bayernAlternates(base, path) ? { alternates: bayernAlternates(base, path) } : {}),
    ...(oktAlternates(base, path) ? { alternates: oktAlternates(base, path) } : {}),
    ...(homeAlternates(base, path) ? { alternates: homeAlternates(base, path) } : {}),
    lastModified: now,
    changeFrequency: path === "/" || path === "/es" ? "weekly" : "monthly",
    priority: path === "/" || path === "/es" ? 1 : path.includes("thursday") ? 0.9 : 0.7,
  }));
}
