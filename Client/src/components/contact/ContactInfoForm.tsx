import { FaMapLocationDot } from "react-icons/fa6";
import { MdAttachEmail, MdWifiCalling3 } from "react-icons/md";
import ContainerWrapper from "../common/ContainerWrapper";
import ContactInfoDetails from "./ContactInfoDetails";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const ContactInfoForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      company === "" ||
      message === ""
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URI}/contact/createContact`,
        {
          name: name,
          email: email,
          phone: phone,
          message: message,
          company: company,
        }
      );
      toast.success("Message sent successfully");
    } catch (error) {
      console.log(error);
    } finally {
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setMessage("");
    }
    setLoading(false);
  };
  return (
    <div className="bg-gradient-to-r from-c_blue/50 via-violet-50 to-c_blue py-14 md:py-20">
      <ContainerWrapper>
        <div className="lg:max-w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 bg-white p-6 md:p-10 rounded-tl-[100px] md:rounded-tl-none md:rounded-bl-[100px]">
              <div className="border-t-4 border-t-primary h-3 w-10 mt-10 lg:mt-0"></div>

              <h4 className="font-bold text-xl">
                Let’s talk your business to{" "}
                <span className="text-green">move</span> forward.
              </h4>
              <p className="text-[12px] mt-4 md:mt-8">
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews iterative approaches.
              </p>
              <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-6 md:mt-10">
                <ContactInfoDetails
                  icon={
                    <FaMapLocationDot className="font-bold text-green text-[30px]" />
                  }
                  title="Dubai office"
                  subTitle="55 Gerad Lane, N 11201, Dubai"
                />
                <ContactInfoDetails
                  icon={
                    <MdAttachEmail className="font-bold text-green text-[30px]" />
                  }
                  title="Email us"
                  subTitle="setup@scchouse.com"
                />
                <ContactInfoDetails
                  icon={
                    <MdWifiCalling3 className="font-bold text-green text-[30px]" />
                  }
                  title="Call us"
                  subTitle="+971 4 433 9905 
                   "
                />
              </div>
            </div>

            <div className="flex-1 bg-green p-6 md:p-10 rounded-br-[100px] md:rounded-br-none md:rounded-tr-[100px]">
              <div>
                <div className="border-t-4 border-t-primary h-3 w-10"></div>
                <h4 className="font-bold text-xl">
                  Let’s talk your business to{" "}
                  <span className="text-tertiary">move</span> forward.
                </h4>
                <div className="mt-5">
                  <form onSubmit={handleSubmit}>
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 text-black">
                      <div>
                        <input
                          type="text"
                          className="bg-white/30 px-4 py-2 border-none rounded-tl-[20px] rounded-br-[20px] w-full placeholder-neutral-500"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="bg-white/30 px-4 py-2 border-none rounded-tl-[20px] rounded-br-[20px] w-full placeholder-neutral-500"
                          placeholder="Your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="bg-white/30 px-4 py-2 border-none rounded-tl-[20px] rounded-br-[20px] w-full placeholder-neutral-500"
                          placeholder="Your phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="bg-white/30 px-4 py-2 border-none rounded-tl-[20px] rounded-br-[20px] w-full placeholder-neutral-500"
                          placeholder="Your company"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <textarea
                        className="bg-white/30 px-4 py-2 border-none rounded-tl-[20px] rounded-br-[20px] w-full placeholder-neutral-500 h-[100px]"
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="rounded-tl-[20px] rounded-br-[20px] font-medium px-4 py-2 bg-tertiary text-white cursor-pointer mt-5 text-[14px]"
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default ContactInfoForm;
