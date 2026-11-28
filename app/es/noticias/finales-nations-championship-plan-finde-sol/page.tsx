import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { NATIONS_FINALS_WEEKEND_PLAN } from "@/lib/articles/nations-championship-finals-weekend-plan-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: NATIONS_FINALS_WEEKEND_PLAN.copy.es.title,
  description: NATIONS_FINALS_WEEKEND_PLAN.copy.es.description,
  path: NATIONS_FINALS_WEEKEND_PLAN.paths.es,
  locale: "es",
});

export default function EsFinalesNationsChampionshipPlanFindePage() {
  return <MatchNewsArticle data={NATIONS_FINALS_WEEKEND_PLAN} locale="es" />;
}
