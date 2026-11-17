import {
  SportsEventCampaignView,
  sportsEventCampaignMetadata,
} from "@/components/SportsEventCampaignPage";
import { campaignById, generatedCampaigns } from "@/lib/sports-event-registry";

export function generateStaticParams() {
  return generatedCampaigns().map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const campaign = campaignById(id);
  if (!campaign) return {};
  return sportsEventCampaignMetadata(campaign, "en");
}

export default async function CampaignPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const campaign = campaignById(id);
  if (!campaign || campaign.pageMode !== "generated") {
    return null;
  }
  return <SportsEventCampaignView campaign={campaign} locale="en" />;
}