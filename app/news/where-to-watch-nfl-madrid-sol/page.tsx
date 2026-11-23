import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { WHERE_TO_WATCH_NFL } from "@/lib/articles/where-to-watch-nfl-madrid";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  // Owner order 23 Nov 2026 (GEO): past NFL page, single permanent NFL page is /nfl-madrid.
  noindex: true,
  title: WHERE_TO_WATCH_NFL.copy.en.title,
  description: WHERE_TO_WATCH_NFL.copy.en.description,
  path: WHERE_TO_WATCH_NFL.paths.en,
  locale: "en",
});

export default function Page() {
  return <MatchNewsArticle data={WHERE_TO_WATCH_NFL} locale="en" />;
}
