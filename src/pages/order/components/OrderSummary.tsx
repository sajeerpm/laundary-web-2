// OrderSummaryPage.tsx

import React, { ChangeEvent, useEffect, useState } from "react";

import { MapPinIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";
import { Delivery } from "@/model/Slot";
import { Address } from "@/model/Address";

interface Props {
  doorNumber: string;
  customerNotes: string;
  doorNumberChange: (value: string) => void;
  customerNotesChange: (value: string) => void;
}

const OrderSummaryPage: React.FC<Props> = ({
  doorNumber,
  customerNotes,
  doorNumberChange,
  customerNotesChange,
}) => {
  const [customerData, setData] = useState<Address>();
  const [deliveryData, setAddressData] = useState<Delivery>();

  useEffect(() => {
    const data = localStorage.getItem("selected_location");
    if (data) {
      setData(JSON.parse(data));
    }
    const deliveryData = localStorage.getItem("delivery_details");
    if (deliveryData) {
      setAddressData(JSON.parse(deliveryData));
    }
  }, []);

  const handleDoorNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    doorNumberChange(e.target.value);
  };
  const handleCustomerNotesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    customerNotesChange(e.target.value);
  };
  return (
    <div className="flex">
      <div className="w-full space-y-8 rounded-lg bg-white">
        {/* Address Section */}
        <div className="flex flex-col space-y-4">
          <p className="font-montserrat text-xl text-gray-600">Address</p>
          <hr></hr>

          <div className="flex flex-row">
            <MapPinIcon className="mr-3 h-6 w-6 text-gray-600" />
            <p className="text-lg text-gray-600">{customerData?.Label}</p>
          </div>
          <div className="input-container mb-4 w-full">
            <input
              type="text"
              value={doorNumber}
              onChange={handleDoorNumberChange}
              placeholder="Enter Door Number"
              className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
            />
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
              {deliveryData?.pickup.display}
            </p>
          </div>

          <div className="flex flex-row">
            <CalendarDaysIcon className="mr-3 h-6 w-6 text-gray-600" />
            <p className="text-lg text-gray-600">
              {deliveryData?.delivery.display}
            </p>
          </div>
        </div>
        <div className="mb-4flex flex-col space-y-4">
          <textarea
            placeholder="Please provide any other specific details"
            className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
            rows={4}
            onChange={handleCustomerNotesChange}
          >
            {customerNotes}
          </textarea>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
