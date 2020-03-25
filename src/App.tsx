import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from './Menu'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu></Menu>
        <div>
          <p>Annict SPA Client</p>
        </div>
      </header>
    </div>
  );
}

export default App;
