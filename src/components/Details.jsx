import { Map, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

export default function Details() {
  return (
    <section>
      <div id="map" className="w-screen min-h-screen py-20">
        <div className="text-center flex flex-col items-center justify-center">
          <h2 className="font-merriweather text-3xl uppercase font-light tracking-widest">
            When & where
          </h2>
        </div>
        <Map
          provider={osm}
          height={900}
          defaultCenter={[51.505, -0.09]}
          defaultZoom={19}
          mouseEvents={false}
        >
          <Marker width={50} anchor={[51.505, -0.09]} />
        </Map>
        <div className="grid md:grid-flow-col items-center justify-items-center">
          <div className="lg:px-10 px-7">
            <h3 className="font-windsong text-3xl md:mt-10">Ceremony</h3>
            <p className="font-merriweather text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500 my-3">
              12 July 2018
            </p>
            <p className="font-merriweather text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500 my-3">
              Duis autem vel eum iriure dolor in vulputate velit esse molestie
              consequat, vel illum olore eu feugiat nulla facilisis at vero
              iusto
            </p>
          </div>
          <div className="lg:px-10 px-7">
            <h3 className="font-windsong text-3xl md:mt-10">Reception</h3>
            <p className="font-merriweather text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500 my-3">
              12 July 2018
            </p>
            <p className="font-merriweather text-sm leading-6 font-thin mb-14 md:mb-0 text-slate-500 my-3">
              Duis autem vel eum iriure dolor in vulputate velit esse molestie
              consequat, vel illum olore eu feugiat nulla facilisis at vero
              iusto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
