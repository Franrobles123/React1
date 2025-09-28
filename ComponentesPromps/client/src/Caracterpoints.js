import React, { useState } from "react";
import "./CharacterPoints.css";

function CharacterPoints() {
  const [puntos, setPuntos] = useState(0);
  const [isJumping, setIsJumping] = useState(false);

  const aumentarPuntos = () => {
    setPuntos(puntos + 1);
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 500);
  };

  return (
    <div className="character-card">
      <h2>Puntos del Personaje</h2>
      <h1>{puntos}</h1>

      {/* 👇 acá usamos style para meter la imagen desde public */}
      <div
        className={`character-sprite ${isJumping ? "jump" : ""}`}
        style={{ backgroundImage: "url(/PNG12BITS.png)" }}
      ></div>

      <button onClick={aumentarPuntos}>+1 Punto</button>
    </div>
  );
}

export default CharacterPoints;

