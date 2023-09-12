import React from "react";

type Props = {
  children: React.ReactNode;
  textAlign: string;
};

const HText = ({ children, textAlign }: Props) => {
  return (
    <h1
      className={`${textAlign} line w-full font-dmsans text-[26px] font-extralight md:text-[32px] md:tracking-[10.75px]`}
    >
      {children}
    </h1>
  );
};

export default HText;
