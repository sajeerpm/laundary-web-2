import SuccessTick from "@/assets/tick.svg";
import { Link } from "react-router-dom";

type Props = {};

const PaymentSuccess = ({}: Props) => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center space-x-2">
        <img
          src={SuccessTick}
          alt="Dry Cleaning London"
          className="h-32 w-32"
        />
        <h3 className="my-3 text-center text-lg uppercase md:text-2xl">
          thank you
        </h3>
        <h2 className="text-center text-xl font-semibold uppercase text-green-600 md:text-3xl">
          Your Payment is confirmed!
        </h2>
        <Link
          className="mt-12 rounded-full bg-black px-6 py-2 text-white"
          to={"/"}
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
