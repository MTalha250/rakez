"use client";

import City from "../../../assets/city.jpg";


import dynamic from "next/dynamic";


const RasAlKhaimahCarouselSection = dynamic(() => import("@/components/about/RasAlKhaimahCarouselSection/RasAlKhaimahCarouselSection"));
const RasAlKhaimahInformationSection = dynamic(() => import("@/components/about/RasAlKhaimahInformationSection"));
const HeroBanner = dynamic(() => import("@/components/common/Banner/HeroBanner"));
const BusinessPromotionBanner = dynamic(() => import("@/components/common/BusinessPromotionBanner"));

const page = () => {
  return (
    <>
      <HeroBanner
        image={City}
        title="RAS AL KHAIMAH"
        subTitle="IDEAL DESTINATION FOR BUSINESS AND QUALITY LIVING"
      />

      <RasAlKhaimahInformationSection />

      <RasAlKhaimahCarouselSection />

      <BusinessPromotionBanner />
    </>
  );
};

export default page;
