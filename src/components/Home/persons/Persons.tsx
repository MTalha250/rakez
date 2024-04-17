import Person from "@/assets/person1.png";
import Person2 from "@/assets/person2.png";
import Person3 from "@/assets/person3.png";

const Persons = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
        <div className="h-[560px] w-full bg-gradient-to-b from-black to-neutral-700 px-5 pt-10 flex flex-col justify-between items-center">
          <h6 className="text-center font-bold text-2xl capitalize text-white">
            Need a bank account?
          </h6>

          <div className="h-full w-full flex justify-center">
            <div className="w-full sm:w-[400px] h-full relative">
              <img
                src={Person}
                className="w-full h-full object-cover"
                alt="no-image"
              />
            </div>
          </div>
        </div>
        <div className="h-[560px] w-full bg-gradient-to-b from-black to-neutral-700 px-5 pt-10 flex flex-col justify-between items-center">
          <h6 className="text-center font-bold text-2xl capitalize text-white">
            Need Business setup solutions?
          </h6>

          <div className="h-full w-full flex justify-center">
            <div className="w-full sm:w-[400px] h-full relative">
              <img
                src={Person2}
                className="w-full h-full object-cover"
                alt="no-image"
              />
            </div>
          </div>
        </div>
        <div className="h-[560px] w-full bg-gradient-to-b from-black to-neutral-700 px-5 pt-10 flex flex-col justify-between items-center">
          <h6 className="text-center font-bold text-2xl capitalize text-white">
            Need residence visas for you and your family?
          </h6>

          <div className="h-full w-full flex justify-center">
            <div className="w-full sm:w-[400px] h-full relative">
              <img
                src={Person3}
                className="w-full h-full object-cover"
                alt="no-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Persons;
