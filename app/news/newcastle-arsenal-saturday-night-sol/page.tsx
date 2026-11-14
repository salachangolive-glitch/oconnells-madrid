import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { NEWCASTLE_ARSENAL } from "@/lib/articles/newcastle-arsenal-saturday-night-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: NEWCASTLE_ARSENAL.copy.en.title,
  description: NEWCASTLE_ARSENAL.copy.en.description,
  path: NEWCASTLE_ARSENAL.paths.en,
});

export default function Page() {
  return <MatchNewsArticle data={NEWCASTLE_ARSENAL} locale="en" />;
}
