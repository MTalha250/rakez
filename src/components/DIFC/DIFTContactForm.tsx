import Flag from "@/assets/flag.jpg";
import logo from "@/assets/logo.png";
import Image from "next/image";
import React from "react";

const DIFTContactForm = () => {
  return (
    <div className="bg-c_blue px-10 pb-10 pt-10 md:pt-40">
      <div className="flex justify-center items-center gap-5 mb-5">
        <Image src={logo} width={40} alt="Serv Corps Companies House Logo" />
        <h3 className="font-bold text-[30px] text-center text-green">Serv Corps Companies House</h3>
      </div>

      <h2 className="font-bold text-[30px] text-center capitalize">
        Looking to Setup a Business in the UAE?
      </h2>
      <h2 className="font-bold text-[30px] text-center capitalize text-c_orangish">
        Get a Call Back within 1 Minute
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
                <Image
                  src={Flag.src}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="no-image"
                />
              </div>
              {/* <img
                src="https://cdn.pixabay.com/photo/2016/02/19/07/45/flag-1208881_640.jpg"
                alt="image"
                className="w-[20px] h-[20px]"
              ></img> */}
              +971
            </div>
            <input type="text" className="grow" placeholder="Phone Number" />
          </label>
        </div>

        <div className="mt-5 flex justify-end">
          <button className="btn rounded-tl-[30px] rounded-br-[30px] bg-c_orangish text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DIFTContactForm;
