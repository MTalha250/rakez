import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { CiDiscount1 } from "react-icons/ci";

const PromotionCard = ({
  title,
  des,
  children,
  price,
  img,
  navLink,
}: {
  title: string;
  des: string;
  children?: ReactNode;
  price: string;
  navLink: string;
  img: any;
}) => {
  return (
    <div className="card lg:card-side w-full bg-gray-50 shadow-sm md:min-h-[400px] rounded-sm h-full">
      <div className="flex flex-col md:flex-row w-full">
        <div className="h-[300px] md:h-full md:basis-[50%]">
          {/* <img
            src={img}
            alt="image"
            className="h-full w-full object-cover"
          /> */}
          <div className="w-full h-full relative">
            <img
              src={img}
              className="w-full h-full object-cover"
              alt="no-image"
            />
          </div>
        </div>

        {/* Right side */}

        <div className="md:basis-[50%] h-full flex flex-col justify-between p-7">
          <div className="">
            <h4 className="text-orange-500 font-bold text-[18px] uppercase">
              {title}
            </h4>
            <p className="mt-2">{des}</p>

            <div className="mt-5">{children && children}</div>
          </div>
          <div className="mt-1">
            <p className="font-light">T&Cs Apply*</p>
          </div>

          <div className="mt-5">
            <div className="flex items-center gap-3">
              <CiDiscount1 className="text-orange-500 text-[20px]" />
              <h5 className="text-[16px] font-bold">
                Package Starting From {price}
              </h5>
            </div>

            <div className="mt-5">
              <Link to={navLink}>
                <button className="btn bg-orange-500 text-white rounded-tl-[30px] rounded-br-[30px]">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
