import HeroBanner from "@/components/common/Banner/HeroBanner";
import BusinessSteps from "@/components/setupBusiness/BusinessSteps";
import business1 from "@/assets/business1.jpg";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
