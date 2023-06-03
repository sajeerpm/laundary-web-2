import { useEffect, useState } from "react";
import { useStateContext } from "@/context/ContextProvider";
import Navbar from "@/pages/navbar";
import { SelectedPage } from "@/shared/types";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "@/pages/footer";

type Props = {};

const GuestLayout = (props: Props) => {
    const { token } = useStateContext();
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

    // if (token) {
    //     return <Navigate to="/home" />;
    // }

    return (
        <div className="flex h-full flex-col justify-between">
            <Navbar isTopOfPage={isTopOfPage} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default GuestLayout;
