import React from 'react';
import logo from './logo.svg';
import { Menu } from './Menu'

function App() {
  return (
    <div className="App">
      <div>
        header menu
        <ul>
          <li><a href='/'>main</a></li>
          <li><a href='/abount'>abount</a></li>
          <li><a href='/mypage'>mypage</a></li>
        </ul>
      </div>
      <Menu/>
      <div>
        <p>Annict SPA Client</p>
      </div>
    </div>
  );
}

export default App;
