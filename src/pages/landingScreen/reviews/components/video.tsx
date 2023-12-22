import { useState } from "react";

type Props = {
  videoUrl: string;
  thumbnailUrl: string;
};

const Video = ({ videoUrl, thumbnailUrl }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <img
        src={thumbnailUrl}
        alt="Video Thumbnail"
        style={{ cursor: "pointer" }}
        onClick={openModal}
        className="h-[400px]"
      />

      {modalIsOpen && (
        <div className="fixed left-1/2 top-1/2 z-50 w-[80vw] -translate-x-1/2 -translate-y-1/2 transform shadow-md md:top-1/2 md:w-auto">
          <div className="relative bg-white">
            <button
              onClick={closeModal}
              className="absolute right-1 top-1 z-40 flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-gray-600 hover:text-black"
            >
              X
            </button>
            <video
              controls
              width="600"
              height="400"
              className="z-50 h-[600px]"
              autoPlay
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
