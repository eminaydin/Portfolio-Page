import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import PageTransition from 'react-router-page-transition';
import 'semantic-ui-css/semantic.min.css'
import { FiFacebook, FiLinkedin, FiGithub } from "react-icons/fi"
import { MdEmail } from "react-icons/md"
import { AiFillGithub } from "react-icons/ai"
import PortfolioCards from "./components/PortfolioCards";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftIsClicked: false,
      rightIsClicked: false,
    }

  }
  toggle = () => {
    this.setState({
      rightIsClicked: !this.state.rightIsClicked,
    })
  }

  toggle1 = () => {
    this.setState({
      leftIsClicked: !this.state.leftIsClicked,
    })
  }

  render() {

    return (
      <Router>

        <div id="circularMenu" className={`circular-menu ${this.state.rightIsClicked ? "active" : ""}`}>
          <a className="floating-btn" onClick={this.toggle}>
            <i className="fa fa-plus"></i>
          </a>
          <menu className="items-wrapper">

            <a className="menu-item" href="https://www.linkedin.com/in/emin-aydin/" target="_blank"> <FiLinkedin size="1.5em" style={{ margin: " 10px" }} /> </a>
            <a className="menu-item"> <MdEmail size="1.5em" style={{ margin: " 10px" }} /> </a>
            <a className="menu-item" href="https://github.com/eminaydin" target="_blank"> <AiFillGithub size="1.5em" style={{ margin: " 10px" }} /> </a>
          </menu>
        </div>
        <div id="circularMenu1" className={`circular-menu circular-menu-left ${this.state.leftIsClicked ? "active" : ""}`}>
          <a className="floating-btn" onClick={this.toggle1}>
            <i className="fa fa-bars"></i>
          </a>
          <menu className="items-wrapper">
            <Link to="/" className="menu-item fa fa-home"> <a href="#"  ></a> </Link>
            <Link to="/about" className="menu-item fa fa-user"> <a href="#" ></a></Link>
            <Link to="/portfolio" className="menu-item fa fa-pie-chart"> <a href="#" ></a></Link>
            <Link to="/contact" className="menu-item fa fa-cog"> <a href="#" ></a></Link>
          </menu>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={PortfolioCards} />
        </Switch>

      </Router>

    );
  }
}


export default App;