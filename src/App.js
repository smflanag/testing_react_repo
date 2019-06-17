import React from 'react';
import './App.css';
import Season from './season';
import SeasonList from './seasonlist';
import SeasonDetail from './seasondetail';
import {
  Route,
  Switch,
  BrowserRouter,
  Redirect,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <p>
          This is a single page app test to learn testing, and accessibility.
        </p>

      <div>
          <BrowserRouter>
              <ul className="list">
                 <li><NavLink to="/seasonlist">Season List</NavLink></li>
              </ul>


            <Switch>
              <Route exact path="/seasonlist" component={SeasonList} />
              <Route exact path={`/seasons/:seasonId`} component={SeasonDetail}/>
            </Switch>
            </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
