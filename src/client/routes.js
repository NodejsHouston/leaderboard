import React from "react";
import ReactDOM from "react-dom";
import { Route } from 'react-router'
import { Router, browserHistory } from 'react-router'

import Home from "./components/home";
import About from "./components/about";
import NoMatch from "./components/no-match";

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="/about" component={About}>
          </Route>
        </Route>
        <Route path="*" component={NoMatch}/>
      </Router>
    );
  }
};
