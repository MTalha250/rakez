import container from "@/assets/container.jpg";
import Flag from "@/assets/flag.jpg";
import { variants } from "@/constants";
import { motion } from "framer-motion";
import Select from "react-select";

const BankingHero = () => {
  return (
    <div>
      {/* hero section  */}
      <div className="">
        <div className="">
          <div className="w-full h-full absolute">
            <img
              src={container}
              className="object-cover w-full h-full"
              alt="no-image"
            />
          </div>

          {/* Overlay of hero section */}
          <div className="absolute w-full h-full bg-gradient-to-b from-black/50 to-secondary"></div>

          <div className=" h-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:px-10">
              {/* Left */}
              <div className={`flex h-full flex-col basis-[50%]`}>
                {/* Content of hero */}
                <div className="flex justify-start container max-sm:max-w-[300px] mt-16">
                  <motion.div
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="flex flex-col h-[85vh] items-center justify-center"
                  >
                    <h1
                      className={`text-3xl sm:text-5xl text-primary font-semibold drop-shadow-2xl mb-5`}
                    >
                      Banking Solutions in Dubai
                    </h1>

                    <h3
                      className={`mb-5 text-lg md:text-xl font-medium text-neutral-100 z-50`}
                    >
                      Unlock your business's potential with exclusive banking
                      solutions in Dubai. Tailored financial products, digital
                      innovations, and Islamic banking options cater to your
                      diverse needs. Secure your future with strategic wealth
                      management and access to government support and capital
                      markets for seamless expansion.
                    </h3>
                  </motion.div>
                </div>
              </div>

              {/* Right */}
              <div className="basis-[50%] mt-10 lg:mt-[200px] lg:z-10">
                <div className="bg-neutral-100 px-10 pb-10 pt-10 rounded-md mx-5 lg:w-[70%] lg:mx-auto">
                  <h2 className="font-bold text-[30px] text-center capitalize">
                    Apply for an account in minutes
                  </h2>

                  <form action="" className="mt-7">
                    <div className="flex flex-col gap-10">
                      <input
                        type="text"
                        placeholder="Type Full Name"
                        className="input input-bordered input-md w-full "
                      />
                    </div>
                    <div className="mt-5">
                      <input
                        type="text"
                        placeholder="Type Email"
                        className="input input-bordered input-md w-full "
                      />
                    </div>
                    <div className="mt-5">
                      <label className="input input-bordered flex items-center gap-2">
                        <div className="border-r pr-3 flex items-center gap-1">
                          <div className="w-[20px] h-[20px] relative">
                            <img
                              src={Flag}
                              className="object-cover w-full h-full"
                              alt="no-image"
                            />
                          </div>
                          +971
                        </div>
                        <input
                          type="text"
                          className="grow"
                          placeholder="Phone Number"
                        />
                      </label>
                    </div>
                    <div className="mt-5">
                      <Select
                        options={[
                          { value: "chocolate", label: "Banking" },
                          { value: "strawberry", label: "Business Setup" },
                          { value: "vanilla", label: "I want only a visa" },
                        ]}
                        placeholder="Select a service required"
                        styles={{
                          control: (baseStyles) => ({
                            ...baseStyles,
                            height: "50px",
                          }),
                        }}
                      />
                    </div>
                    <div className="mt-5">
                      <textarea
                        placeholder="Type your message"
                        className="textarea textarea-bordered textarea-lg w-full"
                      ></textarea>
                    </div>

                    <div className="mt-5 flex justify-end">
                      <button className="btn px-5 py-3 rounded-tl-[30px] rounded-br-[30px] bg-c_orangish text-white">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingHero;
