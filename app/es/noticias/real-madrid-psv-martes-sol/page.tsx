import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { RM_PSV_TUESDAY } from "@/lib/articles/real-madrid-psv-tuesday-night-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: RM_PSV_TUESDAY.copy.es.title,
  description: RM_PSV_TUESDAY.copy.es.description,
  path: RM_PSV_TUESDAY.paths.es,
  locale: "es",
});

export default function EsNoticiasRealMadridPsvMartesSolPage() {
  return <MatchNewsArticle data={RM_PSV_TUESDAY} locale="es" />;
}