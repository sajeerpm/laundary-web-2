import { useEffect, useState } from "react";
import SHText from "@/shared/SHText";
import HText from "@/shared/HText";
import { useParams } from "react-router-dom";
import PricingDetailsBackgroundImage from "@/assets/images/20230719_171140_0000.png";
import LoadingImage from "@/assets/images/loading.gif";
import axiosClient from "@/axiosClient";
import Loading from "@/shared/Loading";

interface Service {
  id: number;
  name: string;
  image: string;
  bannerimage: string;
  description: string;
  details: string;
}

const PricingDetailed = () => {
  const { id } = useParams();
  const [categories, setData] = useState<Service>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/service/" + id);
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
    <section id="home" className="mt-[76px] flex flex-col bg-[#edecef] md:pb-0">
      <div>
        <div className="items-center justify-center md:flex">
          <div
            className="top-0 flex h-[80vh] w-full flex-col items-center justify-center"
            style={{
              backgroundImage: `url(${
                categories?.bannerimage ?? PricingDetailsBackgroundImage
              })`,
              backgroundPosition: "center",
            }}
          >
            <div className="flex w-full flex-col items-center overflow-hidden rounded-none bg-white/30 p-3 backdrop-blur-sm">
              <HText textAlign="text-center text-black">
                <p className="w-full uppercase">{categories?.name ?? ""}</p>
              </HText>
              <SHText textAlign="text-center text-black">
                <p className="w-full">COLLECTED AND DELIVERED</p>
                <p className="w-full">TO YOUR DOOR</p>
              </SHText>
            </div>
            {/* <div className="flex w-full justify-center py-16">
            <Link
              className="rounded-none bg-black px-12 py-2 text-center uppercase text-white"
              to={`/${SelectedPage.Pricing}`}
            >
              Price List
            </Link>
          </div> */}
          </div>
        </div>
        <div className="mx-auto flex w-5/6 flex-col items-center">
          <div className="pt-8">
            <SHText textAlign="text center">{categories?.name ?? ""}</SHText>
          </div>
          <div className="w-full py-12">
            <div
              dangerouslySetInnerHTML={{
                __html: categories?.details ?? "",
              }}
            />
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </section>
  );
};

export default PricingDetailed;
