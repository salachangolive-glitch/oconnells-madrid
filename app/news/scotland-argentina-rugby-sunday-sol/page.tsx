import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { SCOTLAND_ARGENTINA_RUGBY_SUNDAY } from "@/lib/articles/scotland-argentina-rugby-sunday-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: SCOTLAND_ARGENTINA_RUGBY_SUNDAY.copy.en.title,
  description: SCOTLAND_ARGENTINA_RUGBY_SUNDAY.copy.en.description,
  path: SCOTLAND_ARGENTINA_RUGBY_SUNDAY.paths.en,
  locale: "en",
});

export default function ScotlandArgentinaRugbySundayPage() {
  return <MatchNewsArticle data={SCOTLAND_ARGENTINA_RUGBY_SUNDAY} locale="en" />;
}
