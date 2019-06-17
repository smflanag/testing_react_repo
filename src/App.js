import React, { Component } from 'react';
import './App.css';
import ShowList from './showlist';
import ShowDetail from './showdetail';
import Home from './home';
import About from './about';
import Comments from './comments';

import {
  Route,
  Switch,
  BrowserRouter,
  NavLink,
} from "react-router-dom";

class App extends Component {
render() {
  return (

    <BrowserRouter>
        <ul className="list">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
             <li><NavLink to="/showlist">Show List</NavLink></li>
             <li><NavLink to="/comments">Comments</NavLink></li>
        </ul>


        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/showlist" component={ShowList} />
            <Route exact path="/comments" component={Comments} />
            <Route exact path={`/show/:showId`} component={ShowDetail}/>
        </Switch>
    </BrowserRouter>
    );
    }
    }

export default App;
