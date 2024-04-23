import { useEffect, useState } from "react";
import Hero from "@/components/Home/Hero";
import Ecosystem from "@/components/ecosystem";
import HomeUpperNavContent from "@/components/common/UpperNavbar/HomeUpperNavContent";
import UpperNavbar from "@/components/common/UpperNavbar";
import Booking from "@/components/booking";
import Contact from "@/components/Home/contact_new/Contact";
import CallBackModal from "@/components/Home/Hero/CallBackModal";
import BusinessSetupCardsSection from "@/components/Home/businessSetupCardsSection/BusinessSetupCardsSection";
import Persons from "@/components/Home/persons/Persons";

const page = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setToggle(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="">
      <UpperNavbar>
        <HomeUpperNavContent />
      </UpperNavbar>
      <Hero />
      <BusinessSetupCardsSection />
      <Ecosystem />
      <Booking />
      <Persons />

      <Contact />
      {toggle && <CallBackModal toggle={toggle} handleToggle={handleClick} />}
    </div>
  );
};

export default page;
