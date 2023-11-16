import HText from "@/shared/HText";
import React, { useEffect, useState } from "react";
import AreaBackgroundImage from "@/assets/images/unsplash-4.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Areas } from "@/data/areas";
import axiosClient from "@/axiosClient";
import { Area } from "@/model/Area";

interface Areas {
  id: number;
  title: string;
  areas: Area[];
}

const Corperates: React.FC = () => {
  const [areas, setData] = useState<Areas[]>([]);

  const [items, setItems] = useState<Areas[]>(areas);
  const [keyword, setKeyword] = useState("");

  console.log(JSON.stringify(areas));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
    filterItems(event.target.value);
  };

  const filterItems = (keyword: string) => {
    const filteredItems = areas.filter((item) =>
      item.areas.some((area) =>
        area.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );
    setItems(filteredItems);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/getarea/group");
        setData(response.data);
        setItems(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    window.scrollTo(0, 0);
  }, []);

  // const isLocationCheck = (id: any) => {
  //   const loc = areaMap.find(
  //     (value) => value.toLowerCase().replace(/ /g, "-") === id
  //   );
  //   return loc ? loc.toLowerCase().replace(/ /g, "-") : "";
  // };

  return (
    <section
      className="items-center justify-center md:flex"
      style={{
        backgroundImage: `url(${AreaBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
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
      <div className="mt-[4.5rem] min-h-[100vh] w-full pb-8">
        <div className="mx-auto w-5/6">
          <div className="w-full py-8">
            <HText textAlign="text-center">SERVICE AREAS</HText>
          </div>
          <div className="flex items-start gap-3 pb-8 md:justify-end">
            <input
              className="border-1 rounded-md border p-2 focus:outline-none"
              type="text"
              value={keyword}
              onChange={handleInputChange}
              placeholder="Search Area"
            />
            {/* <button onClick={filterItems}>Search</button> */}
          </div>
          <div className="lg:grid-cols-4 grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {items.map((tile) => (
              <div
                key={tile.id}
                className="flex flex-col items-center overflow-hidden rounded-lg bg-white/80 p-8 shadow-lg backdrop-blur-xl"
              >
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-bold text-black">
                    {tile.title}
                  </h2>
                  <p className="text-gray-700">{}</p>
                </div>
                <ul className="text-gray-700">
                  {tile.areas.map((area, index) => (
                    <li key={index}>
                      <Link to={`/` + area.area_code}>{area.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corperates;
