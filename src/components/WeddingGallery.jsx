import PhotoAlbum from "react-photo-album";
import wreath from "../../images/wreath.png";

const photos = [
  {
    src: "https://i.ibb.co/K9JBfDh/gallery1.jpg",
    width: 320,
    height: 174,
  },
  {
    src: "https://i.ibb.co/SXtQwjs/gallery2.jpg",
    width: 212,
    height: 320,
  },

  {
    src: "https://i.ibb.co/DR0F89X/gallery3.jpg",
    width: 320,
    height: 212,
  },
  {
    src: "https://i.ibb.co/Dt05vWh/gallery4.jpg",
    width: 320,
    height: 212,
  },
  {
    src: "https://i.ibb.co/4dfmgsf/gallery5.jpg",
    width: 212,
    height: 320,
  },
  {
    src: "https://i.ibb.co/3k0231C/gallery6.jpg",
    width: 320,
    height: 212,
  },
];

export default function WeddingGallery() {
  return (
    <section>
      <div id="gallery" className="min-h-screen px-5">
        <div className="text-center flex flex-col items-center justify-center mt-36 mb-20">
          <img src={wreath} alt="wreath" className="w-24 mb-5" />
          <h2 className="font-merriweather text-3xl uppercase font-light tracking-widest">
            Our wedding gallery
          </h2>
        </div>
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
    </section>
  );
}
