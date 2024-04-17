import Person from "@/assets/artist-white.jpg";
import { variants } from "@/constants";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-[60vh] md:h-[70vh] lg:h-[80vh] w-full md:rounded-tr-[300px]">
      {/* <img
        src={Person.src}
        alt="image"
        className="absolute h-[60vh] md:h-[70vh] lg:h-[80vh] w-full object-cover"
      /> */}
      <div className="h-[60vh] md:h-[70vh] lg:h-[80vh] w-full absolute">
        <img
          src={Person}
          className="h-full w-full object-cover"
          alt="no-image"
        />
      </div>
      {/* Overlay of hero section */}
      <div className="absolute w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-gradient-to-b from-black/50 to-secondary md:rounded-tr-[300px]"></div>
      <div
        className={`flex flex-col relative h-full justify-center items-center`}
      >
        {/* Content of hero */}
        <div className="container max-w-3xl ">
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="border-t-2 border-t-orange-500 h-3 w-10 mx-auto"></div>
            <div className="relative">
              <div className=" opacity-25 absolute top-0 text-[80px] md:text-[150px] lg:text-[200px] text-white/60 left-1/2 transform -translate-x-1/2">
                Contact
              </div>
              <h1
                className={`text-3xl sm:text-5xl lg:text-7xl text-green font-semibold drop-shadow-2xl mb-5`}
              >
                Contact Us
              </h1>
            </div>

            <h3
              className={`mb-5 text-lg md:text-xl lg:text-2xl font-medium text-neutral-100`}
            >
              Reach Out to Us and Let's Start Building Your Success Together.
              Our Team is Here to Assist You Every Step of the Way.
            </h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
