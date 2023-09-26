import useMediaQuery from "@/hooks/useMediaQuery";
import HText from "@/shared/HText";
import React, { useEffect, useState } from "react";

interface Store {
  id: number;
  address: string;
  name: string;
  mapUrl: string;
}

const Branches: React.FC = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const stores: Store[] = [
    {
      id: 1,
      name: "Master Dry Cleaner : Laundry - Belsize Park",
      address: "152 Haverstock Hill, London NW3 2AY, United Kingdom",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9924.028141642306!2d-0.163628!3d51.54977000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761af2fe8e9bad%3A0xdc0db759f4cce7a9!2sMaster%20Dry%20Cleaner%20%3A%20Laundry%20%E2%80%93%20Belsize%20Park!5e0!3m2!1sen!2sus!4v1680174394428!5m2!1sen!2sus",
    },
    {
      id: 2,
      address: "45 Palliser Rd, London W14 9EB, United Kingdom",
      name: "Master Dry Cleaner - Shoe Repair, Invisible Mending, Laundry Service",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9937.09996237083!2d-0.21318!3d51.489821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fbe40033f65%3A0x9eef49288cf82bd0!2sMaster%20Dry%20Cleaner%20%E2%80%93%20Shoe%20Repair%2C%20Invisible%20Mending%2C%20Laundry%20Service%2045%20Palliser%20Road%20London!5e0!3m2!1sen!2sus!4v1680174725530!5m2!1sen!2sus",
    },
    {
      id: 3,
      address: "22 Crawford St, London W1H 1BX, United Kingdom",
      name: "Master Dry Cleaner - Shoe Repair, Invisible Mending, Dry Cleaning Service In London",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9930.562467291636!2d-0.159904!3d51.519809!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acbdd80d399%3A0x8a19c90fcdf687c0!2sMaster%20Dry%20Cleaner%20%E2%80%93%20Shoe%20Repair%2C%20Invisible%20Mending%2C%20Dry%20Cleaning%20Service%20In%20London!5e0!3m2!1sen!2sus!4v1680174478422!5m2!1sen!2sus",
    },
    {
      id: 4,
      address: "Swiss cottage, 6 Langtry Walk, London NW8 0DU, United Kingdom",
      name: "Master Dry Cleaner - Shoe Repair, Invisible Mending, Laundry Service",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9925.99694719173!2d-0.17938!3d51.540744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2bb7413573%3A0xf70b78ffe52c48c3!2sMaster%20Dry%20Cleaner%20%E2%80%93%20Shoe%20Repair%2C%20Invisible%20Mending%2C%20Laundry%20Service!5e0!3m2!1sen!2sus!4v1680173476052!5m2!1sen!2sus",
    },
    {
      id: 5,
      address: "16 Formosa St, London W9 1EE, United Kingdom",
      name: "Master Dry Cleaner",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9929.521030427859!2d-0.185053!3d51.524585!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761aa888492a9f%3A0x7361c5bd8700ca59!2sMaster%20Dry%20Cleaner!5e0!3m2!1sen!2sus!4v1680174272289!5m2!1sen!2sus",
    },
  ];

  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const handleStoreClick = (store: Store) => {
    setSelectedStore(store);
  };
  const handleStoreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStore(stores[parseInt(event.target.value) - 1]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedStore(stores[0]);
  }, []);

  return (
    <section className="bg-[#EAE9E7] py-8 pt-20">
      <div className="w-full py-8">
        <HText textAlign="text-center">SERVICE AREAS</HText>
      </div>
      <div className="mx-auto w-5/6 md:flex md:h-[70vh]">
        <div className="overflow-x-auto bg-gray-400 p-2 md:w-1/4">
          {isAboveMediumScreens ? (
            <ul className="space-y-2 ">
              {stores.map((store) => (
                <li
                  key={store.id}
                  onClick={() => handleStoreClick(store)}
                  className={`cursor-pointer rounded p-2 ${
                    selectedStore?.id === store.id
                      ? "bg-white/30 backdrop-blur-xl"
                      : ""
                  }`}
                >
                  <strong>{store.name}</strong>
                  <br />
                  {store.address}
                </li>
              ))}
            </ul>
          ) : (
            <div>
              <select
                className="w-full bg-white px-4 py-2"
                onChange={handleStoreChange}
              >
                {stores.map((store) => (
                  <option
                    key={store.id}
                    value={store.id}
                    className={`cursor-pointer rounded p-2 ${
                      selectedStore?.id === store.id
                        ? "bg-white/30 backdrop-blur-xl"
                        : ""
                    }`}
                  >
                    <strong>{store.address}</strong>
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="h-[50vh] w-full bg-gray-300 md:h-[70vh]">
          {selectedStore && (
            <iframe
              src={selectedStore.mapUrl}
              title="Store Map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default Branches;
