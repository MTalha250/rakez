import { Button } from "@/components/ui/button";
import img from "@/assets/consultants.jpg";

const CostCalculator = () => {
  return (
    <div
      className="py-[250px] w-full relative"
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-secondary opacity-50" />
      <div className=" text-white text-center z-10 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-5 text-center">
          Business Setup Cost Calculator
        </h2>
        <p className="mb-5 text-center">
          Discover your business setup cost in Dubai in just 5 steps with our
          easy-to-use calculator.
        </p>
        <div className="flex flex-col items-center justify-center">
          <Button className="bg-[#67DD8D] hover:bg-[#67DD8D]/90 px-10">
            Start Calculation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;
