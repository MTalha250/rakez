import logo from "@/assets/logo.png";
import { navLinks } from "@/constants";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import { BiSolidChevronDown } from "react-icons/bi";

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
      <div
        className={
          scrolled
            ? "h-[80px] fixed top-0 w-full bg-black/50 flex flex-row justify-between px-32 transition duration-300"
            : "h-[80px] w-full flex flex-row justify-between px-32  transition duration-300 mt-14"
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
                className="flex items-center hover:text-c_orangish transition duration-300"
              >
                {link.label}
                {link.children && (
                  <BiSolidChevronDown className="inline-block ml-1" />
                )}
              </Link>
              {link.children && activeDropdown === index && (
                <div className="">
                  <div className="text-white absolute top-full z-[9999] left-[-10px] bg-secondary p-5 rounded-2xl w-[250px] shadow-lg">
                    {link.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        to={child.href}
                        className="rounded block p-2 font-bask text-base hover:bg-[#66DC8D] hover:text-black"
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
