import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FloatingButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.getElementById("footer");
      const buttonElement = document.getElementById("floating-button");

      if (footerElement && buttonElement) {
        const footerRect = footerElement.getBoundingClientRect();
        const buttonRect = buttonElement.getBoundingClientRect();

        if (buttonRect.bottom >= footerRect.top) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed bottom-10 right-10 flex flex-col items-end justify-end gap-5"
      id="floating-button"
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <a href="tel:+44 2073285621">
        <button className="h-[58px] w-[58px]  rounded-full bg-blue-500 p-2 text-white shadow-2xl">
          <FontAwesomeIcon icon={faPhoneAlt} size="xl" />
        </button>
      </a>
      <a href="https://api.whatsapp.com/send?phone=+44 7950455241">
        <button className="h-[58px] w-[58px]  rounded-full bg-green-500 p-2 text-white shadow-2xl">
          <FontAwesomeIcon icon={faWhatsapp} size="xl" />
        </button>
      </a>
      <Link to={`/`}>
        <button className="rounded-full bg-secondary-500 px-12 py-3 text-gray-700 shadow-2xl">
          Book Order Now
        </button>
      </Link>
    </div>
  );
};

export default FloatingButton;
