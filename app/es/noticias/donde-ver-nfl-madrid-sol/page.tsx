import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { WHERE_TO_WATCH_NFL } from "@/lib/articles/where-to-watch-nfl-madrid";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: WHERE_TO_WATCH_NFL.copy.es.title,
  description: WHERE_TO_WATCH_NFL.copy.es.description,
  path: WHERE_TO_WATCH_NFL.paths.es,
  locale: "es",
});

export default function Page() {
  return <MatchNewsArticle data={WHERE_TO_WATCH_NFL} locale="es" />;
}
