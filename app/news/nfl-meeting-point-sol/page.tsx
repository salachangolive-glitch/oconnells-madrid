import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { NFL_MEETING_POINT_SOL } from "@/lib/articles/nfl-meeting-point-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  // Owner order 23 Nov 2026 (GEO): past NFL page, single permanent NFL page is /nfl-madrid.
  noindex: true,
  title: NFL_MEETING_POINT_SOL.copy.en.title,
  description: NFL_MEETING_POINT_SOL.copy.en.description,
  path: NFL_MEETING_POINT_SOL.paths.en,
  locale: "en",
});

export default function Page() {
  return <MatchNewsArticle data={NFL_MEETING_POINT_SOL} locale="en" />;
}
