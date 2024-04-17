"use client";

import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/Home/about_new/About"));

const page = () => {
  return (
    <div className="min-h-screen pt-32">
      <About />
    </div>
  );
};

export default page;
