import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { GETAFE_BRIGHTON } from "@/lib/articles/getafe-brighton";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: GETAFE_BRIGHTON.copy.en.title,
  description: GETAFE_BRIGHTON.copy.en.description,
  path: GETAFE_BRIGHTON.paths.en,
  locale: "en",
});

export default function Page() {
  return <MatchNewsArticle data={GETAFE_BRIGHTON} locale="en" />;
}
