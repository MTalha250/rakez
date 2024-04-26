import container from "@/assets/container.jpg";
import Flag from "@/assets/flag.jpg";
import { variants } from "@/constants";
import { motion } from "framer-motion";
import Select from "react-select";
import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  service: { value: string; label: string } | null;
  message: string;
}

const BankingHero = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    service: null,
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { value: string }>,
    fieldName: keyof FormData
  ) => {
    setFormData({
      ...formData,
      [fieldName]: e.target ? e.target.value : e,
    });
  };

  const handleServiceChange = (
    selectedOption: { value: string; label: string } | null
  ) => {
    setFormData({
      ...formData,
      service: selectedOption,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isAnyFieldEmpty = Object.values(formData).some(
      (value) => value === ""
    );
    if (isAnyFieldEmpty) {
      toast.error("Please fill in all fields.");
    } else if (!formData.service) {
      toast.error("Please select a service.");
    } else {
      setLoading(true);
      try {
        await axios.post(
          `${import.meta.env.VITE_BASE_URI}/contact/createContact`,
          {
            name: formData.fullName,
            email: formData.email,
            phone: formData.phoneNumber,
            message: formData.message,
            services: [formData.service?.value],
          }
        );
        toast.success("Message sent successfully");
      } catch (error) {
        console.log(error);
      } finally {
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          service: null,
          message: "",
        });
      }
      setLoading(false);
    }
  };

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
            <div className="flex flex-col lg:flex-row lg:px-10">
              {/* Left */}
              <div className={`flex h-full flex-col basis-[50%]`}>
                {/* Content of hero */}
                <div className="flex justify-start container max-sm:max-w-[300px]">
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
              <div className="basis-[50%] mt-20 lg:mt-40 lg:z-10">
                <div className="bg-neutral-100/90 px-10 pb-10 pt-10 rounded-md mx-5 lg:w-[70%] lg:mx-auto">
                  <h2 className="font-bold text-[30px] text-center capitalize">
                    Apply for an account in minutes
                  </h2>

                  <form onSubmit={handleSubmit} className="mt-7">
                    <div className="flex flex-col gap-10">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleChange(e, "fullName")}
                        placeholder="Type Full Name"
                        className="input input-bordered input-md w-full p-2 rounded-lg"
                      />
                    </div>
                    <div className="mt-5">
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={(e) => handleChange(e, "email")}
                        placeholder="Type Email"
                        className="input input-bordered input-md w-full p-2 rounded-lg"
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
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={(e) => handleChange(e, "phoneNumber")}
                          className="input input-bordered input-md w-full p-2 rounded-lg"
                          placeholder="Phone Number"
                        />
                      </label>
                    </div>
                    <div className="mt-5">
                      <Select
                        name="service"
                        value={formData.service}
                        onChange={handleServiceChange}
                        options={[
                          { value: "chocolate", label: "Banking" },
                          { value: "strawberry", label: "Business Setup" },
                          { value: "vanilla", label: "I want only a visa" },
                        ]}
                        placeholder="Select a service required"
                        className="input input-bordered input-md w-full p-2 rounded-lg"
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
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleChange(e, "message")}
                        placeholder="Type your message"
                        className="input input-bordered input-md w-full p-2 rounded-lg"
                      ></textarea>
                    </div>

                    <div className="mt-5 flex justify-end">
                      <button
                        type="submit"
                        className="btn px-5 py-3 rounded-tl-[30px] rounded-br-[30px] bg-c_orangish text-white"
                      >
                        {loading ? "Loading..." : "Submit"}
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
