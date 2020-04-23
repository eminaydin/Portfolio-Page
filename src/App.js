import React, { Component } from "react";
import 'font-awesome/css/font-awesome.min.css';
import "./App.css"
class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    leftIsClicked: false,
    rightIsClicked: false,
  }
 this.toggle = this.toggle.bind(this);
}
  toggle = () => {
    this.setState({
      rightIsClicked: !this.state.rightIsClicked,
        
    })
    console.log(this.state.rightIsClicked);
  }

  toggle1 = () => {
    this.setState({
      leftIsClicked: !this.state.leftIsClicked,
  })
  console.log(this.state.rightIsClicked);
  
  }
  
  render() {
    return (
      <div className="div"> 
      <div class="info">
<p>Hello, my name is Emin Aydın. I'm a full-stack developer who likes the cats.</p>
<p>Check out my latest works at my portfolio page.</p>
<p>Feel free to contact me through eminaydin93@yahoo.com or from my contact page.</p>
  </div>
     <div id="circularMenu" className={`circular-menu ${this.state.rightIsClicked ? "active" : ""}`}>

        <a className="floating-btn" onClick={this.toggle}>
          <i className="fa fa-plus"></i>
        </a>
      
        <menu className="items-wrapper">
          <a href="#" className="menu-item fa fa-facebook"></a>
          <a href="#" className="menu-item fa fa-twitter"></a>
          <a href="#" className="menu-item fa fa-google-plus"></a>
          <a href="#" className="menu-item fa fa-linkedin"></a>
        </menu>
      
      </div>
      
      
      <div id="circularMenu1" className={`circular-menu circular-menu-left ${this.state.leftIsClicked ? "active" : ""}`}>
      
        <a className="floating-btn" onClick={this.toggle1}>
          <i className="fa fa-bars"></i>
        </a>
      
        <menu className="items-wrapper">
          <a href="#" className="menu-item fa fa-home"></a>
          <a href="#" className="menu-item fa fa-user"></a>
          <a href="#" className="menu-item fa fa-pie-chart"></a>
          <a href="#" className="menu-item fa fa-cog"></a>
        </menu>
      
      </div>
      </div>      
    );
  }
}


export default  App;