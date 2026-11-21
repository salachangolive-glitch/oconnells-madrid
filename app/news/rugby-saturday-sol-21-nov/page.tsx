import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { RUGBY_SATURDAY_SOL_21_NOV } from "@/lib/articles/rugby-saturday-sol-21-nov";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: RUGBY_SATURDAY_SOL_21_NOV.copy.en.title,
  description: RUGBY_SATURDAY_SOL_21_NOV.copy.en.description,
  path: RUGBY_SATURDAY_SOL_21_NOV.paths.en,
});

export default function Page() {
  return <MatchNewsArticle data={RUGBY_SATURDAY_SOL_21_NOV} locale="en" />;
}