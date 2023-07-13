import { Map, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import Section from "../components/Section";

export default function Details() {
  return (
    <section>
      <div id="map" className="w-screen min-h-screen">
        <div className="text-center flex flex-col items-center justify-center">
          <h2 className="font-openSans text-3xl uppercase font-light tracking-tight text-gold mt-40">
            When & where
          </h2>
        </div>
        <Section>
        <div className="grid md:grid-flow-col items-center my-16">
          <div className="lg:px-28 px-7">
            <h3 className="font-windsong text-3xl my-10 text-gold">Ceremony</h3>
            <p className="font-openSans text-sm leading-6 font-thin md:mb-0 text-slate-500">
              12 July 2018
            </p>
            <p className="font-openSans text-sm leading-6 font-thin md:mb-0 text-slate-500">
              Venue: The venue Name
            </p>
            <p className="font-openSans text-sm leading-6 font-thin md:mb-0 text-slate-500">
            Address: Venue address
            </p>
            <p className="font-openSans text-sm leading-6 font-thin md:mb-0 text-slate-500">
            Time: 11.00 am
            </p>
          </div>
          <div className="lg:px-28 px-7">
            <h3 className="font-windsong text-3xl my-10 text-gold">Reception</h3>
            <p className="font-openSans text-sm leading-6 font-thin md:mb-0 text-slate-500">
              12 July 2018
            </p>
            <p className="font-openSans text-sm leading-6 font-thin md:mb-0 text-slate-500">
              Venue: The venue Name
            </p>
            <p className="font-openSans text-sm leading-6 font-thin md:mb-0 text-slate-500">
            Address: Venue address
            </p>
            <p className="font-openSans text-sm leading-6 font-thin md:mb-0 text-slate-500">
            Time: 3.00 pm
            </p>
          </div>
        </div>
        </Section>
        <Map
          provider={osm}
          height={900}
          defaultCenter={[51.505, -0.09]}
          defaultZoom={19}
          mouseEvents={false}
        >
          <Marker width={50} anchor={[51.505, -0.09]} />
        </Map>
        
      </div>
    </section>
  );
}
