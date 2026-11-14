import { EN_PATHS, HREFLANG_PAIRS } from "@/lib/venue";
import { SEO_SHORT } from "@/lib/seo-short";

export type NewsHubEntry = {
  path: string;
  title: string;
  esPath?: string;
};

function titleFor(path: string): string {
  const short = SEO_SHORT[path]?.title;
  if (short) return short.replace(/\s*\|\s*O'Connell St\s*$/i, "").trim();
  const slug = path.replace(/^\/news\//, "").replace(/-/g, " ");
  return slug.charAt(0).toUpperCase() + slug.slice(1);
}

/** Live EN news articles (excludes noindex-only stubs when we tag them). */
export const NEWS_HUB_EN: NewsHubEntry[] = EN_PATHS.filter((p) =>
  p.startsWith("/news/"),
)
  .filter((p) => p !== "/news/inter-fans-madrid-womens-champions-league-sol")
  .map((path) => ({
    path,
    title: titleFor(path),
    esPath: HREFLANG_PAIRS[path],
  }))
  .sort((a, b) => a.title.localeCompare(b.title));

/** ES noticias with EN mirror where it exists. */
export const NEWS_HUB_ES: NewsHubEntry[] = Object.entries(HREFLANG_PAIRS)
  .filter(
    (entry): entry is [string, string] =>
      entry[0].startsWith("/news/") && typeof entry[1] === "string",
  )
  .map(([en, es]) => ({
    path: es,
    title: titleFor(es) || titleFor(en),
    esPath: es,
  }))
  .sort((a, b) => a.path.localeCompare(b.path));
