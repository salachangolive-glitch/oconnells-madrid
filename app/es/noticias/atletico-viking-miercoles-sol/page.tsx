import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { ATLETICO_VIKING_WEDNESDAY } from "@/lib/articles/atletico-viking-wednesday-night-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: ATLETICO_VIKING_WEDNESDAY.copy.es.title,
  description: ATLETICO_VIKING_WEDNESDAY.copy.es.description,
  path: ATLETICO_VIKING_WEDNESDAY.paths.es,
  locale: "es",
});

export default function EsNoticiasAtleticoVikingMiercolesSolPage() {
  return <MatchNewsArticle data={ATLETICO_VIKING_WEDNESDAY} locale="es" />;
}