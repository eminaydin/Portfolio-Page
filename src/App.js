import React from "react";
import "./App.css";
import Header from "./components/Header";
import Information from "./components/Information";
import { ParallaxProvider } from "react-scroll-parallax";
import Projects from "./components/Projects";
import { Segment } from "semantic-ui-react";
function App() {
  return (
    <ParallaxProvider>
      <Header />
      <div className="App">
        <Information />
        <Projects />
      </div>
    </ParallaxProvider>
  );
}

export default App;
