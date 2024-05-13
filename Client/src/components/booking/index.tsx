import img from "@/assets/book.png";
import Team from "@/assets/team.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const Booking = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720]);

  return (
    <motion.div className="relative py-14 md:py-20 px-5 md:px-16 bg-secondary text-white overflow-hidden">
      <motion.div
        initial={{
          left: "-12%",
        }}
        style={{ rotate: rotate }}
        className="w-[100px] h-[150px]  md:w-[300px] md:h-[350px] border-2 border-primary absolute top-56 left-0 rounded-tl-[100px] rounded-br-[100px]"
      />
      <motion.div
        initial={{
          right: "-12%",
        }}
        style={{ rotate: rotate }}
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
          <h4 className="text-center text-4xl font-bold text-primary">
            Book a Free Consultation
          </h4>
          <p className="my-5 text-center w-2/3 font-light">
            Get expert advice from our business consultants in Dubai, who know
            everything about setting up a business and more. If you're in the
            UAE, Saudi Arabia, or Qatar, book a free consultation! We'll handle
            your licensing, registration, and legal steps, and guide you through
            the entire process of your business setup in Dubai.
          </p>
          <Link
            to="/meeting"
            className="px-8 py-2 bg-primary text-white rounded-full w-fit"
          >
            Book Now
          </Link>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:mt-16">
          <div className="py-10 flex-1">
            <div className="w-full h-[300px] relative">
              <img
                src={img}
                className="w-full h-full object-cover"
                alt="no-image"
              />
            </div>
          </div>
          <div className="space-y-5 px-10 text-neutral-200 flex-1">
            <h4 className="text-4xl font-bold text-white">
              The Business <br />
              Setup Guide <br />
              in UAE <br />
              <span className="text-green">for 2024</span>
            </h4>
            <p>
              Learn everything you need to know about business setup in Dubai,
              including step-by-step instructions for starting a business in the
              UAE.
            </p>
            <p>
              Get the important information and skills you need to make sure
              your business in Dubai is successful.
            </p>
            <button className="px-8 py-2 border text-white bg-primary rounded-md w-fit">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Booking;
