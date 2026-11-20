import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { RM_PSV_TUESDAY } from "@/lib/articles/real-madrid-psv-tuesday-night-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: RM_PSV_TUESDAY.copy.en.title,
  description: RM_PSV_TUESDAY.copy.en.description,
  path: RM_PSV_TUESDAY.paths.en,
  locale: "en",
});

export default function NewsRealMadridPsvTuesdayNightPage() {
  return <MatchNewsArticle data={RM_PSV_TUESDAY} locale="en" />;
}