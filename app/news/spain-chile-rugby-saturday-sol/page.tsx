import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { SPAIN_CHILE_RUGBY } from "@/lib/articles/spain-chile-rugby-saturday-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: SPAIN_CHILE_RUGBY.copy.en.title,
  description: SPAIN_CHILE_RUGBY.copy.en.description,
  path: SPAIN_CHILE_RUGBY.paths.en,
});

export default function Page() {
  return <MatchNewsArticle data={SPAIN_CHILE_RUGBY} locale="en" />;
}
