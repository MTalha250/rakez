import { Outlet } from "react-router-dom";
import AboutUpperNavContent from "@/components/common/UpperNavbar/AboutUpperNavContent";
import UpperNavbar from "@/components/common/UpperNavbar";

const About = () => {
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
