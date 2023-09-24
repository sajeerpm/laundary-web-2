import React from "react";

type Props = {
  children: React.ReactNode;
  textAlign: string;
};

const HText = ({ children, textAlign }: Props) => {
  return (
    <h1
      className={`${textAlign} line w-full text-[26px] font-[500] md:text-[32px] md:tracking-[5.75px]`}
    >
      {children}
    </h1>
  );
};

export default HText;
