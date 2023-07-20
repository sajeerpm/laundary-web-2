import HText from "@/shared/HText";
import SText from "@/shared/SText";
import { Link } from "react-router-dom";

import DryImage from "@/assets/dry.png";
import ShirtService from "@/assets/clean-clothes.png";
import LaundaryService from "@/assets/laundry.png";
import WashAndFold from "@/assets/clothes-folded.png";
import CurtainService from "@/assets/curtain.png";
import ShoeRepair from "@/assets/cleaning.png";
import RunningService from "@/assets/running.png";
import WeddingDresses from "@/assets/wedding.png";
import AlterationAndRepair from "@/assets/ribbon-cutting.png";
import LeatherFurSuede from "@/assets/leather-jacket.png";
import SpecialistItems from "@/assets/jeans.png";
import Ironing from "@/assets/ironing-board.png";
import InvisibleMending from "@/assets/invisible-mending.png";
import HandBagRepair from "@/assets/hand-bag.png";
import AsianTraditionalDryCleaning from "@/assets/traditional-wear.png";
import { useEffect, useState } from "react";
import axiosClient from "@/axiosClient";

interface Service {
  id: number;
  name: string;
  image: string;
  description: string;
}

const Services = () => {
  const [categories, setData] = useState<Service[]>([]);
  const products = [
    {
      id: 1,
      name: "Dry Cleaning",
      price: "$10",
      image: `${DryImage}`,
      alt: "dry-cleaning",
      description:
        "Blouses, bow ties, knitwear, coats, dinner suits, dresses, gloves & more.",
    },
    {
      id: 2,
      name: "Shirt Service",
      price: "$20",
      image: `${ShirtService}`,
      alt: "shirt-service",
      description:
        "Beautifully cleaned and crisply pressed shirts. Returned on hangers or folded",
    },
    {
      id: 3,
      name: "Laundry Services",
      price: "$30",
      image: `${LaundaryService}`,
      alt: "laundary-services",
      description: "Hotel crisp bed linen, duvets and blankets.",
    },
    {
      id: 4,
      name: "wash and fold services",
      price: "$40",
      image: `${WashAndFold}`,
      alt: "wash-and-fold-service",
      description: "Service washes (wash, dry and fold)",
    },
    {
      id: 5,
      name: "Curtain Cleaning",
      price: "$40",
      image: `${CurtainService}`,
      alt: "curtain-cleaning",
      description: "Curtain cleaning service per m^2",
    },
    {
      id: 6,
      name: "SHOE REPAIR AND COMPLIMENT POLISH",
      price: "$40",
      image: `${ShoeRepair}`,
      alt: "shoe-repair-and-compliment-polish",
      description:
        "Professional shoe cleaning, zip repairs, rubber sole replacement and more.",
    },
    {
      id: 7,
      name: "Trainer Cleaning",
      price: "$40",
      image: `${RunningService}`,
      alt: "trainer-cleaning",
      description:
        "High tops, sneakers, trainers, runners, plimsolls and more.",
    },
    {
      id: 8,
      name: "Wedding Dresses",
      price: "$40",
      image: `${WeddingDresses}`,
      alt: "wedding-dresses",
      description:
        "Beautifully cleaned, restored and presented to keep forever",
    },
    {
      id: 9,
      name: "Alterations & Repairs",
      price: "$40",
      image: `${AlterationAndRepair}`,
      alt: "alterations-repairs",
      description:
        "Trouser, dress, skirt, suit, and jackets & children’s clothing.",
    },
    {
      id: 10,
      name: "Leather, Fur and Suede",
      price: "$40",
      image: `${LeatherFurSuede}`,
      alt: "leather-fur-and-suede",
      description: "Rejuvenate your favourite coats",
    },
    {
      id: 11,
      name: "Specialist items",
      price: "$40",
      image: `${SpecialistItems}`,
      alt: "specialist-items",
      description: "Specialist couture and designer goods",
    },
    {
      id: 12,
      name: "Ironing",
      price: "$40",
      image: `${Ironing}`,
      alt: "ironing",
      description: "Ironing collected and delivered to your door.",
    },
    {
      id: 13,
      name: "Invisible Mending",
      price: "$40",
      image: `${InvisibleMending}`,
      alt: "invisible-mending",
      description: "Ironing collected and delivered to your door.",
    },
    {
      id: 14,
      name: "Hand Bag Cleaning & Repair",
      price: "$40",
      image: `${HandBagRepair}`,
      alt: "hand-bag-cleaning",
      description: "Ironing collected and delivered to your door.",
    },
    {
      id: 15,
      name: "Asian & Traditional Dry Cleaning",
      price: "$40",
      image: `${AsianTraditionalDryCleaning}`,
      alt: "traditional-dry",
      description: "Ironing collected and delivered to your door.",
    },
    // Add more products as needed
  ];

  // const handlePriceButton = (categoryId: number) => {
  //     return <Navigate to="/pricing" />;
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/pricelist");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-20">
      <div className="w-full py-8">
        <HText textAlign="text-center">SERVICES</HText>
      </div>
      <div className="lg:grid-cols-3 mx-auto grid w-4/6 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-center bg-white p-2 md:p-8"
          >
            <img src={product.image} alt={product.name} />
            <SText textAlign="text-center">{product.name}</SText>
            <p className="text-center align-top">{product.description}</p>
            <Link to={`/pricing/${product.id}`}>
              <button
                key={product.id}
                className="my-8 rounded-none border border-black px-12 py-2"
              >
                INFO
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
