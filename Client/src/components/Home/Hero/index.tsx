import { useState } from "react";
import GetInTouchModal from "./GetInTouchModal";
import Slider from "./Slider";
import { motion } from "framer-motion";
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
      staggeredChildren: 0.3,
    },
  },
};

const content = [
  {
    step: 1,
    title: "Free Consultation with Business Setup Advisor",
    description:
      "Arrange a face-to-face meeting or a Zoom call with one of our advisors. We recommend having a basic understanding of your business activity, the number of shareholders, your target customers, and office space requirements. Even if you need assistance, our team is ready to support you in finalizing your business plan.",
  },
  {
    step: 2,
    title: "Selecting the Right Jurisdiction",
    description:
      "We will assist you in selecting the right jurisdiction for your company, tailored to your unique needs and target market. You can establish your business in the UAE Mainland for maximum operational flexibility, leverage the benefits of a Free Zone setup if you specialize in a specific industry or seek cost-effective solutions, or consider an offshore setup to take advantage of the UAE’s thriving business environment from anywhere in the world.",
  },
  {
    step: 3,
    title: "Applying for Trade License",
    description:
      "Prepare all your registration documents, including your Application Form, Memorandum of Association, Certificate of Incorporation, Bank and Residency Statements, and more. Requirements differ depending on the license type and jurisdiction, so our team will gladly assist you throughout the process.",
  },
  {
    step: 4,
    title: "Initiating Visa and Emirates ID Applications",
    description:
      "Before relocating to the UAE, it is essential to apply for the necessary visas for yourself, your employees, and any dependents, if required. The specific visa options and the availability of visas for your staff and dependents will depend on the jurisdiction you have selected for your business. Our team will guide you through the visa application process and provide relevant information and support to ensure a smooth and successful transition to the UAE.",
  },
  {
    step: 5,
    title: "Opening a Corporate Bank Account",
    description:
      "A corporate bank account is necessary to conduct business in the UAE. You can choose from several national, international, and digital banks, depending on your financial requirements. Our team of experts will help you determine the best bank for your needs and prepare the requirements for submission to the bank.",
  },
];

const Hero = () => {
  const [step, setStep] = useState(1);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Slider />
      <motion.div
        variants={variants}
        className="bg-primary text-gray-800 p-10 xl:px-24 md:px-16 rounded-lg shadow-xl"
      >
        <h1 className="text-center text-3xl md:text-4xl font-bold mb-4">
          <span className="bg-black text-white p-2 px-5 italic">
            Easy Steps
          </span>
        </h1>
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
          Easy Steps To Start a Business in the Dubai
        </h2>
        <div className="py-8 md:py-12 flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <ul className="flex flex-col space-y-4 md:space-y-6">
              {content.map((stepContent, index) => (
                <li
                  key={index}
                  onClick={() => setStep(stepContent.step)}
                  className={`pl-4 md:pl-6 py-3 md:py-4 text-lg md:text-xl font-semibold cursor-pointer transition duration-300 ${
                    stepContent.step === step
                      ? "border-l-4  text-c_greenish border-c_greenish"
                      : "hover:border-l-4  hover:text-white hover:border-white"
                  }`}
                >
                  {stepContent.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-white rounded-lg py-8 md:py-12 px-6 md:px-12 md:w-1/2">
            {content
              .filter((c) => c.step === step)
              .map((c, index) => (
                <div key={index} className="space-y-6">
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <h1 className="text-c_greenish font-bold text-4xl md:text-5xl">
                      {c.step}
                    </h1>
                    <p className="font-bold text-xl md:text-2xl">{c.title}</p>
                  </div>
                  <p className="text-lg leading-relaxed">{c.description}</p>
                </div>
              ))}
          </div>
        </div>
      </motion.div>

      {toggle && <GetInTouchModal toggle={toggle} handleToggle={handleClick} />}
    </div>
  );
};

export default Hero;
