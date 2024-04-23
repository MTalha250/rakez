import AccountApplication from "@/components/banking/AccountApplication";
import BankingDes from "@/components/banking/BankingDes";
import BankingHero from "@/components/banking/BankingHero";
import UpperNavbar from "@/components/common/UpperNavbar";
import HomeUpperNavContent from "@/components/common/UpperNavbar/HomeUpperNavContent";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
