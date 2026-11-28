import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { NATIONS_FINALS_WEEKEND_PLAN } from "@/lib/articles/nations-championship-finals-weekend-plan-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: NATIONS_FINALS_WEEKEND_PLAN.copy.en.title,
  description: NATIONS_FINALS_WEEKEND_PLAN.copy.en.description,
  path: NATIONS_FINALS_WEEKEND_PLAN.paths.en,
  locale: "en",
});

export default function NationsChampionshipFinalsWeekendPlanPage() {
  return <MatchNewsArticle data={NATIONS_FINALS_WEEKEND_PLAN} locale="en" />;
}
