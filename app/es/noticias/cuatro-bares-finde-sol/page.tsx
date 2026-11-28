import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { FOUR_BARS_FAN_WEEKEND_SOL } from "@/lib/articles/four-bars-fan-weekend-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  // Owner order 23 Nov 2026 (GEO): past NFL page, single permanent NFL page is /nfl-madrid.
  noindex: true,
  title: FOUR_BARS_FAN_WEEKEND_SOL.copy.es.title,
  description: FOUR_BARS_FAN_WEEKEND_SOL.copy.es.description,
  path: FOUR_BARS_FAN_WEEKEND_SOL.paths.es,
  locale: "es",
});

export default function Page() {
  return <MatchNewsArticle data={FOUR_BARS_FAN_WEEKEND_SOL} locale="es" />;
}
