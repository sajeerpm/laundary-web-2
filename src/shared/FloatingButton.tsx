import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface FloatingButtonProps {
  path: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ path }) => {
  const isVisible = true;
  // const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const footerElement = document.getElementById("footer");
  //     const buttonElement = document.getElementById("floating-button");

  //     if (footerElement && buttonElement) {
  //       const footerRect = footerElement.getBoundingClientRect();
  //       const buttonRect = buttonElement.getBoundingClientRect();

  //       if (buttonRect.bottom >= footerRect.top) {
  //         setIsVisible(false);
  //       } else {
  //         setIsVisible(true);
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div
      className="fixed bottom-5 right-5 flex flex-col items-end justify-end gap-5 md:bottom-10 md:right-10"
      id="floating-button"
      style={{ display: isVisible ? "flex" : "none" }}
    >
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
      {path == "/laundary-web-2/" || path == "/" ? (
        <AnchorLink href={`#home`}>
          <button className="rounded-full bg-secondary-500 px-6 py-2 text-gray-700 shadow-2xl md:px-12 md:py-3">
            Book Order Now
          </button>
        </AnchorLink>
      ) : (
        <Link to={`/`}>
          <button className="rounded-full bg-secondary-500 px-3 py-2 text-sm text-gray-700 shadow-2xl md:px-12 md:py-3">
            Book Order Now
          </button>
        </Link>
      )}
    </div>
  );
};

export default FloatingButton;
