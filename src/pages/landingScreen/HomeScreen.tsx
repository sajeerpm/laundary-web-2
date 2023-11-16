import Clients from "./clients";
import AboutCompany from "./aboutCompany";
import Pricing from "./pricing";
import HowItWorks from "./howitworks";
import Home from "./home";
import { useEffect } from "react";
import Services from "./services";
import { Helmet } from "react-helmet";
import PopUp from "@/shared/OfferPopUp";

function HomeScreen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white">
      <Helmet>
        <title>
          Dry cleaning and laundry services in London | Free pick & drop near me
        </title>
        <meta
          name="description"
          content="Master clean are award winning eco friendly drycleaners in london with 25+ years experience. we offer free collection & delivery services for your drycleaning & laundry."
        />
        <meta
          property="og:description"
          content="Master clean are award winning eco friendly drycleaners in london with 25+ years experience. we offer free collection & delivery services for your drycleaning & laundry."
        ></meta>
      </Helmet>
      <Home />
      <HowItWorks />
      <Clients />
      <Pricing />
      <AboutCompany />
      <Services />
      <PopUp />
    </div>
  );
}

export default HomeScreen;
