import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { MADRID_CRVENA_ZVEZDA } from "@/lib/articles/madrid-crvena-zvezda";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: MADRID_CRVENA_ZVEZDA.copy.es.title,
  description: MADRID_CRVENA_ZVEZDA.copy.es.description,
  path: MADRID_CRVENA_ZVEZDA.paths.es,
  locale: "es",
});

export default function Page() {
  return <MatchNewsArticle data={MADRID_CRVENA_ZVEZDA} locale="es" />;
}
