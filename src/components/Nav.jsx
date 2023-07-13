import { useState } from "react";

export default function Nav({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="absolute flex flex-wrap items-center justify-between px-2 py-3 bg-transparent bg-opacity-0">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gold"
              href=""
            >
              LOGO
            </a>
            <button
              className="text-gold cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gold hover:opacity-75"
                  href=""
                >
                  <span className="ml-2">Bride & Groom</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gold hover:opacity-75"
                  href=""
                >
                  <span className="ml-2">When & Where</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gold hover:opacity-75"
                  href=""
                >
                  <span className="ml-2">RSVP</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gold hover:opacity-75"
                  href=""
                >
                  <span className="ml-2">Our Photos</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
