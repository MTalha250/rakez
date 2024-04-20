import AccountApplication from "@/components/banking/AccountApplication";
import BankingDes from "@/components/banking/BankingDes";
import BankingHero from "@/components/banking/BankingHero";
import UpperNavbar from "@/components/common/UpperNavbar";
import HomeUpperNavContent from "@/components/common/UpperNavbar/HomeUpperNavContent";

const page = () => {
  return (
    <>
      <UpperNavbar>
        <HomeUpperNavContent />
      </UpperNavbar>
      <BankingHero />
      <BankingDes />

      <AccountApplication />
    </>
  );
};

export default page;
