import {
  FanCampaignThreeBarsGuide,
  fanCampaignMetadata,
} from "@/components/FanCampaignThreeBarsGuide";
import { VIKING_CAMPAIGN } from "@/lib/fan-campaign-three-bars";

export const metadata = fanCampaignMetadata(
  "viking",
  "no",
  VIKING_CAMPAIGN.paths.no,
);

export default function Page() {
  return (
    <FanCampaignThreeBarsGuide
      campaign="viking"
      locale="no"
      path={VIKING_CAMPAIGN.paths.no}
    />
  );
}