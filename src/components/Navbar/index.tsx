import logo from "@/assets/logo.png";
import Sidebar from "@/components/Navbar/Sidebar";
import { navLinks } from "@/constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(-1);
  return (
    <div className="bg-white  shadow-xl px-8 py-5 w-[95%] relative flex items-center justify-between rounded-2xl">
      <Link to="/" className="font-extrabold  text-xl flex items-center">
        <img src={logo} alt="" className="w-8 mr-2" />
        SCC House
      </Link>
      <div className="text-sm items-center justify-center space-x-5 lg:space-x-10 md:flex hidden z-50">
        {navLinks.map((link, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveDropdown(index)}
            onMouseLeave={() => setActiveDropdown(-1)}
            className="relative"
          >
            <Link
              to={link.href}
              className="flex items-center hover:text-secondary transition duration-300"
            >
              {link.label}
              {link.children && (
                <BiSolidChevronDown className="inline-block ml-1" />
              )}
            </Link>
            {link.children && activeDropdown === index && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { duration: 0.3, type: "spring" },
                }}
                className="text-white absolute top-full left-[-10px] bg-secondary p-5 rounded-2xl w-[250px] shadow-lg"
              >
                {link.children.map((child, childIndex) => (
                  <Link
                    key={childIndex}
                    to={child.href}
                    className="rounded block p-2 font-bask text-base hover:bg-[#66DC8D] hover:text-black"
                  >
                    {child.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <div className="hidden md:block font-semibold text-sm space-x-5">
        <Link
          to="/cost-calculator"
          className="transition duration-300 bg-secondary text-white py-3 px-5 rounded-full hover:text-black hover:bg-[#66dc8d] shadow-md shadow-black/30"
        >
          Cost Calculator
        </Link>
      </div>
      <Sidebar />
    </div>
  );
};

export default Navbar;
