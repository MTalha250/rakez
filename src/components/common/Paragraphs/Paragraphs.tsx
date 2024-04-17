import React from "react";

const NormalParagraph = ({ text, clasess }: { text: string, clasess?: string }) => {
  return <p className={`text-center leading-6 tracking-tight mb-5 ${clasess}`}>{text}</p>;
};

export default NormalParagraph;
