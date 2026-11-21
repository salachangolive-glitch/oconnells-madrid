import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { LIVERPOOL_MANUNITED } from "@/lib/articles/liverpool-manchester-united-sunday-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: LIVERPOOL_MANUNITED.copy.en.title,
  description: LIVERPOOL_MANUNITED.copy.en.description,
  path: LIVERPOOL_MANUNITED.paths.en,
});

export default function Page() {
  return <MatchNewsArticle data={LIVERPOOL_MANUNITED} locale="en" />;
}
