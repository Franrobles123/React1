// Producto.js
import './App.css';
import Teclado from './Teclado.png';

function Producto() {
  const nombreProducto = "Teclado Mecánico RGB";
  const descripcion = "Experimenta precisión y velocidad con un diseño espectacular.";
  const caracteristicas = [
    { icono: "⚡", texto: "Switches mecánicos de alto rendimiento" },
    { icono: "🌈", texto: "Iluminación RGB personalizable" },
    { icono: "🛡️", texto: "Construcción robusta y ergonómica" }
  ];
  const precio = 125;

  return (
    <div className="product-card neon-gradient">
      <div className="product-content">
        <div className="text-content">
          <h3 className="product-title">{nombreProducto}</h3>
          <p className="product-subtitle">Ideal para Gaming y Programación</p>
          <p className="product-desc">{descripcion}</p>

          <ul className="features-list">
            {caracteristicas.map((item, i) => (
              <li key={i}>
                <span className="icon">{item.icono}</span> {item.texto}
              </li>
            ))}
          </ul>

          <div className="price-tag">${precio} USD</div>
          <p className="product-cta">¡Haz que cada pulsación cuente!</p>
        </div>

        <div className="image-container">
          <img src={Teclado} alt="Teclado RGB" className="keyboard-img" />
        </div>
      </div>
    </div>
  );
}

export default Producto;

