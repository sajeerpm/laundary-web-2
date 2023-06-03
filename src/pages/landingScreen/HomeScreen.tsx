import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Clients from "./clients";
import AboutCompany from "./aboutCompany";
import Pricing from "./pricing";
import HowItWorks from "./howitworks";
import Home from "./home";

function HomeScreen() {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(
        SelectedPage.Home
    );
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-white">
            <Home setSelectedPage={setSelectedPage} />
            <HowItWorks setSelectedPage={setSelectedPage} />
            <Clients />
            <Pricing setSelectedPage={setSelectedPage} />
            <AboutCompany setSelectedPage={setSelectedPage} />
        </div>
    );
}

export default HomeScreen;
