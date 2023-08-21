import { useEffect, useState } from "react";
import SHText from "@/shared/SHText";
import OrderSummaryPage from "./components/OrderSummary";
import axiosClient from "@/axiosClient";
import { useNavigate } from "react-router-dom";
import OrderSuccess from "./components/OrderSuccess";
import { Delivery } from "@/model/Slot";
import { Address } from "@/model/Address";
import { Order } from "@/model/Order";
import { User } from "@/model/User";
import Loading from "@/shared/Loading";
import {
  PASSWORD_CONFIRM_MG,
  PASSWORD_VALIDATION_MSG,
  UK_PHONE_NUMBER_PATTERN,
  UK_PHONE_VALIDATION_MSG,
} from "@/shared/constants";
import {
  validateConfirmPassword,
  validatePassword,
} from "@/shared/Validations";

type Props = {};

const CustomerInfo = ({}: Props) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [doorNumber, setDoorNumber] = useState("");
  const [customerNotes, setCustomerNotes] = useState("");
  const [buttonDisabled, setButtonDisable] = useState<boolean>(false);

  const [customerId, setCustomerId] = useState("");
  const [customerAddressId, setCustomerAddressId] = useState("");

  const [deliveryData, setDeliveryData] = useState<Delivery>();
  const [selectedAddress, setAddressData] = useState<Address>();
  const [progress, setProgress] = useState<number>(66.3);
  const [step, setStep] = useState<number>(1);
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      setStep(2);
    }

    const deliveryData = localStorage.getItem("delivery_details");
    if (deliveryData) {
      setDeliveryData(JSON.parse(deliveryData));
    }

    const selectedAddress = localStorage.getItem("selected_location");
    if (selectedAddress) {
      setAddressData(JSON.parse(selectedAddress));
    }

    const userData = localStorage.getItem("USER_DATA");
    if (userData) {
      setUserData(JSON.parse(userData));
    }
  }, []);

  const handleDoorNumberChange = (value: string) => {
    setDoorNumber(value);
  };
  const handleCustomerNotesChange = (value: string) => {
    setCustomerNotes(value);
  };

  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step == 1) {
      if (!validatePassword(password)) {
        alert(PASSWORD_VALIDATION_MSG);
        return;
      } else if (!validateConfirmPassword(password, confirmPassword)) {
        alert(PASSWORD_CONFIRM_MG);
        return false;
      } else if (!UK_PHONE_NUMBER_PATTERN.test(phoneNumber)) {
        alert(UK_PHONE_VALIDATION_MSG);
        return false;
      }
      setProgress(33.3);

      var payload = {
        name: firstName,
        email: email,
        phone: phoneNumber,
        password: password,
        address: selectedAddress,
      };

      localStorage.setItem("customer_register", JSON.stringify(payload));

      setButtonDisable(true);
      axiosClient
        .post("/register", payload)
        .then(({ data }) => {
          if (data.status == "1") {
            setCustomerId(data.customer_id);
            setCustomerAddressId(data.address_id);
          }
          // if (step < 2) {
          setStep(step + 1);
          // }
          setButtonDisable(false);
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
          }
          setButtonDisable(false);
        });
    } else if (step == 2) {
      setProgress(66.66);
      const payload: Order = {
        customer_id: customerId !== "" ? customerId : userData?.customer_id,
        customer_address_id: customerAddressId,
        pickup_date: deliveryData?.pickup.slot_date,
        pickup_start: deliveryData?.pickup.slot_start,
        pickup_end: deliveryData?.pickup.slot_end,
        pickup_display: deliveryData?.pickup.display,
        delivery_date: deliveryData?.delivery.slot_date,
        delivery_start: deliveryData?.delivery.slot_start,
        delivery_end: deliveryData?.delivery.slot_end,
        delivery_display: deliveryData?.delivery.display,
        customer_name: firstName,
        customer_email: email,
        customer_phone: phoneNumber,
        billing_address: selectedAddress?.Label,
        shipping_address: selectedAddress?.Label,
        postalcode: selectedAddress?.PostalCode,
        door_number: doorNumber,
        customer_notes: customerNotes,
        company_name: selectedAddress?.Company,
        full_address: selectedAddress?.Label,
        address_type: selectedAddress?.Type,
        address: JSON.stringify(selectedAddress),
      };

      axiosClient
        .post("/placeorder", payload)
        .then(({ data }) => {
          if (data.url) {
            window.location.href = data.url;
          }
          setButtonDisable(false);
        })
        .catch((err) => {
          const response = err.response;
          if (response) {
            if (response.status === 422) {
              alert("Please check mandatory fields.");
            } else {
              alert("Something went wrong, please try again!");
              navigate("/");
            }
          }
          setButtonDisable(false);
        });
    } else {
      setProgress(99.99);
      if (step < 2) {
        setStep(step + 1);
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
              {step == 1 && (
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
                      type="decimal"
                      required
                      maxLength={11}
                      autoComplete="off"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Enter Mobile Number"
                      className={`w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none`}
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
                    <p className="text-xs text-gray-400">
                      {PASSWORD_VALIDATION_MSG}
                    </p>
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
                  {/* <div className="mb-4">
                    <label className="block text-gray-600">Notes:</label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Please provide any other specific details"
                      className="w-full rounded border px-4 py-2 focus:border-secondary-500 focus:outline-none"
                      rows={4}
                    />
                  </div> */}
                </div>
              )}
              {step == 2 && (
                <OrderSummaryPage
                  customerNotes={customerNotes}
                  doorNumber={doorNumber}
                  customerNotesChange={handleCustomerNotesChange}
                  doorNumberChange={handleDoorNumberChange}
                />
              )}
              {/* Delivery Information Section */}
              {step == 3 && <OrderSuccess />}
              <div className="mb-4">
                {/* {step > 0 && (
                <button
                  className="float-left rounded-none bg-gray-600 px-8 py-1 text-white"
                  onClick={handleBack}
                >
                  Back
                </button>
              )} */}
                {step < 3 && (
                  <button
                    disabled={buttonDisabled}
                    type="submit"
                    className="float-right rounded-none bg-secondary-500 px-8 py-1"
                  >
                    {step == 2 ? "Place Order" : "Next"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      {buttonDisabled && <Loading />}
    </section>
  );
};

export default CustomerInfo;
