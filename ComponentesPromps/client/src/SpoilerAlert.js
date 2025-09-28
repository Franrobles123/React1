import React, { useState } from "react";

function SpoilerAlert() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? "Ocultar Mensaje" : "Mostrar Mensaje"}
      </button>

      {/* Renderizado condicional con ternario */}
      {isVisible ? <p>¡React es increíble!</p> : null}
    </div>
  );
}

export default SpoilerAlert;
