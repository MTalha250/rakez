import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ContainerWrapper from "../common/ContainerWrapper";

const ContactBox = () => {
  return (
    <div className="py-14 md:py-24">
      <ContainerWrapper>
        <div className="md:mx-auto md:w-[60%]">
          <div className="border-2 flex items-center relative py-5 px-2 lg:px-20 rounded-tl-[70px] rounded-br-[70px] h-[200px]">
            <div className="bg-white p-1 lg:p-4 font-bold text-[16px]  md:text-[26px] absolute -top-6 -md:top-10 text-orange-500">SCC House Media & Marketing</div>
            <div className="grid grid-cols-2 gap-3 md:gap-20">
              <div>
                <p className="text-[14px]">
                  Office 105, 1st Floor, Emaar Square, Building 4, Sheikh
                  Mohammed Bin Rashid Boulevard, Downtown Dubai, Dubai UAE
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 text-[18px]">
                  <span>
                    <FaPhone className="text-orange-500 text-[16px] md:text-[20px]" />
                  </span>
                  <span className="underline text-[14px] md:text-[16px]">+971 4 567 7333</span>
                </div>
                <div className="flex  items-center gap-3 mt-5">
                  <span>
                    <MdEmail className="text-orange-500 text-[16px] md:text-[20px]" />
                  </span>
                  <span className="underline text-[14px] md:text-[16px]">support@scchouse.ae</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default ContactBox;
