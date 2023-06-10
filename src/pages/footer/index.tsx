import SubscribeTextBox from "@/shared/SubscribeTextBox";
import PaymentMethods from "@/assets/payment-methods.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-white py-8 md:py-16">
      <div className="mx-auto w-5/6">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-8 flex flex-col md:mb-0">
            <p className="text-sm">Download our new app:</p>
            <div className="mt-2 flex">
              <img
                className="mr-2 h-8 w-auto"
                alt="logo"
                src="https://d150we8dervy8c.cloudfront.net/static/images/app-stores/apple.png"
              />
              <img
                className="h-8 w-auto"
                alt="logo"
                src="https://d150we8dervy8c.cloudfront.net/static/images/app-stores/google.png"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <p className="text-sm md:mr-4">Subscribe to our newsletter:</p>
            <div className="flex flex-row gap-2">
              <SubscribeTextBox placeholder="Email Address" />
              <button className="rounded-none border border-black px-12 md:mt-0">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-between">
          <p className="pt-3 text-xs">
            &copy; MASTERCLEAN DRYCLEANER SERVICE LTD. – ALL RIGHTS RESERVED.
            REGISTERED IN 294 MERTON ROAD SW18 5JW, WALES: 11606198
          </p>
          <div className="flex flex-col items-center md:flex-row">
            <p className="mr-2 text-xs">Accepted payment methods:</p>
            <img
              className="h-12 w-auto"
              src={PaymentMethods}
              alt="payment-methods"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
