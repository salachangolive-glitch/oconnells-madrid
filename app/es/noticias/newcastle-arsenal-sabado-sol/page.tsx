import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { NEWCASTLE_ARSENAL } from "@/lib/articles/newcastle-arsenal-saturday-night-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: NEWCASTLE_ARSENAL.copy.es.title,
  description: NEWCASTLE_ARSENAL.copy.es.description,
  path: NEWCASTLE_ARSENAL.paths.es,
  locale: "es",
});

export default function Page() {
  return <MatchNewsArticle data={NEWCASTLE_ARSENAL} locale="es" />;
}
