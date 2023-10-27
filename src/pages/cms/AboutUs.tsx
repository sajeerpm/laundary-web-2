import HText from "@/shared/HText";
import SHText from "@/shared/SHText";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

type Props = {};

const AboutUs = ({}: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-20">
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
      <div className="w-full py-8">
        <HText textAlign="text-center uppercase">About Us</HText>
      </div>
      <div className="mx-auto flex w-11/12 flex-col md:w-4/6">
        <p className="text-blue-600">
          Your Local Master Dry Cleaner - Established in 1997
        </p>
        <SHText textAlign="text-left">
          Your Dry Cleaning and Laundry.
          <br />
          Done.
        </SHText>
        <p className="pb-3 pt-12">
          We are professionals in the laundry and dry cleaning business, which
          means we always stay up to date on the latest technologies, cleaning
          methods, and solutions for dealing with stains or delicate fabrics.
          Plus, we maintain the highest standards of business integrity by
          following local and national regulations and environmental safety
          rules. We are passionate about changing the way you think about
          laundry!
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
