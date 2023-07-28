import { useEffect, useState } from "react";
import SHText from "@/shared/SHText";
import OrderSummaryPage from "./components/OrderSummary";

type Props = {};

// interface Data {
//   delivery: Slot;
//   pickup: Slot;
//   postcode: string;
// }

// interface Slot {
//   slot: string;
//   display: string;
// }

const CustomerInfo = ({}: Props) => {
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  // const [receivedData, setData] = useState<Data>();

  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      // setData(JSON.parse(data));
    }
  }, []);

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    }
    console.log(step);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
    console.log(step);
  };

  return (
    <section
      id="home"
      className="min:h-[80vh] mt-[86px] flex flex-col bg-[#edecef] md:pb-0"
    >
      <div className="m-6 mx-auto flex w-3/5 flex-col items-center">
        <div className="w-full items-start justify-center gap-8 md:flex md:flex-row">
          {/* Customer Information Section */}
          <div className="rounded-md bg-white px-20 py-6 md:w-2/3">
            <div className="w-full">
              <SHText textAlign="text-center text-black mb-5">
                <p className="w-full uppercase">
                  {step == 0 ? "Customer Information" : "Order Summary"}
                </p>
              </SHText>
            </div>
            {/* Input fields for customer details */}
            {step == 0 && (
              <div>
                <div className="flex">
                  <div className="input-container mb-4 w-full">
                    <label className="mb-1 text-sm font-bold text-gray-600">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter Your Full Name"
                      className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
                    />
                  </div>
                  {/* <div className="mb-4 ml-3 w-1/2">
                <label className="block text-gray-600">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last Name"
                  className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
                />
              </div> */}
                </div>

                {/* Address */}
                {/* <div className="mb-4">
              <label className="block text-gray-600">
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="House number and street name"
                className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Apartment, suite, unit, etc. (optional)"
                className="mt-3 w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">
                Town / City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Town / City"
                className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Country (optional):</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Country (optional)"
                className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">
                Postcode <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={receivedData?.postcode}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Postcode"
                className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
              />
            </div> */}

                {/* Communication */}
                <div className="mb-4">
                  <label className="block text-gray-600">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter Mobile Number"
                    className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email Address"
                    className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter a password"
                    className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Confirm password"
                    className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-600">Notes:</label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Please provide any other specific details"
                    className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
                    rows={4}
                  />
                </div>
              </div>
            )}
            {step == 1 && <OrderSummaryPage />}
            <div className="mb-4">
              {step > 0 && (
                <button
                  className="float-left rounded-none bg-gray-600 px-8 py-1 text-white"
                  onClick={handleBack}
                >
                  Back
                </button>
              )}
              {step < 2 && (
                <button
                  className="float-right rounded-none bg-secondary-500 px-8 py-1"
                  onClick={handleNext}
                >
                  {step == 1 ? "Place Order" : "Next"}
                </button>
              )}
            </div>
          </div>

          {/* Delivery Information Section */}
          {/* <div className="mt-5 rounded-md bg-white md:mt-0 md:w-1/3">
            <DeliveryInfo />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CustomerInfo;
