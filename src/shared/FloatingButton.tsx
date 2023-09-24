import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import useMediaQuery from "@/hooks/useMediaQuery";

interface FloatingButtonProps {
  path: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ path }) => {
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <div id="floating-button" className="flex items-center justify-center">
      <div
        className={`fixed bottom-0 flex items-center gap-5 py-2 md:right-[10px] md:top-[15%] md:flex-col md:items-end md:py-0`}
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
      </div>
    </div>
  );
};

export default FloatingButton;
