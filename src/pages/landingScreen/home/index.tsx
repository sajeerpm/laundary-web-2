import HText from "@/shared/HText";
import InputWithSuggestions from "@/shared/InputWithSuggenstions";
import { ChangeEvent, useEffect, useState } from "react";
import axiosClient from "@/axiosClient";
import { useNavigate } from "react-router-dom";
import AlertPopup from "@/shared/AlertPopup";
// import HomePageGraphic from "@/assets/firstpage1.png";
import HomePageGraphicSmall from "@/assets/Mobile.jpg";
import HomePageGraphic from "@/assets/web.png";
import { Slot } from "@/model/Slot";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {};

const Home = ({}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [slots, setData] = useState<Slot[]>([]);
  const [delivery, setDeliveryData] = useState<Slot[]>([]);
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

  const handlePlaceOrder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (deliverySlot?.display != "express") {
      if (pickupSlot && deliverySlot) {
        localStorage.setItem(
          "delivery_details",
          JSON.stringify({
            pickup: pickupSlot,
            delivery: deliverySlot,
          })
        );
        navigate("/customer");
      }
    } else {
      // setExpressDelivery(true);
      window.location.href = "tel:+442073285621";
    }
  };

  const handlePickupSlotChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = JSON.parse(event.target.value);
    setPickupSlot(selectedValue);
    fetchDeliveryData(selectedValue.slot_date + " " + selectedValue.slot_start);
  };

  const handleDeliverySlotChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedSlot = JSON.parse(event.target.value);
    if (selectedSlot.slot == "express") {
      // setExpressDelivery(true);
      window.location.href = "tel:+442073285621";
    }
    setDeliverySlot(selectedSlot);
  };

  return (
    <section
      id="order"
      className="mt-[4.5rem] h-[100vh] gap-16 bg-[#EAE9E7] py-20 md:mt-0 md:pb-0"
      style={
        !isAboveMediumScreens
          ? {
              backgroundImage: `url(${HomePageGraphicSmall})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {/* IMAGE AND MAIN HEADER */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* IMAGE */}
        <div
          className="flex basis-3/4 justify-center md:z-10
            md:mr-40 md:mt-16 md:justify-items-end"
        >
          {isAboveMediumScreens && (
            <img
              alt="home-pageGraphic"
              src={HomePageGraphic}
              className="absolute top-0 -z-10 h-[100vh] md:left-[150px]"
            />
          )}
        </div>

        {/* MAIN HEADER */}
        <div className="z-10 mt-[30vh] md:basis-3/6">
          {/* LOGIN INPUTS */}
          <form onSubmit={handlePlaceOrder}>
            <p
              className={`mb-3 w-fit rounded-full bg-secondary-500 px-3 text-left text-[16px] font-[500] text-white md:text-[20px]`}
            >
              25+ years Experience in
            </p>
            <HText
              textAlign={`text-left text-[24px] md:text-[40px] font-[500] ${
                isAboveMediumScreens ? "text-black" : "text-black"
              }`}
            >
              DRY CLEANING &
            </HText>
            <HText
              textAlign={`text-left text-[24px] md:text-[40px] font-[500] ${
                isAboveMediumScreens ? "text-black" : "text-black"
              }`}
            >
              LAUNDRY SERVICES
            </HText>
            <p className={`w-fit py-1 text-[18px] font-[500] md:text-[20px]`}>
              Free Collection and Delivery
            </p>
            <div className="mt-4 md:mt-8">
              <InputWithSuggestions placeholder="Your Location Or Postcode" />
              <div className="textbox-container mt-3 flex h-[48px] bg-white">
                <div className="w-full border-r-2 bg-white pr-3">
                  <select
                    className="w-full bg-white px-2 text-[14px] md:px-4 md:text-[16px]"
                    onChange={handlePickupSlotChange}
                    required
                  >
                    <option>Collection Slot</option>
                    {slots.map((slot) => (
                      <option className="py-8" value={JSON.stringify(slot)}>
                        {slot.display}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full bg-white">
                  <select
                    className="w-full bg-white px-2 text-[14px] md:px-4 md:text-[16px]"
                    onChange={handleDeliverySlotChange}
                    required
                  >
                    <option>Delivery Slot</option>
                    {delivery.length && (
                      <option
                        value={JSON.stringify({
                          slot: "express",
                          display: "express",
                        })}
                      >
                        Call Us for Same day delivery
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
                className="w-full rounded-md bg-secondary-500 px-10 py-3 text-center font-semibold text-white hover:shadow-lg"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>

      {express && (
        <AlertPopup
          message="Please call us at <a>T (020) 7328 5621</a> for same day service."
          onClose={() => {
            setExpressDelivery(false);
          }}
        />
      )}
    </section>
  );
};

export default Home;
