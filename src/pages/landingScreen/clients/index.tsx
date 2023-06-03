import Editon from "@/assets/clients/Editon.png";
import Estee from "@/assets/clients/Estee.png";
import Ibis from "@/assets/clients/Ibis.png";
import MotelOne from "@/assets/clients/Motel-one.png";
import TheHarleyStreet from "@/assets/clients/The-Harley-Street.png";
import SHText from "@/shared/SHText";

type Props = {};

const Clients = (props: Props) => {
  return (
    <section className="w-full bg-primary-100 py-6">
      <div>
        <SHText textAlign="text-center">
          <p className="">OUR LAUNDARY CLIENTS</p>
        </SHText>
        <hr className="m-auto mt-[12px] h-[2px] w-[30%] bg-gray-400" />
      </div>
      <div className="mx-auto w-5/6 py-12">
        <div className="w-full">
          <ul className="flex justify-between gap-16 whitespace-nowrap">
            <li>
              <img src={Editon} />
            </li>
            <li>
              <img src={Estee} />
            </li>
            <li>
              <img src={Ibis} />
            </li>
            <li>
              <img src={MotelOne} />
            </li>
            <li>
              <img src={TheHarleyStreet} />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Clients;
