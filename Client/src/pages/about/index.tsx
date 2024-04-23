import { Outlet } from "react-router-dom";
import AboutUpperNavContent from "@/components/common/UpperNavbar/AboutUpperNavContent";
import UpperNavbar from "@/components/common/UpperNavbar";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <UpperNavbar>
        <AboutUpperNavContent />
      </UpperNavbar>
      <Outlet />
    </>
  );
};

export default About;
