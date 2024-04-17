"use client";
import line from "@/assets/line.svg";
import img1 from "@/assets/s1.png";
import img2 from "@/assets/s2.png";
import img3 from "@/assets/s3.png";
import img4 from "@/assets/s4.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const services = [
  {
    title: "Blog Writing",
    description:
      "Dive into the world of impactful storytelling with our blog writing services. Our team of expert writers is adept at creating engaging, informative, and SEO-friendly content that resonates with your audience. From industry-specific articles to general interest blogs, we ensure your voice is heard.",
    img: img1.src,
  },
  {
    title: "BLOG SCHEDULING",
    description:
      "Stay ahead in the game with our seamless blog scheduling solutions. We understand the importance of consistency in content creation. Our strategic scheduling ensures your blog stays fresh, relevant, and continually engaging, keeping your audience hooked and coming back for more.",
    img: img2.src,
  },
  {
    title: "SOCIAL MEDIA AUTOMATION",
    description:
      "Embrace the future with our social media automation services. We streamline your social media management, ensuring consistent and timely posting across all platforms. Our tools and expertise in automation let you connect with your audience efficiently, enhancing engagement and brand presence.",
    img: img3.src,
  },
  {
    title: "SEARCH ENGINE OPTIMIZATION",
    description:
      "Elevate your online visibility with our specialized SEO services. We employ the latest techniques and tools to enhance your website’s ranking on search engines. By optimizing your content and structure, we drive more organic traffic to your site, increasing leads and conversions.",
    img: img4.src,
  },
];

const Services = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      id="services"
      className="bg-c_blue/50 py-20 lg:px-32 sm:px-16 px-8 rounded-t-3xl"
    >
      <div className="flex gap-10 flex-col md:flex-row items-center justify-around text-white">
        <motion.div className="w-full md:w-2/5" variants={variants}>
          <h1 className="text-2xl font-light text-c_orangish">
            Business Activities
          </h1>
          <h1 className="mt-3 flex text-4xl font-bold font-bask">
            <span>
              Unlock unlimited business potential.
              <motion.svg
                initial={{ scale: 0 }}
                whileInView={{
                  scale: 1,
                  transition: { duration: 1 },
                }}
                viewport={{ once: true }}
                viewBox="63.222 141.9655 565.2742 41.0005"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-[0.5deg] origin-left -z-10"
              >
                <path
                  d="M 63.222 170.63 C 116.369 145.339 667.433 131.693 626.306 151.264 L 627.423 150.541 C 627.736 150.524 627.994 151.342 627.999 152.369 C 628.005 153.379 626.947 149.124 626.64 149.165 L 627.407 149.489 C 593.945 129.158 60.16 174.244 63.683 182.966 L 63.222 170.63 Z"
                  fill="#66dc8d"
                  transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, -7.105427357601002e-15)"
                />
              </motion.svg>
            </span>
          </h1>
        </motion.div>
        <motion.p
          variants={variants}
          className="w-full md:w-3/5 text-justify tracking-wider text-gray-300"
        >
          We offer 2,500+ business activities, enabling you to Grow from Dubai.
          A single license permits multiple activities, simplifying expansion
          across various fields, industries, and niche markets. Discover
          unparalleled flexibility with Meydan Free Zone.
        </motion.p>
      </div>
      <motion.div variants={variants} className="mt-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="ml-5">
            <CarouselItem className="sm:basis-[500px] h-[40vh] group rounded-3xl relative overflow-hidden">
              <img
                src="https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/65bb8a3546dcf67b191669ed_telenet%20and%20boobook%20case%20study.png"
                alt=""
                className="absolute w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
              />
              <div className="absolute bg-gradient-to-b from-transparent to-black bottom-0 w-full p-5">
                <p className="text-white mt-2 mb-5 sm:text-xl">Content</p>
                <button className="bg-white px-5 py-2 rounded-full">
                  Read More
                </button>
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-[500px] h-[40vh] group rounded-3xl relative overflow-hidden">
              <img
                src="https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/65bb8a3546dcf67b191669ed_telenet%20and%20boobook%20case%20study.png"
                alt=""
                className="absolute w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
              />
              <div className="absolute bg-gradient-to-b from-transparent to-black bottom-0 w-full p-5">
                <p className="text-white mt-2 mb-5 sm:text-xl">Content</p>
                <button className="bg-white px-5 py-2 rounded-full">
                  Read More
                </button>
              </div>
            </CarouselItem>
            <CarouselItem className="sm:basis-[500px] h-[40vh] group rounded-3xl relative overflow-hidden">
              <img
                src="https://assets-global.website-files.com/64feee5d05b1a0a2a3bc6f25/65bb8a3546dcf67b191669ed_telenet%20and%20boobook%20case%20study.png"
                alt=""
                className="absolute w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
              />
              <div className="absolute bg-gradient-to-b from-transparent to-black bottom-0 w-full p-5">
                <p className="text-white mt-2 mb-5 sm:text-xl">Content</p>
                <button className="bg-white px-5 py-2 rounded-full">
                  Read More
                </button>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>
    </motion.div>
  );
};

export default Services;
