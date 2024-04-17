import { Link } from "react-router-dom";
import { useState } from "react";

import GetInTouchModal from "@/components/Home/Hero/GetInTouchModal";

const HomeUpperNavContent = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="space-x-5">
        <strong className="text-white font-bold">800 - LICENSE</strong>
        <button
          className="bg-c_orangish py-2 px-4 border border-c_orangish hover:bg-transparent text-white rounded-tr-2xl rounded-bl-2xl transition duration-300"
          onClick={handleClick}
        >
          Get Started
        </button>
        <Link to="/cost-calculator">
          <button className="py-2 px-4 border hover:bg-c_orangish hover:border-c_orangish border-white text-white rounded-tr-2xl rounded-bl-2xl transition duration-300">
            Cost Calculator
          </button>
        </Link>

        {toggle && (
          <GetInTouchModal toggle={toggle} handleToggle={handleClick} />
        )}
      </div>
    </>
  );
};

export default HomeUpperNavContent;
