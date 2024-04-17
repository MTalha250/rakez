import img from "@/assets/book.png";
import Team from "@/assets/team.png";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Booking = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="relative py-14 md:py-20 px-5 md:px-16 bg-secondary text-white overflow-hidden">
      <motion.div
        initial={{
          left: "-12%",
        }}
        animate={{ rotate: scroll / 10 }}
        className="w-[100px] h-[150px]  md:w-[300px] md:h-[350px] border-2 border-primary absolute top-56 left-0 rounded-tl-[100px] rounded-br-[100px]"
      />
      <motion.div
        initial={{
          right: "-12%",
        }}
        animate={{ rotate: -scroll / 10 }}
        className="w-[100px] h-[150px] md:w-[300px] md:h-[350px] border-2 border-primary absolute top-96 right-0 rounded-tl-[100px] rounded-br-[100px]"
      />
      {/* <img
        src="https://www.creativezone.ae/wp-content/uploads/Sales_Team_Banner-2048x585.png"
        alt=""
        className="px-20"
      /> */}

      <div className="w-full h-[300px] relative">
        <img src={Team} className="w-full h-full object-cover" alt="no-image" />
      </div>

      <div className="mt-10">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-4xl font-bold text-primary">
            Book a Free Consultation
          </h1>
          <p className="my-5 text-center w-2/3 font-light">
            Receive expert advice from our business consultants, well-versed in
            all aspects of business setup and beyond – whether in the UAE, Saudi
            Arabia, or Qatar. We’ll handle your registration, licensing, and
            legal processes while giving you complete guidance, so book an
            appointment today!
          </p>
          <button className="px-8 py-2 bg-primary text-white rounded-full w-fit">
            Book Now
          </button>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:mt-16">
          <div className="py-10 flex-1">
            {/* <img src={img.src} alt="image" className="w-full max-h-[300px]" /> */}

            <div className="w-full h-[300px] relative">
              <img
                src={img}
                className="w-full h-full object-cover"
                alt="no-image"
              />
            </div>
          </div>
          <div className="space-y-5 px-10 text-neutral-200 flex-1">
            <h1 className="text-4xl font-bold text-white">
              The UAE <br />
              Business <br />
              Setup Guide <br />
              <span className="text-green">2024</span>
            </h1>
            <p>
              Discover the step-by-step procedures and essential considerations
              you need to know before setting up a company in the UAE.
            </p>
            <p>
              Get valuable insights and learn all the know-how to ensure a
              successful business journey.
            </p>
            <button className="px-8 py-2 border text-white bg-primary rounded-md w-fit">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
