import SubscribeTextBox from "@/shared/SubscribeTextBox";
import PaymentMethods from "@/assets/payment-methods.png";
import { useState } from "react";
import AlertPopup from "@/shared/AlertPopup";

const Footer = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <footer id="footer1" className="bg-white py-8 md:py-16">
      <div className="footer mx-auto w-5/6">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-8 flex flex-col md:mb-0">
            <p className="text-sm">Download our new app:</p>
            <div className="mt-2 flex">
              <img
                className="mr-2 h-8 w-auto cursor-pointer"
                alt="logo"
                src="https://d150we8dervy8c.cloudfront.net/static/images/app-stores/apple.png"
                onClick={handleShowAlert}
              />
              <img
                className="h-8 w-auto cursor-pointer"
                alt="logo"
                src="https://d150we8dervy8c.cloudfront.net/static/images/app-stores/google.png"
                onClick={handleShowAlert}
              />
            </div>
          </div>
          <div className="flex flex-col md:w-4/6 md:flex-row md:items-center">
            <p className="text-sm md:mr-4">Subscribe to our newsletter:</p>
            <div className="flex flex-1 flex-row gap-2">
              <SubscribeTextBox placeholder="Email Address" />
              <button className="rounded-none border border-gray-300 px-4 py-1 md:mt-0">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 gap-16 md:flex md:justify-start">
          <p className="text-left">
            <strong>Main Address</strong>
            <br />
            6 Langtry Walk,
            <br />
            London
            <br />
            NW8 0DU, UK
          </p>

          <p className="pt-4 text-left md:pt-0">
            <strong>Contact Details</strong>
            <br />
            Main: 020 7328 5621
            <br />
            Mobile 07950 455241
            <br />
            cs@masterdrycleaner.co.uk
          </p>
        </div>
        <div className="mt-8 md:flex md:justify-between">
          <p className="pt-3 text-xs">
            &copy; MASTERCLEAN DRYCLEANER SERVICE LTD. – ALL RIGHTS RESERVED.
            REGISTERED IN 294 MERTON ROAD SW18 5JW, WALES: 11606198
          </p>
          <div className="mt-3 flex flex-col items-start md:mt-0 md:flex-row md:items-center">
            <p className="mr-2 text-xs">Accepted payment methods:</p>
            <img
              className="h-12 w-auto"
              src={PaymentMethods}
              alt="payment-methods"
            />
          </div>
        </div>
      </div>
      {showAlert && (
        <AlertPopup message="App Coming Soon!" onClose={handleCloseAlert} />
      )}
    </footer>
  );
};

export default Footer;
