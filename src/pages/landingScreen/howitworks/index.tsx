import SHText from "@/shared/SHText";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Service from "@/assets/wash-fold-service.png";
import ScheduleOrder from "@/assets/schedule-order.png";
import PickupVan from "@/assets/pickup-van.png";

type Props = {};

const HowItWorks = ({}: Props) => {
  return (
    <section id="howitworks" className="mx-auto w-5/6 py-16">
      <div>
        <div>
          <SHText textAlign="text-center">
            <p className="text-4">HOW WE WORK</p>
          </SHText>
          <hr className="m-auto mt-[12px] h-[2px] w-[20%] bg-gray-400" />
        </div>
        <div className="justify-between py-16 md:flex">
          <div className="flex flex-col items-center">
            <img src={ScheduleOrder} />
            <div className="my-6 w-3/6 text-center">
              <p className="text-[18px]">1.</p>
              <p className="text-[18px]">
                Select your time slot for <strong>Collection & Delivery</strong>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={PickupVan} />
            <div className="my-6 w-3/6 text-center">
              <p className="text-[18px]">2.</p>
              <p className="text-[18px]">
                We <strong>pick</strong> up your{" "}
                <strong>Dry cleaning & Laundry</strong> Make an{" "}
                <strong>invoice & clean</strong> your items as per{" "}
                <strong>requirements</strong>.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src={Service} />
            <div className="my-6 w-3/6 text-center">
              <p className="text-[18px]">3.</p>
              <p className="text-[18px]">
                We <strong>deliver</strong> your{" "}
                <strong>Dry Cleaning & Laundry</strong> to your{" "}
                <strong>doorstep</strong>.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <AnchorLink
            className="rounded-full bg-secondary-500 px-10 py-2 text-center text-white"
            onClick={() => {}}
            href={`#${SelectedPage.Home}`}
          >
            ORDER NOW
          </AnchorLink>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
