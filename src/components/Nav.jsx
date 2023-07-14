import { useState, useEffect } from "react";
import logo from "../../images/florallogo.png"

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navSize, setnavSize] = useState("8rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#3D405B") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("6rem") : setnavSize("8rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <nav
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s"
      }}
      className="fixed flex flex-wrap items-center justify-between px-2 py-3 bg-transparent bg-opacity-0 w-screen z-30">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gold"
              href="#home"
            >
              <img
              src={logo} 
              alt="wreath"
              className="w-16 h-16 transition duration-300 transform hover:scale-105" />
            </a>
            <button
              className="text-gold cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="w-full flex justify-end">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-light leading-snug text-gold hover:opacity-75 font-openSans"
                  href="#brideandgroom"
                >
                  <span className="ml-2">Bride & Groom</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-light leading-snug text-gold hover:opacity-75 font-openSans"
                  href="#whenandwhere"
                >
                  <span className="ml-2">When & Where</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-light leading-snug text-gold hover:opacity-75 font-openSans"
                  href="#rsvp"
                >
                  <span className="ml-2">RSVP</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-light leading-snug text-gold hover:opacity-75 font-openSans"
                  href="#ourphotos"
                >
                  <span className="ml-2">Our Photos</span>
                </a>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
