import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface FloatingButtonProps {
  path: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ path }) => {
  return (
    <div
      className="fixed right-5 top-20 flex flex-col items-center justify-center gap-5 md:right-10 md:top-24"
      id="floating-button"
    >
      {path != "/" && (
        <Link to={`/`}>
          <button className="rounded-full bg-secondary-500 px-6 py-2 text-gray-700 shadow-2xl md:px-6 md:py-3">
            Order Now
          </button>
        </Link>
      )}
      <a href="tel:+44 2073285621">
        <button className="h-[48px] w-[48px] rounded-full bg-blue-500 p-2 text-white shadow-2xl md:h-[58px] md:w-[58px]">
          <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
        </button>
      </a>
      <a href="https://api.whatsapp.com/send?phone=+44 7950455241">
        <button className="h-[48px] w-[48px] rounded-full bg-green-500 p-2 text-white shadow-2xl md:h-[58px] md:w-[58px]">
          <FontAwesomeIcon icon={faWhatsapp} size="xl" />
        </button>
      </a>
    </div>
  );
};

export default FloatingButton;
