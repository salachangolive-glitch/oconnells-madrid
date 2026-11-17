import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { ARSENAL_MANCITY } from "@/lib/articles/arsenal-manchester-city-sunday-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: ARSENAL_MANCITY.copy.es.title,
  description: ARSENAL_MANCITY.copy.es.description,
  path: ARSENAL_MANCITY.paths.es,
  locale: "es",
});

export default function Page() {
  return <MatchNewsArticle data={ARSENAL_MANCITY} locale="es" />;
}
