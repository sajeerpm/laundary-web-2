import { useEffect, useState } from "react";
import DryCleaningBackground from "@/assets/prices.webp";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HText from "@/shared/HText";
import SHText from "@/shared/SHText";
import axiosClient from "@/axiosClient";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

interface Price {
  id: number;
  service_name: string;
  description: string;
  price: string;
}

interface Service {
  id: number;
  name: string;
  description: string;
  services: Price[];
  category_code: string;
}

const Pricing = () => {
  const { code } = useParams();
  const [activeTab, setActiveTab] = useState("");
  const [activeTabName, setActiveTabName] = useState("");
  const [categories, setData] = useState<Service[]>([]);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1600px)");
  const gridButtonHight = !isAboveMediumScreens ? "h-[60px]" : "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/pricelist");
        if (code) {
          setDefaultCategory(response.data);
        } else {
          setActiveTab(response.data[0].category_code);
          setActiveTabName(response.data[0].name);
        }
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    window.scrollTo(0, 0);
  }, []);

  function setDefaultCategory(categories: Service[]) {
    categories.map((category) => {
      if (code == category.category_code) {
        setActiveTab(category.category_code);
        setActiveTabName(category.name);
      }
    });
  }

  const handleTabClick = (tabNumber: string, tabName: string) => {
    setActiveTab(tabNumber);
    setActiveTabName(tabName);
  };

  return (
    <section id="home" className="flex flex-col bg-[#edecef] md:pb-8">
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
      <div className="items-center justify-center md:flex">
        <div
          className="top-0 flex h-[60vh] w-full flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${DryCleaningBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex w-full flex-col items-center overflow-hidden rounded-none bg-white/30 p-3 backdrop-blur-sm">
            <HText textAlign="text-center">
              <p className="w-full uppercase text-white">Our Prices</p>
            </HText>
            <SHText textAlign="text-center text-xl">
              <p className="w-full text-white">
                Price may vary according to the garments
              </p>
            </SHText>
          </div>
        </div>
      </div>
      <div className="mx-auto w-5/6 py-8">
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category) => (
            <AnchorLink
              className="content-center"
              key={category.category_code}
              href="#price-list"
            >
              <div
                className={`${gridButtonHight} flex h-[66px] cursor-pointer flex-col items-center justify-center rounded-none border border-black px-4 py-1 text-center text-xs uppercase md:py-4 md:tracking-[1.8px] ${
                  activeTab === category.category_code
                    ? "text bg-secondary-500 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() =>
                  handleTabClick(category.category_code, category.name)
                }
              >
                {category.name}
              </div>
            </AnchorLink>
          ))}
        </div>
        <div id="price-list" className="h-6"></div>
        <div className="w-full py-12">
          <p className="w-full py-4 text-center text-lg uppercase">
            {activeTabName}
          </p>
          {categories.map(
            (category) =>
              activeTab === category.category_code && (
                <div
                  key={category.id}
                  className="mx-auto max-w-[650px] text-center text-xl"
                >
                  <p>{category.description}</p>
                </div>
              )
          )}
        </div>

        <div className="mx-auto md:w-5/6">
          {categories.map(
            (category) =>
              activeTab === category.category_code && (
                <div key={category.id} className="grid gap-8 md:grid-cols-2">
                  {category.services.map((price) => (
                    <div key={price.id} className="flex w-full flex-col">
                      <div className="flex w-full justify-between">
                        <p>{price.service_name}</p>

                        {price.price == "0.00" ? (
                          <a
                            className="text-blue-500 underline"
                            href="tel:+442073285621"
                          >
                            {price.description}
                          </a>
                        ) : (
                          <p>{"£" + price.price}</p>
                        )}
                      </div>
                      <hr className="mt-2 w-full border-black" />
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
