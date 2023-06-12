// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Map, Marker } from "pigeon-maps"
import { osm } from 'pigeon-maps/providers'


export default function Details() {
  return (
    <Map
    provider={osm}
    height={900}
    defaultCenter={[51.505, -0.09]}
    defaultZoom={19}
    mouseEvents={false}
  >
    <Marker width={50} anchor={[51.505, -0.09]} />
  </Map>
  );
}
