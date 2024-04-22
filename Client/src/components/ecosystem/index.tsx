import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Tax and Accountancy",
    des: "Maximize financial efficiency with our Tax and Accountancy services. We provide expert guidance on tax compliance, financial reporting, and strategic planning to optimize your financial management. Partner with us for accurate, reliable, and personalized solutions.",
  },
  {
    title: "Employment Solution",
    des: "Unlock your workforce potential with our comprehensive Employment Solutions. From recruitment to training and HR management, we provide tailored services to meet your staffing needs. Partner with us for efficient and effective solutions that drive business success.",
  },
  {
    title: "Payroll Services",
    des: "Elevate your business with our seamless payroll services. From accurate calculations to tax compliance, we handle it all, letting you focus on what matters most. Let us simplify your payroll process and keep your employees satisfied.",
  },
  {
    title: "Visa Services",
    des: "Navigate global travel seamlessly with our Visa Services. We handle visa applications, documentation, and requirements, ensuring a smooth journey for individuals and businesses. Trust us to simplify the visa process, so you can focus on your travel goals.",
  },
  {
    title: "Outsourcing Solutions",
    des: "Optimize your operations with our Outsourcing solutions. We offer cost-effective and efficient outsourcing services tailored to your business needs. Partner with us to streamline processes, reduce overheads, and boost productivity.",
  },
  {
    title: "Pro Services",
    des: "Elevate your business with our Pro Services. We offer expert solutions tailored to your needs, including consulting, implementation, and support. Trust us to enhance your operations and drive success.",
  },
];

const Ecosystem = () => {
  return (
    <div className="px-7 md:px-16 flex flex-col md:flex-row py-14 md:py-20  md:items-center">
      <div className="md:w-1/2 md:space-y-5">
        <h1 className="font-bold text-4xl md:text-5xl">
          The <br /> Serv Corps Companies House <br />{" "}
          <span className="text-primary">Ecosystem</span>
        </h1>
        <p className="text-gray-800 leading-relaxed">
          Business setup is just the first step towards success. Our full suite
          of services ensures you have all the tools for your company’s growth.
        </p>
        <p className="text-gray-800 leading-relaxed">
          We’ll guide you through each step, from tax and accounting services to
          recruitment assistance, legal support, co-working spaces, and more.
        </p>
        <Link to="/contact">
          <button className="mt-8 px-6 py-3 bg-primary text-white rounded-lg hover:bg-black transition duration-300">
            Enquire Now
          </button>
        </Link>
      </div>
      <div className="md:w-1/2 md:px-10 relative">
        <Carousel>
          <CarouselContent className="flex">
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-4/5 lg:basis-4/5 rounded-xl overflow-hidden"
              >
                <div className="h-[50vh] md:h-[60vh] bg-gradient-to-b from-primary to-yellow-600 rounded-xl p-8">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl md:text-3xl text-neutral-700 font-bold mb-3">
                        {item.title}
                      </h2>
                      <p className="text-base md:text-lg text-white leading-relaxed">
                        {item.des}
                      </p>
                    </div>
                    <Link to="/services">
                      <button className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-green-100 hover:text-green-700 transition duration-300">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-primary" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-primary" />
        </Carousel>
      </div>
    </div>
  );
};

export default Ecosystem;
