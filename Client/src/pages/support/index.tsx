import Contact from "@/components/Home/contact_new/Contact";
import { useEffect } from "react";
const page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-c_blue/50">
      <div className="bg-black h-[16vh]" />
      <Contact />
    </div>
  );
};

export default page;
