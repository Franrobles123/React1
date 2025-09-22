import "./App.css";
import TarjetaMueble from "./TarjetaMueble.js";

export default function App() {
  return (
    <div>
      <h1>Mueblería Jota</h1>
      <TarjetaMueble
        nombre="Sillón Reclinable"
        categoria="Sala de Estar"
        descripcion="Un sillón cómodo con tapizado de cuero y reclinación ajustable."
      />
      <TarjetaMueble
        nombre="Mesa de Comedor"
        categoria="Comedor"
        descripcion="Mesa de madera maciza para 6 personas."
      />
      <TarjetaMueble
        nombre="Cama Queen"
        categoria="Dormitorio"
        descripcion="Cama amplia con respaldo acolchado y estructura robusta."
      />
    </div>
  );
}


