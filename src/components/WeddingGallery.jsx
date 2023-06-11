import PhotoAlbum from "react-photo-album";
// import gallery1 from "../../public/gallery1.jpg";
// import gallery2 from "../../public/gallery2.jpg";
// import gallery3 from "../../public/gallery3.jpg";
// import gallery4 from "../../public/gallery4.jpg";
// import gallery5 from "../../public/gallery5.jpg";
// import gallery6 from "../../public/gallery6.jpg";

const photos = [
   {
      src: 'https://i.ibb.co/K9JBfDh/gallery1.jpg',
      width: 320,
      height: 174,
   },
   {
      src: 'https://i.ibb.co/SXtQwjs/gallery2.jpg',
      width: 212,
      height: 320,
   },

   {
      src: 'https://i.ibb.co/DR0F89X/gallery3.jpg',
      width: 320,
      height: 212,
   },
   {
      src: 'https://i.ibb.co/Dt05vWh/gallery4.jpg',
      width: 320,
      height: 212,
   },
   {
      src: 'https://i.ibb.co/4dfmgsf/gallery5.jpg',
      width: 212,
      height: 320,
   },
   {
      src: 'https://i.ibb.co/3k0231C/gallery6.jpg',
      width: 320,
      height: 212,
   },
];

export default function WeddingGallery() {

   return (
   <PhotoAlbum 
         layout="rows" 
         photos={photos}
   />
   );
}