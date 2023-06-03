import React from "react";

type Props = {
  children: React.ReactNode;
  textAlign: string;
};

const TextMedium = ({ children, textAlign }: Props) => {
  return (
    <div>
      <p className={`${textAlign} text-xl`}>{children}</p>
    </div>
  );
};

export default TextMedium;
