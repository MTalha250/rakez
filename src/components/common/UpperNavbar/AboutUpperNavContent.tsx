import React from "react";
import { FaPhone, FaQuestionCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const AboutUpperNavContent = () => {
  return (
    <div className=" flex justify-end">
      <ul className="text-white flex items-center gap-3 text-xs mr-10 font-semibold cursor-pointer">
        <li className="flex gap-2 items-center">
          <span>
            <FaPhone />{" "}
          </span>
          <span>+971 7 204 1111</span>
        </li>
        <div className="border-r h-5"></div>
        {/* <li className="flex gap-2 items-center">
          <span>
            <FaQuestionCircle />{" "}
          </span>
          <span>FAQ</span>
        </li> */}
        {/* <div className="border-r h-5"></div> */}
        <li className="flex gap-2 items-center">
          <span>PORTAL 360</span>
        </li>
        <div className="border-r h-5"></div>
        {/* <li className="flex gap-2 items-center">
          {" "}
          <span>REGULATIONS</span>
        </li> */}
        {/* <div className="border-r h-5"></div>
        <li className="flex gap-2 items-center">
          <span>CAREERS</span>
        </li>
        <div className="border-r h-5"></div>
        <li className="flex gap-2 items-center">
          <span>ENGLISH</span>
        </li>
        <div className="border-r h-5"></div>
        <li className="flex gap-2 items-center">
          <span>عربی</span>
        </li>
        <div className="border-r h-5"></div> */}

        <li className="">
          <div className="flex items-center relative">
            <div>
              <IoSearch className="text-[20px] font-bold absolute bottom-[6px] left-3" />
            </div>
            <input
              type="text"
              className="bg-secondary py-2 px-2 w-[200px] pl-10 border-2 rounded-md border-white"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AboutUpperNavContent;
