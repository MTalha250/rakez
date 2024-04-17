import "swiper/css";
import "swiper/css/effect-cards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import img from "@/assets/faq.png";
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
      staggerChildren: 0.2,
    },
  },
};
const faq = [
  {
    trigger:
      "How can I determine the cost of setting up my business with SCC House?",
    text: "Utilize our user-friendly cost calculator tool on our website to get a detailed breakdown of the expenses associated with establishing your business through SCC House.",
  },
  {
    trigger:
      "What services does SCC House offer to assist in the business setup process?",
    text: "SCC House provides a range of comprehensive business setup services, including a cost calculator, company name check, and various other resources to streamline the process for entrepreneurs.",
  },
  {
    trigger: "How does the company name check service at SCC House work?",
    text: "Our company name check service allows you to verify the availability of your desired business name, ensuring that it aligns with legal requirements and is unique to your enterprise.",
  },
  {
    trigger:
      "Can I get assistance in choosing a suitable business name for my company through SCC House?",
    text: "While we don't directly assist in choosing a business name, our company name check service ensures that your preferred name is available and complies with regulations.",
  },
  {
    trigger:
      "What types of businesses can benefit from SCC House services in Dubai?",
    text: "SCC House caters to a diverse range of businesses, including startups, SMEs, and large enterprises, offering tailored solutions to meet the specific needs of each business type.",
  },
  {
    trigger:
      "Is there a customer support team available to help with any additional queries I may have?",
    text: "Yes, our dedicated customer support team is readily available to assist you with any additional questions or concerns you may have about our services.",
  },
  {
    trigger:
      "Can I find information on the legal requirements for business setup in Dubai on the SCC House website?",
    text: "Absolutely, our website provides comprehensive information on the legal requirements for business setup in Dubai, guiding you through the necessary steps and regulations.",
  },
];

const Faq = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="lg:px-32 md:px-16 px-8 py-10 overflow-hidden"
      id="faqs"
    >
      <motion.h1
        variants={variants}
        className="text-center text-4xl md:text-5xl font-light "
      >
        Frequently
      </motion.h1>
      <motion.h1
        variants={variants}
        className="my-5 text-center text-5xl md:text-6xl font-bask font-bold "
      >
        <span
          className="bg-transparent"
          style={{
            background:
              "url('https://assets-global.website-files.com/64fed7eecff9e45d4bb373ed/653654b69ea7b7c5f9dbec63_underline.svg') left bottom no-repeat",
          }}
        >
          Asked Questions
        </span>
      </motion.h1>
      <motion.p
        variants={variants}
        className="font-extralight text-center my-10"
      >
        We've put together a comprehensive list of commonly asked questions to
        provide you with more insights into SCC House and the range of services
        we offer. Should you require further clarification or have additional
        inquiries, please don't hesitate to reach out to us. Our team is readily
        available to assist you and ensure you have all the information you
        need.
      </motion.p>
      <motion.div
        variants={variants}
        className="flex flex-col md:flex-row w-full"
      >
        <div className="md:w-1/2 pr-5 md:pr-10">
          <motion.img variants={variants} src={img} alt="" className="p-10" />
        </div>
        <motion.div variants={variants} className="md:w-1/2">
          <Accordion type="single" collapsible className="w-full">
            {faq.map((a, i) => (
              <motion.div variants={variants}>
                <AccordionItem
                  key={a.trigger}
                  value={`item-${i}`}
                  className="my-2"
                >
                  <AccordionTrigger className="px-6 rounded-lg justify-start bg-gray-200 hover:bg-secondary hover:text-white transition duration-300">
                    {a.trigger}
                  </AccordionTrigger>
                  <AccordionContent className="p-2 bg-white font-extralight text-md 2xl:text-xl">
                    {a.text}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Faq;
