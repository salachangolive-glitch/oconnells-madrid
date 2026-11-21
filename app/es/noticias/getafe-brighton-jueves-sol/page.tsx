import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { GETAFE_BRIGHTON } from "@/lib/articles/getafe-brighton";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: GETAFE_BRIGHTON.copy.es.title,
  description: GETAFE_BRIGHTON.copy.es.description,
  path: GETAFE_BRIGHTON.paths.es,
  locale: "es",
});

export default function Page() {
  return <MatchNewsArticle data={GETAFE_BRIGHTON} locale="es" />;
}
