import React from 'react';
import logo from './logo.svg';
import './App.css';
import Saludo from './Saludo'; // <-- 1. IMPORTAMOS NUESTRO COMPONENTE
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* 2. USAMOS NUESTRO COMPONENTE */}
        <Saludo />
 
        <p>
          ¡Estamos listos para empezar a construir!
        </p>
        
        {/* ¡La reutilización es clave! Podemos usarlo cuantas veces queramos. */}
        <Saludo />
 
      </header>
    </div>
  );
}
 
export default App;


