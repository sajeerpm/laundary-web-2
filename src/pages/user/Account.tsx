import axiosClient from "@/axiosClient";
import { CustomerAddress } from "@/model/CustomerAddress";
import { CustomerOrder } from "@/model/CustomerOrder";
import HText from "@/shared/HText";
import SHText from "@/shared/SHText";
import {
  validateConfirmPassword,
  validatePassword,
} from "@/shared/Validations";
import {
  PASSWORD_CONFIRM_MG,
  PASSWORD_VALIDATION_MSG,
  UK_PHONE_NUMBER_PATTERN,
  UK_PHONE_VALIDATION_MSG,
} from "@/shared/constants";
import { FormEvent, useEffect, useState } from "react";
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

const Account = ({}: Props) => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [activeTab, setActiveTab] = useState<number>(1);
  const [customerData, setCustomerData] = useState<Customer>();
  const [orderIndex, setOrderIndex] = useState<number>(-1);

  const token = localStorage.getItem("ACCESS_TOKEN");

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
        setName(response.data.customer.name);
        setEmail(response.data.customer.email);
        setPhone(response.data.customer.phone_number);
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

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!UK_PHONE_NUMBER_PATTERN.test(phone)) {
      alert(UK_PHONE_VALIDATION_MSG);
      return false;
    }
    const payload = {
      name: name,
      email: email,
      phone_number: phone,
      current_password: currentPassword,
    };

    axiosClient
      .post("/updateprofile", payload)
      .then(({ data }) => {
        if (data.status) {
        }
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
        return true;
      });
  };

  const handleChangePasswordOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validatePassword(newPassword)) {
      alert(PASSWORD_VALIDATION_MSG);
      return;
    } else if (!validateConfirmPassword(newPassword, confirmPassword)) {
      alert(PASSWORD_CONFIRM_MG);
      return;
    }

    const payload = {
      current_password: currentPassword,
      new_password: newPassword,
      new_password_confirmation: confirmPassword,
    };

    axiosClient
      .post("/changepassword", payload)
      .then(async ({ data }) => {
        if (data.message) {
          try {
            await axiosClient.post("/logout", {
              headers: {
                Authorization: "Bearer " + token,
              },
            });
          } catch (error) {
            console.error(error);
          }
        }
        localStorage.removeItem("ACCESS_TOKEN");
        navigate("/login");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          console.log(response.data.errors);
        }
        return true;
      });
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
                onClick={() => handleActiveTab(5)}
              >
                Change Password
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
              <span
                onClick={handleLogOut}
                className="cursor-pointer hover:underline"
              >
                Logout
              </span>
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
              <div className="grid grid-cols-5">
                {customerData?.addresses.map((address) => (
                  <div className="my-4 border-b-2">
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
            <form onSubmit={handleOnSubmit}>
              <div className="flex flex-col">
                <HText textAlign="text-left uppercase">
                  Edit Account Information
                </HText>
                <p className="py-4 text-lg">Account Information:</p>

                <label>Name *</label>
                <input
                  className="border-1 my-2 w-80 border px-4 py-2"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label>Email *</label>
                <input
                  className="border-1 my-2 w-80 border px-4 py-2"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label>Mobile Number *</label>
                <input
                  className="border-1 my-2 w-80 border px-4 py-2"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <label>Current Password *</label>
                <input
                  className="border-1 my-2 w-80 border px-4 py-2"
                  type="password"
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />

                <button className="border-1 float-right my-4 w-[100px] border bg-green-500 px-4 py-2">
                  Save
                </button>
              </div>
            </form>
          )}
          {activeTab == 5 && (
            <form onSubmit={handleChangePasswordOnSubmit}>
              <div className="flex flex-col">
                <HText textAlign="text-left uppercase">Change Password</HText>
                <div className="flex flex-col">
                  <label>Email *</label>
                  <input
                    className="border-1 my-2 w-80 border px-4 py-2"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label>Current Password *</label>
                  <input
                    className="border-1 my-2 w-80 border px-4 py-2"
                    type="password"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />

                  <label>New Password *</label>
                  <input
                    className="border-1 my-2 w-80 border px-4 py-2"
                    type="password"
                    onChange={(e) => setNewPassword(e.target.value)}
                  />

                  <label>Confirm Password *</label>
                  <input
                    className="border-1 my-2 w-80 border px-4 py-2"
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                <button className="border-1 float-right my-4 w-[100px] border bg-green-500 px-4 py-2">
                  Save
                </button>
              </div>
            </form>
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
                  <h3 className="py-2 text-lg font-bold uppercase">Address</h3>
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
                  <p>
                    Status:{" "}
                    {customerData?.orders[orderIndex].status.toUpperCase()}
                  </p>
                </div>

                <div>
                  <h3 className="py-2 text-lg font-bold uppercase">
                    Payment Details
                  </h3>
                  <hr className="py-2" />
                  <p>Method: Online Payment</p>
                  <p className="font-bold text-red-500">
                    Due Amount: £{customerData?.orders[orderIndex].amount_due}
                  </p>
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
                    <td className="py-2">£{item.price}</td>
                    <td className="text-right">
                      £{(Number(item.price) * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}

                <tr className="border-t-2">
                  <td className="text-right font-bold" colSpan={3}>
                    Subtotal
                  </td>
                  <td className="text-right font-bold">
                    {"£" +
                      Number(customerData?.orders[orderIndex].total).toFixed(2)}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}></td>
                  <td className="border-b-2 text-right font-bold">Discount</td>
                  <td className="border-b-2 text-right font-bold ">
                    {"£" +
                      Number(customerData?.orders[orderIndex].discount).toFixed(
                        2
                      )}
                  </td>
                </tr>
                {/* <tr>
                  <td className="text-right" colSpan={3}>
                    Tax
                  </td>
                  <td className="text-right">
                    {"£" +
                      Number(customerData?.orders[orderIndex].tax).toFixed(2)}
                  </td>
                </tr> */}
                <tr className="">
                  <td colSpan={2}></td>
                  <td className="text-right font-bold">Total</td>
                  <td className="text-right font-bold">
                    {"£" +
                      (
                        Number(customerData?.orders[orderIndex].total) -
                        Number(customerData?.orders[orderIndex].discount)
                      ).toFixed(2)}
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
