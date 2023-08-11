import React from "react";

type Props = {
  children: React.ReactNode;
  textAlign: string;
};

const SHText = ({ children, textAlign }: Props) => {
  return (
    <h2
      className={`${textAlign} line w-full font-montserrat text-[24px] font-extralight uppercase`}
    >
      {children}
    </h2>
  );
};

export default SHText;
