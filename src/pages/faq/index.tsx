import React from "react";

// Dynamic import
import dynamic from "next/dynamic";

// Dynamic import
const Faq = dynamic(() => import("@/components/Home/faq"));

const page = () => {
  return (
    <div className="min-h-screen pt-20">
      <Faq />
    </div>
  );
};

export default page;
