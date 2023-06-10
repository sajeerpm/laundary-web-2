import Clients from "./clients";
import AboutCompany from "./aboutCompany";
import Pricing from "./pricing";
import HowItWorks from "./howitworks";
import Home from "./home";
import { useEffect } from "react";
import Services from "./services";

function HomeScreen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white">
      <Home />
      <HowItWorks />
      <Clients />
      <Pricing />
      <AboutCompany />
      <Services />
    </div>
  );
}

export default HomeScreen;
