import Landing from "./sections/Landing";
import BrideandGroom from "./sections/BrideandGroom";
import Details from "./sections/Details";
import WeddingGallery from "./sections/WeddingGallery";
import Rsvp from "./sections/Rsvp";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="h-screen">
    <Landing />
    <BrideandGroom />
    <Details />
    <Rsvp />
    <WeddingGallery />
    <Footer />
    </div>
  )
}
