import { FC } from "react";
import Select from "react-select";

import Flag from "@/assets/flag.jpg";

interface IModalProps {
  toggle: boolean;
  handleToggle: () => void;
}

const GetInTouchModal: FC<IModalProps> = ({ toggle, handleToggle }) => {
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
            <div className="relative z-10 w-[330px]">
              <div className="border-2 border-c_orangish font-bold text-xl mt-5 flex">
                <p className="px-1.5 text-white flex-grow text-center tracking-[20px]">
                  SCC House
                </p>
                <p className="px-2.5 text-white bg-c_orangish font-normal italic">
                  Contact Us
                </p>
              </div>
              <p className="text-xs uppercase text-gray-200 italic mt-0.5 text-center">
                Get In Touch
              </p>
            </div>
          </div>

          <div className="bg-white mt-6 rounded-md w-full shadow-md relative z-10 px-5 py-10">
            <form action="" className="">
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
                    <div className="w-[20px] h-[20px] relative">
                      <img
                        src={Flag}
                        className="object-cover w-full h-full"
                        alt="no-image"
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
              <div className="mt-5">
                <Select
                  options={[
                    { value: "chocolate", label: "Banking" },
                    { value: "strawberry", label: "Business Setup" },
                    { value: "vanilla", label: "I want only a visa" },
                  ]}
                  placeholder="Select a service required"
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      height: "50px",
                    }),
                  }}
                />
              </div>
              <div className="mt-5">
                <textarea
                  placeholder="Type your message"
                  className="textarea textarea-bordered textarea-lg w-full"
                ></textarea>
              </div>

              <div className="flex justify-center mt-5">
                <button className="btn rounded-tl-[30px] rounded-br-[30px] bg-c_orangish text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default GetInTouchModal;

// Old form modal
// interface IModalProps {
//   toggle: boolean;
//   handleToggle: () => void;
// }

// const GetInTouchModal: FC<IModalProps> = ({ toggle, handleToggle }) => {
//   return (
//     <div>
//       <dialog
//         id="my_modal_3"
//         className={`modal ${toggle ? " modal-open" : " modal-close"} `}
//       >
//         <div className="modal-box bg-c_blue">
//           <form method="dialog">
//             {/* if there is a button in form, it will close the modal */}
//             <button
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               onClick={handleToggle}
//             >
//               ✕
//             </button>
//           </form>
//           <h3 className="font-bold text-[30px] text-center">Get in touch</h3>

//           <form action="" className="mt-7">
//             <div className="flex flex-col gap-10">
//               <input
//                 type="text"
//                 placeholder="Type Full Name"
//                 className="input input-bordered input-md w-full "
//               />
//             </div>
//             <div className="mt-5">
//               <input
//                 type="text"
//                 placeholder="Type Email"
//                 className="input input-bordered input-md w-full "
//               />
//             </div>
//             <div className="mt-5">
//               <label className="input input-bordered flex items-center gap-2">
//                 <div className="border-r pr-3 flex items-center gap-1">
//                   {/* <img
//                     src="https://cdn.pixabay.com/photo/2016/02/19/07/45/flag-1208881_640.jpg"
//                     alt="image"
//                     className="w-[20px] h-[20px]"
//                   ></img> */}
//                   <div className="w-[20px] h-[20px] relative">
//                     <Image
//                       src={Flag.src}
//                       layout="fill"
//                       objectFit="cover"
//                       objectPosition="center"
//                       alt="no-image"
//                     />
//                   </div>
//                   +971
//                 </div>
//                 <input
//                   type="text"
//                   className="grow"
//                   placeholder="Phone Number"
//                 />
//               </label>
//             </div>
//             <div className="mt-5">
//               <Select
//                 options={[
//                   { value: "chocolate", label: "Chocolate" },
//                   { value: "strawberry", label: "Strawberry" },
//                   { value: "vanilla", label: "Vanilla" },
//                 ]}
//                 placeholder="Select a service required"
//                 styles={{
//                   control: (baseStyles, state) => ({
//                     ...baseStyles,
//                     height: "50px",
//                   }),
//                 }}
//               />
//             </div>
//             <div className="mt-5">
//               <textarea
//                 placeholder="Type your message"
//                 className="textarea textarea-bordered textarea-lg w-full"
//               ></textarea>
//             </div>

//             <div className="mt-5 flex justify-end">
//               <button className="btn rounded-tl-[30px] rounded-br-[30px] bg-c_orangish text-white">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </dialog>
//     </div>
//   );
// };

// export default GetInTouchModal;
