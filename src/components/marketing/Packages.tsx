import Branding from "@/assets/branding.jpg";
import developer from "@/assets/developer.jpg";
import digital from "@/assets/digital.jpg";
import event from "@/assets/event.jpg";
import media from "@/assets/media.jpg";
import socialMedia from "@/assets/socialMedia.jpg";
import { variants } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GiDividedSquare } from "react-icons/gi";
import ContainerWrapper from "../common/ContainerWrapper";

const Packages = () => {
  return (
    <>
      <div className="py-14 md:py-24">
        <ContainerWrapper>
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className=" "
          >
            <h1
              className={`text-3xl sm:text-5xl text-black font-semibold drop-shadow-2xl mb-10 text-center`}
            >
              Learn more about our exclusive{" "}
              <span className="text-green">‘Starter Packages’</span> that will
              help ‘kick-start your business journey.
            </h1>
          </motion.div>
        </ContainerWrapper>

        {/* Logo desiging */}
        <div className="bg-c_blue/50 py-12">
          <ContainerWrapper>
            {/* BRANDING & LOGO DESIGN PACKAGE */}
            <div className="flex flex-col md:flex-row gap-20 min-h-[350px]">
              <div className="flex-1">
                <div className="border-2 border-t border-orange-500 w-[50px] my-2"></div>
                <h3 className="text-orange-500 font-bold text-[16px] uppercase">
                  Branding & Logo Design Package
                </h3>
                <ul className="mt-5">
                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">Concept Development</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">
                      Brand Identity Design including 3 Logo Variations
                    </p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">Brand Guidelines</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">Business Card</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">Email Signature</p>
                  </li>

                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">Letter Head</p>
                  </li>
                </ul>
                <button className="btn  bg-orange-500 border-none mt-7 text-white hover:text-black rounded-tl-[20px] rounded-br-[20px]">
                  Get Started
                </button>
              </div>
              <div className="flex-1">
                <div className="h-[300px] sm:h-full rounded-tl-[100px] rounded-br-[100px]">
                  <div className="w-full rounded-tl-[100px] rounded-br-[100px] h-full relative">
                    <Image
                      src={Branding.src}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt="no-image"
                      className="rounded-tl-[100px] rounded-br-[100px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ContainerWrapper>
        </div>

        {/* Website Design */}
        <ContainerWrapper classes="py-12">
          <div className="flex flex-col md:flex-row-reverse gap-20 min-h-[450px]">
            <div className="flex-1">
              <div className="border-2 border-t border-orange-500 w-[50px] my-2"></div>
              <h3 className="text-orange-500 font-bold text-[16px] uppercase">
                Website Design + Development Package
              </h3>

              <ul className="mt-5">
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">Domain Registration</p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">Website UI Design</p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">Website UX Design</p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">Website Development</p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">Email Configuration</p>
                </li>
              </ul>
              <button className="btn  bg-orange-500 border-none mt-7 text-white hover:text-black rounded-tl-[20px] rounded-br-[20px]">
                Get Started
              </button>
            </div>
            <div className="flex-1">
              <div className="h-[300px] sm:h-full rounded-tl-[100px] rounded-br-[100px]">
                <div className="w-full rounded-tl-[100px] rounded-br-[100px] h-full relative">
                  <Image
                    src={developer.src}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="no-image"
                    className="rounded-tl-[100px] rounded-br-[100px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </ContainerWrapper>

        {/* Digital Marketing */}
        <div className="bg-c_blue/50 py-12">
          <ContainerWrapper>
            <div className="flex flex-col md:flex-row gap-20 min-h-[350px]">
              <div className="flex-1">
                <div className="border-2 border-t border-orange-500 w-[50px] my-2"></div>
                <h3 className="text-orange-500 font-bold text-[16px] uppercase">
                  Digital Marketing
                </h3>
                <ul className="mt-5">
                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">Google Ad Account Setup</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">Keywords Analysis</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">Landing Page Optimisation</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">Campaign Setup</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">SEO</p>
                  </li>

                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">
                      Social Media Paid Campaign Setup
                    </p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">Monitoring and Reporting</p>
                  </li>
                </ul>
                <button className="btn  bg-orange-500 border-none mt-7 text-white hover:text-black rounded-tl-[20px] rounded-br-[20px]">
                  Get Started
                </button>
              </div>
              <div className="flex-1">
                <div className="h-[300px] sm:h-full rounded-tl-[100px] rounded-br-[100px]">
                  <div className="w-full rounded-tl-[100px] rounded-br-[100px] h-full relative">
                    <Image
                      src={digital.src}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt="no-image"
                      className="rounded-tl-[100px] rounded-br-[100px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ContainerWrapper>
        </div>

        {/* Social Media Marketing */}
        <ContainerWrapper classes="py-12">
          <div className="flex flex-col md:flex-row-reverse gap-20 min-h-[450px]">
            <div className="flex-1">
              <div className="border-2 border-t border-orange-500 w-[50px] my-2"></div>
              <h3 className="text-orange-500 font-bold text-[16px] uppercase">
                Social Media Marketing
              </h3>

              <ul className="mt-5">
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">
                    Social Media Strategy with Content Pillars
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">
                    Content Strategy and Creation – 10 -12 posts per month
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">
                    Community Building and Management
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">Campaigns and Contests</p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">Monitoring and Reporting</p>
                </li>
              </ul>
              <button className="btn  bg-orange-500 border-none mt-7 text-white hover:text-black rounded-tl-[20px] rounded-br-[20px]">
                Get Started
              </button>
            </div>
            <div className="flex-1">
              <div className="h-[300px] sm:h-full rounded-tl-[100px] rounded-br-[100px]">
                <div className="w-full rounded-tl-[100px] rounded-br-[100px] h-full relative">
                  <Image
                    src={socialMedia.src}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="no-image"
                    className="rounded-tl-[100px] rounded-br-[100px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </ContainerWrapper>

        {/* PR & Media Exposure*/}
        <div className="bg-c_blue/50 py-12">
          <ContainerWrapper>
            <div className="flex flex-col md:flex-row gap-20 min-h-[350px]">
              <div className="flex-1">
                <div className="border-2 border-t border-orange-500 w-[50px] my-2"></div>
                <h3 className="text-orange-500 font-bold text-[16px] uppercase">
                  PR & Media Exposure
                </h3>
                <ul className="mt-5">
                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">
                      Curating Thought Leadership Articles
                    </p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">Media Distribution</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">Media Placement</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <span>
                      <GiDividedSquare className="text-c_orangish text-[18px]" />
                    </span>
                    <p className="text-[14px]">Reporting</p>
                  </li>
                </ul>
                <button className="btn  bg-orange-500 border-none mt-7 text-white hover:text-black rounded-tl-[20px] rounded-br-[20px]">
                  Get Started
                </button>
              </div>
              <div className="flex-1">
                <div className="h-[300px] sm:h-full rounded-tl-[100px] rounded-br-[100px]">
                  <div className="w-full rounded-tl-[100px] rounded-br-[100px] h-full relative">
                    <Image
                      src={media.src}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt="no-image"
                      className="rounded-tl-[100px] rounded-br-[100px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ContainerWrapper>
        </div>

        {/* Event Management */}
        <ContainerWrapper classes="py-12">
          <div className="flex flex-col md:flex-row-reverse gap-20 min-h-[450px]">
            <div className="flex-1">
              <div className="border-2 border-t border-orange-500 w-[50px] my-2"></div>
              <h3 className="text-orange-500 font-bold text-[16px] uppercase">
                Event Management
              </h3>

              <ul className="mt-5">
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">Venue Suggestion and Booking</p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">Invites and Email Blasts</p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">Event Logistics</p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">
                    On-the-day Coordination & Assistance
                  </p>
                </li>
                <li className="flex items-center gap-2 mb-1">
                  <span>
                    <GiDividedSquare className="text-c_orangish text-[18px]" />
                  </span>
                  <p className="text-[14px]">Reporting</p>
                </li>
              </ul>
              <button className="btn  bg-orange-500 border-none mt-7 text-white hover:text-black rounded-tl-[20px] rounded-br-[20px]">
                Get Started
              </button>
            </div>
            <div className="flex-1">
              <div className="h-[300px] sm:h-full rounded-tl-[100px] rounded-br-[100px]">
                <div className="w-full rounded-tl-[100px] rounded-br-[100px] h-full relative">
                  <Image
                    src={event.src}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    alt="no-image"
                    className="rounded-tl-[100px] rounded-br-[100px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </ContainerWrapper>
      </div>
    </>
  );
};

export default Packages;
