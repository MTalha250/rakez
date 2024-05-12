import AccountApplication from "@/components/banking/AccountApplication";
import BankingDes from "@/components/banking/BankingDes";
import BankingHero from "@/components/banking/BankingHero";
import UpperNavbar from "@/components/common/UpperNavbar";
import HomeUpperNavContent from "@/components/common/UpperNavbar/HomeUpperNavContent";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

 
const Bankingpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          Opening business bank account in Dubai -Serv Coprs Companies House
        </title>
        <meta
          name="description"
          content="Are You Looking for Banking Solution in Dubai for Your Business?
Open Your Business Bank Account in Dubai with Serv Corps Companies House. Get started
now!"
        />
        <link
          rel="canonical"
          href="https://www.scchouse.com/business bank
account solution in Dubai"
        />
      </Helmet>
      <UpperNavbar>
        <HomeUpperNavContent />
      </UpperNavbar>
      <BankingHero />
      <BankingDes />
      <AccountApplication />
    </>
  );
};

export default Bankingpage;
