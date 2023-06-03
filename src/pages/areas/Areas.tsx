import HText from "@/shared/HText";
import React, { useState } from "react";

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
            areas: ["Abbey road"],
        },
        {
            id: 2,
            title: "B",
            areas: [
                "Baker street",
                "Barons court",
                "Bayswater",
                "Belsize park",
                "Bloomsbury",
                "Brondesbury park",
            ],
        },
        {
            id: 3,
            title: "C",
            areas: [
                "Camden town",
                "Chelsea",
                "Chiswick",
                "Church street",
                "Colindale",
                "Covent garden",
                "Cricklewood",
            ],
        },
        {
            id: 4,
            title: "D",
            areas: ["Dry cleaners near me"],
        },
        {
            id: 5,
            title: "E",
            areas: [
                "Ealing common",
                "Earls court",
                "East acton",
                "Edgware road",
            ],
        },
        {
            id: 6,
            title: "F",
            areas: ["Finchley", "Fulham"],
        },
        {
            id: 7,
            title: "G",
            areas: ["Golders green", "Grosvenor square"],
        },
        {
            id: 8,
            title: "H",
            areas: [
                "Hammersmith",
                "Hampstead",
                "Hampstead heath",
                "Harlesden",
                "Harrow road",
                "Haverstock hill",
                "Hendon",
                "High gate",
                "Holborn",
                "Holland park",
                "Hyde park",
            ],
        },
        {
            id: 9,
            title: "I",
            areas: ["Islington"],
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
                "Kentish town",
                "Kenton",
                "Kilburn",
                "Kings cross",
                "Knightsbridge",
            ],
        },
        {
            id: 12,
            title: "L",
            areas: ["Lancaster gate", "Laundry near me", "Little venice"],
        },
        {
            id: 13,
            title: "M",
            areas: [
                "Maida vale",
                "Marble arch",
                "Marylebone high st.",
                "Mayfair",
                "Mill hill",
            ],
        },
        {
            id: 14,
            title: "N",
            areas: ["Neasden"],
        },
        {
            id: 15,
            title: "O",
            areas: [""],
        },
        {
            id: 16,
            title: "P",
            areas: ["Paddington", "Park lane", "Piccadilly", "Putney"],
        },
        {
            id: 17,
            title: "Q",
            areas: ["Queens park"],
        },
        {
            id: 18,
            title: "R",
            areas: ["Regents park"],
        },
        {
            id: 19,
            title: "S",
            areas: [
                "Shepherds bush",
                "Soho",
                "South acton",
                "South hampstead",
                "St pancras",
                "Swiss cottage",
            ],
        },
        {
            id: 20,
            title: "V",
            areas: ["Victoria"],
        },
        {
            id: 21,
            title: "W",
            areas: [
                "Wembley",
                "West end",
                "West end lane",
                "West hampstead",
                "Westminster",
                "Whitechapel",
                "Willesden green",
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

    return (
        <section
            className="items-center justify-center md:flex"
            style={{
                backgroundImage: "url(/src/assets/images/unsplash-4.jpg)",
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
