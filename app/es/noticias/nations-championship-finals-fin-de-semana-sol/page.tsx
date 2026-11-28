import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { NATIONS_FINALS_TWICKENHAM } from "@/lib/articles/nations-championship-finals-twickenham-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: NATIONS_FINALS_TWICKENHAM.copy.es.title,
  description: NATIONS_FINALS_TWICKENHAM.copy.es.description,
  path: NATIONS_FINALS_TWICKENHAM.paths.es,
  locale: "es",
});

export default function EsNationsChampionshipFinalsFinDeSemanaPage() {
  return <MatchNewsArticle data={NATIONS_FINALS_TWICKENHAM} locale="es" />;
}