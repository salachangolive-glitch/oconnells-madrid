import { HomeShowUntilScript } from "@/components/HomeShowUntilScript";
import { HomeSportsEventHighlight } from "@/components/HomeSportsEventHighlight";
import {
  activeHomeCampaigns,
  madridDateKeyFrom,
  type CampaignLocale,
} from "@/lib/sportsEventCampaigns";

export function HomeSportsEventHighlights({ locale }: { locale: CampaignLocale }) {
  const todayKey = madridDateKeyFrom();
  const campaigns = activeHomeCampaigns(todayKey);
  if (campaigns.length === 0) return null;
  const es = locale === "es";
  return (
    <>
      <section
        className="mx-auto mb-8 max-w-2xl rounded-lg border border-gold/40 bg-pub-burgundy-deep/80 p-5 sm:p-6"
        aria-label={es ? "Próximos eventos deportivos" : "Upcoming sports events"}
      >
        {campaigns.map((c) => (
          <HomeSportsEventHighlight key={c.id} campaign={c} locale={locale} />
        ))}
      </section>
      <HomeShowUntilScript />
    </>
  );
}