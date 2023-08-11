import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { User } from "@/model/User";

type Props = {
  isTopOfPage: boolean;
  // selectedPage: SelectedPage;
  // setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage }: Props) => {
  const navigate = useNavigate();
  const flexBetween = "flex items-center justify-between";
  const [isOpenAvatarPopup, setIsDropdownOpen] = useState<boolean>(false);
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-white drop-shadow";
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  const [userData, setUserData] = useState<User | undefined>();
  const token = localStorage.getItem("ACCESS_TOKEN");

  useEffect(() => {
    const user = localStorage.getItem("USER_DATA");
    if (user) {
      setUserData(JSON.parse(user));
    }
  }, []);

  const handleOnClick = (pageName: SelectedPage) => {
    setSelectedPage(pageName);
    setIsMenuToggled(!isMenuToggled);
  };

  const handleLogOut = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    window.location.href = "/login";
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleAccountClick = () => {
    navigate("/account");
  };

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-3`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img className="h-[42px] md:h-[52px]" alt="logo" src={Logo} />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween}`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    className={`rounded-full bg-secondary-500 px-8 py-2 uppercase text-gray-700 shadow-md hover:shadow-lg`}
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
                  <a
                    className="uppercase hover:text-blue-700"
                    href="tel:+442073285621"
                  >
                    T (020) 7328 5621
                  </a>
                  {token != null && (
                    <div
                      className="relative cursor-pointer"
                      onClick={toggleDropdown}
                    >
                      <button className="mx-2 h-[38px] w-[38px] rounded-full border border-gray-600 bg-white p-2 text-gray-600 shadow-2xl md:h-[48px] md:w-[48px]">
                        <FontAwesomeIcon icon={faUserAlt} size="lg" />
                      </button>
                      <span>{userData?.name}</span>
                      {isOpenAvatarPopup && (
                        <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg">
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
        <div className="fixed bottom-0 right-0 z-40 h-full w-full overflow-y-auto bg-black py-8 font-montserrat font-extralight drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end px-8">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="flex flex-col items-center justify-center gap-6 text-lg text-white">
            <Link
              className={`w-60 rounded-full bg-secondary-500 px-8 py-2 text-center uppercase text-gray-700 shadow-md hover:shadow-lg`}
              to="/"
              onClick={() => handleOnClick(SelectedPage.Home)}
            >
              Orders
            </Link>
            <Link
              className={`text-center uppercase ${
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
              className={`text-center uppercase ${
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
              className={`text-center uppercase ${
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
              className={`text-center uppercase ${
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
              className={`text-center uppercase ${
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
              className={`text-center uppercase ${
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
                className={`text-center uppercase ${
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
            {token != null && (
              <Link
                className={`text-center uppercase`}
                to="#"
                onClick={() => handleLogOut()}
              >
                LOGOUT
              </Link>
            )}
            <Link className="text-center uppercase" to="/login">
              T (020) 6010 3949
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
