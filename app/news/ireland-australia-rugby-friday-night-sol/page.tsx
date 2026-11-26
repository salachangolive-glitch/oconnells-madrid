import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { IRELAND_AUSTRALIA_RUGBY_FRIDAY } from "@/lib/articles/ireland-australia-rugby-friday-night-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: IRELAND_AUSTRALIA_RUGBY_FRIDAY.copy.en.title,
  description: IRELAND_AUSTRALIA_RUGBY_FRIDAY.copy.en.description,
  path: IRELAND_AUSTRALIA_RUGBY_FRIDAY.paths.en,
  locale: "en",
});

export default function IrelandAustraliaRugbyFridayPage() {
  return <MatchNewsArticle data={IRELAND_AUSTRALIA_RUGBY_FRIDAY} locale="en" />;
}
