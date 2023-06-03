import { Route, Routes } from "react-router-dom";
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

function App() {
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

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
        </>
    );
}

export default App;
