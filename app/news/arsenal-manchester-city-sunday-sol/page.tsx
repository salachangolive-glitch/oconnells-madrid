import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { ARSENAL_MANCITY } from "@/lib/articles/arsenal-manchester-city-sunday-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: ARSENAL_MANCITY.copy.en.title,
  description: ARSENAL_MANCITY.copy.en.description,
  path: ARSENAL_MANCITY.paths.en,
});

export default function Page() {
  return <MatchNewsArticle data={ARSENAL_MANCITY} locale="en" />;
}
