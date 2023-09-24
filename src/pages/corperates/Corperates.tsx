import HText from "@/shared/HText";
import React, { useEffect } from "react";
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

import BackgroundImage from "@/assets/coroperates.webp";
import BackgroundMobileImage from "@/assets/coroperates-mobile.jpg";
import useMediaQuery from "@/hooks/useMediaQuery";

interface Tile {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Corperates: React.FC = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const tiles: Tile[] = [
    {
      id: 1,
      title: "Editon",
      description: "",
      image: `${Editon}`,
    },
    {
      id: 2,
      title: "Estee",
      description: "",
      image: `${Estee}`,
    },
    {
      id: 3,
      title: "Ibis",
      description: "",
      image: `${Ibis}`,
    },
    {
      id: 4,
      title: "Motel One",
      description: "",
      image: `${MotelOne}`,
    },
    {
      id: 5,
      title: "The Harley Street",
      description: "",
      image: `${TheHarleyStreet}`,
    },
    {
      id: 6,
      title: "Marriott Hotels & Resorts",
      description: "",
      image: `${Marriott}`,
    },
    {
      id: 7,
      title: "MaxMara",
      description: "",
      image: `${MaxMara}`,
    },
    {
      id: 8,
      title: "Acne Studios",
      description: "",
      image: `${AcneStudios}`,
    },
    {
      id: 9,
      title: "Burberry",
      description: "",
      image: `${Burberry}`,
    },
    {
      id: 10,
      title: "Debenhams",
      description: "",
      image: `${Debenhams}`,
    },
    {
      id: 11,
      title: "DoubleTree by Hilton",
      description: "",
      image: `${DoubleTree}`,
    },
    {
      id: 12,
      title: "Harvey Nichols",
      description: "",
      image: `${HarveyNichols}`,
    },
    {
      id: 13,
      title: "Royal Garden Hotel",
      description: "",
      image: `${RoyalGarden}`,
    },
    {
      id: 14,
      title: "Novotel",
      description: "",
      image: `${Novotel}`,
    },
    {
      id: 15,
      title: "St Giles London",
      description: "",
      image: `${StGilesLondon}`,
    },
    // Add more tiles as needed
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="items-center justify-center md:flex"
      style={{
        backgroundImage: `url(${
          isAboveMediumScreens ? BackgroundImage : BackgroundMobileImage
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto mt-[4.5rem] w-5/6">
        <div className="w-full py-8">
          <HText textAlign="text-center">
            OUR DRY CLEANING & LAUNDRY CLIENTS
          </HText>
          <p className="text-center">
            We provide a responsive, discrete and reliable service tailored to
            your company’s specific needs.
          </p>
          <p className="text-center">
            To discuss your requirements call 020 7328 5621 or email
            cs@masterdrycleaner.co.uk.
          </p>
        </div>
        <div className="lg:grid-cols-4 grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 md:grid-cols-3">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              className="flex flex-col items-center overflow-hidden rounded-lg bg-white p-5 shadow-lg"
            >
              <img
                src={tile.image}
                alt={tile.title}
                className="h-[100px] object-cover md:h-[150px]"
              />
              <div className="p-4">
                <h2 className="mb-2 text-center text-xl font-bold text-gray-800">
                  {tile.title}
                </h2>
                <p className="text-center text-gray-700">{tile.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Corperates;
