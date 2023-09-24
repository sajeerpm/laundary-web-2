import SHText from "@/shared/SHText";
import { SelectedPage } from "@/shared/types";
import { Link } from "react-router-dom";
import AsianTraditionalDryCleaning from "@/assets/traditional-wear.png";
import InvisibleMending from "@/assets/invisible-mending.png";
import RunningService from "@/assets/running.png";
import AlterationAndRepair from "@/assets/ribbon-cutting.png";
import CurtainService from "@/assets/curtain.png";

type Props = {};

const Pricing1 = ({}: Props) => {
  return (
    <section id="pricing" className="w-full py-16">
      <div>
        <div>
          <SHText textAlign="text-center">
            <p className="">Specialise In</p>
          </SHText>
          <hr className="m-auto mt-[12px] h-[2px] w-[10%] bg-gray-400" />
        </div>
        <div className="mx-auto w-5/6 py-16">
          <div className="w-full">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
              <li className="flex flex-col items-center justify-center pb-6">
                <img className="w-[84px]" src={AsianTraditionalDryCleaning} />
                <div className="">
                  <p className="py-2 text-center uppercase">
                    Asian and Traditional clothes
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center justify-center pb-6">
                <img className="w-[84px]" src={RunningService} />
                <div className="">
                  <p className="py-2 text-center uppercase">
                    Trainers cleaning
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center justify-center pb-6">
                <img className="w-[84px]" src={AlterationAndRepair} />
                <div className="">
                  <p className="py-2 text-center uppercase">
                    Tailoring and Alteration
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center justify-center pb-6">
                <img className="w-[84px]" src={CurtainService} />
                <div className="">
                  <p className="py-2 text-center uppercase">
                    Curtains cleaning
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center justify-center pb-6">
                <img className="w-[84px]" src={InvisibleMending} />
                <div className="">
                  <p className="py-2 text-center uppercase">
                    Invisible mending
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Link to={`/${SelectedPage.Pricing}`}>
            <button className="rounded-full bg-secondary-500 px-12 py-3 text-gray-700 text-white">
              FULL PRICE LIST
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing1;
