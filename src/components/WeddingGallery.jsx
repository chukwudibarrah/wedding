import { useState, useEffect, useRef } from "react";
import VisibilitySensor from "react-visibility-sensor";
import imagesData from "../assets/images.json";

export default function WeddingGallery() {
  const [imagesShownArray, setImagesShownArray] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    setImagesShownArray(Array(imagesData.length).fill(false));
  }, []);

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  const handleCloseModal = () => {
    setClickedIndex(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setClickedIndex(null);
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-5">
      {imagesShownArray.length > 0 &&
        imagesShownArray.map((show, index) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible) => imageVisibleChange(index, isVisible)}
          >
            <ImageCard
              imageUrl={imagesData[index]}
              show={show}
              onClick={() => handleClick(index)}
            />
          </VisibilitySensor>
        ))}

      {clickedIndex !== null && (
        <ImageModal
          imageUrl={imagesData[clickedIndex]}
          onClose={handleCloseModal}
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
}

function ImageCard({ imageUrl, show, onClick }) {
  return (
    <div
      className={`relative transition ease-in-out duration-300 transform delay-150 hover:opacity-100 hover:translate-y-1 hover:scale-105 ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
      onClick={onClick}
    >
      <div className="absolute inset-0 z-10 flex transition duration-300 ease-in-out"></div>
      <img src={imageUrl} alt="" />
    </div>
  );
}

function ImageModal({ imageUrl, onClose, onKeyDown }) {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".image-modal-content")) {
        onClose();
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  return (
    <section>
      <div id="gallery" className="min-h-screen px-5 mt-48">
        <div className="text-center flex flex-col items-center justify-center mb-20">
          <h2 className="font-merriweather text-3xl uppercase font-light tracking-widest">
            Selected photos
          </h2>
        </div>
        <div
          className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-75"
          onKeyDown={onKeyDown}
          tabIndex={-1}
        >
          <div className="relative image-modal-content">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={onClose}
            >
              Close
            </button>
            <img src={imageUrl} alt="" className="max-h-full max-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
