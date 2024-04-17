import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="overflow-hidden relative bg-secondary pt-10 pb-20 px-8 md:px-16 text-white">
      <div className="w-full my-10 flex flex-wrap gap-10">
        <div className="w-[400px]">
          <h1 className="text-4xl font-bold text-primary">
            Serv Corps Companies House<span className="text-green">.</span>
          </h1>
          {/* <ul className="space-y-2 mt-5">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-[#F26446] py-2">
                {link.label}
              </li>
            ))}
          </ul> */}
        </div>
        <div className="w-[400px]">
          <ul className="space-y-2">
            <li className="font-bold">800-LICENSE (542 3673)</li>
            <li className="py-3">
              If you are calling from outside the UAE, please contact us on
            </li>
            <li className="font-bold">+971 4339905</li>
            <li className="pt-3">
              Internationalcity france cluster p 24 office s-11
            </li>
            <li className="font-bold">email: info@rakez.com</li>
          </ul>
        </div>
        <div className="w-[400px]">
          <ul className="flex space-x-3 text-2xl">
            <li>
              <a href="">
                <FaFacebook className="text-primary" />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram className="text-primary" />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter className="text-primary" />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin className="text-primary" />
              </a>
            </li>
          </ul>
          <p className="mt-5">
            Office 105, Level 1, Emaar Square – Building 4, Sheikh Mohammed Bin
            Rashid Boulevard Downtown Dubai, United Arab Emirates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
