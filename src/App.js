import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import 'semantic-ui-css/semantic.min.css'
import PortfolioCards from "./components/PortfolioCards";
import Menu from "./components/Menu";

const App = () => {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={PortfolioCards} />
      </Switch>
    </Router>

  );
}

export default App;
