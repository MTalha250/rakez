"use client";

import { default as CityHero } from "../../../assets/city.jpg";

import dynamic from "next/dynamic";

const RakezExploreSection = dynamic(
  () => import("@/components/about/RakezExploreSection")
);
const RakezInformationSection = dynamic(
  () => import("@/components/about/RakezInformationSection")
);
const RakezStatisticsSection = dynamic(
  () => import("@/components/about/RakezStatisticsSection")
);
const HeroBanner = dynamic(
  () => import("@/components/common/Banner/HeroBanner")
);
const BusinessPromotionBanner = dynamic(
  () => import("@/components/common/BusinessPromotionBanner")
);

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
