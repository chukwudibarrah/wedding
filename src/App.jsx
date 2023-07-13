import Landing from "./sections/Landing";
import BrideandGroom from "./sections/BrideandGroom";
import Details from "./sections/Details";
import WeddingGallery from "./sections/WeddingGallery";
import Rsvp from "./sections/Rsvp";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="h-screen">
      <Nav />
      <Landing />
      <BrideandGroom />
      <Details />
      <Rsvp />
      <WeddingGallery />
      <Footer />
    </div>
  );
}
