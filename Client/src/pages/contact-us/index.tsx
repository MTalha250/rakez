import UpperNavbar from "@/components/common/UpperNavbar";
import AboutUpperNavContent from "@/components/common/UpperNavbar/AboutUpperNavContent";
import Hero from "@/components/contact/Hero";
import ContactInfoForm from "@/components/contact/ContactInfoForm";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <UpperNavbar>
        <AboutUpperNavContent />
      </UpperNavbar>
      <Hero />
      <ContactInfoForm />
    </>
  );
};

export default page;
