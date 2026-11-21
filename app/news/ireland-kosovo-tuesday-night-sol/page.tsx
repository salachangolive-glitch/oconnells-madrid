import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { IRELAND_KOSOVO } from "@/lib/articles/ireland-kosovo-tuesday-night-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: IRELAND_KOSOVO.copy.en.title,
  description: IRELAND_KOSOVO.copy.en.description,
  path: IRELAND_KOSOVO.paths.en,
});

export default function Page() {
  return <MatchNewsArticle data={IRELAND_KOSOVO} locale="en" />;
}