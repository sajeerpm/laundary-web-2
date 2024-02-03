import SHText from "@/shared/SHText";
import { SelectedPage } from "@/shared/types";
import { Link } from "react-router-dom";
import AsianTraditionalDryCleaning from "@/assets/asian-traditional-dry-cleaning.png";
// import InvisibleMending from "@/assets/invisible-mending.png";
import RunningService from "@/assets/trainer-cleaning.png";
import AlterationAndRepair from "@/assets/alteration-repair.png";
import CurtainService from "@/assets/curtain-cleaning.png";

type Props = {};

const Pricing1 = ({}: Props) => {
  return (
    <section id="pricing" className="w-full py-8">
      <div>
        <div>
          <SHText textAlign="text-center">
            <p className="">Specialise In</p>
          </SHText>
          <hr className="m-auto mt-[12px] h-[2px] w-[10%] bg-gray-400" />
        </div>
        <div className="mx-auto w-5/6 py-8">
          <div className="w-full">
            <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
              <li className="flex flex-col items-center justify-center pb-6">
                <img
                  className="w-[84px]"
                  src={AsianTraditionalDryCleaning}
                  alt="Dry Cleaning London"
                />
                <div className="">
                  <p className="py-2 text-center uppercase">
                    Asian and Traditional clothes
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center justify-center pb-6">
                <img
                  className="w-[84px]"
                  src={RunningService}
                  alt="Dry Cleaning London"
                />
                <div className="">
                  <p className="py-2 text-center uppercase">
                    Trainers cleaning
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center justify-center pb-6">
                <img
                  className="w-[84px]"
                  src={AlterationAndRepair}
                  alt="Dry Cleaning London"
                />
                <div className="">
                  <p className="py-2 text-center uppercase">
                    Tailoring and Alteration
                  </p>
                </div>
              </li>
              <li className="flex flex-col items-center justify-center pb-6">
                <img
                  className="w-[84px]"
                  src={CurtainService}
                  alt="Dry Cleaning London"
                />
                <div className="">
                  <p className="py-2 text-center uppercase">
                    Curtains cleaning
                  </p>
                </div>
              </li>
              {/* <li className="flex flex-col items-center justify-center pb-6">
                <img
                  className="w-[84px]"
                  src={InvisibleMending}
                  alt="Dry Cleaning London"
                />
                <div className="">
                  <p className="py-2 text-center uppercase">
                    Invisible mending
                  </p>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <Link to={`${SelectedPage.Pricing}`}>
            <button className="rounded-full bg-secondary-500 px-12 py-3 text-white">
              FULL PRICE LIST
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing1;
