import { ReactNode } from "react";

const UpperNavbar = ({children}: {children: ReactNode}) => {
  return (
    <div className="w-full absolute top-0 z-50 hidden min-[1468px]:block">
      <div className="bg-black/50 py-3 px-8 md:px-24 flex justify-end">
        {children}
      </div>
    </div>
  );
};

export default UpperNavbar;
