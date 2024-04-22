import Flag from "@/assets/flag.jpg";
import { FC } from "react";
import { FaPhone } from "react-icons/fa";

interface IModalProps {
  toggle: boolean;
  handleToggle: () => void;
}

const CallBackModal: FC<IModalProps> = ({ toggle, handleToggle }) => {
  return (
    <div className="">
      <dialog
        id="my_modal_3"
        className={`modal ${toggle ? " modal-open" : " modal-close"} `}
      >
        <div className="modal-box bg-c_blue min-h-[520px] md::min-w-[550px]">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white z-10"
              onClick={handleToggle}
            >
              ✕
            </button>
          </form>
          {/* Curve shape bg */}
          <div className="custom-shape-divider-top-1711232969">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>

          {/* Company zone */}
          <div className="flex flex-col items-center">
            <div className="relative z-10 w-[280px]">
              <div className="border-2 border-primary font-bold text-xl mt-5 flex">
                <p className="px-1.5 text-white flex-grow text-center tracking-[20px]">
                  SCC House
                </p>
                <p className="px-2.5 text-white bg-primary font-normal italic">
                  Zone
                </p>
              </div>
              <p className="text-xs uppercase text-gray-200 italic mt-0.5 text-center">
                elevating success to new heights
              </p>

              <div className="my-8 flex justify-center items-center gap-5">
                <p className="text-lg capitalize text-gray-200 italic mt-0.5 text-center font-bold">
                  Get a call from us
                </p>
                <FaPhone className="text-white text-[20px]" />
              </div>
              <div className="my-8 flex justify-center items-center gap-5">
                <p className="text-lg capitalize text-gray-200 italic mt-0.5 text-center font-bold">
                  Leave your number below and{" "}
                  <span className="font-medium italic">we will call yoy</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-md w-full shadow-md relative z-10 px-5 py-10">
            <form action="" className="">
              <label htmlFor="">Enter the number</label>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="">
                  <label className="input input-bordered flex items-center gap-2">
                    <div className="border-r pr-3 flex items-center gap-1">
                      <div className="w-[20px] h-[20px]">
                        <img
                          src={Flag}
                          alt="no-image"
                          className="w-[20px] h-[20px]"
                          width={20}
                          height={20}
                        />
                      </div>
                      +971
                    </div>
                    <input
                      type="text"
                      className="grow"
                      placeholder="Phone Number"
                    />
                  </label>
                </div>

                <div className="">
                  <button className="btn rounded-tl-[30px] rounded-br-[30px] bg-primary text-white">
                    Call us
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Old work for the modal  */}
          {/* <div className="flex justify-center items-center gap-5 mb-5">
            <Image src={logo} width={40} alt="Rakez Logo" />
            <h3 className="font-bold text-[30px] text-center text-green">
              RAKEZ
            </h3>
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
                
                  <div className="w-[20px] h-[20px]">
                    <Image
                      src={Flag.src}
                      alt="no-image"
                      className="w-[20px] h-[20px]"
                      width={20}
                      height={20}
                    />
                  </div>
                  +971
                </div>
                <input
                  type="text"
                  className="grow"
                  placeholder="Phone Number"
                />
              </label>
            </div>

            <div className="mt-5 flex justify-end">
              <button className="btn rounded-tl-[30px] rounded-br-[30px] bg-c_orangish text-white">
                Submit
              </button>
            </div>
          </form> */}
        </div>
      </dialog>
    </div>
  );
};

export default CallBackModal;
