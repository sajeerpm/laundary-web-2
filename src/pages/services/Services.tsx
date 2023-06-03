import HText from "@/shared/HText";
import SText from "@/shared/SText";
import { Link } from "react-router-dom";

import DryImage from "@/assets/dry.png";

const Services = () => {
  const products = [
    {
      id: 1,
      name: "Dry Cleaning",
      price: "$10",
      image: "/src/assets/dry.png",
      description: "On the other hand, we denounce with righteous indignation.",
    },
    {
      id: 2,
      name: "Shirt Service",
      price: "$20",
      image: "/src/assets/clean-clothes.png",
      description: "On the other hand, we denounce with righteous indignation.",
    },
    {
      id: 3,
      name: "Laundry Services",
      price: "$30",
      image: "/src/assets/laundry.png",
      description: "On the other hand, we denounce with righteous indignation.",
    },
    {
      id: 4,
      name: "wash and fold services",
      price: "$40",
      image: "/src/assets/clothes-folded.png",
      description: "On the other hand, we denounce with righteous indignation.",
    },
    {
      id: 5,
      name: "Curtain Cleaning",
      price: "$40",
      image: "/src/assets/curtain.png",
      description: "On the other hand, we denounce with righteous indignation.",
    },
    {
      id: 6,
      name: "SHOE REPAIR AND COMPLIMENT POLISH",
      price: "$40",
      image: "/src/assets/cleaning.png",
      description: "On the other hand, we denounce with righteous indignation.",
    },
    {
      id: 7,
      name: "Trainer Cleaning",
      price: "$40",
      image: "/src/assets/running.png",
      description: "On the other hand, we denounce with righteous indignation.",
    },
    {
      id: 8,
      name: "Wedding Dresses",
      price: "$40",
      image: "/src/assets/wedding.png",
      description: "On the other hand, we denounce with righteous indignation.",
    },
    {
      id: 9,
      name: "Alterations & Repairs",
      price: "$40",
      image: "/src/assets/ribbon-cutting.png",
      description: "On the other hand, we denounce with righteous indignation.",
    },
    {
      id: 10,
      name: "Leather, Fur and Suede",
      price: "$40",
      image: "/src/assets/leather-jacket.png",
      description: "On the other hand.",
    },
    {
      id: 11,
      name: "Specialist items",
      price: "$40",
      image: "/src/assets/jeans.png",
      description: "On the other hand, we denounce with righteous indignation.",
    },
    {
      id: 12,
      name: "Ironing",
      price: "$40",
      image: "/src/assets/ironing-board.png",
      description: "On the other hand, we denounce with righteous indignation.",
    },
    // Add more products as needed
  ];

  // const handlePriceButton = (categoryId: number) => {
  //     return <Navigate to="/pricing" />;
  // };

  return (
    <div className="mt-20">
      <div className="w-full py-8">
        <HText textAlign="text-center">SERVICES & PRICES</HText>
      </div>
      <div className="mx-auto grid w-4/6 grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-center bg-white p-8"
          >
            <img src={DryImage} alt="dry-cleaning" />
            <SText textAlign="text-center">{product.name}</SText>
            <p className="text-center">{product.description}</p>
            <Link to={`/pricing/${product.name}`}>
              <button
                key={product.id}
                className="my-8 rounded-none border border-black px-12 py-2"
              >
                INFO + PRICING
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
