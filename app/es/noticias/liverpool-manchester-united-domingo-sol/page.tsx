import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { LIVERPOOL_MANUNITED } from "@/lib/articles/liverpool-manchester-united-sunday-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: LIVERPOOL_MANUNITED.copy.es.title,
  description: LIVERPOOL_MANUNITED.copy.es.description,
  path: LIVERPOOL_MANUNITED.paths.es,
  locale: "es",
});

export default function Page() {
  return <MatchNewsArticle data={LIVERPOOL_MANUNITED} locale="es" />;
}
