import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { IRELAND_AUSTRALIA_RUGBY_FRIDAY } from "@/lib/articles/ireland-australia-rugby-friday-night-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: IRELAND_AUSTRALIA_RUGBY_FRIDAY.copy.es.title,
  description: IRELAND_AUSTRALIA_RUGBY_FRIDAY.copy.es.description,
  path: IRELAND_AUSTRALIA_RUGBY_FRIDAY.paths.es,
  locale: "es",
});

export default function EsIrlandaAustraliaRugbyViernesPage() {
  return <MatchNewsArticle data={IRELAND_AUSTRALIA_RUGBY_FRIDAY} locale="es" />;
}
