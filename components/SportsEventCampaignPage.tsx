import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Prose";
import type { SportsEventCampaign } from "@/lib/sports-event-registry";
import {
  campaignPagePath,
  campaignSportsEventJsonLd,
  campaignVenueHours,
  MAPS_URL,
  type CampaignLocale,
} from "@/lib/sportsEventCampaigns";
import { buildMetadata } from "@/lib/seo";
import { ADDRESS, SITE_NAME } from "@/lib/venue";

export function sportsEventCampaignMetadata(c: SportsEventCampaign, locale: CampaignLocale) {
  const path = campaignPagePath(c, locale);
  const es = locale === "es";
  const title = es
    ? `${c.teamsEs} | ${SITE_NAME} — punto de encuentro`
    : `${c.teamsEn} | ${SITE_NAME} — meeting point`;
  const description = es
    ? `${c.competition}, saque ${c.madridTime} hora Madrid. ${SITE_NAME}, ${ADDRESS.street} junto a Sol. Sin reservas; por orden de llegada.`
    : `${c.competition}, kick-off ${c.madridTime} Madrid time. ${SITE_NAME}, ${ADDRESS.street} by Sol. No reservations; first come, first served.`;
  return buildMetadata({ title, description, path, locale });
}

export function SportsEventCampaignView({
  campaign,
  locale,
}: {
  campaign: SportsEventCampaign;
  locale: CampaignLocale;
}) {
  const es = locale === "es";
  const path = campaignPagePath(campaign, locale);
  const altPath =
    locale === "es"
      ? campaign.paths.en
      : campaign.paths.es || campaign.paths.en;
  const hours = campaignVenueHours(campaign.madridDateKey);
  const teams = es ? campaign.teamsEs : campaign.teamsEn;

  const lead = campaign.broadcastConfirmed
    ? es
      ? `${campaign.competition}, saque ${campaign.madridTime} hora Madrid. EN DIRECTO en nuestras pantallas en ${SITE_NAME}, ${ADDRESS.street}, junto a Puerta del Sol.`
      : `${campaign.competition}, kick-off ${campaign.madridTime} Madrid time. LIVE on our screens at ${SITE_NAME}, ${ADDRESS.street}, by Puerta del Sol.`
    : es
      ? `${campaign.competition}, saque ${campaign.madridTime} hora Madrid. Punto de encuentro en ${SITE_NAME} antes del partido — no prometemos el partido en pantalla hasta que figure en Partidos.`
      : `${campaign.competition}, kick-off ${campaign.madridTime} Madrid time. Meeting point at ${SITE_NAME} before the match — we do not promise this game on our screens until it appears on What's On.`;

  return (
    <PageShell locale={locale} altLangHref={altPath}>
      <JsonLd data={campaignSportsEventJsonLd(campaign, locale)} />
      <header className="mb-8 max-w-2xl">
        <p className="text-sm uppercase tracking-wide text-gold">
          {es ? "Punto de encuentro" : "Meeting point"}
        </p>
        <h1 className="font-serif text-2xl font-bold text-cream sm:text-3xl">{teams}</h1>
        <p className="mt-3 text-sm leading-relaxed text-cream-muted sm:text-base">{lead}</p>
        {campaign.fanOrigin && (
          <p className="mt-2 text-sm text-cream">
            {es
              ? campaign.fanOrigin.labelEs || `Aficionados de ${campaign.fanOrigin.country}`
              : campaign.fanOrigin.labelEn || `Fans from ${campaign.fanOrigin.country}`}
          </p>
        )}
      </header>

      <Section title={es ? `${SITE_NAME}, Espoz y Mina 7` : `${SITE_NAME}, Espoz y Mina 7`}>
        <p className="text-sm text-cream-muted sm:text-base">
          <strong>{ADDRESS.full}</strong> ·{" "}
          {es ? hours.dayEs : hours.dayEn} {hours.opens}–{hours.closes} ·{" "}
          {es ? "Metro Sol (1, 2 y 3) o Sevilla (2)." : "Metro Sol (L1, L2, L3) or Sevilla (L2)."} ·{" "}
          {es ? "Sin reservas; por orden de llegada." : "No reservations; first come, first served."}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-event="directions"
            className="inline-block rounded bg-gold px-5 py-2 text-sm font-semibold text-black"
          >
            {es ? "CÓMO LLEGAR" : "HOW TO GET HERE"}
          </a>
          <Link
            href={es ? "/es/whats-on" : "/whats-on"}
            className="inline-block rounded border border-gold/50 px-5 py-2 text-sm text-gold underline"
          >
            {es ? "Partidos" : "What's On"}
          </Link>
          <Link
            href={es ? "/es/location" : "/location"}
            className="inline-block rounded border border-gold/50 px-5 py-2 text-sm text-cream underline"
          >
            {es ? "Cómo llegar (web)" : "How to get here"}
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}