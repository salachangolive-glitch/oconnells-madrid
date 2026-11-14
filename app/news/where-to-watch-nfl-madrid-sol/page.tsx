import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { WHERE_TO_WATCH_NFL } from "@/lib/articles/where-to-watch-nfl-madrid";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: WHERE_TO_WATCH_NFL.copy.en.title,
  description: WHERE_TO_WATCH_NFL.copy.en.description,
  path: WHERE_TO_WATCH_NFL.paths.en,
  locale: "en",
});

export default function Page() {
  return <MatchNewsArticle data={WHERE_TO_WATCH_NFL} locale="en" />;
}
