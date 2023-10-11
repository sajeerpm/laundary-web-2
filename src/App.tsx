import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./pages/navbar";
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
import TermsAndConditions from "./pages/cms/TermsAndConditions";
import PrivacyPolicy from "./pages/cms/PrivacyPolicy";
import CustomerInfo from "./pages/order/CustomerInfo";
import AboutUs from "./pages/cms/AboutUs";
import Account from "./pages/user/Account";
import PrivateRoutes from "./components/PrivateRoutes";
import useMediaQuery from "./hooks/useMediaQuery";
import AccountMobile from "./pages/user/AccountMobile";
import OrderComplete from "./pages/order/OrderComplete";
import Payment from "./pages/order/Payment";
import { initGA } from "./analytics/analytics";
import Maintenance from "./pages/pageNotFound/Maintenance";

function App() {
  const location = useLocation();
  const path = location.pathname;
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  useEffect(() => {
    initGA();
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
          content="Discover the best dry cleaners in London at Master Dry Clean. We provide top-quality service to ensure your garments are cleaned and cared for with precision."
        />
        <meta name="keywords" content="dry cleaners in London" />
        <meta
          property="og:title"
          content="Meta title: Top Dry Cleaners in London | Master Dry Clean"
        ></meta>
        <meta
          property="og:description"
          content="Discover the best dry cleaners in London at Master Dry Clean. We provide top-quality service to ensure your garments are cleaned and cared for with precision."
        ></meta>
        <meta
          property="og:url"
          content="https://masterdrycleaner.co.uk/"
        ></meta>
      </Helmet>
      {path != "/" && <Navbar isTopOfPage={isTopOfPage} />}
      <Routes>
        <Route element={<PrivateRoutes />}>
          {/* <Route element={<HomeScreen />} path="/" /> */}

          <Route
            element={isAboveMediumScreens ? <Account /> : <AccountMobile />}
            path="/account"
          />
        </Route>
        <Route element={<Maintenance />} path="/" />
        <Route element={<HomeScreen />} path="/home" />
        <Route element={<Login />} path="/login" />
        <Route element={<Services />} path="/services" />
        <Route element={<Pricing />} path="/pricing" />
        <Route element={<Areas />} path="/areas" />
        <Route element={<Branches />} path="/branches" />
        <Route element={<FAQ />} path="/faqs" />
        <Route element={<Corporates />} path="/corperates" />
        <Route element={<PricingDetailed />} path="/:id/" />
        <Route element={<TermsAndConditions />} path="/terms" />
        <Route element={<PrivacyPolicy />} path="/privacy" />
        <Route element={<AboutUs />} path="/aboutus" />
        <Route element={<CustomerInfo />} path="/customer" />
        <Route element={<PageNotFound />} path="*" />
        <Route element={<OrderComplete />} path="/order/complete/:id" />
        <Route element={<OrderComplete />} path="/order/cancel/:id" />
        <Route
          element={<Payment />}
          path="/order/payment/:id/:amount/:product"
        />
      </Routes>
      {!(path === "/customer" || path === "/account") && <Footer />}
      {path != "/customer" && <FloatingButton path={path} />}
    </>
  );
}

export default App;
