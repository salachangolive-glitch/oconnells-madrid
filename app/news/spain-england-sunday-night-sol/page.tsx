import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { SPAIN_ENGLAND } from "@/lib/articles/spain-england";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: SPAIN_ENGLAND.copy.en.title,
  description: SPAIN_ENGLAND.copy.en.description,
  path: SPAIN_ENGLAND.paths.en,
  locale: "en",
});

export default function Page() {
  return <MatchNewsArticle data={SPAIN_ENGLAND} locale="en" />;
}
