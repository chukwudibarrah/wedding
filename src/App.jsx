import Landing from "./components/Landing";
import './App.css';
import BandG from "./components/BandG";
import Details from "./components/Details";
import WeddingGallery from "./components/WeddingGallery";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="h-screen">
    <Landing />
    <BandG />
    <Details />
    <Rsvp />
    <WeddingGallery />
    <Footer />
    </div>
  )
}
