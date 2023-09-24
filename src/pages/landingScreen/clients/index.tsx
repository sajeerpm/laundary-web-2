import Editon from "@/assets/clients/Editon.png";
import Estee from "@/assets/clients/Estee.png";
import Ibis from "@/assets/clients/Ibis.png";
import MotelOne from "@/assets/clients/Motel-one.png";
import TheHarleyStreet from "@/assets/clients/The-Harley-Street.png";
import AcneStudios from "@/assets/clients/acne-studios.png";
import Burberry from "@/assets/clients/burberry.png";
import Debenhams from "@/assets/clients/debenhams.png";
import Marriott from "@/assets/clients/marriott.png";
import MaxMara from "@/assets/clients/max-mara.png";
import DoubleTree from "@/assets/clients/double-tree-by-hilton.png";
import HarveyNichols from "@/assets/clients/harvey-nichols.png";
import RoyalGarden from "@/assets/clients/royal-garden-hotel.png";
import StGilesLondon from "@/assets/clients/st-giles-london.png";
import Novotel from "@/assets/clients/novotel.png";
import SHText from "@/shared/SHText";

type Props = {};

const Clients = ({}: Props) => {
  return (
    <section className="w-full bg-primary-100 py-16">
      <div className="pb-16">
        <SHText textAlign="text-center">
          <p className="">OUR DRY CLEANING & LAUNDRY CLIENTS</p>
        </SHText>
        <hr className="m-auto mt-[12px] h-[2px] w-[30%] bg-gray-400" />
      </div>
      <div className="mx-auto w-5/6">
        <div className="w-full">
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-5">
            <li className="flex justify-center">
              <img
                className="h-[75px] w-[150px] md:h-[150px] md:w-[300px]"
                src={Editon}
              />
            </li>
            <li className="flex justify-center">
              <img
                className="h-[75px] w-[150px] md:h-[150px] md:w-[300px]"
                src={Estee}
              />
            </li>
            <li className="flex justify-center">
              <img
                className="h-[75px] w-[150px] md:h-[150px] md:w-[300px]"
                src={Ibis}
              />
            </li>
            <li className="flex justify-center">
              <img
                className="h-[75px] w-[150px] md:h-[150px] md:w-[300px]"
                src={MotelOne}
              />
            </li>
            <li className="flex justify-center">
              <img
                className="h-[75px] w-[150px] md:h-[150px] md:w-[300px]"
                src={TheHarleyStreet}
              />
            </li>
            <li className="flex justify-center">
              <img
                className="h-[75px] w-[150px] md:h-[150px] md:w-[300px]"
                src={Debenhams}
              />
            </li>
            <li className="flex justify-center">
              <img
                className="h-[75px] w-[150px] md:h-[150px] md:w-[300px]"
                src={AcneStudios}
              />
            </li>
            <li className="flex justify-center">
              <img
                className="h-[75px] w-[150px] md:h-[150px] md:w-[300px]"
                src={MaxMara}
              />
            </li>
            <li className="flex justify-center">
              <img
                className="h-[75px] w-[150px] md:h-[150px] md:w-[300px]"
                src={Burberry}
              />
            </li>
            <li className="flex justify-center">
              <img
                className="h-[75px] w-[150px] md:h-[150px] md:w-[300px]"
                src={Marriott}
              />
            </li>
            <li className="flex justify-center">
              <img
                className="h-[75px] w-[150px] md:h-[150px] md:w-[300px]"
                src={RoyalGarden}
              />
            </li>
            <li className="flex justify-center">
              <img
                className="h-[75px] w-[150px] md:h-[150px] md:w-[300px]"
                src={HarveyNichols}
              />
            </li>
            <li className="flex justify-center">
              <img
                className="h-[75px] w-[150px] md:h-[150px] md:w-[300px]"
                src={DoubleTree}
              />
            </li>
            <li className="flex justify-center">
              <img
                className="h-[75px] w-[150px] md:h-[150px] md:w-[300px]"
                src={Novotel}
              />
            </li>
            <li className="flex justify-center">
              <img
                className="h-[75px] w-[150px] md:h-[150px] md:w-[300px]"
                src={StGilesLondon}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Clients;
