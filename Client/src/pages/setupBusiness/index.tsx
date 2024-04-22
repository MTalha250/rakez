import HeroBanner from "@/components/common/Banner/HeroBanner";
import BusinessSteps from "@/components/setupBusiness/BusinessSteps";
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
