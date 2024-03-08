import HText from "@/shared/HText";
import InputWithSuggestions from "@/shared/InputWithSuggenstions";
import { ChangeEvent, useEffect, useState } from "react";
import axiosClient from "@/axiosClient";
import { useNavigate } from "react-router-dom";
import AlertPopup from "@/shared/AlertPopup";
// import HomePageGraphic from "@/assets/firstpage1.png";
import HomePageGraphicSmall from "@/assets/Mobile.jpg";
import HomePageGraphic from "@/assets/web.webp";
import socialMediaFB from "@/assets/socialmedia/facebook.png";
import socialMediaInsta from "@/assets/socialmedia/instagram.png";
import paypal from "@/assets/socialmedia/paypal.png";
import mastercard from "@/assets/socialmedia/mastercard.png";
import stripe from "@/assets/socialmedia/stripe.png";
import visa from "@/assets/socialmedia/visa.png";
import { Slot } from "@/model/Slot";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  areaname: string;
  customheading: string;
};

const Home = ({ areaname, customheading }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [slots, setData] = useState<Slot[]>([]);
  const [delivery, setDeliveryData] = useState<Slot[]>([]);
  const [express, setExpressDelivery] = useState<boolean>(false);
  const [pickupSlot, setPickupSlot] = useState<Slot>();
  const [deliverySlot, setDeliverySlot] = useState<Slot>();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  // const handleShowAlert = () => {
  //   setShowAlert(true);
  // };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

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
      className="mt-[4.5rem] gap-16 bg-[#EAE9E7] py-8 md:mt-0 md:h-[100vh] md:pb-0"
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
        <div className="z-10 mt-[20vh] md:mt-[30vh] md:basis-3/6">
          {/* LOGIN INPUTS */}
          <form onSubmit={handlePlaceOrder}>
            <p
              className={`text-left text-[16px] md:text-[20px] absolute font-[700] top-32 p-2 rounded-md bg-white/20 backdrop-blur-sm ${isAboveMediumScreens ? "text-black" : "text-black"
                }`}
            >
              We handle everything in-house, unlike other dry cleaners.
            </p>
            <p
              className={`mb-3 w-fit rounded-lg bg-white px-3 text-left text-[16px] font-[700] text-black shadow-2xl md:text-[18px]`}
            >
              Family Business
              <br />
              25+ years Experience
            </p>
            <HText
              textAlign={`text-left text-[23px] md:text-[32px] font-[500] uppercase ${isAboveMediumScreens ? "text-black" : "text-black"
                }`}
            >
              {customheading != null ? (<>MASTER DRY CLEANING &
                <br />
                LAUNDRY SERVICES {areaname}</>) : (<>{customheading}</>)
              }

            </HText>
            <p className={`w-fit py-1 text-[18px] font-[500] md:text-[20px]`}>
              Free Collection and Delivery
              <br />
              <b>(Express service available)</b>
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
                ORDER FOR COLLECTION
              </button>
            </div>
          </form>
          <div className="flex justify-center gap-4 py-4">
            <img className="h-[32px] w-[42px]" src={mastercard} alt="" />
            <img className="h-[32px] w-[42px]" src={visa} alt="" />
            <img className="h-[32px] w-[42px]" src={stripe} alt="" />
            <img className="h-[32px] w-[42px]" src={paypal} alt="" />
          </div>
          {/* <div className="flex justify-center gap-4 py-2">
            <img
              className="mr-2 h-8 w-auto cursor-pointer"
              alt="logo"
              src="https://d150we8dervy8c.cloudfront.net/static/images/app-stores/apple.png"
              onClick={handleShowAlert}
            />
            <img
              className="h-8 w-auto cursor-pointer"
              alt="logo"
              src="https://d150we8dervy8c.cloudfront.net/static/images/app-stores/google.png"
              onClick={handleShowAlert}
            />
          </div> */}
          <div className="flex justify-center gap-4 py-2">
            <a
              target="_new"
              href="https://www.facebook.com/mastercleandrycleanersuk"
            >
              <img src={socialMediaFB} alt="" />
            </a>
            <a
              target="_new"
              href="https://www.instagram.com/mastercleandrycleaner"
            >
              <img src={socialMediaInsta} alt="" />
            </a>
          </div>
          <p
            className={`text-center text-[20px] md:text-[20px] font-[700] py-4 my-4 rounded-md  ${isAboveMediumScreens ? "text-black" : "text-black"
              } bg-red-300/60 backdrop-blur-md`}
          >
            Award Winner<br />Best Dry Cleaner in London<br />2023
          </p>
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
      {showAlert && (
        <AlertPopup message="App Coming Soon!" onClose={handleCloseAlert} />
      )}
    </section>
  );
};

export default Home;
