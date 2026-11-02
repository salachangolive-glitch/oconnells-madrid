import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { RMFEM_INTER } from "@/lib/articles/rmfem-inter";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: RMFEM_INTER.copy.es.title,
  description: RMFEM_INTER.copy.es.description,
  path: RMFEM_INTER.paths.es,
  locale: "es",
});

export default function Page() {
  return <MatchNewsArticle data={RMFEM_INTER} locale="es" />;
}
