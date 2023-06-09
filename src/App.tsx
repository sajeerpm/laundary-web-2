import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./pages/navbar";
import PrivateRoutes from "./components/PrivateRoutes";
import HomeScreen from "./pages/landingScreen/HomeScreen";
import Login from "./pages/login/Login";
import Footer from "./pages/footer";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Services from "./pages/services/Services";
import Pricing from "./pages/pricing/Pricing";
import PricingDetailed from "./pages/pricing/PricingDetailed";
import Areas from "./pages/areas/Areas";
import FAQ from "./pages/faq/faq";
import { useEffect, useState } from "react";
import Corporates from "./pages/corperates/Corperates";
import Branches from "./pages/branches/Branches";
import FloatingButton from "./shared/FloatingButton";
import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();
  const path = location.pathname;
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  console.log(path);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Get professional laundry and dry cleaning services in London at MasterDryCleaners Sevice Ltd. We are the go-to destination for meticulous garment care, offering eco-friendly and same-day services. Our experienced team specializes in wedding dress cleaning, curtain cleaning, leather cleaning, suit cleaning, and more. With convenient pickup and delivery options, we make the process hassle-free. Trust us to remove stubborn stains and restore your garments to their original brilliance. Discover competitive dry cleaning prices and exceptional customer service. Experience the best laundry and dry cleaning in London with MasterDryCleaners Sevice Ltd."
        />
        <meta
          name="keywords"
          content="London dry cleaners, Dry cleaning services London, Professional dry cleaners London, Dry cleaning London, Same-day dry cleaners London, Eco-friendly dry cleaners London, Wedding dress dry cleaners London, Curtain dry cleaning London, Leather jacket cleaners London, Dry cleaners near me (if you want to target local searches), Curtain cleaners London, Suit dry cleaners London, Shirt ironing service London, Stain removal London, Dry cleaning prices London, Dry cleaning pickup and delivery London, London garment cleaning, Best dry cleaners in London"
        />
        <meta
          property="og:title"
          content="London Dry Cleaners | MasterDryCleaners Sevice Ltd"
        ></meta>
        <meta
          property="og:description"
          content="Get professional laundry and dry cleaning services in London at MasterDryCleaners Sevice Ltd."
        ></meta>
        <meta
          property="og:url"
          content="https://masterdrycleaner.co.uk/"
        ></meta>
      </Helmet>
      <Navbar isTopOfPage={isTopOfPage} />
      <Routes>
        <Route element={<PrivateRoutes />}>
          {/* <Route element={<HomeScreen />} path="/" /> */}
        </Route>
        <Route element={<HomeScreen />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Services />} path="/services" />
        <Route element={<Pricing />} path="/pricing" />
        <Route element={<Areas />} path="/areas" />
        <Route element={<Branches />} path="/branches" />
        <Route element={<FAQ />} path="/faqs" />
        <Route element={<Corporates />} path="/corperates" />
        <Route element={<PricingDetailed />} path="/pricing/:name" />
        <Route element={<PageNotFound />} path="*" />
      </Routes>
      <Footer />
      <FloatingButton path={path} />
    </>
  );
}

export default App;
