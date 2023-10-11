import { useEffect, useState } from "react";
import SHText from "@/shared/SHText";
import HText from "@/shared/HText";
import { useParams } from "react-router-dom";
// import PricingDetailsBackgroundImage from "@/assets/images/20230719_171140_0000.png";
import axiosClient from "@/axiosClient";
import Loading from "@/shared/Loading";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Service {
  id: number;
  name: string;
  image: string;
  bannerimage: string;
  bannermobileimage: string;
  description: string;
  details: string;
}

const PricingDetailed = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1600px)");
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
        setLoading(false);
        window.location.href = "/";
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="home" className="flex flex-col bg-[#edecef] md:pb-0">
      <div className="mt-24 md:mt-32">
        <div className="mx-auto w-5/6 items-center justify-center md:flex">
          <div className="flex w-full flex-col">
            {/* {categories && (
              <img
                className="h-[50vh] w-full md:h-full"
                src={
                  isAboveMediumScreens
                    ? categories?.bannerimage
                    : categories?.bannerimage.split(".jpg")[0] + "_mobile.jpg"
                }
              />
            )} */}
            <div className="mb-6 flex w-full flex-col overflow-hidden rounded-none">
              <HText textAlign="text-center text-black">
                <p className="w-full uppercase">{categories?.name ?? ""}</p>
              </HText>
              <SHText textAlign="text-center text-yellow-500">
                <p className="w-full text-[14px]">
                  COLLECTED AND DELIVERED TO YOUR DOOR
                </p>
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
            {categories?.bannerimage && (
              <img
                className="w-full rounded-[1rem]"
                src={
                  isAboveMediumScreens
                    ? categories?.bannerimage
                    : categories?.bannermobileimage
                }
              />
            )}
          </div>
        </div>
        <div className="mx-auto flex w-5/6 flex-col items-center">
          <div className="w-full py-4">
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
