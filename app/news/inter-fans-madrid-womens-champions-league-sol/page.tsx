import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { INTER_FANS_UWCL } from "@/lib/articles/inter-fans-madrid-womens-champions-league-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: INTER_FANS_UWCL.copy.en.title,
  description: INTER_FANS_UWCL.copy.en.description,
  path: INTER_FANS_UWCL.paths.en,
  locale: "en",
});

export default function InterFansUwclPage() {
  return <MatchNewsArticle data={INTER_FANS_UWCL} locale="en" />;
}