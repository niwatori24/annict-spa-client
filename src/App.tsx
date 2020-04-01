import React from 'react';
import { MainContent } from './MainContent'
import { About } from './About'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <div>
            Annict SPA Client
          </div>
          <ul>
            <li>
              <Link to='/'>main</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/'>
            <MainContent/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
