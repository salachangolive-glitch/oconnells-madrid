import Link from "next/link";
import type { SportsEventCampaign } from "@/lib/sports-event-registry";
import {
  campaignPagePath,
  ctaLabel,
  homeTitle,
  screensLead,
  type CampaignLocale,
} from "@/lib/sportsEventCampaigns";
import { ADDRESS, MAPS_URL } from "@/lib/venue";

export function HomeSportsEventHighlight({
  campaign,
  locale,
}: {
  campaign: SportsEventCampaign;
  locale: CampaignLocale;
}) {
  const es = locale === "es";
  const teams = es ? campaign.teamsEs : campaign.teamsEn;
  return (
    <article
      className="border-b border-gold/30 py-4 first:pt-0 last:border-b-0"
      data-show-until={campaign.homeTakeDown}
      data-home-block={`sports-event-${campaign.id}`}
    >
      <h2 className="font-serif text-lg font-bold text-gold sm:text-xl">
        {homeTitle(campaign, locale)}
      </h2>
      <p className="mt-2 text-sm text-cream sm:text-base">
        <strong>{campaign.madridTime}</strong> — {teams}
      </p>
      <p className="mt-2 text-sm text-cream-muted">{screensLead(campaign, locale)}</p>
      <p className="mt-2 text-xs text-cream-muted sm:text-sm">
        {ADDRESS.street}, Madrid ·{" "}
        {es
          ? "Metro Sol o Sevilla · Sin reservas; por orden de llegada."
          : "Metro Sol or Sevilla · No reservations; first come, first served."}
      </p>
      <p className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 text-sm">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-event="directions"
          className="text-cream underline"
        >
          {es ? "CÓMO LLEGAR" : "HOW TO GET HERE"}
        </a>
        <Link
          href={campaignPagePath(campaign, locale)}
          data-event="sports_event_cta_click"
          data-bar="oconnells"
          data-lang={locale}
          data-campaign-id={campaign.id}
          className="font-semibold text-gold underline"
        >
          {ctaLabel(campaign, locale)}
        </Link>
      </p>
    </article>
  );
}