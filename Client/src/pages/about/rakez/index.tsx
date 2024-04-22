import { default as CityHero } from "../../../assets/city.jpg";

import RakezExploreSection from "@/components/about/RakezExploreSection";
import RakezInformationSection from "@/components/about/RakezInformationSection";
import RakezStatisticsSection from "@/components/about/RakezStatisticsSection";
import HeroBanner from "@/components/common/Banner/HeroBanner";
import BusinessPromotionBanner from "@/components/common/BusinessPromotionBanner";
const page = () => {
  return (
    <>
      <HeroBanner
        image={CityHero}
        title="RAS AL KHAIMAH ECONOMIC ZONE"
        subTitle="WHERE YOUR BUSINESS SET-UP JOURNEY BEGINS"
      />

      <RakezInformationSection />

      <RakezStatisticsSection />

      <RakezExploreSection />

      <BusinessPromotionBanner />
    </>
  );
};

export default page;
