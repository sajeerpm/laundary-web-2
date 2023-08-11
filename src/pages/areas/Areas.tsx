import HText from "@/shared/HText";
import React, { useEffect, useState } from "react";
import AreaBackgroundImage from "@/assets/images/unsplash-4.jpg";

interface Areas {
  id: number;
  title: string;
  areas: string[];
}

const Corperates: React.FC = () => {
  const initialAreas: Areas[] = [
    {
      id: 1,
      title: "A",
      areas: [
        "Abbey road",
        "Acton (part)",
        "Aldgate",
        "Aldgate High Street",
        "Amwell",
        "Angel",
        "Archway",
        "Arnos Grove",
      ],
    },
    {
      id: 2,
      title: "B",
      areas: [
        "Baker street",
        "Barnet",
        "Barnsbury",
        "Barbican",
        "Barons court",
        "Battersea",
        "Beech Street",
        "Belgravia",
        "Belsize Park",
        "Billingsgate",
        "Bishopsgate",
        "Bishopsgate to the north",
        "Bloomsbury",
        "Brent",
        "Brent Cross",
        "Brent Park",
        "Bridgewater Square",
        "Brompton",
        "Brondesbury",
      ],
    },
    {
      id: 3,
      title: "C",
      areas: [
        "Cannon Street",
        "Canonbury",
        "Camden Town",
        "Chalk Farm",
        "Chancery Lane",
        "Cheapside",
        "Chelsea",
        "Childs Hill",
        "Chinatown",
        "Chiswick",
        "Church End",
        "City of Westminster",
        "Clapham",
        "Clerkenwell",
        "Cockfosters",
        "Cornhill",
        "Covent Garden",
        "Cricklewood",
        "Crouch End",
      ],
    },
    {
      id: 4,
      title: "D",
      areas: ["Dalston (part)"],
    },
    {
      id: 5,
      title: "E",
      areas: [
        "Earls Court",
        "East Acton",
        "East Finchley",
        "Edgware",
        "Edmonton",
        "Edmonton to the West",
        "Embankment",
        "Euston",
      ],
    },
    {
      id: 6,
      title: "F",
      areas: [
        "Farringdon",
        "Farringdon Road in the north",
        "Fenchurch Street",
        "Fetter Lane",
        "Finchley Central",
        "Finsbury",
        "Finsbury Park",
        "Fleet Street",
        "Fleet Street in the south",
        "Fortune Green",
        "Frognal",
        "Fulham",
      ],
    },
    {
      id: 7,
      title: "G",
      areas: ["Golders Green", "Gospel Oak", "Grange Park", "Gunnersbury"],
    },
    {
      id: 8,
      title: "H",
      areas: [
        "Hammersmith",
        "Hampstead",
        "Hampstead Garden Suburb",
        "Harlesden",
        "Harley Street",
        "Harringay",
        "Harringay in the West",
        "Harrow",
        "Hatton Garden",
        "Hendon",
        "Hendon Central",
        "Highbury",
        "Highgate",
        "Holborn",
        "Holborn in the west",
        "Holland Park",
        "Holloway",
        "Hornsey",
        "Hyde Park",
      ],
    },
    {
      id: 9,
      title: "I",
      areas: ["Imperial Wharf", "Islington"],
    },
    {
      id: 10,
      title: "J",
      areas: [],
    },
    {
      id: 11,
      title: "K",
      areas: [
        "Kensington",
        "Kensal Green",
        "Kensington Olympia",
        "Kentish Town",
        "Kilburn",
        "Kings Cross",
        "Kingsbury Green",
        "Kingsland",
        "Knightsbridge",
      ],
    },
    {
      id: 12,
      title: "L",
      areas: [
        "Lambeth",
        "Lisson Grove",
        "Little Venice",
        "London Wall",
        "Lancaster Gate",
      ],
    },
    {
      id: 13,
      title: "M",
      areas: [
        "Maida Vale",
        "Manor House",
        "Marylebone",
        "Mayfair",
        "Mill Hill",
        "Moorgate",
        "Museum of London",
        "Muswell Hill",
        "Marble Arch",
      ],
    },
    {
      id: 14,
      title: "N",
      areas: [
        "Neasden (part)",
        "New Southgate",
        "Newington Green",
        "North Finchley",
        "North Kensington",
        "Northfields (north and west)",
        "Northumberland Park",
        "Notting Hill",
      ],
    },
    {
      id: 15,
      title: "O",
      areas: [
        "Oakleigh Park",
        "Oakwood",
        "Old Broad Street",
        "Old Oak Common",
        "Old Street",
        "Oxford Circus",
      ],
    },
    {
      id: 16,
      title: "P",
      areas: [
        "Paddington",
        "Park Lane",
        "Park Royal",
        "Parsons Green",
        "Pentonville",
        "Pimlico",
        "Primrose Hill",
      ],
    },
    {
      id: 17,
      title: "Q",
      areas: ["Queen Street", "Queens park"],
    },
    {
      id: 18,
      title: "R",
      areas: ["Regent Street", "Regents park"],
    },
    {
      id: 19,
      title: "S",
      areas: [
        "Shepherds Bush",
        "Shoreditch",
        "Smithfield",
        "South Islington",
        "South Kensington",
        "Southgate",
        "Southwark",
        "Spitalfields",
        "St James",
        "St Lukes",
        "St Pauls",
        "Stoke Newington",
        "Stonebridge",
        "Streatham Hill",
        "Stroud Green",
        "Swiss Cottage",
      ],
    },
    {
      id: 20,
      title: "T",
      areas: ["Temple Fortune", "Totteridge", "Tower Hill", "Tufnell Park"],
    },
    {
      id: 21,
      title: "U",
      areas: ["Upper Holloway"],
    },
    {
      id: 22,
      title: "V",
      areas: ["Vauxhall", "Victoria Park", "Victoria"],
    },
    {
      id: 23,
      title: "W",
      areas: [
        "Walbrook",
        "Walham Green",
        "Wandsworth",
        "West Brompton",
        "West Ealing",
        "West Hampstead",
        "West Kensington",
        "Westbourne Green",
        "Westminster",
        "Whetstone",
        "White City",
        "Whitechapel",
        "Whitehall",
        "Willesden",
        "Willesden Green",
        "Winchmore Hill",
        "Wood Green",
      ],
    },
    // Add more tiles as needed
  ];

  const [items, setItems] = useState<Areas[]>(initialAreas);
  const [keyword, setKeyword] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
    filterItems(event.target.value);
  };

  const filterItems = (keyword: string) => {
    const filteredItems = initialAreas.filter((item) =>
      item.areas.some((area) =>
        area.toLowerCase().includes(keyword.toLowerCase())
      )
    );
    setItems(filteredItems);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="items-center justify-center md:flex"
      style={{
        backgroundImage: `url(${AreaBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mt-20 min-h-[100vh] w-full pb-8">
        <div className="mx-auto w-5/6">
          <div className="w-full py-8">
            <HText textAlign="text-center">SERVICE AREAS</HText>
          </div>
          <div className="flex items-start gap-3 pb-8 md:justify-end">
            <input
              className="border-1 rounded-md border p-2 focus:outline-none"
              type="text"
              value={keyword}
              onChange={handleInputChange}
              placeholder="Search Area"
            />
            {/* <button onClick={filterItems}>Search</button> */}
          </div>
          <div className="lg:grid-cols-4 grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {items.map((tile) => (
              <div
                key={tile.id}
                className="flex flex-col items-center overflow-hidden rounded-lg bg-white/30 p-8 shadow-lg backdrop-blur-xl"
              >
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-bold text-black">
                    {tile.title}
                  </h2>
                  <p className="text-gray-700">{}</p>
                </div>
                <ul className="text-black">
                  {tile.areas.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corperates;
