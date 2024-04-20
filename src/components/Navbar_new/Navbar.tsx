import logo from "@/assets/logo.png";
import { navLinks } from "@/constants";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(-1);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="w-full absolute top-0 z-50 hidden xl:block">
      <div className="bg-primary flex justify-center">
        <ul className="flex space-x-5">
          <li className="flex items-center ">
            <FaPhone className="mr-2" />
            <a href="tel:+971 4339905">+971 4339905</a>
          </li>
          <li className="flex items-center ">
            <FaWhatsapp className="mr-2" />
            <a href="https://wame.pro/6q9srt"> +971 50 10 50 570</a>
          </li>
          <li className="flex items-center ">
            <IoMdMail className="mr-2" />{" "}
            <a href="mailto:setup@scchouse.com">setup@scchouse.com</a>
          </li>
        </ul>
      </div>
      <div
        className={
          scrolled
            ? "h-[80px] fixed top-0 w-full bg-black/50 flex flex-row justify-between px-32 transition duration-300"
            : "h-[80px] w-full flex flex-row justify-between px-32  transition duration-300 mt-5"
        }
      >
        <Link to="/" className="flex flex-row items-center gap-2">
          <img src={logo} width={120} alt="SCC House Logo" />
        </Link>
        <div className="text-white text-sm items-center justify-center space-x-5 lg:space-x-10 md:flex hidden">
          {navLinks.map((link, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(-1)}
              className="relative"
            >
              <Link
                to={link.href}
                className="flex items-center hover:text-tertiary transition duration-300"
              >
                {link.label}
                {link.children && (
                  <BiSolidChevronDown className="inline-block ml-1" />
                )}
              </Link>
              {link.children && activeDropdown === index && (
                <div className="">
                  <div className="text-white absolute top-full z-[9999] left-[-10px] bg-white rounded-lg overflow-hidden w-[250px] shadow-lg space-y-[0.5px]">
                    {link.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        to={child.href}
                        className="block py-4 px-5 bg-neutral-800 text-xs hover:bg-primary hover:text-black font-bold"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
