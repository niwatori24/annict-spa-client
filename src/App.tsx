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

import { WorkListStoreProvider, store as WorkListStore } from './stores/WorkListStoreProvider'

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
            <WorkListStoreProvider>
              <MainContent/>
            </WorkListStoreProvider>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
