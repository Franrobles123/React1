function Producto({ nombre, precio, material }) {
  return (
    <div className="producto-card">
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
      <p>Material: {material}</p>
    </div>
  );
}

export default Producto;
