import {
  FanCampaignThreeBarsGuide,
  fanCampaignMetadata,
} from "@/components/FanCampaignThreeBarsGuide";
import { VIKING_CAMPAIGN } from "@/lib/fan-campaign-three-bars";

export const metadata = fanCampaignMetadata(
  "viking",
  "en",
  VIKING_CAMPAIGN.paths.en,
);

export default function Page() {
  return (
    <FanCampaignThreeBarsGuide
      campaign="viking"
      locale="en"
      path={VIKING_CAMPAIGN.paths.en}
    />
  );
}