import pic from "@/assets/whoWeAreBanner.jpg";
import ContainerWrapper from "@/components/common/ContainerWrapper";
import { variants } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import StatsNumbers from "./StatsNumbers";

const Stats = () => {
  return (


    <div className={`flex flex-col relative min-h-[75vh] `}>
      {/* <img
        src={pic.src}
        alt="image"
        className="absolute h-full w-full object-cover"
      /> */}
      <Image
        src={pic.src}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt="no-image"
        className="absolute h-full w-full object-cover"
      />
      {/* Overlay of hero section */}
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/50 to-secondary"></div>

      {/* Content of hero */}
      <ContainerWrapper classes="py-14 md:py-24 z-50">
        <div className="flex justify-center">
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className=" "
          >
            <h1
              className={`text-3xl sm:text-5xl text-green font-semibold drop-shadow-2xl mb-5 text-center`}
            >
              SCC House By The Numbers
            </h1>

            <h3
              className={`mb-2 text-lg md:text-xl font-medium text-neutral-100 text-center`}
            >
              Discover Our Performance Metrics
            </h3>
          </motion.div>
        </div>

        <div className="mt-14 grid justify-center grid-cols-3 md:grid-cols-5">
          <div>
            <StatsNumbers
              number="10"
              text="Years in Business"
              color="text-orange-500"
              boxColor="bg-orange-300/40"
            />
          </div>
          <div>
            <StatsNumbers
              number="25"
              text="Awards Won"
              color="text-purple-500"
              boxColor="bg-purple-300/40"
            />
          </div>
          <div>
            <StatsNumbers
              number="35K+"
              text="Clients"
              color="text-pink-500"
              boxColor="bg-pink-300/40"
            />
          </div>
          <div className="hidden md:block">
            <StatsNumbers
              number="160 "
              text="Team members"
              color="text-teal-500"
              boxColor="bg-teal-300/40"
            />
          </div>
          <div className="hidden md:block">
            <StatsNumbers
              number="100%"
              text="Customer Satisfaction"
              color="text-rose-500"
              boxColor="bg-rose-300/40"
            />
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default Stats;
