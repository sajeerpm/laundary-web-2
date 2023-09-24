import { useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { User } from "@/model/User";
import axiosClient from "@/axiosClient";

type Props = {
  isTopOfPage: boolean;
  // selectedPage: SelectedPage;
  // setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const navigate = useNavigate();
  const popupRef = useRef<HTMLDivElement | null>(null);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const flexBetween = "flex items-center justify-between";
  const [isOpenAvatarPopup, setIsDropdownOpen] = useState<boolean>(false);
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage
    ? "bg-white md:bg-transparent"
    : "bg-white md:bg-transparent drop-shadow";
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [userData, setUserData] = useState<User | undefined>();
  const token = localStorage.getItem("ACCESS_TOKEN");
  const user = localStorage.getItem("USER_DATA");

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target as Node) &&
      avatarRef.current &&
      !avatarRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const handleOnClick = (pageName: SelectedPage) => {
    setSelectedPage(pageName);
    setIsMenuToggled(!isMenuToggled);
  };

  const handleLogOut = async () => {
    try {
      await axiosClient.post("/logout", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      console.error(error);
    }
    localStorage.removeItem("ACCESS_TOKEN");
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleAccountClick = () => {
    navigate("/account");
  };

  useEffect(() => {
    if (user) {
      setUserData(JSON.parse(user));
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full md:py-6`}
      >
        <div
          className={`${flexBetween} mx-auto w-full rounded-full px-2 py-3 md:w-11/12 md:bg-white md:px-6`}
        >
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img className="h-[32px] md:h-[42px]" alt="logo" src={Logo} />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween}`}>
                <div className={`${flexBetween} gap-5 text-sm`}>
                  <Link
                    className={`uppercase ${
                      selectedPage === SelectedPage.Home
                        ? "border-b-[1px] border-b-red-900"
                        : ""
                    }`}
                    to="/"
                    onClick={() => handleOnClick(SelectedPage.Home)}
                  >
                    Order
                  </Link>
                  <Link
                    className={`uppercase ${
                      selectedPage === SelectedPage.Pricing
                        ? "border-b-[1px] border-b-red-900"
                        : ""
                    }`}
                    to="/pricing"
                    onClick={() => handleOnClick(SelectedPage.Pricing)}
                  >
                    PRICING
                  </Link>
                  <Link
                    className={`uppercase ${
                      selectedPage === SelectedPage.Services
                        ? "border-b-[1px] border-b-red-900"
                        : ""
                    }`}
                    to="/services"
                    onClick={() => handleOnClick(SelectedPage.Services)}
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
                    onClick={() => handleOnClick(SelectedPage.Areas)}
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
                    onClick={() => handleOnClick(SelectedPage.Faqs)}
                  >
                    FAQS
                  </Link>
                  <Link
                    className={`uppercase ${
                      selectedPage === SelectedPage.Corperates
                        ? "border-b-[1px] border-b-red-900"
                        : ""
                    }`}
                    to="/corperates"
                    onClick={() => handleOnClick(SelectedPage.Corperates)}
                  >
                    Corperates
                  </Link>
                  <Link
                    className={`uppercase ${
                      selectedPage === SelectedPage.Branches
                        ? "border-b-[1px] border-b-red-900"
                        : ""
                    }`}
                    to="/branches"
                    onClick={() => handleOnClick(SelectedPage.Branches)}
                  >
                    Branches
                  </Link>
                  {token == null && (
                    <Link
                      className={`uppercase ${
                        selectedPage === SelectedPage.Login
                          ? "border-b-[1px] border-b-red-900"
                          : ""
                      }`}
                      to="/login"
                      onClick={() => handleOnClick(SelectedPage.Login)}
                    >
                      LOGIN
                    </Link>
                  )}
                  <span>|</span>
                  <a
                    className="uppercase hover:text-primary-500"
                    href="tel:+442073285621"
                  >
                    T (020) 7328 5621
                  </a>
                  {token != null && (
                    <div
                      className="relative cursor-pointer"
                      ref={avatarRef}
                      onClick={toggleDropdown}
                    >
                      <button className="mx-2 h-[38px] w-[38px] rounded-full border border-gray-600 bg-white p-2 text-gray-600 shadow-2xl md:h-[48px] md:w-[48px]">
                        <FontAwesomeIcon icon={faUserAlt} size="lg" />
                      </button>
                      <span>{userData?.name}</span>
                      {isOpenAvatarPopup && (
                        <div
                          ref={popupRef}
                          className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg"
                        >
                          <p
                            onClick={handleAccountClick}
                            className="w-[100%] cursor-pointer p-2 hover:bg-secondary-400"
                          >
                            Account
                          </p>
                          <p
                            className="cursor-pointer p-2 hover:bg-secondary-400"
                            onClick={() => handleLogOut()}
                          >
                            Logout
                          </p>
                          {/* Add other dropdown items here */}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <button
                className="rounded-full p-2 md:bg-secondary-500"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-[32px] w-[32px] text-black md:text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-full overflow-y-auto bg-white py-8 font-montserrat font-extralight drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end px-8">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col items-center justify-center gap-6 text-lg text-white">
            <Link
              className={`w-60 rounded-full bg-secondary-500 px-8 py-2 text-center uppercase text-white shadow-md hover:shadow-lg`}
              to="/"
              onClick={() => handleOnClick(SelectedPage.Home)}
            >
              Orders
            </Link>
            <Link
              className={`text-center uppercase text-black ${
                selectedPage === SelectedPage.Pricing
                  ? "border-b-[1px] border-b-red-900"
                  : ""
              }`}
              to="/pricing"
              onClick={() => handleOnClick(SelectedPage.Pricing)}
            >
              PRICING
            </Link>
            <Link
              className={`text-center uppercase text-black ${
                selectedPage === SelectedPage.Services
                  ? "border-b-[1px] border-b-red-900"
                  : ""
              }`}
              to="/services"
              onClick={() => handleOnClick(SelectedPage.Services)}
            >
              SERVICES
            </Link>
            <Link
              className={`text-center uppercase text-black ${
                selectedPage === SelectedPage.Areas
                  ? "border-b-[1px] border-b-red-900"
                  : ""
              }`}
              to="/areas"
              onClick={() => handleOnClick(SelectedPage.Areas)}
            >
              Areas
            </Link>
            <Link
              className={`text-center uppercase text-black ${
                selectedPage === SelectedPage.Faqs
                  ? "border-b-[1px] border-b-red-900"
                  : ""
              }`}
              to="/faqs"
              onClick={() => handleOnClick(SelectedPage.Faqs)}
            >
              FAQS
            </Link>
            <Link
              className={`text-center uppercase text-black ${
                selectedPage === SelectedPage.Corperates
                  ? "border-b-[1px] border-b-red-900"
                  : ""
              }`}
              to="/corperates"
              onClick={() => handleOnClick(SelectedPage.Corperates)}
            >
              Corperates
            </Link>
            <Link
              className={`text-center uppercase text-black ${
                selectedPage === SelectedPage.Branches
                  ? "border-b-[1px] border-b-red-900"
                  : ""
              }`}
              to="/branches"
              onClick={() => handleOnClick(SelectedPage.Branches)}
            >
              Branches
            </Link>
            {token == null && (
              <Link
                className={`text-center uppercase text-black ${
                  selectedPage === SelectedPage.Login
                    ? "border-b-[1px] border-b-red-900"
                    : ""
                }`}
                to="/login"
                onClick={() => handleOnClick(SelectedPage.Login)}
              >
                LOGIN
              </Link>
            )}
            <Link className="text-center uppercase text-black" to="/login">
              T (020) 6010 3949
            </Link>
            {token != null && (
              <Link
                className="text-center uppercase text-black"
                to="/account"
                onClick={() => handleOnClick(SelectedPage.Account)}
              >
                Account
              </Link>
            )}
            {token != null && (
              <span
                className={`cursor-pointer text-center uppercase text-black`}
                onClick={() => handleLogOut()}
              >
                LOGOUT
              </span>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
