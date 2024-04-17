"use client";

import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/components/Home/contact_new/Contact"));

import React from "react";

const page = () => {
  return (
    <div className="pt-32 min-h-screen bg-c_blue/50">
      <Contact />
    </div>
  );
};

export default page;
