import { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import axiosClient from "@/axiosClient";

type Props = {
  id: string;
};

const PayPalButton = ({ id }: Props) => {
  const navigate = useNavigate();
  const product = {
    description: "Skip basket",
    price: "0.35",
  };
  const [error, setError] = useState<any>("");

  const handleApprove = async (orderId: string) => {
    try {
      const response = await axiosClient.post("/paypal-success", {
        id: id,
        payment_id: orderId,
      });
      console.log(response);
      if (response.data.status) {
        navigate("/order/complete/" + id);
      } else {
        navigate("/order/cancel/" + id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (error) {
    alert(error);
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId: `${import.meta.env.VITE_PAYPAL_CLIENT_ID}`,
        currency: "GBP",
      }}
    >
      <PayPalButtons
        style={{
          color: "silver",
          layout: "horizontal",
          height: 48,
          tagline: false,
          shape: "pill",
        }}
        createOrder={(data, actions) => {
          console.log(data);
          return actions.order.create({
            purchase_units: [
              {
                reference_id: id,
                description: product.description,
                amount: {
                  currency_code: "GBP",
                  value: product.price,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order?.capture();
          console.log("Order", order);

          handleApprove(data.orderID);
        }}
        onError={(err) => {
          setError(err);
          console.error("Paypal checkout onError", err);
        }}
        onCancel={() => {}}
        onClick={(data, actions) => {
          console.log(data);
          const hasAlreadyBrought = false;
          if (hasAlreadyBrought) {
            setError("Something went wrong, please contact customer service.");
            return actions.reject();
          } else {
            return actions.resolve();
          }
        }}
      ></PayPalButtons>
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
