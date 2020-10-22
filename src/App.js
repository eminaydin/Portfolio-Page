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
      <div className="App">
        <Header />
        <Segment className="main">
          <Information />
          <Projects />
        </Segment>
      </div>
    </ParallaxProvider>
  );
}

export default App;
