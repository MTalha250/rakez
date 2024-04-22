import Zone from "../../../assets/zone1.jpg";

import BusinessZonesOverview from "@/components/about/BusinessZonesOverview";
import HeroBanner from "@/components/common/Banner/HeroBanner";
import BusinessPromotionBanner from "@/components/common/BusinessPromotionBanner";
const page = () => {
  return (
    <>
      <HeroBanner
        image={Zone}
        title="Serv Corps Companies House Zones"
        subTitle="SPECIALISED ZONES TAILORED TO YOUR SPECIFIC NEEDS"
      />

      <BusinessZonesOverview />

      <BusinessPromotionBanner />
    </>
  );
};

export default page;
