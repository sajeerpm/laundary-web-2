import PayPalButton from "@/hooks/PayPalButton";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PaymentForm from "./components/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet";
import paypal from "@/assets/socialmedia/paypal.png";
import mastercard from "@/assets/socialmedia/mastercard.png";
import stripe from "@/assets/socialmedia/stripe.png";
import visa from "@/assets/socialmedia/visa.png";

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
            <p className="flex h-[50px] items-center justify-center font-[900]">
              OR
            </p>
            <PayPalButton id={id!} />

            {/* <strong className="text-center text-red-500">
              We do not store any Credit or Debit card data including card
              numbers, cvc and billing addresses. We send all Credit and Debit
              card information securely to PayPal and stripe for processing.
              <br /> Please see PayPal and stripe terms of service for more
              information about their payment system and security .
            </strong> */}

            <div className="flex justify-center gap-4 py-8">
              <img className="h-[42px]" src={mastercard} alt="" />
              <img className="h-[42px]" src={visa} alt="" />
              <img className="h-[42px]" src={stripe} alt="" />
              <img className="h-[42px]" src={paypal} alt="" />
            </div>

            <p className="w-full px-2 py-4 text-center text-red-400">
              <strong>
                Master Clean Dry Cleaners are not taking any payment
                (Credit/Debit card) until we have collected your items and
                confirmed the price by email.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
