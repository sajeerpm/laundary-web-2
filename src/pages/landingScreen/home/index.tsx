import HText from "@/shared/HText";
import InputWithSuggestions from "@/shared/InputWithSuggenstions";
import { ChangeEvent, useEffect, useState } from "react";
import axiosClient from "@/axiosClient";
import { useNavigate } from "react-router-dom";
import AlertPopup from "@/shared/AlertPopup";
import HomePageGraphic from "@/assets/slider1.webp";

type Props = {};

interface Slot {
  slot: string;
  display: string;
}

const Home = ({}: Props) => {
  // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [slots, setData] = useState<Slot[]>([]);
  const [delivery, setDeliveryData] = useState<Slot[]>([]);
  const [postCode, setPostCode] = useState<string>("");
  const [express, setExpressDelivery] = useState<boolean>(false);
  const [pickupSlot, setPickupSlot] = useState<Slot>();
  const [deliverySlot, setDeliverySlot] = useState<Slot>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosClient.get("/pickup");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    window.scrollTo(0, 0);
  }, []);

  const fetchDeliveryData = async (pickup: string) => {
    try {
      const response = await axiosClient.get("/delivery/" + pickup);
      setDeliveryData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlaceOrder = () => {
    if (deliverySlot?.slot != "express") {
      localStorage.setItem(
        "data",
        JSON.stringify({
          postcode: postCode,
          pickup: pickupSlot,
          delivery: deliverySlot,
          address: "6 Langtry Walk, London NW8 0DU, UK",
        })
      );
      navigate("/customer");
    } else {
      setExpressDelivery(true);
    }
  };

  const handlePostCodeChange = (value: string) => {
    setPostCode(value);
  };

  const handlePickupSlotChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = JSON.parse(event.target.value);
    setPickupSlot(selectedValue);
    fetchDeliveryData(selectedValue.slot);
  };

  const handleDeliverySlotChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDeliverySlot(JSON.parse(event.target.value));
  };

  return (
    <section
      id="home"
      className="gap-16 bg-[#fffaf0] py-20 md:h-[100vh] md:pb-0" style={{
        backgroundImage: `url(${HomePageGraphic})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* IMAGE AND MAIN HEADER */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* IMAGE */}
        <div
          className="flex basis-3/4 justify-center md:z-10
            md:mr-40 md:mt-16 md:justify-items-end"
        >
          {/* <img
            alt="home-pageGraphic"
            className="rounded-sm md:h-[50vh]"
            src={HomePageGraphic}
          /> */}
        </div>

        {/* MAIN HEADER */}
        <div className="z-10 md:basis-3/6 mt-40">
          {/* LOGIN INPUTS */}
          <form onSubmit={handlePlaceOrder}>
            <p className="text-center text-2xl text-blue-600">
              25+ years Experience in
            </p>
            <HText textAlign="text-center text-black">
              DRY CLEANING & LAUNDARY SERVICES
            </HText>
            <p className="text-center font-extralight">
              Free collection and Delivery
            </p>
            <div className="mt-8 md:mt-16">
              <InputWithSuggestions
                placeholder="POST CODE"
                onChange={handlePostCodeChange}
              />
              <div className="textbox-container mt-3 flex h-[48px] bg-white">
                <div className="w-full border-r-2 bg-white pr-3">
                  <select
                    className="w-full bg-white text-center"
                    onChange={handlePickupSlotChange}
                  >
                    <option>Collection Slot</option>
                    {slots.map((slot) => (
                      <option value={JSON.stringify(slot)}>
                        {slot.display}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full bg-white">
                  <select
                    className="w-full bg-white text-center"
                    onChange={handleDeliverySlotChange}
                  >
                    <option>Delivery Slot</option>
                    {delivery.length && (
                      <option
                        value={JSON.stringify({
                          slot: "express",
                          display: "express",
                        })}
                      >
                        Same day delivery
                      </option>
                    )}
                    {delivery.map((slot) => (
                      <option value={JSON.stringify(slot)}>
                        {slot.display}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mt-4 flex w-full items-center gap-8">
              <button
                type="submit"
                className="w-full rounded-none bg-secondary-500 px-10 py-2 text-center hover:shadow-lg"
              >
                PLACE ORDER
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* SPONSORS */}
      {/* {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )} */}
      {express && (
        <AlertPopup
          message="Please contact customer service for better delivery date and time!"
          onClose={() => {
            setExpressDelivery(false);
          }}
        />
      )}
    </section>
  );
};

export default Home;
