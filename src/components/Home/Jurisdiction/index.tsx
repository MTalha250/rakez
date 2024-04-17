import img1 from "@/assets/jr1.jpeg";
import img2 from "@/assets/jr2.jpeg";
import img3 from "@/assets/jr3.jpeg";
import React from "react";
const Jurisdiction = () => {
  return (
    <div>
      <h1 className="font-bold text-center bg-secondary p-10 text-white text-4xl">
        Choose Your <span className="text-green">Jurisdiction</span>
      </h1>
      <div className="flex flex-col md:flex-row md:h-[75vh]">
        <div className="w-full group">
          <div className="w-full h-full relative">
            <img
              src={img1.src}
              alt=""
              className="absolute top-0 w-full h-full object-cover"
            />
            {/* <div className="absolute bottom-[100px] md:bottom-5 text-white flex flex-col items-center w-full space-y-2">
              <h1 className="font-bold text-3xl text-center md:px-16">
                Mainland Company Setup
              </h1>
              <p className="px-8">
                Setup your mainland company in the UAE with the help of our team
              </p>
            </div> */}
          </div>
          <div className="bg-white absolute top-0 left-0 w-full h-full scale-y-0 group-hover:scale-y-100 origin-bottom trasition duration-300"></div>
        </div>

        <div className="w-full relative group">
          <img src={img2.src} alt="" className="w-full h-full object-cover" />
          <div className="bg-white absolute top-0 left-0 w-full h-full scale-y-0 group-hover:scale-y-100 origin-bottom trasition duration-300"></div>
        </div>
        <div className="w-full relative group">
          <img src={img3.src} alt="" className="w-full h-full object-cover" />
          <div className="bg-white absolute top-0 left-0 w-full h-full scale-y-0 group-hover:scale-y-100 origin-bottom trasition duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Jurisdiction;
