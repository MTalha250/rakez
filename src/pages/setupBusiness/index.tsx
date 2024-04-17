"use client";

import dynamic from "next/dynamic";

const HeroBanner = dynamic(
  () => import("@/components/common/Banner/HeroBanner")
);
const BusinessSteps = dynamic(
  () => import("@/components/setupBusiness/BusinessSteps")
);

import business1 from "@/assets/business1.jpg";

const page = () => {
  return (
    <>
      <HeroBanner
        image={business1}
        title="Business Setup Is Just The Beginning"
        subTitle="WE MAKE IT EASY."
      />

      <BusinessSteps />

    </>
  );
};

export default page;
