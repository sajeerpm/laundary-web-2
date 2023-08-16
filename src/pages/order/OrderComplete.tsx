import OrderSuccess from "./components/OrderSuccess";

type Props = {};

const OrderComplete = ({}: Props) => {
  return (
    <section
      id="home"
      className="flex min-h-[100vh] flex-col items-center justify-center bg-white md:pb-0"
    >
      <div className="m-6 mx-auto flex w-10/12 flex-col items-center md:w-3/5">
        <div className="w-full items-center justify-center gap-8 md:flex md:flex-row">
          {/* Customer Information Section */}
          <div className="h-full rounded-md bg-white px-4 py-6 md:w-2/3 md:px-20">
            <OrderSuccess />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderComplete;
