import React from "react";

type Props = {
    children: React.ReactNode;
    textAlign: string;
};

const SText = ({ children, textAlign }: Props) => {
    return (
        <h3
            className={`${textAlign} line basis-3/5 p-2 text-[14px] font-semibold uppercase`}
        >
            {children}
        </h3>
    );
};

export default SText;
