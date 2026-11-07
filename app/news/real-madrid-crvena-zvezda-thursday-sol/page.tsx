import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { MADRID_CRVENA_ZVEZDA } from "@/lib/articles/madrid-crvena-zvezda";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: MADRID_CRVENA_ZVEZDA.copy.en.title,
  description: MADRID_CRVENA_ZVEZDA.copy.en.description,
  path: MADRID_CRVENA_ZVEZDA.paths.en,
  locale: "en",
});

export default function Page() {
  return <MatchNewsArticle data={MADRID_CRVENA_ZVEZDA} locale="en" />;
}
