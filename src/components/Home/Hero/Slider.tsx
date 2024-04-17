"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

export default function Slider() {
  const images = [
    "https://img.freepik.com/free-photo/estate-highway-road-architecture-transportation_1127-2788.jpg?t=st=1713374729~exp=1713378329~hmac=9c24bc4609d0417d8e8612cfc874228867a89bbc504615c477fb4d575816e267&w=2000",
    "https://img.freepik.com/free-photo/top-view-old-tanker-that-ran-aground-overturned-shore-near-coast_1153-7297.jpg?t=st=1713374784~exp=1713378384~hmac=d6d6a3c111231c8fea552793163b66ae8f60f2c0a64cd6a26f272a0859c76ecd&w=2000",
    "https://img.freepik.com/free-photo/shanghai-lujiazui_1127-3132.jpg?t=st=1713374817~exp=1713378417~hmac=38d52c0e59288dcaaeff6d69c52a78c6185cbeed7493751c7e7e580fdd87a3e0&w=2000",
  ];
  return (
    <ImagesSlider className="h-screen" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center w-2/3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Establishing a Business is Only the Initial Step
        </motion.p>
        <motion.div className="mb-5 md:mb-10 flex text-base md:text-xl font-bold text-primary mt-3">
          <span className="border-r px-1">Mainland</span>
          <span className="border-r px-1">Free Zone</span>
          <span className="px-1">Offshore</span>
          {/* <span className=" px-1">KSA</span> */}
        </motion.div>
        <button className="px-4 py-2 text-lg backdrop-blur-sm border bg-primary/30 border-primary/40 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Start Now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
