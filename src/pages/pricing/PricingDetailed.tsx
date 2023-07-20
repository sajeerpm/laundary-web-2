import { useEffect, useState } from "react";
import SHText from "@/shared/SHText";
import HText from "@/shared/HText";
import { Link, useParams } from "react-router-dom";
import PricingDetailsBackgroundImage from "@/assets/images/unsplash-1.jpg";
import { SelectedPage } from "@/shared/types";
import axiosClient from "@/axiosClient";

interface Service {
  id: number;
  name: string;
  image: string;
  description: string;
  details: string;
}

const PricingDetailed = () => {
  const { id } = useParams();
  console.log("id = " + id);
  const [categories, setData] = useState<Service>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/service/" + id);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="home" className="flex flex-col bg-[#edecef] md:pb-0">
      <div className="items-center justify-center md:flex">
        <div
          className="top-0 flex h-[60vh] w-full flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${PricingDetailsBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <HText textAlign="text-center">
            <p className="w-full uppercase">{categories?.name ?? ""}</p>
          </HText>
          <SHText textAlign="text-center">
            <p className="w-full">COLLECTED AND DELIVERED</p>
            <p className="w-full">TO YOUR DOOR</p>
          </SHText>
          <div className="flex w-full justify-center py-16">
            <Link
              className="rounded-none bg-black px-12 py-2 text-center uppercase text-white"
              to={`/${SelectedPage.Pricing}`}
            >
              Price List
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-5/6 flex-col items-center">
        <div className="pt-8">
          <SHText textAlign="text center">{categories?.name ?? ""}</SHText>
        </div>
        <div className="flex py-12">
          <div
            dangerouslySetInnerHTML={{
              __html: categories?.details,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingDetailed;
