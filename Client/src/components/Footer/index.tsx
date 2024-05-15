import logo from "@/assets/logo.png";
import { GrMapLocation } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
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

const Footer = () => {
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
        toast.success("The form has been submitted successfully.");
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
    <div className="overflow-hidden relative bg-secondary py-5 px-8 md:px-16 text-white">
      <div className="w-full my-10 flex flex-wrap gap-10 justify-center">
        <div className="w-[400px]">
          <img src={logo} alt="" className="pr-20" />
          <h2 className="my-4 text-2xl font-semibold">Get in touch with us</h2>
          <div className="my-1 flex items-center gap-3">
            <GrMapLocation className="text-2xl text-primary" />
            <div className="text-sm">
              <h3 className="font-semibold text-primary">Vist Anytime</h3>
              <p>55 Gerad Lane, N 11201, Dubai</p>
            </div>
          </div>
          <div className="my-1 flex items-center gap-3">
            <RiCustomerService2Fill className="text-2xl text-primary" />
            <div className="text-sm">
              <h3 className="font-semibold text-primary">Call Us</h3>
              <p>+971 4 433 9905, +971 50 10 50 570</p>
            </div>
          </div>
          <div className="my-1 flex items-center gap-3">
            <FaWhatsapp className="text-2xl text-primary" />
            <div className="text-sm">
              <h3 className="font-semibold text-primary">Have a Question?</h3>
              <p>55 Gerad Lane, N 11201, Dubai</p>
            </div>
          </div>
          <div className="my-1 flex items-center gap-3">
            <HiOutlineMail className="text-2xl text-primary" />
            <div>
              <h3 className="font-semibold text-primary">Write Email</h3>
              <p>setup@scchouse.com</p>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3611.2145033114557!2d55.4013152!3d25.162234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e51c54484b718d9%3A0x6e006b2065a29f57!2sSERV%20CORPS%20COMPANIES%20HOUSE!5e0!3m2!1sen!2s!4v1715780180921!5m2!1sen!2s"
          className="w-[400px] h-auto"
          loading="lazy"
        ></iframe>
        <div className="w-[400px]">
          <div className="bg-white px-10 pb-10 rounded-md">
            <h2 className="text-2xl text-black py-5 font-bold text-center">
              Book a Free Consultation
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleChange(e, "fullName")}
                  placeholder="Type Full Name"
                  className="input input-bordered input-md w-full p-2 rounded border border-black text-black"
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleChange(e, "email")}
                  placeholder="Type Email"
                  className="input input-bordered input-md w-full p-2 rounded border border-black text-black"
                />
              </div>
              <div className="mt-3">
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => handleChange(e, "phoneNumber")}
                    className="input input-bordered input-md w-full p-2 rounded border border-black text-black"
                    placeholder="Phone Number"
                  />
                </label>
              </div>
              <div className="mt-3">
                <Select
                  name="service"
                  value={formData.service}
                  onChange={handleServiceChange}
                  options={[
                    { value: "Banking", label: "Banking" },
                    { value: "Business Setup", label: "Business Setup" },
                    {
                      value: "I want only a visa",
                      label: "I want only a visa",
                    },
                  ]}
                  placeholder="Select a service required"
                  className="input input-bordered input-md w-full rounded text-black border border-black"
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      height: "50px",
                    }),
                  }}
                />
              </div>
              <div className="mt-3">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => handleChange(e, "message")}
                  placeholder="Type your message"
                  className="input input-bordered input-md w-full p-2 rounded text-black border border-black"
                ></textarea>
              </div>

              <div className="mt-2 flex justify-end">
                <button
                  type="submit"
                  className="btn py-3 w-full bg-yellow-500 text-white"
                >
                  {loading ? "Loading..." : "Book a Free Consultation"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
