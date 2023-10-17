import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  order: any;
};

const PaymentCancel = ({ order }: Props) => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center space-x-2">
        <XCircleIcon className="h-32 w-32 text-red-500" />
        <h3 className="my-3 text-center text-lg font-semibold uppercase md:text-2xl">
          Sorry
        </h3>
        <h2 className="text-center text-xl font-semibold uppercase text-red-500 md:text-3xl">
          payment Error
        </h2>
        <p className="py-2 text-center">
          Your payment <strong>{order ? order.order_no : ""}</strong> has not
          completed, please contact our customer service{" "}
          <a
            className="uppercase text-blue-500 hover:text-primary-500"
            href="tel:+442073285621"
          >
            (020) 7328 5621
          </a>{" "}
          to complete this payment.
        </p>
        <Link
          className="my-4 rounded-full bg-black px-6 py-2 text-white"
          to={"/"}
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentCancel;
