import React, { useRef } from "react";

export default function ImageCard({ nodeRef, imageUrl, show, onClick }) {
  return (
    <div
      className={`relative transition ease-in-out duration-300 transform delay-150 hover:opacity-100 hover:translate-y-1 hover:scale-105 ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
      onClick={onClick}
    >
      <div className="absolute inset-0 z-10 flex transition duration-300 ease-in-out hover:cursor-pointer"></div>
      <img src={imageUrl} alt="" />
    </div>
  );
}
