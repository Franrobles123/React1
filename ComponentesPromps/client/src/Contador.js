import { useState } from "react";

function Contador() {
  const [numeroActual, setNumeroActual] = useState(0);

  // Funciones
  const incrementar = () => {
    setNumeroActual(numeroActual + 1);
  };

  const decrementar = () => {
    setNumeroActual(numeroActual - 1);
  };

  const reiniciar = () => {
    setNumeroActual(0);
  };

  return (
    <div>
      <h2>{numeroActual}</h2>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

export default Contador;
