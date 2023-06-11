import partner1 from "../../public/partner1.jpg";
import partner2 from "../../public/partner2.jpg";
import wreath from "../../public/wreath.png";
import WeddingGallery from "../components/WeddingGallery";
import Confirm from "../components/Confirm";
import Details from "../components/Details";

export default function Home() {
  return (
    <main>
      {/* hero section starts here */}

      <section
        id="hero-section"
        className="bg-[url('./images/hands.jpg')] bg-cover bg-center bg-no-repeat bg-gray-400 bg-blend-multiply h-screen grid items-center"
      >
        <div className="max-w-screen text-center">
          <h1 className="text-6xl md:text-9xl md:px-60 text-slate-200 font-bold font-windsong leading-[65px]">
            Bride & Groom
          </h1>
          <p className="font-merriweather text-slate-300 md:text-xl mt-10">
            07 August 2023
          </p>
        </div>
      </section>

      {/* main page body goes here */}

      <section>
        <div>
        <div className="text-center flex flex-col items-center justify-center mt-36 mb-28 md:my-40">
          <img src={wreath} alt="wreath" className="w-24 mb-5" />
          <h2 className="font-merriweather text-3xl uppercase font-light tracking-widest">
            Bride & Groom
          </h2>
        </div>

      {/* whitespace break ends */}

        <div id="center-body" className="mx-10 md:m-28 flex flex-col md:flex-row text-center items-center min-h-screen">
          <div id="bride-section" className="px-6 md:px-16 bg-blue-50 md:h-[800px] rounded-lg">
            <div className="pt-36">
            <img src={partner1} className="rounded-full mb-3" alt="woman" />
            <h3 className="font-windsong text-3xl mb-5">Bride's Name</h3>
            <p className="font-merriweather text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500">
              Duis autem vel eum iriure dolor in vulputate velit esse molestie
              consequat, vel illum olore eu feugiat nulla facilisis at vero
              iusto
            </p>
            </div>
          </div>

      {/* floating island starts here */}

          <div id="middle-island" className="z-50 px-5 md:px-15 rounded-lg bg-white shadow-[0_5px_5px_3px_rgba(0,0,0,0.3)] md:w-7/12 md:h-[1000px] border-gray-200 border-2">
            <h3 className="font-windsong text-2xl mb-2 mt-16 md:mt-28">How we met</h3>
            <p className="font-windsong text-lg text-orange-400 my-1">
              16 September 2022
            </p>
            <p className="font-merriweather text-sm leading-6 font-thin text-slate-500">
              Duis autem vel eum iriure dolor in vulputate velit esse molestie
              consequat, vel illum olore eu feugiat nulla facilisis at vero
              iusto
            </p>
            <div className="my-12 flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </div>
            <h3 className="font-windsong text-2xl mb-2">The proposal</h3>
            <p className="font-windsong text-lg text-orange-400 my-1">
              13 June 2023
            </p>
            <p className="font-merriweather text-sm leading-6 font-thin mb-10 text-slate-500">
              Duis autem vel eum iriure dolor in vulputate velit esse molestie
              consequat, vel illum olore eu feugiat nulla facilisis at vero
              iusto
            </p>
            <div className="my-12 flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </div>
            <h3 className="font-windsong text-2xl mb-2">The wedding day</h3>
            <p className="font-windsong text-lg text-orange-400 my-1 mb-14">
              07 August 2023
            </p>
          </div>

      {/* the groom starts here */}

          <div id="groom-section" className="px-6 md:px-16 bg-blue-50 md:h-[800px] rounded-lg">
            <div className="pt-36">
            <img src={partner2} className="rounded-full mb-3" alt="woman" />
            <h3 className="font-windsong text-3xl mb-5">Groom's Name</h3>
            <p className="font-merriweather text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500">
              Duis autem vel eum iriure dolor in vulputate velit esse molestie
              consequat, vel illum olore eu feugiat nulla facilisis at vero
              iusto
            </p>
            </div>
          </div>
        </div>
        </div>
      </section>



      {/* date and location */}

          <section>
        <div id="map" className="w-screen min-h-screen">
        <div className="text-center flex flex-col items-center justify-center mt-36 mb-20">
          <img src={wreath} alt="wreath" className="w-24 mb-5" />
          <h2 className="font-merriweather text-3xl uppercase font-light tracking-widest">
            When & where
          </h2>
        </div>
        <Details />
        </div>
      </section>



      {/* image gallery section here */}

      <section>
        <div id="gallery" className="min-h-screen px-5">
        <div className="text-center flex flex-col items-center justify-center mt-36 mb-20">
          <img src={wreath} alt="wreath" className="w-24 mb-5" />
          <h2 className="font-merriweather text-3xl uppercase font-light tracking-widest">
            Our wedding gallery
          </h2>
        </div>
        <WeddingGallery />
        </div>
      </section>


      {/* rsvp form section here */}

      <section>
        <div id="rsvp" className="">
        <div className="text-center flex flex-col items-center justify-center mt-36 mb-20">
          <img src={wreath} alt="wreath" className="w-24 mb-5" />
          <h2 className="font-merriweather text-3xl uppercase font-light tracking-widest">
            See you there?
          </h2>
        </div>
        </div>
        <div className="bg-slate-100 grid content-center min-h-screen p-5">
        <Confirm />
        </div>
      </section>
    </main>
  );
}
