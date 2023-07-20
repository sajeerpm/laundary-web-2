import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HText from "@/shared/HText";
import InputWithSuggestions from "@/shared/InputWithSuggenstions";

type Props = {};

const Home = ({}: Props) => {
  // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="gap-16 bg-[#fffaf0] py-20 md:h-[100vh] md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        {/* IMAGE */}
        <div
          className="flex basis-3/4 justify-center md:z-10
            md:mr-40 md:mt-16 md:justify-items-end"
        >
          <img
            alt="home-pageGraphic"
            className="rounded-sm md:h-[50vh]"
            src={HomePageGraphic}
          />
        </div>

        {/* MAIN HEADER */}
        <div className="z-10 md:basis-3/6">
          {/* LOGIN INPUTS */}
          <p className="text-center font-montserrat text-2xl">
            25+ years Experience in
          </p>
          <HText textAlign="text-center">
            DRY CLEANING & LAUNDARY SERVICES
          </HText>
          <p className="text-center font-extralight">
            Free collection and Delivery
          </p>
          <div className="mt-8 md:mt-16">
            <InputWithSuggestions placeholder="POST CODE" />
            <div className="flex">
              <div className="textbox-container mt-3 h-[48px] w-full bg-white">
                <select className="w-full bg-white text-center">
                  <option>Collection Slot</option>
                  <option>Slot 2</option>
                  <option>Slot 3</option>
                </select>
              </div>
              <div className="textbox-container mt-3 h-[48px] w-full bg-white">
                <select className="w-full bg-white text-center">
                  <option>Delivery Slot</option>
                  <option>Slot 2</option>
                  <option>Slot 3</option>
                </select>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-4 flex items-center gap-8">
            <ActionButton
              selectedPage={SelectedPage.Pricing}
              setSelectedPage={() => {}}
            >
              CHOOSE YOUR SLOT
            </ActionButton>
          </div>
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
    </section>
  );
};

export default Home;
