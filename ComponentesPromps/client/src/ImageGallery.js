// ImageGallery.js
import ImageCard from "./ImageCard";

function ImageGallery() {
  return (
    <div>
      <h1>Mi Galería de Imágenes</h1>

      <ImageCard
        imageUrl="https://images.unsplash.com/photo-1601758123927-1961e5b07a7e"
        title="Gato en una caja"
      />

      <ImageCard
        imageUrl="https://images.unsplash.com/photo-1601758124138-745a27c0d5a1"
        title="Perro con gafas"
      />

      <ImageCard
        imageUrl="https://images.unsplash.com/photo-1501706362039-c6e80948a1c9"
        title="Pajarito azul"
      />
    </div>
  );
}

export default ImageGallery;

