import PayPalButton from "@/hooks/PayPalButton";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PaymentForm from "./components/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

type Props = {};

const Payment = ({}: Props) => {
  const { id } = useParams();

  const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_KEY}`);

  useEffect(() => {}, []);

  return (
    <section
      id="home"
      className="mt-20 flex min-h-[100vh] flex-col items-center bg-white md:mt-0 md:justify-center md:pb-0"
    >
      <div className="m-2 flex w-full flex-col md:w-3/5 md:border">
        <div className=" p-4 md:flex md:flex-row">
          {/* Customer Information Section */}
          <div className="w-full md:w-3/6 md:border-r-2 md:px-6">
            <p className="py-2">
              <strong>DEBIT/CREDIT CARD PAYMENT:</strong>
            </p>
            <p className="pb-5">
              Book your collection with{" "}
              <strong className="underline">£0.00</strong> payment.
              <br />
              We will collect your items and make an invoice according to your
              items.
              <br />
              We will send you an email with payment link{" "}
              <strong>Before we Deliver your order.</strong>
            </p>
            <p className="py-2">
              <strong>PAYPAL PAYMENT:</strong>
            </p>
            <p>
              Book your collection with only{" "}
              <strong className="underline">£0.35p</strong> for Paypal
              verification.
              <br />
              We will collect your items and make an invoice according to your
              items.
              <br />
              We will send you an email with payment link{" "}
              <strong>Before we Deliver your order.</strong>
            </p>
          </div>
          <div className="justify-cente flex h-full w-full border-collapse flex-col md:px-6">
            <p className="h-[10px]"></p>
            <Elements stripe={stripePromise}>
              <PaymentForm order_id={id!} />
            </Elements>
            <p className="flex h-[50px] items-center justify-center">OR</p>
            <PayPalButton id={id!} />
          </div>
        </div>
      </div>

      <p className="w-full px-2 py-4 text-red-400 md:w-3/5 md:border">
        <strong>
          Master Clean Dry Cleaners are not taking any payment (Credit/Debit
          card) until we have collected your items and confirmed the price by
          email.
        </strong>
      </p>
    </section>
  );
};

export default Payment;
