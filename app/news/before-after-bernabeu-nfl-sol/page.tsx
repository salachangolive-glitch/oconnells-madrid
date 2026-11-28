import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { BEFORE_AFTER_BERNABEU_NFL } from "@/lib/articles/before-after-bernabeu-nfl-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  // Owner order 23 Nov 2026 (GEO): past NFL page, single permanent NFL page is /nfl-madrid.
  noindex: true,
  title: BEFORE_AFTER_BERNABEU_NFL.copy.en.title,
  description: BEFORE_AFTER_BERNABEU_NFL.copy.en.description,
  path: BEFORE_AFTER_BERNABEU_NFL.paths.en,
  locale: "en",
});

export default function Page() {
  return <MatchNewsArticle data={BEFORE_AFTER_BERNABEU_NFL} locale="en" />;
}
