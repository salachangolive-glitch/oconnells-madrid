import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { FOUR_BARS_FAN_WEEKEND_SOL } from "@/lib/articles/four-bars-fan-weekend-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  // Owner order 23 Nov 2026 (GEO): past NFL page, single permanent NFL page is /nfl-madrid.
  noindex: true,
  title: FOUR_BARS_FAN_WEEKEND_SOL.copy.en.title,
  description: FOUR_BARS_FAN_WEEKEND_SOL.copy.en.description,
  path: FOUR_BARS_FAN_WEEKEND_SOL.paths.en,
  locale: "en",
});

export default function Page() {
  return <MatchNewsArticle data={FOUR_BARS_FAN_WEEKEND_SOL} locale="en" />;
}
