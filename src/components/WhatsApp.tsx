import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const WhatsApp = () => {
  return (
    <a
      className="fixed top-[25%] -translate-y-1/2 left-0  bg-c_orangish p-2"
      href="https://wa.me/971521508056"
      target="_blank"
      style={{
        zIndex: 1000,
      }}
    >
      <IoLogoWhatsapp className="text-3xl text-white" />
    </a>
  );
};

export default WhatsApp;
