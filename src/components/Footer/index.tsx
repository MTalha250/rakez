import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "@/assets/logo.png";
const Footer = () => {
  return (
    <div className="overflow-hidden relative bg-secondary pt-10 pb-20 px-8 md:px-16 text-white">
      <div className="w-full my-10 flex flex-wrap gap-10">
        <div className="w-[400px]">
          <img src={logo} alt="" className="" />
          <p className="mt-5">
            Discover streamlined processes and expert guidance for seamless
            business setup in the vibrant city of Dubai. Start your journey
            today!
          </p>
        </div>
        <div className="w-[400px]">
          <ul className="space-y-2">
            <li className="font-bold">800-LICENSE (542 3673)</li>
            <li className="py-3">
              If you are calling from outside the UAE, please contact us on
            </li>
            <li className="font-bold">+971 4339905</li>
            <li className="pt-3">
              <span className="font-bold text-primary">WhatsApp:</span>{" "}
              <a href="https://wame.pro/6q9srt">+971 50 10 50 570</a>
            </li>
            <li className="font-bold">
              <span className="text-primary">Email:</span> setup@scchouse.com
            </li>
          </ul>
          <ul className="mt-5 flex space-x-3 text-2xl">
            <li>
              <a href="https://www.facebook.com/servcorps">
                <FaFacebook className="text-primary" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/servcorpscorporate/">
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
            P24, Office S11 - International City - France Cluster - Dubai -
            United Arab Emirates
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.21579778252!2d55.40136001971798!3d25.162190279357652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f61f96df59e13%3A0xa0a3e59a035fc03c!2sEozmo%20Travel%20%26%20Tourism!5e0!3m2!1sen!2s!4v1713603626498!5m2!1sen!2s"
          className="w-[400px]"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
