// ImageCard.js
// Este componente recibe props (imagen y título) y las muestra en pantalla

// Usamos "destructuring" para acceder directamente a las props
function ImageCard({ imageUrl, title }) {
  return (
    <div className="image-card">
      {/* Renderizamos la imagen y el título usando las props */}
      <img src={imageUrl} alt={title} width="200" />
      <h3>{title}</h3>
    </div>
  );
}

export default ImageCard;
