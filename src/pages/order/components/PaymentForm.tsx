import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axiosClient from "@/axiosClient";
import { useNavigate } from "react-router-dom";

type Props = {
  order_id: string;
};

const PaymentForm = ({ order_id }: Props) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [stripe_error, setStripeError] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      setProcessing(false);
      setStripeError(
        "Sorry! Something went wrong, please contact customer care."
      );
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement) as any,
    });

    if (error) {
      setProcessing(false);
      setStripeError(error.message!);
      console.error(error);
    } else {
      axiosClient
        .post("/update-payment-method", {
          payment_id: paymentMethod.id,
          id: order_id,
        })
        .then((response) => {
          if (response.data.status) {
            navigate("/order/complete/" + order_id);
          }
        })
        .catch((error) => {
          // navigate("/order/cancel/" + order_id);
          setProcessing(false);
          setStripeError(error.message);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>CARD DETAILS (PAYMENT AFTER CLEANING)</p>
      <div className="flex flex-col items-center justify-center">
        <div className="fon w-full border border-gray-600 px-2 py-4 text-[16px]">
          <CardElement
            options={{
              // You can customize the appearance of the CardElement here
              style: {
                base: {
                  fontSize: "16px",
                  fontFamily: "dmsans, sans-serif",
                },
              },
              hideIcon: true,
              hidePostalCode: true,
            }}
          />
        </div>
        <div className="text-red-500">{stripe_error}</div>
        <button
          disabled={processing}
          className="float-right mt-5 h-[50px] w-full rounded-full bg-black px-4 py-2 text-xl font-bold italic text-white"
          type="submit"
        >
          {processing ? "Processing..." : "Pay"}
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
