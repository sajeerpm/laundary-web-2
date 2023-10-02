import SuccessTick from "@/assets/tick.svg";
import { Link } from "react-router-dom";

type Props = {
  order: any;
};

const OrderSuccess = ({ order }: Props) => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center space-x-2">
        <img src={SuccessTick} className="h-32 w-32" />
        <h3 className="my-3 text-center text-lg uppercase md:text-2xl">
          thank you
        </h3>
        <h2 className="text-center text-xl font-semibold uppercase text-green-600 md:text-3xl">
          Your Order is confirmed!
        </h2>
        <p className="py-2 text-center">
          We will be sending you an email confirmation to
          example@masterdrycleaner.co.uk shortly
        </p>
        {order && (
          <div className="my-8 border p-4 text-gray-600">
            <p>
              Order {order.order_no} was placed on{" "}
              <span className="font-bold">{order.order_date}</span>. We will
              address it as soon as possible.
            </p>
            <p className="pt-4">
              Expected Delivery Date:{" "}
              <span className="font-bold">
                {order.delivery_start_date} - {order.delivery_end_date}
              </span>
            </p>
          </div>
        )}
        <Link className="rounded-full bg-black px-6 py-2 text-white" to={"/"}>
          Back To Home
        </Link>

        <p className="py-4 text-lg text-red-500">
          <strong>Note:</strong> If you can not see the order confirmation
          email, please check in your junk mail.
        </p>
      </div>
    </div>
  );
};

export default OrderSuccess;
