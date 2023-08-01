import HText from "@/shared/HText";
import SHText from "@/shared/SHText";
import { useEffect } from "react";

type Props = {};

const AboutUs = ({}: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-20">
      <div className="w-full py-8">
        <HText textAlign="text-center uppercase">About Us</HText>
      </div>
      <div className="mx-auto flex w-4/6 flex-col">
        <p className="text-blue-600">Your Local Master Dry Cleaner - Established in 1997</p>
        <SHText textAlign="text-left">Your Dry Cleaning and Laundry.<br/>Done.</SHText>
        <p className="pt-12 pb-3">
        We are professionals in the laundry and dry cleaning business, which means we
        always stay up to date on the latest technologies, cleaning methods, and solutions
        for dealing with stains or delicate fabrics. Plus, we maintain the highest standards of
        business integrity by following local and national regulations and environmental
        safety rules. We are passionate about changing the way you think about laundry!
        </p>
        <ul className="list-disc pl-12">
          <li>100% Customer Satisfaction</li>
          <li>Free Collection &amp; Delivery</li>
          <li>Affordable Prices</li>
          <li>Best Quality</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
