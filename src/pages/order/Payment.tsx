import axiosClient from "@/axiosClient";
import PayPalButton from "@/hooks/PayPalButton";
import AlertPopup from "@/shared/AlertPopup";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Props = {};

const Payment = ({}: Props) => {
  const [showAlert, setShowAlert] = useState(false);
  const { id } = useParams();
  const { amount } = useParams();
  const { product } = useParams();

  const handleStripPayment = async () => {
    try {
      const response = await axiosClient.post("/checkout", { id: id });
      console.log(response);
      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleShowAlert();
  }, []);

  //   const handlePaypalPayment = (
  //     id: string,
  //     amount: string,
  //     product: string
  //   ) => {};

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <section
      id="home"
      className="flex min-h-[100vh] flex-col items-center justify-center bg-white md:pb-0"
    >
      <div className="m-6 mx-auto flex w-10/12 flex-col items-center md:w-3/5">
        <div className="w-full items-center justify-center gap-8 md:flex md:flex-row">
          {/* Customer Information Section */}
          <div className="flex h-full flex-col justify-center rounded-md border bg-white px-4 py-6 md:w-2/3 md:px-20">
            <p>
              <strong>Order Id:</strong> {id}
            </p>
            <p>
              <strong>Amount:</strong> {amount} GBP
            </p>
            <p>
              <strong>Product:</strong> {product}
            </p>
            <p className="h-[50px]"></p>
            <button
              className="rounded-full bg-black px-6 py-3 text-white"
              onClick={handleStripPayment}
            >
              Pay with Stripe
            </button>
            <p className="flex h-[50px] items-center justify-center">OR</p>
            <PayPalButton amount={amount!} id={id!} item={product!} />
          </div>
        </div>
      </div>
      {showAlert && (
        <AlertPopup
          message="Please pay and bag your items, your collection will be booked. We will count the items and inform you.
        That will save your time please."
          onClose={handleCloseAlert}
        />
      )}
    </section>
  );
};

export default Payment;
