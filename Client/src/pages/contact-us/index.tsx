import UpperNavbar from "@/components/common/UpperNavbar";
import AboutUpperNavContent from "@/components/common/UpperNavbar/AboutUpperNavContent";
import Hero from "@/components/contact/Hero";
import ContactInfoForm from "@/components/contact/ContactInfoForm";

const page = () => {
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
