import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { SCOTLAND_ARGENTINA_RUGBY_SUNDAY } from "@/lib/articles/scotland-argentina-rugby-sunday-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: SCOTLAND_ARGENTINA_RUGBY_SUNDAY.copy.es.title,
  description: SCOTLAND_ARGENTINA_RUGBY_SUNDAY.copy.es.description,
  path: SCOTLAND_ARGENTINA_RUGBY_SUNDAY.paths.es,
  locale: "es",
});

export default function EsEscociaArgentinaRugbyDomingoPage() {
  return <MatchNewsArticle data={SCOTLAND_ARGENTINA_RUGBY_SUNDAY} locale="es" />;
}
