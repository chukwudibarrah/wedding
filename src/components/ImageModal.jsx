import { useEffect, useRef } from "react";

export default function ImageModal({ imageUrl, onClose, onKeyDown }) {
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
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-black bg-opacity-75"
      onKeyDown={onKeyDown}
      tabIndex={-1}
    >
      <div className="relative image-modal-content">
        <button className="absolute top-4 right-4 text-white" onClick={onClose}>
          Close
        </button>
        <img src={imageUrl} alt="" className="max-h-full max-w-full" />
      </div>
    </div>
  );
}
