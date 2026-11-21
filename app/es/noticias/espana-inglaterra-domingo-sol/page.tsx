import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { SPAIN_ENGLAND } from "@/lib/articles/spain-england";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: SPAIN_ENGLAND.copy.es.title,
  description: SPAIN_ENGLAND.copy.es.description,
  path: SPAIN_ENGLAND.paths.es,
  locale: "es",
});

export default function Page() {
  return <MatchNewsArticle data={SPAIN_ENGLAND} locale="es" />;
}
