import { useEffect, useState } from "react";
import DryCleaningBackground from "@/assets/images/dry-cleaning.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HText from "@/shared/HText";
import SHText from "@/shared/SHText";
import axiosClient from "@/axiosClient";
import useMediaQuery from "@/hooks/useMediaQuery";

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
}

const Pricing = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTabName, setActiveTabName] = useState("");
  const [categories, setData] = useState<Service[]>([]);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1600px)");
  const gridButtonHight = !isAboveMediumScreens ? "h-[60px]" : "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/pricelist");
        if (response.data) {
          setActiveTab(response.data[0].id);
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

  const handleTabClick = (tabNumber: number, tabName: string) => {
    setActiveTab(tabNumber);
    setActiveTabName(tabName);
  };

  return (
    <section id="home" className="flex flex-col bg-[#edecef] md:pb-8">
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
              <p className="w-full uppercase text-black">Our Prices</p>
            </HText>
            <SHText textAlign="text-center">
              <p className="w-full text-black">
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
              key={category.id}
              href="#price-list"
            >
              <div
                className={`${gridButtonHight} flex cursor-pointer flex-col items-center justify-center rounded-none border border-black px-4 py-1 text-center text-xs uppercase md:py-4 md:tracking-[1.8px] ${
                  activeTab === category.id
                    ? "text bg-black text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => handleTabClick(category.id, category.name)}
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
              activeTab === category.id && (
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
              activeTab === category.id && (
                <div key={category.id} className="grid gap-8 md:grid-cols-2">
                  {category.services.map((price) => (
                    <div key={price.id} className="flex w-full flex-col">
                      <div className="flex w-full justify-between">
                        <p>{price.service_name}</p>
                        <p>
                          {price.price == "0.00"
                            ? price.description
                            : "£" + price.price}
                        </p>
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
