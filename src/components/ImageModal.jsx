import { useEffect } from "react";

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
        <button
          className="absolute bottom-[10%] right-[50%] text-white"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 lg:w-12 lg:h-12 stroke-[3px] transition duration-300 transform hover:scale-105 hover:text-gold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img src={imageUrl} alt="" className="max-h-full max-w-full" />
      </div>
    </div>
  );
}
