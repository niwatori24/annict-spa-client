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

import { LastResponseWorkListStoreProvider } from './stores/LastResponseWorkListStoreProvider'
import { CurrentWorkStoreProvider } from './stores/CurrentWorkStoreProvider'
import { WorkListSearchFromStoreProvider } from './stores/WorkListSearchFromStoreProvider'

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

        <WorkListSearchFromStoreProvider>
          <Switch>
            <Route path='/about'>
              <About/>
            </Route>
            <Route path='/'>
              <CurrentWorkStoreProvider>
                <LastResponseWorkListStoreProvider>
                  <MainContent/>
                </LastResponseWorkListStoreProvider>
              </CurrentWorkStoreProvider>
            </Route>
          </Switch>
        </WorkListSearchFromStoreProvider>
      </div>
    </Router>
  );
}

export default App;
