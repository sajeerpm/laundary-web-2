import { useEffect, useState } from "react";
import SHText from "@/shared/SHText";
import axiosClient from "@/axiosClient";
import { useNavigate } from "react-router-dom";
import { Address } from "@/model/Address";
import Loading from "@/shared/Loading";
import {
  PASSWORD_CONFIRM_MG,
  PASSWORD_VALIDATION_MSG,
} from "@/shared/constants";
import {
  validateConfirmPassword,
  validatePassword,
} from "@/shared/Validations";
import InputWithSuggestions from "@/shared/InputWithSuggenstions";
import { Helmet } from "react-helmet";

type Props = {};

const Signup = ({}: Props) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [buttonDisabled, setButtonDisable] = useState<boolean>(false);

  const [selectedAddress, setAddressData] = useState<Address>();
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      setStep(2);
    }
    const selectedAddress = localStorage.getItem("selected_location");
    if (selectedAddress) {
      setAddressData(JSON.parse(selectedAddress));
    }
  }, []);

  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // alert(JSON.stringify(selectedAddress));
    // return;
    if (step == 1) {
      if (!validatePassword(password)) {
        alert(PASSWORD_VALIDATION_MSG);
        return;
      } else if (!validateConfirmPassword(password, confirmPassword)) {
        alert(PASSWORD_CONFIRM_MG);
        return false;
      }

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
          if (data.status) {
            alert(
              "Your account is successfully created, please login to your account."
            );
            navigate("/login");
          } else {
            alert("Your account creation has been failed, please try again.");
          }
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
    }
  };

  return (
    <section
      id="home"
      className="flex min-h-[100vh] flex-col bg-[#edecef] pt-28 md:pb-0 md:pt-32"
    >
      <Helmet>
        <title>Top Dry Cleaners in London | Master Dry Clean</title>
        <meta
          name="description"
          content="Discover the best dry cleaners in London at Master Dry Clean. We provide top-quality service to ensure your garments are cleaned and cared for with precision."
        />
        <meta
          property="og:title"
          content="Meta title: Top Dry Cleaners in London | Master Dry Clean"
        ></meta>
        <meta
          property="og:description"
          content="Discover the best dry cleaners in London at Master Dry Clean. We provide top-quality service to ensure your garments are cleaned and cared for with precision."
        ></meta>
      </Helmet>
      <div className="mx-auto flex w-10/12 flex-col items-center md:w-3/5">
        <div className="h-full rounded-md bg-white px-4 py-6 md:w-2/3 md:px-20">
          <form onSubmit={handleNext}>
            <div className="w-full">
              <SHText textAlign="text-center text-black mb-5">
                <p className="w-full uppercase">Sign Up</p>
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
                    maxLength={20}
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
                <label className="block text-gray-600">
                  Address <span className="text-red-500">*</span>
                </label>
                <div>
                  <InputWithSuggestions placeholder="Your Location Or Postcode" />
                </div>
                <div className="mt-6">
                  <button
                    disabled={buttonDisabled}
                    type="submit"
                    className="float-right rounded-none bg-secondary-500 px-8 py-1 text-white"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      {buttonDisabled && <Loading />}
    </section>
  );
};

export default Signup;
