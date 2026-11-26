import { MatchNewsArticle } from "@/components/MatchNewsArticle";
import { FRANCE_SOUTH_AFRICA_RUGBY_FINAL } from "@/lib/articles/france-south-africa-rugby-final-sunday-sol";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: FRANCE_SOUTH_AFRICA_RUGBY_FINAL.copy.es.title,
  description: FRANCE_SOUTH_AFRICA_RUGBY_FINAL.copy.es.description,
  path: FRANCE_SOUTH_AFRICA_RUGBY_FINAL.paths.es,
  locale: "es",
});

export default function EsFinalRugbyFranciaSudafricaPage() {
  return <MatchNewsArticle data={FRANCE_SOUTH_AFRICA_RUGBY_FINAL} locale="es" />;
}
