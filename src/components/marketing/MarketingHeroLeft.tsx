import Working from "@/assets/marketing.jpg";

const MarketingHeroLeft = () => {
  return (
    <div className={`md:min-h-[70vh] w-full `}>
      <div className="h-[110vh] md:h-full relative ">
        <div className="w-full h-full absolute">
          <img
            src={Working}
            className="h-full w-full object-cover"
            alt="no-image"
          />
        </div>

        {/* Overlay of hero section */}
        <div className="absolute w-full h-full bg-gradient-to-b from-black/50 to-secondary"></div>

        {/* Content of hero */}
        <div className="absolute h-full px-3 md:px-10">
          <div className="flex flex-col h-full  justify-center items-center ">
            <h1
              className={`text-3xl sm:text-5xl text-white  font-semibold drop-shadow-2xl mb-5 text-center tracking-tight`}
            >
              We Offer 360-Degree{" "}
              <span className="text-orange-500">Marketing Support </span>
              for your Business
            </h1>

            <div className="text-white text-center">
              <div className=" ">
                Competitive Pricing | Quick Turnaround | Professional Output
              </div>

              <p className="text-[14px] mt-[40px]">
                {" "}
                Our team of experts helps define a brand identity for start-ups
                and builds a storyline aligned with its business function. From
                creating logo designs to designing full-fledged websites, we
                provide all the services necessary to help start-ups launch
                their brand from Day 1. A significant part of our solution is
                offering entrepreneurs marketing support at every step of their
                journey, from strategizing and planning to execution.
              </p>

              <button className="btn  bg-orange-500 border-none mt-7 text-white hover:text-black rounded-tl-[20px] rounded-br-[20px]">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingHeroLeft;
