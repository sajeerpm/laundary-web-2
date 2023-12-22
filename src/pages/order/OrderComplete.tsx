import { useLocation, useParams } from "react-router-dom";
import OrderSuccess from "./components/OrderSuccess";
import { useEffect, useState } from "react";
import axiosClient from "@/axiosClient";
import OrderCancel from "./components/OrderCancel";
import { Helmet } from "react-helmet";

type Props = {};

const OrderComplete = ({}: Props) => {
  const location = useLocation();
  const path = location.pathname;
  const { id } = useParams();
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    // Google Ads conversion tracking script
    const script = document.createElement("script");
    script.innerHTML = `gtag('event', 'conversion', { 'send_to': 'AW-11377566839/UmsBCIKt1_gYEPfIn7Eq', 'value': 30.0, 'currency': 'GBP', 'transaction_id': '' });`;
    document.head.appendChild(script);

    try {
      axiosClient.get("/order/" + id).then(({ data }) => {
        setOrder(data.order);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section
      id="home"
      className="flex min-h-[100vh] flex-col items-center justify-center bg-white md:pb-0"
    >
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
      <div className="m-6 mx-auto flex w-10/12 flex-col items-center md:w-3/5">
        <div className="w-full items-center justify-center gap-8 md:flex md:flex-row">
          {/* Customer Information Section */}
          <div className="h-full rounded-md bg-white px-4 py-6 md:px-20">
            {path.indexOf("cancel") !== -1 ? (
              <OrderCancel order={order} />
            ) : (
              <OrderSuccess order={order} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderComplete;
