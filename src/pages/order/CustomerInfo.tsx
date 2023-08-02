import { useEffect, useState } from "react";
import SHText from "@/shared/SHText";
import OrderSummaryPage from "./components/OrderSummary";
import axiosClient from "@/axiosClient";
import { useNavigate } from "react-router-dom";
import OrderSuccess from "./components/OrderSuccess";

type Props = {};

interface Data {
  delivery: Slot;
  pickup: Slot;
  postcode: string;
  address: string;
}

interface Slot {
  slot: string;
  display: string;
}

const CustomerInfo = ({}: Props) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [progress, setProgress] = useState<number>(33.3);
  const [receivedData, setData] = useState<Data>();

  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      setData(JSON.parse(data));
      localStorage.removeItem("data");
    }
  }, []);

  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step == 0) {
      const payload = {
        name: firstName,
        email: email,
        phone: phoneNumber,
        password: password,
        address: receivedData?.address,
        postcode: receivedData?.postcode,
        pickupdate: receivedData?.pickup,
        deliverydate: receivedData?.delivery,
        notes: notes,
      };
      localStorage.setItem("customer_register", JSON.stringify(payload));

      axiosClient
        .post("/register", payload)
        .then(({ data }) => {
          console.log(data);

          if (step < 2) {
            setStep(step + 1);
            setProgress(33.3 * (step + 1));
          }
        })
        .catch((err) => {
          const response = err.response;
          if (response) {
            if (response.status === 422) {
              if (response.data.errors.email) {
                alert(
                  "Oops! It seems like that email has already been taken. Please log in to your existing account"
                );
                navigate("/login");
              } else {
                alert("Please check mandatory fields.");
              }
            } else {
              alert("Something went wrong, please try again!");
            }
            console.log(response.data.errors);
          }
        });
    } else if (step == 1) {
      const payload = {
        customer_name: firstName,
        customer_email: email,
        customer_phone: phoneNumber,
        billing_address: receivedData?.address,
        shipping_address: receivedData?.address,
        pickup_date: receivedData?.pickup.slot,
        delivery_date: receivedData?.delivery.slot,
      };

      axiosClient
        .post("/placeorder", payload)
        .then(({ data }) => {
          console.log(data);

          if (step < 2) {
            setStep(step + 1);
            setProgress(33.3 * (step + 1));
          }
        })
        .catch((err) => {
          const response = err.response;
          if (response) {
            if (response.status === 422) {
              alert("Please check mandatory fields.");
            } else {
              alert("Something went wrong, please try again!");
            }
            console.log(response.data.errors);
          }
        });
    } else {
      if (step < 2) {
        setStep(step + 1);
        setProgress(33.3 * (step + 1));
      }
    }
  };

  // const handleBack = () => {
  //   if (step > 0) {
  //     setStep(step - 1);
  //     setProgress(50 * (step - 1));
  //   }
  //   console.log(step);
  // };

  return (
    <section
      id="home"
      className="flex min-h-[100vh] flex-col bg-[#edecef] md:pb-0"
    >
      <div className="flex h-[36px] items-center justify-center bg-white p-10 shadow-sm">
        <div className="w-10/12 rounded-full bg-gray-400 md:w-1/4">
          <div
            className="h-2 rounded-full bg-secondary-500 transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <div className="m-6 mx-auto flex w-10/12 flex-col items-center md:w-3/5">
        <div className="w-full items-start justify-center gap-8 md:flex md:flex-row">
          {/* Customer Information Section */}
          <div className="h-full rounded-md bg-white px-4 py-6 md:w-2/3 md:px-20">
            <form onSubmit={handleNext}>
              <div className="w-full">
                <SHText textAlign="text-center text-black mb-5">
                  <p className="w-full uppercase">
                    {step == 0 ? "Customer Information" : "Order Summary"}
                  </p>
                </SHText>
              </div>
              {/* Input fields for customer details */}
              {step == 0 && (
                <div className="h-full">
                  <div className="flex">
                    <div className="input-container mb-4 w-full">
                      <label className="mb-1 text-sm font-bold text-gray-600">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter Your Full Name"
                        className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Communication */}
                  <div className="mb-4">
                    <label className="block text-gray-600">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="phone"
                      required
                      autoComplete="off"
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
                      required
                      autoComplete="off"
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
                      autoComplete="off"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                      required
                      autoComplete="off"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm password"
                      className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600">Notes:</label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Please provide any other specific details"
                      className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
                      rows={4}
                    />
                  </div>
                </div>
              )}
              {step == 1 && <OrderSummaryPage />}
              {/* Delivery Information Section */}
              {step == 2 && <OrderSuccess />}
              <div className="mb-4">
                {/* {step > 0 && (
                <button
                  className="float-left rounded-none bg-gray-600 px-8 py-1 text-white"
                  onClick={handleBack}
                >
                  Back
                </button>
              )} */}
                {step < 2 && (
                  <button
                    type="submit"
                    className="float-right rounded-none bg-secondary-500 px-8 py-1"
                  >
                    {step == 1 ? "Place Order" : "Next"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerInfo;
