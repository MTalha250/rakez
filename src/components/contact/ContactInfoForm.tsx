import { FaMapLocationDot } from "react-icons/fa6";
import { MdAttachEmail, MdWifiCalling3 } from "react-icons/md";
import ContainerWrapper from "../common/ContainerWrapper";
import ContactInfoDetails from "./ContactInfoDetails";

const ContactInfoForm = () => {
  return (
    <div className="bg-gradient-to-r from-c_blue/50 via-violet-50 to-c_blue py-14 md:py-20">
      <ContainerWrapper>
        <div className="lg:max-w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 bg-white p-6 md:p-10 rounded-tl-[100px] md:rounded-tl-none md:rounded-bl-[100px]">
              <div className="border-t-4 border-t-orange-500 h-3 w-10 mt-10 lg:mt-0"></div>

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
                  subTitle="info@domain.com"
                />
                <ContactInfoDetails
                  icon={
                    <MdWifiCalling3 className="font-bold text-green text-[30px]" />
                  }
                  title="Call us"
                  subTitle="(+088) 589-8745"
                />
              </div>
            </div>

            <div className="flex-1 bg-green p-6 md:p-10 rounded-br-[100px] md:rounded-br-none md:rounded-tr-[100px]">
              <div>
                <div className="border-t-4 border-t-orange-500 h-3 w-10"></div>
                <h4 className="font-bold text-xl text-white">
                  Request a call forward. back
                </h4>
                <div className="mt-5">
                  <form>
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                      <div>
                        <input
                          type="text"
                          className="bg-white/30 px-4 py-2 border-none rounded-tl-[20px] rounded-br-[20px] w-full placeholder-white/50"
                          placeholder="Your website"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="bg-white/30 px-4 py-2 border-none rounded-tl-[20px] rounded-br-[20px] w-full placeholder-white/50"
                          placeholder="Your website"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="bg-white/30 px-4 py-2 border-none rounded-tl-[20px] rounded-br-[20px] w-full placeholder-white/50"
                          placeholder="Your website"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          className="bg-white/30 px-4 py-2 border-none rounded-tl-[20px] rounded-br-[20px] w-full placeholder-white/50"
                          placeholder="Your website"
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <textarea
                        className="bg-white/30 px-4 py-2 border-none rounded-tl-[20px] rounded-br-[20px] w-full placeholder-white/50 h-[100px]"
                        placeholder="Your website"
                      />
                    </div>

                    <button className="rounded-tl-[20px] rounded-br-[20px] font-medium px-4 py-2 bg-orange-500 text-white cursor-pointer mt-5 text-[14px]">
                      Submit Now
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
