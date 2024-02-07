import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './components/carrousel'; // Ajusta la ruta según la ubicación de tu componente Carousel

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Carousel /> {/* Agrega el componente Carousel aquí */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


