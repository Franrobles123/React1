import React, { useState } from 'react';

function ProductoFavorito({ nombre }) {
  // Valor inicial: no es favorito
  const [esFavorito, setEsFavorito] = useState(false);

  // Manejar click → alternar entre true/false
  const manejarClick = () => {
    setEsFavorito(!esFavorito);
  };

  return (
    <div className="producto-favorito">
      <h3>{nombre}</h3>

      <button onClick={manejarClick}>
        {esFavorito ? "❤️ Es tu favorito" : "🤍 Marcar como favorito"}
      </button>

      <p>
        {esFavorito
          ? `Te gusta ${nombre}`
          : `${nombre} no está en favoritos`}
      </p>
    </div>
  );
}

export default ProductoFavorito;
