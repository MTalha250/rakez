import Cost from "@/assets/cost.jpg";
import HeroBanner from "@/components/common/Banner/HeroBanner";
import BussinessSetupCostNow from "@/components/Home/BussinessSetupCostNow";
import UpperNavbar from "@/components/common/UpperNavbar";
import HomeUpperNavContent from "@/components/common/UpperNavbar/HomeUpperNavContent";

const page = () => {
  return (
    <div className="mb-10">
      <UpperNavbar>
        <HomeUpperNavContent />
      </UpperNavbar>

      <HeroBanner
        image={Cost}
        title="Serv Corps Companies House Cost Calculator"
        subTitle="Calculate Your
        Business Setup Cost Now"
      />
      <BussinessSetupCostNow />
    </div>
  );
};

export default page;
