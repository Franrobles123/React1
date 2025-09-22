import "./TarjetaMueble.css"; // Importamos los estilos

function TarjetaMueble({ nombre, categoria, descripcion }) {
  return (
    <div className="tarjeta-mueble">
      <h2 className="titulo">{nombre}</h2>
      <h4 className="categoria">{categoria}</h4>
      <p className="descripcion">{descripcion}</p>
    </div>
  );
}

export default TarjetaMueble;