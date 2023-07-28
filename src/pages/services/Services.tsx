import HText from "@/shared/HText";
import SText from "@/shared/SText";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axiosClient from "@/axiosClient";
import LoadingImage from "@/assets/images/loading.gif";

interface Service {
  id: number;
  name: string;
  image: string;
  description: string;
}

const Services = () => {
  const [categories, setData] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  // const handlePriceButton = (categoryId: number) => {
  //     return <Navigate to="/pricing" />;
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/pricelist");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-20 min-h-[100vh]">
      {loading ? (
        <div className="flex min-h-[80vh]">
          <div className="flex w-full items-center justify-center">
            <img src={LoadingImage} />
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full py-8">
            <HText textAlign="text-center">SERVICES</HText>
          </div>
          <div className="lg:grid-cols-3 mx-auto grid w-4/6 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center justify-center bg-white p-2 md:p-8"
              >
                <img src={product.image} alt={product.name} />
                <SText textAlign="text-center">{product.name}</SText>
                <p className="text-center align-top">{product.description}</p>
                <Link to={`/pricing/${product.id}`}>
                  <button
                    key={product.id}
                    className="my-8 rounded-none border border-black px-12 py-2"
                  >
                    INFO
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
