import { useState } from "react";

export default function Modal({ isOpen, onClose }) {

  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-500`}
    >
      <div className="h-screen pt-4 text-center flex justify-center items-center">
        <div className="inset-0 opacity-100 transition-opacity">

        <div className="min-h-20 py-5 bg-gold bg-opacity-100 rounded-xl shadow-2xl">
          <p className="px-10 text-2xl text-gray-300 my-5">
            RSVP submitted!
          </p>
          <button
            className="text-gray-300 group transition-all duration-300 ease-in-out"
            onClick={onClose}
          ><span className="uppercase bg-left-bottom bg-gradient-to-r from-gray-300 to-gray-300 bg-[length:100%_4px] bg-no-repeat group-hover:bg-[length:0%_4px] transition-all duration-500 ease-out">
            Close
            </span>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
