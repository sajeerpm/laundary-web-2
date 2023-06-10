import HText from "@/shared/HText";
import React, { useEffect } from "react";
import Editon from "@/assets/clients/Editon.png";
import Estee from "@/assets/clients/Estee.png";
import Ibis from "@/assets/clients/Ibis.png";
import MotelOne from "@/assets/clients/Motel-one.png";
import TheHarleyStreet from "@/assets/clients/The-Harley-Street.png";
import BackgroundImage from "@/assets/images/unsplash-4.jpg";

interface Tile {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Corperates: React.FC = () => {
  const tiles: Tile[] = [
    {
      id: 1,
      title: "Editon",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: `${Editon}`,
    },
    {
      id: 2,
      title: "Estee",
      description:
        "Praesent id lectus dignissim, lacinia lectus sed, consectetur tortor.",
      image: `${Estee}`,
    },
    {
      id: 3,
      title: "Ibis",
      description:
        "Praesent id lectus dignissim, lacinia lectus sed, consectetur tortor.",
      image: `${Ibis}`,
    },
    {
      id: 4,
      title: "Motel One",
      description:
        "Praesent id lectus dignissim, lacinia lectus sed, consectetur tortor.",
      image: `${MotelOne}`,
    },
    {
      id: 5,
      title: "The Harley Street",
      description:
        "Praesent id lectus dignissim, lacinia lectus sed, consectetur tortor.",
      image: `${TheHarleyStreet}`,
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
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto mt-20 w-5/6">
        <div className="w-full py-8">
          <HText textAlign="text-center">OUR LAUNDARY CLIENTS IN LONDON</HText>
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
              <img src={tile.image} alt={tile.title} className="object-cover" />
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
