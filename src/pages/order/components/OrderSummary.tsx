// OrderSummaryPage.tsx

import React from "react";

import {
  MapPinIcon,
  CalendarDaysIcon,
  ScissorsIcon,
} from "@heroicons/react/24/solid";

const OrderSummaryPage: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-full space-y-8 rounded-lg bg-white pb-8">
        {/* Address Section */}
        <div className="flex flex-col space-y-4">
          <p className="font-montserrat text-xl text-gray-600">Address</p>
          <hr></hr>

          <div className="flex flex-row">
            <MapPinIcon className="mr-3 h-6 w-6 text-gray-600" />
            <p className="text-lg text-gray-600">
              1234 Futuristic Street, City, State <br />
              GGGGGG <br />
              MMMMM <br />
              KKKKK
            </p>
          </div>
        </div>

        {/* Collection and Delivery Dates Section */}
        <div className="flex flex-col space-y-4">
          <p className="font-montserrat text-xl text-gray-600">
            Collection & Delivery
          </p>
          <hr></hr>

          <div className="flex flex-row">
            <CalendarDaysIcon className="mr-3 h-6 w-6 text-gray-600" />
            <p className="text-lg text-gray-600">July 30, 20XX</p>
          </div>

          <div className="flex flex-row">
            <CalendarDaysIcon className="mr-3 h-6 w-6 text-gray-600" />
            <p className="text-lg text-gray-600">August 3, 20XX</p>
          </div>
        </div>

        {/* Promo Code Section */}
        <div className="flex flex-col space-y-4">
          <p className="font-montserrat text-xl text-gray-600">Promo Code</p>
          <hr></hr>

          <div className="flex items-center">
            <ScissorsIcon className=" mr-3 h-6 w-6 text-gray-600" />
            <p className="text-lg text-gray-600">FUTURE20</p>
          </div>
        </div>

        {/* Additional order summary details */}
        {/* ... */}
      </div>
    </div>
  );
};

export default OrderSummaryPage;
