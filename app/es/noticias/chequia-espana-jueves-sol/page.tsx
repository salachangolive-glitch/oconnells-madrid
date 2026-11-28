import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { CZECHIA_SPAIN } from "@/lib/articles/czechia-spain-thursday-night-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: CZECHIA_SPAIN.copy.es.title,
  description: CZECHIA_SPAIN.copy.es.description,
  path: CZECHIA_SPAIN.paths.es,
  locale: "es",
});

export default function Page() {
  return <MatchNewsArticle data={CZECHIA_SPAIN} locale="es" />;
}
