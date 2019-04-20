import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Stuff from "./Stuff";
import About from "./About";
import Report from "./Report";
import Articles from "./Articles";
import Books from "./Books";
import Tools from "./Tools";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>The Mature Runner</h1>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/articles">Running Articles</NavLink></li>
              <li><NavLink to="/books">Book Reviews</NavLink></li>
              <li><NavLink to="/products">Product Reviews</NavLink></li>
              <li><NavLink to="/tools">Runner Tools</NavLink></li>
              <li><NavLink to="/reports">Race Reports</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/about" component={About}/>
              <Route path="/reports" component={Report}/>
              <Route path="/articles" component={Articles}/>
              <Route path="/books" component={Books}/>
              <Route path="/tools" component={Tools}/>
            </div>
          </div>
        </HashRouter>
    );
  }
}

export default Main;