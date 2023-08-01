// OrderSummaryPage.tsx

import React, { useEffect, useState } from "react";

import {
  MapPinIcon,
  CalendarDaysIcon,
  ScissorsIcon,
} from "@heroicons/react/24/solid";

interface Data {
  name: string;
  email: string;
  phone: string;
  address: string;
  postcode: string;
  pickupdate: Slot;
  deliverydate: Slot;
  notes: string;
}
interface Slot {
  slot: string;
  display: string;
}

const OrderSummaryPage: React.FC = () => {
  const [receivedData, setData] = useState<Data>();
  useEffect(() => {
    const data = localStorage.getItem("customer_register");
    if (data) {
      setData(JSON.parse(data));
    }
  }, []);
  return (
    <div className="flex">
      <div className="w-full space-y-8 rounded-lg bg-white pb-8">
        {/* Address Section */}
        <div className="flex flex-col space-y-4">
          <p className="font-montserrat text-xl text-gray-600">Address</p>
          <hr></hr>

          <div className="flex flex-row">
            <MapPinIcon className="mr-3 h-6 w-6 text-gray-600" />
            <p className="text-lg text-gray-600">{receivedData?.address}</p>
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
            <p className="text-lg text-gray-600">
              {receivedData?.pickupdate.display}
            </p>
          </div>

          <div className="flex flex-row">
            <CalendarDaysIcon className="mr-3 h-6 w-6 text-gray-600" />
            <p className="text-lg text-gray-600">
              {receivedData?.deliverydate.display}
            </p>
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
