import AboutUs from "./components/AboutUs";
import Locations from "./components/Locations";
import CompanyServices from "./components/CompanyServices";
import { useRef, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {};

const Services = ({}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const targetSectionRef = useRef<HTMLDivElement>(null);
  const toggleItem = (itemId: number) => {
    if (expandedItem === itemId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
      if(itemId == 3) {
        setTimeout(() => {
          scrollToTargetSection();
        }, 500);
      }
    }
  };

  const scrollToTargetSection = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({
        behavior: 'smooth', // You can use 'auto' or 'smooth' for scrolling behavior
        block: 'start', // You can use 'start', 'center', 'end', or 'nearest'
      });
    }
  };

  return (
    <section className="">
      {isAboveMediumScreens && (<div className="mx-auto w-5/6 justify-between gap-16 md:flex md:flex-row">
        <div className="flex flex-col pt-6 md:w-1/6">
          <p className="text-md uppercase">Services</p>
          <hr className="my-2 h-[2px] bg-gray-400" />
          <CompanyServices />
        </div>
        <div className="flex flex-col pt-6 md:w-1/6">
          <p className="text-md uppercase">About Us</p>
          <hr className="my-2 h-[2px] bg-gray-400" />
          <AboutUs />
        </div>
        <div className="flex flex-col pt-6 md:w-1/2">
          <p className="text-md uppercase">Selected Locations</p>
          <hr className="my-2 h-[2px] bg-gray-400" />
          <Locations />
        </div>
      </div>)}
      {!isAboveMediumScreens && (
        <div className="mx-auto w-5/6 justify-between gap-16 md:flex md:flex-row">
          <div
            key={1}
            className="pt-4"
            onClick={() => toggleItem(1)}
          >
            <div className="flex cursor-pointer items-center justify-between">
              <p className="text-md uppercase">Services</p>
              <span className="transform text-xl transition-transform">
                {expandedItem === 1 ? "−" : "+"}
              </span>
            </div>
            <hr className="my-2 h-[2px] bg-gray-400" />
            {expandedItem === 1 && (
              <div className="">
                <CompanyServices />
              </div>
            )}
          </div>
          <div
            key={2}
            className="pt-4"
            onClick={() => toggleItem(2)}
          >
            <div className="flex cursor-pointer items-center justify-between">
              <p className="text-md uppercase">About Us</p>
              <span className="transform text-xl transition-transform">
                {expandedItem === 2 ? "−" : "+"}
              </span>
            </div>
            <hr className="my-2 h-[2px] bg-gray-400" />
            {expandedItem === 2 && (
              <div className="">
                <AboutUs />
              </div>
            )}
          </div>
          <div
            key={3}
            className="pt-4"
            onClick={() => toggleItem(3)}
          >
            <div ref={targetSectionRef} className="flex cursor-pointer items-center justify-between">
              <p className="text-md uppercase">Selected Locations</p>
              <span className="transform text-xl transition-transform">
                {expandedItem === 3 ? "−" : "+"}
              </span>
            </div>
            <hr className="my-2 h-[2px] bg-gray-400" />
            {expandedItem === 3 && (
              <div className="">
                <Locations />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
