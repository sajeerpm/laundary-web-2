// OrderSuccess.tsx

import React from "react";
import SuccessTick from "@/assets/tick.svg";
import { Link } from "react-router-dom";

const OrderSuccess: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center space-x-2">
        <img src={SuccessTick} className="h-32 w-32" />
        <h2 className="my-6 text-4xl font-semibold text-green-600">
          Order Placed!
        </h2>
        <Link className="underline" to={"/"}>
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
