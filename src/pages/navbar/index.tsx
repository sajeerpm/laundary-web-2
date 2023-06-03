import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { Link } from "react-router-dom";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import LinkA from "./Link";

type Props = {
    isTopOfPage: boolean;
    // selectedPage: SelectedPage;
    // setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-white drop-shadow";
    const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
    const token = localStorage.getItem("ACCESS_TOKEN");

    // console.log("Selected Page: " + selectedPage);

    const handleOnClick = (pageName: SelectedPage) => {
        setSelectedPage(pageName);
    };

    const handleLogOut = () => {
        localStorage.removeItem("ACCESS_TOKEN");
        window.location.href = "/login";
    };

    return (
        <nav>
            <div
                className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-3`}
            >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE */}
                        <img className="h-[52px]" alt="logo" src={Logo} />

                        {/* RIGHT SIDE */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween}`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    {selectedPage !== SelectedPage.Home && (
                                        <Link
                                            className={`uppercase`}
                                            to="/"
                                            onClick={() =>
                                                handleOnClick(SelectedPage.Home)
                                            }
                                        >
                                            Orders
                                        </Link>
                                    )}
                                    <Link
                                        className={`uppercase ${
                                            selectedPage ===
                                            SelectedPage.Pricing
                                                ? "border-b-[1px] border-b-red-900"
                                                : ""
                                        }`}
                                        to="/pricing"
                                        onClick={() =>
                                            handleOnClick(SelectedPage.Pricing)
                                        }
                                    >
                                        PRICING
                                    </Link>
                                    <Link
                                        className={`uppercase ${
                                            selectedPage ===
                                            SelectedPage.Services
                                                ? "border-b-[1px] border-b-red-900"
                                                : ""
                                        }`}
                                        to="/services"
                                        onClick={() =>
                                            handleOnClick(SelectedPage.Services)
                                        }
                                    >
                                        SERVICES
                                    </Link>
                                    <Link
                                        className={`uppercase ${
                                            selectedPage === SelectedPage.Areas
                                                ? "border-b-[1px] border-b-red-900"
                                                : ""
                                        }`}
                                        to="/areas"
                                        onClick={() =>
                                            handleOnClick(SelectedPage.Areas)
                                        }
                                    >
                                        Areas
                                    </Link>
                                    <Link
                                        className={`uppercase ${
                                            selectedPage === SelectedPage.Faqs
                                                ? "border-b-[1px] border-b-red-900"
                                                : ""
                                        }`}
                                        to="/faqs"
                                        onClick={() =>
                                            handleOnClick(SelectedPage.Faqs)
                                        }
                                    >
                                        FAQS
                                    </Link>
                                    <Link
                                        className={`uppercase ${
                                            selectedPage ===
                                            SelectedPage.Corperates
                                                ? "border-b-[1px] border-b-red-900"
                                                : ""
                                        }`}
                                        to="/corperates"
                                        onClick={() =>
                                            handleOnClick(
                                                SelectedPage.Corperates
                                            )
                                        }
                                    >
                                        Corperates
                                    </Link>
                                    <Link
                                        className={`uppercase ${
                                            selectedPage ===
                                            SelectedPage.Branches
                                                ? "border-b-[1px] border-b-red-900"
                                                : ""
                                        }`}
                                        to="/branches"
                                        onClick={() =>
                                            handleOnClick(SelectedPage.Branches)
                                        }
                                    >
                                        Branches
                                    </Link>
                                    {token == null && (
                                        <Link
                                            className={`uppercase ${
                                                selectedPage ===
                                                SelectedPage.Login
                                                    ? "border-b-[1px] border-b-red-900"
                                                    : ""
                                            }`}
                                            to="/login"
                                            onClick={() =>
                                                handleOnClick(
                                                    SelectedPage.Login
                                                )
                                            }
                                        >
                                            LOGIN
                                        </Link>
                                    )}
                                    {token != null && (
                                        <Link
                                            className={`uppercase`}
                                            to="#"
                                            onClick={() => handleLogOut()}
                                        >
                                            LOGOUT
                                        </Link>
                                    )}
                                    <Link className="uppercase" to="/login">
                                        T (020) 6010 3949
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* MOBILE MENU MODAL */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* CLOSE ICON */}
                    <div className="flex justify-end p-12">
                        <button
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                        >
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    {/* MENU ITEMS */}
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <LinkA
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <LinkA
                            page="Benefits"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <LinkA
                            page="Our Classes"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <LinkA
                            page="Contact Us"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
