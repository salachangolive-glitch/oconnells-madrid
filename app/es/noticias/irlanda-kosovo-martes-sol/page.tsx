import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { IRELAND_KOSOVO } from "@/lib/articles/ireland-kosovo-tuesday-night-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: IRELAND_KOSOVO.copy.es.title,
  description: IRELAND_KOSOVO.copy.es.description,
  path: IRELAND_KOSOVO.paths.es,
  locale: "es",
});

export default function Page() {
  return <MatchNewsArticle data={IRELAND_KOSOVO} locale="es" />;
}