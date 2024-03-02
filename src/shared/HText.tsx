import React from "react";

type Props = {
  children: React.ReactNode;
  textAlign: string;
};

const HText = ({ children, textAlign }: Props) => {
  return (
    <h1
      className={`${textAlign} line w-full font-[500] md:tracking-[5.75px]`}
    >
      {children}
    </h1>
  );
};

export default HText;
