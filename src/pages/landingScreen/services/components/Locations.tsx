import axiosClient from "@/axiosClient";
import { Area } from "@/model/Area";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Locations = ({}: Props) => {
  const [areas, setData] = useState<Area[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/getarea/limited");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex-1 pt-6 md:w-1/2">
        <p className="text-md uppercase">Selected Locations</p>
        <hr className="my-2 h-[2px] bg-gray-400" />
        <div className="w-full justify-between gap-8 md:flex">
          <div className="grid w-full grid-flow-row grid-cols-1 md:grid-cols-4">
            {areas.map((area) => (
              <Link to={"/" + area.area_code}>{area.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
