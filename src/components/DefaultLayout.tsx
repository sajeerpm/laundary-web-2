import { useStateContext } from "@/context/ContextProvider";
import Footer from "@/pages/footer";
import Navbar from "@/pages/navbar";
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {};

const DefaultLayout = (props: Props) => {
    const { currentUser, token } = useStateContext();

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

    // if (!token) {
    //     return <Navigate to="/home" />;
    // }

    return (
        <div>
            <Navbar isTopOfPage={isTopOfPage} />
            <Outlet />
            <Footer />
        </div>
    );
};

export default DefaultLayout;
