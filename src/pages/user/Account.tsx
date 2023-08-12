import axiosClient from "@/axiosClient";
import { CustomerAddress } from "@/model/CustomerAddress";
import { CustomerOrder } from "@/model/CustomerOrder";
import HText from "@/shared/HText";
import SHText from "@/shared/SHText";
import { useEffect, useState } from "react";

type Props = {};

interface Customer {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  addresses: CustomerAddress[];
  orders: CustomerOrder[];
}

const Account = ({}: Props) => {
  const [isShowPasswordSection, setShowPasswordSection] =
    useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(1);
  const [customerData, setCustomerData] = useState<Customer>();
  const [orderIndex, setOrderIndex] = useState<number>(-1);

  const token = localStorage.getItem("ACCESS_TOKEN");

  const handleTogglePasswordSection = () => {
    setShowPasswordSection((prevState) => !prevState);
  };

  const handleActiveTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axiosClient.get("/orders", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setCustomerData(response.data.customer);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCustomerData();
  }, []);

  const handleViewOrder = (id: number) => {
    setOrderIndex(id);
    setActiveTab(4);
  };

  const handleCancelOrder = async (id: number) => {
    const response = await axiosClient.get("/order/cancel/" + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (response) {
      window.location.reload();
    }
  };

  return (
    <section>
      <div className="mx-auto mt-20 min-h-[100vh] w-full md:flex md:w-3/5">
        <div className="bg-white p-4 md:w-1/4">
          <SHText textAlign={"left text-black"}>My Account</SHText>
          <ul className="mt-6 font-dmsans">
            <li className="mb-2">
              <span
                className="cursor-pointer hover:underline"
                onClick={() => handleActiveTab(1)}
              >
                Dashboard
              </span>
            </li>
            <li className="mb-2">
              <span
                className="cursor-pointer hover:underline"
                onClick={() => handleActiveTab(2)}
              >
                Profile
              </span>
            </li>
            <li className="mb-2">
              <span
                className="cursor-pointer hover:underline"
                onClick={() => handleActiveTab(3)}
              >
                Orders
              </span>
            </li>
            <li className="mb-2">
              <span className="cursor-pointer hover:underline">Logout</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 md:w-3/4">
          {activeTab == 1 && (
            <div>
              <HText textAlign={"text-left text-black uppercase"}>
                My Dashboard
              </HText>
              <p className="py-4 text-lg">
                <strong>Recent Orders:</strong>
              </p>
              <table className="w-full">
                <tr className="border-b-2">
                  <th className="py-2 text-left uppercase">Order #</th>
                  <th className="py-2 text-left uppercase">Date</th>
                  <th className="py-2 text-left uppercase">Ship To</th>
                  <th className="py-2 text-left uppercase">Order Total</th>
                  <th className="py-2 text-left uppercase">Status</th>
                  <th className="py-2 text-left uppercase"></th>
                </tr>
                {customerData?.orders.map((order, index) => (
                  <tr>
                    <td className="p-2">{order.order_no}</td>
                    <td className="p-2">{order.order_date}</td>
                    <td className="p-2">{order.customer_name}</td>
                    <td className="p-2">{order.total}</td>
                    <td className="p-2">{order.status}</td>
                    <td className="p-2">
                      <span
                        className="cursor-pointer px-2 italic"
                        onClick={() => handleViewOrder(index)}
                      >
                        view order
                      </span>
                      {order.status != "cancelled" && "|"}
                      {order.status != "cancelled" && (
                        <span
                          className="cursor-pointer px-2 italic"
                          onClick={() => handleCancelOrder(order.id)}
                        >
                          cancel order
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </table>
              <h2 className="py-2 text-lg">
                <strong>Account Information:</strong>
              </h2>
              <p className="font-montserrat text-lg">Contact Information:</p>
              <hr className="py-2" />
              <div>
                <p>{customerData?.name}</p>
                <p>{customerData?.phone_number}</p>
                <p>{customerData?.email}</p>
              </div>
              <p className="pt-4 font-montserrat text-lg">Address Book:</p>
              <hr className="py-2" />
              <div className="grid grid-flow-col">
                {customerData?.addresses.map((address) => (
                  <div className="">
                    {address.full_address.split("\n").map((line) => (
                      <div className="">
                        <p>{line}</p>
                      </div>
                    ))}
                    <br />
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab == 2 && (
            <div className="flex flex-col">
              <HText textAlign="text-left uppercase">
                Edit Account Information
              </HText>
              <p className="py-4 text-lg">Account Information:</p>

              <label>Name *</label>
              <input
                className="border-1 my-2 w-80 border px-4 py-2"
                type="text"
                value={customerData?.name}
              />

              <label>Email *</label>
              <input
                className="border-1 my-2 w-80 border px-4 py-2"
                type="text"
                readOnly
                value={customerData?.email}
              />

              <label>Mobile Number *</label>
              <input
                className="border-1 my-2 w-80 border px-4 py-2"
                type="text"
                value={customerData?.phone_number}
              />

              <div className="my-8 flex">
                <input
                  name="change_password"
                  type="checkbox"
                  onClick={handleTogglePasswordSection}
                />
                <label className="p-2" id="change_password">
                  Change password
                </label>
              </div>
              {isShowPasswordSection && (
                <div className="flex flex-col">
                  <label>Current Password *</label>
                  <input
                    className="border-1 my-2 w-80 border px-4 py-2"
                    type="password"
                  />

                  <label>New Password *</label>
                  <input
                    className="border-1 my-2 w-80 border px-4 py-2"
                    type="password"
                  />

                  <label>Confirm Password *</label>
                  <input
                    className="border-1 my-2 w-80 border px-4 py-2"
                    type="password"
                  />
                </div>
              )}

              <button className="border-1 float-right my-4 w-[100px] border bg-green-500 px-4 py-2">
                Save
              </button>
            </div>
          )}
          {activeTab == 3 && (
            <div>
              <HText textAlign={"text-left text-black uppercase"}>
                My Orders
              </HText>
              <table className="mt-8 w-full">
                <tr className="border-b-2">
                  <th className="py-2 text-left uppercase">Order #</th>
                  <th className="py-2 text-left uppercase">Date</th>
                  <th className="py-2 text-left uppercase">Ship To</th>
                  <th className="py-2 text-left uppercase">Order Total</th>
                  <th className="py-2 text-left uppercase">Status</th>
                  <th className="py-2 text-left uppercase"></th>
                </tr>
                {customerData?.orders.map((order, index) => (
                  <tr>
                    <td className="p-2">{order.order_no}</td>
                    <td className="p-2">{order.order_date}</td>
                    <td className="p-2">{order.customer_name}</td>
                    <td className="p-2">{order.total}</td>
                    <td className="p-2">{order.status}</td>
                    <td className="p-2">
                      <span
                        onClick={() => handleViewOrder(index)}
                        className="cursor-pointer px-2 italic"
                      >
                        view order
                      </span>
                      {order.status != "cancelled" && "|"}
                      {order.status != "cancelled" && (
                        <span
                          className="cursor-pointer px-2 italic"
                          onClick={() => handleCancelOrder(order.id)}
                        >
                          cancel order
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          )}
          {activeTab == 4 && (
            <div>
              <HText textAlign={"text-left text-black uppercase"}>
                My Orders
              </HText>
              <div className="flex flex-row justify-between">
                <div>
                  <h3 className="py-2 text-lg font-bold uppercase">
                    Shipping Address
                  </h3>
                  <hr className="py-2" />
                  <p>{customerData?.orders[orderIndex].customer_name}</p>
                  {customerData?.orders[orderIndex].shipping_address
                    .split("\n")
                    .map((line) => (
                      <div className="">
                        <p>{line}</p>
                      </div>
                    ))}
                  <p>T: {customerData?.orders[orderIndex].customer_phone}</p>
                </div>
                <div>
                  <h3 className="py-2 text-lg font-bold uppercase">
                    Order Details
                  </h3>
                  <hr className="py-2" />
                  <p>Order #: {customerData?.orders[orderIndex].order_no}</p>
                  <p>
                    Order Date: {customerData?.orders[orderIndex].order_date}
                  </p>
                </div>

                <div>
                  <h3 className="py-2 text-lg font-bold uppercase">
                    Payment Method
                  </h3>
                  <hr className="py-2" />
                  <p>Online Payment</p>
                </div>
              </div>
              <table className="mt-8 w-full">
                <tr className="border-b-2">
                  <th className="py-2 text-left text-sm uppercase">
                    Item Name
                  </th>
                  <th className="py-2 text-left text-sm uppercase">Price</th>
                  <th className="py-2 text-left text-sm uppercase">Quantity</th>
                  <th className="py-2 text-left text-sm uppercase">Total</th>
                </tr>
                {customerData?.orders[orderIndex].items.map((item) => (
                  <tr>
                    <td className="py-2">{item.item_name}</td>
                    <td className="py-2">{item.quantity}</td>
                    <td className="py-2">{item.price}</td>
                    <td className="text-right">
                      {(Number(item.price) * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}

                <tr className="border-t-2">
                  <td className="text-right" colSpan={3}>
                    Subtotal
                  </td>
                  <td className="text-right">
                    {"£" +
                      Number(customerData?.orders[orderIndex].total).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td className="text-right" colSpan={3}>
                    Discount
                  </td>
                  <td className="text-right">0.00</td>
                </tr>
                <tr>
                  <td className="text-right" colSpan={3}>
                    Tax
                  </td>
                  <td className="text-right">0.00</td>
                </tr>
                <tr>
                  <td className="text-right" colSpan={3}>
                    Total
                  </td>
                  <td className="text-right">
                    {"£" +
                      Number(customerData?.orders[orderIndex].total).toFixed(2)}
                  </td>
                </tr>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Account;
