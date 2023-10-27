import axiosClient from "@/axiosClient";
import { CustomerAddress } from "@/model/CustomerAddress";
import { CustomerOrder } from "@/model/CustomerOrder";
import {
  ShoppingCartIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
type Props = {};

interface Customer {
  id: number;
  name: string;
  email: string;
  phone_number: string;
  addresses: CustomerAddress[];
  orders: CustomerOrder[];
}

const AccountMobile = ({}: Props) => {
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState<Customer>();
  const [activeTab, setActiveTab] = useState<number>(1);
  const [selectedOrder, setSelectedOrder] = useState<CustomerOrder>();
  const token = localStorage.getItem("ACCESS_TOKEN");
  // const statusMap = {
  //   "pending payment": "bg-red-500 text-white",
  //   pending: "bg-green-500 text-white",
  //   collected: "bg-yellow-500 text-black",
  //   invoiced: "bg-red-500 text-white",
  //   "pending payment": "bg-red-500 text-white",
  // };

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        axiosClient
          .get("/orders", {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then(({ data }) => {
            setCustomerData(data.customer);
          })
          .catch(async (err) => {
            const error = err.response;
            if (error && error.status >= 400) {
              localStorage.removeItem("ACCESS_TOKEN");
              navigate("/login");
            }
          });
      } catch (error) {
        console.error(error);
      }
    };
    fetchCustomerData();
  }, []);

  const handleActiveTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  const handleSelectedOrderIndex = (orderIndex: number) => {
    setActiveTab(3);
    setSelectedOrder(customerData?.orders[orderIndex]);
  };

  const handleLogOut = async () => {
    try {
      await axiosClient.post("/logout", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      console.error(error);
    }
    localStorage.removeItem("ACCESS_TOKEN");
    navigate("/login");
  };

  const handlePayNow = (id: Number, amount: Number, product: string) => {
    navigate("/order/payment/" + id + "/" + amount + "/" + product);
  };

  return (
    <section className="bg-gray-200">
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
      <div className="mx-auto mt-20 flex min-h-[100vh] w-full flex-col gap-2">
        <div className="flex flex-col items-center justify-between bg-white p-6 shadow-md">
          <div className="w-full">
            <h2 className="text-center text-lg font-semibold">
              Hi, {customerData?.name}
            </h2>
          </div>
          <div className="w-full">
            <p className="text-center text-gray-400">
              {customerData?.phone_number} | {customerData?.email}
            </p>
          </div>
        </div>
        {(activeTab === 2 || activeTab === 4) && (
          <div className="flex flex-row justify-between bg-white px-3 py-4 shadow-md">
            <h3 className="text-lg font-bold">Orders</h3>
            <button
              className="flex flex-row text-blue-600"
              onClick={() => handleActiveTab(1)}
            >
              <ChevronLeftIcon className="w-6" />
              Account
            </button>
          </div>
        )}
        {activeTab === 3 && (
          <div className="flex flex-row justify-between bg-white px-3 py-4 shadow-md">
            <h3 className="text-lg font-bold">Orders</h3>
            <button
              className="flex flex-row text-blue-600"
              onClick={() => handleActiveTab(2)}
            >
              <ChevronLeftIcon className="w-6" />
              Orders
            </button>
          </div>
        )}
        {activeTab === 1 && (
          <div className="bg-white shadow-md">
            <div
              className="flex cursor-pointer items-center justify-between px-6 py-4"
              onClick={() => handleActiveTab(2)}
            >
              <ShoppingCartIcon className="w-6" />
              <div className="w-[60%]">
                <p className="font-bold">Orders</p>
                <p className="text-sm text-gray-400">check your order status</p>
              </div>
              <ChevronRightIcon className="w-6" />
            </div>
            <hr />
            <div
              className="flex cursor-pointer items-center justify-between px-6 py-4"
              onClick={() => handleActiveTab(4)}
            >
              <UserIcon className="w-6" />
              <div className="w-[60%]">
                <p className="font-bold">Profile</p>
                <p className="text-sm text-gray-400">
                  manage your profile details
                </p>
              </div>
              <ChevronRightIcon className="w-6" />
            </div>
            <hr />
            <div
              className="flex cursor-pointer items-center justify-between px-6 py-4"
              onClick={handleLogOut}
            >
              <ArrowLeftOnRectangleIcon className="w-6" />
              <div className="w-[60%]">
                <p className="font-bold">Logout</p>
              </div>
              <ChevronRightIcon className="w-6" />
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="bg-white shadow-md">
            {customerData?.orders.map((order, index) => (
              <>
                <div
                  className="cursor-pointer px-6 py-4"
                  onClick={() => handleSelectedOrderIndex(index)}
                >
                  <div className="mb-2 flex flex-row items-center justify-between">
                    <div className="">
                      <p className="font-bold text-blue-600">
                        #{order.order_no}
                      </p>
                      <p>{order.order_date}</p>
                    </div>
                    <span className="text-right">{order.status}</span>
                  </div>
                  <hr />
                  <div className="flow-col mt-2 flex justify-between">
                    <p>Total: £{order.total}</p>
                    <p>
                      Due: £
                      {Number(order.amount_due) > 0 ? order.amount_due : "0.00"}
                    </p>
                  </div>

                  {/* <div className="flow-col mt-2 flex justify-between">
                    <p></p>
                    <p className="text-red-500">Report Issue</p>
                  </div> */}
                </div>
                <hr />
              </>
            ))}
          </div>
        )}
        {activeTab === 3 && (
          <>
            <div className="bg-white shadow-md">
              <div className="cursor-pointer px-6 py-4">
                <div className="mb-4 flex flex-row items-center justify-between">
                  <div className="">
                    <p className="font-bold text-blue-600">
                      #{selectedOrder?.order_no}
                    </p>
                    <p>{selectedOrder?.order_date}</p>
                  </div>
                  <span className="rounded-full bg-green-500 px-4 capitalize text-white">
                    {selectedOrder?.status}
                  </span>
                </div>
                {selectedOrder?.items.map((item) => (
                  <div className="mt-2 flex flex-col justify-between">
                    <p className="font-semibold">{item.item_name}</p>
                    <div className="flex flex-row justify-between text-sm text-gray-400">
                      <p>Qty: {item.quantity}</p>
                      <p className="text-gray-800">{"£" + item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white px-6 py-4 shadow-md">
              <div className="flow-col mt-2 flex justify-between">
                <p>Subtotal</p>
                <p className="text-lg font-bold">
                  {"£" + Number(selectedOrder?.total).toFixed(2)}
                </p>
              </div>
              <div className="flow-col mt-2 flex justify-between">
                <p>Discount</p>
                <p className="text-lg font-bold">{"£" + "0.00"}</p>
              </div>
              {/* <div className="flow-col mt-2 flex justify-between">
                <p>Tax</p>
                <p className="text-lg font-bold">{"£" + "0.00"}</p>
              </div> */}
              <div className="flow-col mt-2 flex justify-between">
                <p>Total</p>
                <p className="text-lg font-bold">
                  {"£" +
                    (
                      Number(selectedOrder?.total) -
                      Number(selectedOrder?.discount)
                    ).toFixed(2)}
                </p>
              </div>
            </div>
            <div className="bg-white px-6 py-4 shadow-md">
              <div className="flow-col mt-2 flex justify-between">
                <p className="text-lg font-bold">Payment Details</p>
              </div>
              <div className="flow-col mt-2 flex justify-between">
                <p>Online Payment</p>
                <p className="text-lg font-bold">
                  {"£" +
                    (
                      Number(selectedOrder?.total) -
                      Number(selectedOrder?.amount_due)
                    ).toFixed(2)}
                </p>
              </div>
              <div className="flow-col mt-2 flex justify-between">
                <p>Amount Due</p>
                <p className="text-lg font-bold">
                  £
                  {Number(selectedOrder?.amount_due) > 0
                    ? selectedOrder?.amount_due
                    : "0.00"}
                </p>
              </div>
            </div>
            {Number(selectedOrder?.amount_due) > 0 &&
              selectedOrder?.status == "pending payment" && (
                <div className="flex w-full flex-row justify-evenly gap-1">
                  <button
                    onClick={() =>
                      handlePayNow(
                        selectedOrder?.id ?? 0,
                        selectedOrder?.amount_due ?? 0,
                        "Skip Basket"
                      )
                    }
                    className="w-full bg-green-500 px-6 py-4 text-white shadow-md"
                  >
                    Pay Now
                  </button>
                  <button className="w-full bg-red-500 px-6 py-4 text-white shadow-md">
                    Cancel Order
                  </button>
                </div>
              )}
          </>
        )}

        {activeTab === 4 && (
          <>
            {/* <div className="bg-white px-6 py-4 shadow-md">
              <div className="">
                <p>{customerData?.name}</p>
                <p>E: {customerData?.email}</p>
                <p>T: {customerData?.phone_number}</p>
              </div>
            </div> */}

            <div className="bg-white px-6 py-4 shadow-md">
              <h3 className="text-lg font-bold">Address book</h3>
              {customerData?.addresses.map((address) => (
                <div className="border-b-2 py-2">
                  {address.full_address.split("\n").map((line) => (
                    <div className="">
                      <p>{line}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AccountMobile;
