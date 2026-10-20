import type { MetadataRoute } from "next";
import { ALL_CONTENT_PATHS, getSiteUrl, HREFLANG_PAIRS } from "@/lib/venue";

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
    lastModified: now,
    changeFrequency: path === "/" || path === "/es" ? "weekly" : "monthly",
    priority: path === "/" || path === "/es" ? 1 : path.includes("thursday") ? 0.9 : 0.7,
  }));
}
