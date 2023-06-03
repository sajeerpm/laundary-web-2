import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import { motion } from "framer-motion";
import TextBox from "@/shared/TextBox";
import HText from "@/shared/HText";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
        <section
            id="home"
            className="gap-16 bg-[#fffaf0] py-10 md:h-[100vh] md:pb-0"
        >
            {/* IMAGE AND MAIN HEADER */}
            <motion.div
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* IMAGE */}
                <div
                    className="flex basis-3/4 justify-center md:z-10
            md:mr-40 md:mt-16 md:justify-items-end"
                >
                    <img
                        alt="home-pageGraphic"
                        className="h-[50vh] rounded-sm"
                        src={HomePageGraphic}
                    />
                </div>

                {/* MAIN HEADER */}
                <div className="z-10 md:basis-3/6">
                    {/* LOGIN INPUTS */}
                    <HText textAlign="text-center">
                        DRY CLEANING & LAUNDARY EXPERTS
                    </HText>
                    <p className="text-center font-extralight">
                        with Collection and Delivery in 24 hours
                    </p>
                    <div className="mt-16">
                        <TextBox icon="fa fa-user" placeholder="Flat 554" />
                        <TextBox icon="fa fa-user" placeholder="TIME SLOTS" />
                    </div>

                    {/* ACTIONS */}
                    <div className="mt-8 flex items-center gap-8">
                        <ActionButton
                            selectedPage={SelectedPage.Pricing}
                            setSelectedPage={setSelectedPage}
                        >
                            SEE AVAILABLE TIMES
                        </ActionButton>
                    </div>
                </div>
            </motion.div>

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