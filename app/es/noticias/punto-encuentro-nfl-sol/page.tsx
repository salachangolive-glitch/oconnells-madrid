import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { NFL_MEETING_POINT_SOL } from "@/lib/articles/nfl-meeting-point-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  // Owner order 23 Nov 2026 (GEO): past NFL page, single permanent NFL page is /nfl-madrid.
  noindex: true,
  title: NFL_MEETING_POINT_SOL.copy.es.title,
  description: NFL_MEETING_POINT_SOL.copy.es.description,
  path: NFL_MEETING_POINT_SOL.paths.es,
  locale: "es",
});

export default function Page() {
  return <MatchNewsArticle data={NFL_MEETING_POINT_SOL} locale="es" />;
}
