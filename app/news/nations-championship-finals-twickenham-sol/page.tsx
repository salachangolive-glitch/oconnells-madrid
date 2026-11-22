import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { NATIONS_FINALS_TWICKENHAM } from "@/lib/articles/nations-championship-finals-twickenham-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: NATIONS_FINALS_TWICKENHAM.copy.en.title,
  description: NATIONS_FINALS_TWICKENHAM.copy.en.description,
  path: NATIONS_FINALS_TWICKENHAM.paths.en,
  locale: "en",
});

export default function NationsChampionshipFinalsTwickenhamPage() {
  return <MatchNewsArticle data={NATIONS_FINALS_TWICKENHAM} locale="en" />;
}