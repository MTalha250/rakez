"use client";

import Work from "../../../assets/work.jpg";

import dynamic from "next/dynamic";

const FacilitiesOverviewSection = dynamic(
  () => import("@/components/about/FacilitiesOverviewSection")
);
const HeroBanner = dynamic(
  () => import("@/components/common/Banner/HeroBanner")
);
const BusinessPromotionBanner = dynamic(
  () => import("@/components/common/BusinessPromotionBanner")
);

const page = () => {
  return (
    <div className="mb-10">
      <HeroBanner
        image={Work}
        title="SERV CORPS FACILITIES"
        subTitle="SPACES DESIGNED TO HELP YOU THRIVE"
      />

      <FacilitiesOverviewSection />

      <BusinessPromotionBanner />
    </div>
  );
};

export default page;
