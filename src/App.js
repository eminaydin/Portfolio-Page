import React from "react";
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
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
  }
  return (
    <Router>
      <Navbar />
      <AnimatePresence>
        <Switch>
          <Route path="/contact" render={() => <Contact animate={pageVariants} />} />
          <Route path="/portfolio" render={() => <PortfolioCards animate={pageVariants} />} />
          <Route path="/about" render={() => <About animate={pageVariants} />} />
          <Route exact path="/" render={() => <Home animate={pageVariants} />} />
        </Switch>
      </AnimatePresence>
    </Router>

  );
}

export default App;
