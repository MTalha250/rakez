import Flag from "@/assets/flag.jpg";
import logo from "@/assets/logo.png";

const MarketingFormRight = () => {
  return (
    <div className="bg-c_blue px-10 pb-10 pt-10 md:pt-40 h-full">
      <div className="flex justify-center items-center gap-5 mb-5">
        <img src={logo} width={40} alt="SCC House Logo" />
        <h3 className="font-bold text-[30px] text-center text-green">
          SCC House
        </h3>
      </div>

      <h2 className="font-bold text-[30px] text-center capitalize">
        ENQUIRE NOW
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
              <div className="w-[20px] h-[20px] relative">
                <img
                  src={Flag}
                  className="w-full h-full object-cover"
                  alt="no-image"
                />
              </div>
              +971
            </div>
            <input type="text" className="grow" placeholder="Phone Number" />
          </label>
        </div>

        <div className="mt-5">
          <h3 className="text-[14px] font-bold mb-5">
            What Services Can We Assist You With?
          </h3>

          <div className="flex flex-wrap">
            <div className="form-control">
              <label className="label justify-start gap-3 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text">Company Logo and Branding</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label justify-start gap-3 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text">Website for my Business</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label justify-start gap-3 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text">Rank Top on Google Search</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label justify-start gap-3 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text">Generate More Quality Leads</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label justify-start gap-3 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text">
                  Manage Social Media Accounts by Regular and Consistent Posting
                </span>
              </label>
            </div>
            <div className="form-control">
              <label className="label justify-start gap-3 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text">Content Management</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label justify-start gap-3 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text">Get Featured on the Media</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label justify-start gap-3 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text">Event Management</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label justify-start gap-3 cursor-pointer">
                <input type="checkbox" className="checkbox checkbox-sm" />
                <span className="label-text">Other</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <textarea
            className="textarea textarea-bordered w-full h-[160px]"
            placeholder="Please share any special instructions for us to analyze your project requirement."
          ></textarea>
        </div>

        <div className="mt-5 flex justify-end">
          <button className="btn rounded-tl-[30px] rounded-br-[30px] bg-c_orangish text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MarketingFormRight;
