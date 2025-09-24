import React from 'react';
import ReactDOM from 'react-dom/client'; // La librería para hablar con el DOM del navegador
import App from './App'; // Importa el componente principal de nuestra app
 
// 1. Apunta al <div> con id="root" en nuestro public/index.html
const rootElement = document.getElementById('root');
 
// 2. Crea el "portal" de renderizado de React en ese elemento
const root = ReactDOM.createRoot(rootElement);
 
// 3. Renderiza nuestro componente <App /> dentro de ese portal
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
