import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { INTER_FANS_UWCL } from "@/lib/articles/inter-fans-madrid-womens-champions-league-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: INTER_FANS_UWCL.copy.es.title,
  description: INTER_FANS_UWCL.copy.es.description,
  path: INTER_FANS_UWCL.paths.es,
  locale: "es",
});

export default function EsInterFansUwclPage() {
  return <MatchNewsArticle data={INTER_FANS_UWCL} locale="es" />;
}