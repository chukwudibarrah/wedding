import { useState, useEffect, useRef } from "react";
import VisibilitySensor from "react-visibility-sensor";
import ImageModal from "../components/ImageModal";
import ImageCard from "../components/ImageCard";
import gallery1 from "../../gallery/gallery1.jpg";
import gallery3 from "../../gallery/gallery3.jpg";
import gallery4 from "../../gallery/gallery4.jpg";
import gallery6 from "../../gallery/gallery6.jpg";
import gallery7 from "../../gallery/gallery7.jpg";
import gallery8 from "../../gallery/gallery8.jpg";

const imagesData = [
  gallery1, gallery3, gallery4, gallery6, gallery7, gallery8
]

export default function WeddingGallery() {
  const nodeRef = useRef(null);
  const [imagesShownArray, setImagesShownArray] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    setImagesShownArray(Array(imagesData.length).fill(false));
  }, []);

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  const handleCloseModal = () => {
    setClickedIndex(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setClickedIndex(null);
    }
  };

  return (
    <section id="ourphotos">
      <div id="gallery" className="min-h-screen px-5 mt-48">
        <div className="text-center flex flex-col items-center justify-center mb-20">
          <h2 className="font-openSans text-3xl uppercase font-light tracking-tight text-gold">
            Selected photos
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          {imagesShownArray.length > 0 &&
            imagesShownArray.map((show, index) => (
              <VisibilitySensor
                key={index}
                partialVisibility={true}
                offset={{ bottom: 80 }}
                onChange={(isVisible) => imageVisibleChange(index, isVisible)}
              >
                <ImageCard
                  imageUrl={imagesData[index]}
                  show={show}
                  onClick={() => handleClick(index)}
                />
              </VisibilitySensor>
            ))}

          {clickedIndex !== null && (
            <ImageModal
              imageUrl={imagesData[clickedIndex]}
              onClose={handleCloseModal}
              onKeyDown={handleKeyDown}
              
            />
          )}
        </div>
      </div>
    </section>
  );
}
