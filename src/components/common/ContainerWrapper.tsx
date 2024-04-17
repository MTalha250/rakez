import React, { ReactNode } from "react";

const ContainerWrapper = ({
  classes,
  children,
}: {
  classes?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={`container sm:container md:container lg:container xl:container 2xl:container ${classes}`}
    >
      {children}
    </div>
  );
};

export default ContainerWrapper;
