type Props = {};

const OrderDetails = ({}: Props) => {
  return (
    <section>
      <div className="mx-auto mt-20 flex min-h-[100vh] w-5/6">
        <div className="items-center justify-center">
          <h2 className="mb-2 text-2xl font-semibold">Order Details</h2>
          <p className="mb-2">Order ID: #HHHHHH</p>
          <p className="mb-2">Date: Aug 10, 2023</p>
          <p className="mb-4">Total: ${(100.0).toFixed(2)}</p>
          <h3 className="mb-2 text-lg font-semibold">Items:</h3>
          <ul>
            {/* {order.items.map((item) => ( */}
            <li key={0} className="mb-1">
              {"Dry Cleaning"} - ${(100.0).toFixed(2)} x {2}
            </li>
            {/* ))} */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
