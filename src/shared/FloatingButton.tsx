import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";
// import useMediaQuery from "@/hooks/useMediaQuery";

interface FloatingButtonProps {
  path: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ path }) => {
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div id="floating-button" className="flex items-center justify-center">
      <div
        className={`fixed right-[8px] top-[40%] z-20 flex flex-col items-end gap-5 py-0`}
      >
        {path != "/" && (
          <Link to={`/`}>
            <button className="rounded-full bg-secondary-500 px-3 py-2 text-white shadow-2xl md:px-6 md:py-3">
              Order Now
            </button>
          </Link>
        )}
        <a href="tel:+442073285621">
          <button className="h-[48px] w-[48px] rounded-full bg-blue-500 p-2 text-white shadow-2xl md:h-[58px] md:w-[58px]">
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
          </button>
        </a>
        <a href="https://wa.me/+447950455241">
          <button className="h-[48px] w-[48px] rounded-full bg-green-500 p-2 text-white shadow-2xl md:h-[58px] md:w-[58px]">
            <FontAwesomeIcon icon={faWhatsapp} size="xl" />
          </button>
        </a>
        {path != "/" && (
          <Link to={`/`}>
            <button className="text-md rounded-full bg-[#FFD700] px-3 py-2 text-center font-bold text-red-600 shadow-2xl md:px-6 md:py-3">
              15% discount <br />
              till 28th Feb
            </button>
          </Link>
        )}
        {path == "/" && (
          <AnchorLink
            className="text-md rounded-full bg-[#FFD700] px-3 py-2 text-center font-bold text-red-600 shadow-2xl md:px-6 md:py-3"
            onClick={() => {}}
            href={`#${SelectedPage.Order}`}
          >
            15% discount <br />
            till 28th Feb
          </AnchorLink>
        )}
      </div>
    </div>
  );
};

export default FloatingButton;
