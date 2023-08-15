import axiosClient from "@/axiosClient";
import { CustomerAddress } from "@/model/CustomerAddress";
import { CustomerOrder } from "@/model/CustomerOrder";
import {
  ShoppingCartIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
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

const AccountMobile = ({}: Props) => {
  const [customerData, setCustomerData] = useState<Customer>();
  const [activeTab, setActiveTab] = useState<number>(1);
  const [selectedOrder, setSelectedOrder] = useState<CustomerOrder>();
  const token = localStorage.getItem("ACCESS_TOKEN");

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

  const handleActiveTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  const handleSelectedOrderIndex = (orderIndex: number) => {
    setActiveTab(3);
    setSelectedOrder(customerData?.orders[orderIndex]);
  };

  return (
    <section className="bg-gray-200">
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
                    <p>Total amount: 300</p>
                    <p>Payment: Online Payment</p>
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
                  <span className="text-right">{selectedOrder?.status}</span>
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
                  {"£" + Number(selectedOrder?.total).toFixed(2)}
                </p>
              </div>
              <div className="flow-col mt-2 flex justify-between">
                <p>Amount Due</p>
                <p className="text-lg font-bold">
                  {"£" + selectedOrder?.amount_due}
                </p>
              </div>
            </div>
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
