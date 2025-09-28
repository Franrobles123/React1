import React from "react";

// Array de tareas con IDs únicos
const tareas = [
  { id: "t-01", texto: "Aprender sobre Props" },
  { id: "t-02", texto: "Practicar con useState" },
  { id: "t-03", texto: "Dominar las Listas y Claves" }
];

function TodoList() {
  return (
    <div>
      <h2>Mis Tareas Pendientes</h2>
      <ul>
        {/* Iteramos con map y asignamos key */}
        {tareas.map((tarea) => (
          <li key={tarea.id}>{tarea.texto}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
