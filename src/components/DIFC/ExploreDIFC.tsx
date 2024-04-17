import { variants } from "@/constants";
import { motion } from "framer-motion";
import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { ImAddressBook } from "react-icons/im";
import { IoIosPricetags } from "react-icons/io";
import { LiaDigitalOcean } from "react-icons/lia";
import { SiArkecosystem } from "react-icons/si";
import { TbLicense } from "react-icons/tb";
import StatsNumbers from "../Home/Stats/StatsNumbers";
import ContainerWrapper from "../common/ContainerWrapper";
import ExploreCards from "./ExploreCards";

import Img1 from "@/assets/img1.webp";
import Image from "next/image";

const ExploreDIFC = () => {
  return (
    <div className={`flex flex-col relative min-h-[100vh] `}>
      {/* <img
        src={
          "https://cdn.pixabay.com/photo/2024/02/15/22/58/ai-generated-8576317_640.jpg"
        }
        alt="image"
        className="absolute h-full w-full object-cover"
      /> */}

      <div className="w-full h-full absolute">
        <Image
          src={Img1.src}
          layout="fill"
          objectFit="cover"
          // objectPosition="center"
          alt="no-image"
        />
      </div>
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
              className={`text-3xl sm:text-5xl text-white font-semibold drop-shadow-2xl mb-5 text-center`}
            >
              Explore Serv Corps Companies House Zone’s All-Inclusive{" "}
              <span className="text-green">Tech Start-up</span> Package in DIFC
            </h1>

            <div className="flex justify-start">
              <div className="rounded-sm bg-white p-3 font-bold">
                USD 7,850{" "}
                <span className="bg-c_orangish rounded-md p-2 text-white ml-2">
                  Only
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ExploreCards
            icon={<TbLicense className="text-c_greenish text-[50px]" />}
            title="Commercial Trade License"
            des="A commercial trade license is a legal permit that allows
                    individuals or companies to conduct business activities
                    within a specific jurisdiction. It ensures compliance with
                    regulations, builds credibility, and opens doors to growth
                    opportunities."
          />
          <ExploreCards
            icon={<ImAddressBook className="text-c_greenish text-[50px]" />}
            title="Co-working Space with Prestigious DIFC Office Address "
            des="A co-working space in DIFC offers a modern workspace with a prestigious office address in Dubai's financial hub. It provides entrepreneurs and businesses with flexible solutions, high-speed internet, and shared amenities for collaboration, networking, and cost-effective operations."
          />
          <ExploreCards
            icon={<FaCcVisa className="text-c_greenish text-[50px]" />}
            title="4 Visa Allocation"
            des="4 Visa Allocation, signifies the availability of four visas for individuals linked to a business or organization. These visas enable legal residence and work within a specific area, aiding international operations, workforce management, and talent acquisition."
          />
          <ExploreCards
            icon={<LiaDigitalOcean className="text-c_greenish text-[50px]" />}
            title="Fully Digital Onboarding Process "
            des="A fully digital onboarding process streamlines the procedure of welcoming new customers or employees by leveraging digital platforms. It eliminates paperwork, reduces processing time, and enhances efficiency."
          />
          <ExploreCards
            icon={<SiArkecosystem className="text-c_greenish text-[50px]" />}
            title="Access to all DIFC Amenities and Ecosystem  "
            des="Access to all DIFC amenities and ecosystem offers comprehensive access to facilities, services, and opportunities within the Dubai International Financial Centre, promoting growth and success."
          />
          <ExploreCards
            icon={<IoIosPricetags className="text-c_greenish text-[50px]" />}
            title="Same Renewal Price for 5 Years"
            des="Same Renewal Price for 5 Years, means that the renewal cost remains consistent for a period of five years. This provides stability and predictability in financial planning and budgeting, allowing businesses or individuals to anticipate expenses accurately over an extended period."
          />
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default ExploreDIFC;
