import { useEffect, useState } from "react";

type Props = {};

interface Data {
  delivery: Slot;
  pickup: Slot;
  postcode: string;
}

interface Slot {
  slot: string;
  display: string;
}

const DeliveryInfo = ({}: Props) => {
  const [receivedData, setData] = useState<Data>();

  useEffect(() => {
    const data = localStorage.getItem("delivery_details");
    if (data) {
      setData(JSON.parse(data));
    }
  }, []);
  return (
    <div className="rounded bg-white p-4">
      <h2 className="mb-4 text-xl font-semibold">Pickup & Delivery Info</h2>
      {/* Display pickup and delivery information */}
      {/* Replace the placeholder data with actual data from your application */}
      <div className="">
        <p className="text-gray-600">Pickup Slot:</p>
        <p>{receivedData?.pickup.display}</p>
      </div>
      <div className="mb-4">
        <p className="text-gray-600">Pickup Address:</p>
        <p>1234 Main Street, City, State</p>
      </div>
      <div>
        <p className="text-gray-600">Delivery Slot:</p>
        <p>{receivedData?.delivery.display}</p>
      </div>
      <div>
        <p className="text-gray-600">Delivery Address:</p>
        <p>5678 Second Street, City, State</p>
      </div>
    </div>
  );
};

export default DeliveryInfo;
