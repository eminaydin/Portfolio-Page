import React from "react";
import "./App.css";
import Header from "./components/Header";
import Information from "./components/Information";
import { ParallaxProvider } from "react-scroll-parallax";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Header />
        <Information />
      </div>
    </ParallaxProvider>
  );
}

export default App;
