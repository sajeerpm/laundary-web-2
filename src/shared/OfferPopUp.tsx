import { useState } from "react";
import offer from "@/assets/offer/new-year-offer.jpg";

const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState(true);

  // Function to close the pop-up
  const closePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div>
      {showPopUp && (
        <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform shadow-md">
          <div className="relative">
            <button
              onClick={closePopUp}
              className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-gray-600 hover:text-black"
            >
              X
            </button>
            <img className="max-w-[80vw] md:h-[70vh]" src={offer} />
          </div>
        </div>
      )}
      {/* Rest of your landing page */}
    </div>
  );
};

export default PopUp;
