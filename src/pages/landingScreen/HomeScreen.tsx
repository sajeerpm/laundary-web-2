import Clients from "./clients";
import AboutCompany from "./aboutCompany";
import Pricing from "./pricing";
import HowItWorks from "./howitworks";
import Home from "./home";

function HomeScreen() {
  return (
    <div className="bg-white">
      <Home />
      <HowItWorks />
      <Clients />
      <Pricing />
      <AboutCompany />
    </div>
  );
}

export default HomeScreen;
