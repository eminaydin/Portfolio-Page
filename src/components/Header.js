import React, { useEffect, useState } from "react";
import photo from "../assets/image2.jpeg";
import { Parallax } from "react-scroll-parallax";
import Typist from "react-typist";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import { Image, Segment } from "semantic-ui-react";
const Header = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(1);
  }, [count]);
  return (
    <Segment basic className="header">
      <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <Image src={photo} circular size="medium" />
        <Segment className="social-icons" basic>
          <a href="https://github.com/eminaydin" target="_blank">
            <UseAnimations
              animation={github}
              size={56}
              strokeColor="#58656d"
              wrapperStyle={{ padding: 100, padding: "unset" }}
              className="github"
            />
          </a>
          <a href="https://www.linkedin.com/in/emin-aydin/" target="_blank">
            <UseAnimations
              animation={linkedin}
              size={56}
              strokeColor="#58656d"
              wrapperStyle={{ padding: 100, padding: "unset" }}
              className="linkedin"
            />
          </a>
        </Segment>
      </Parallax>
      <Segment basic className="main-text" textAlign="left">
        <h2 className="main-header">HI THERE !</h2>

        <Typist
          key={count}
          cursor={{ show: false, blink: false }}
          onTypingDone={() => {
            setTimeout(() => {
              setCount(0);
            }, 300);
          }}
        >
          I'M <span> EMIN AYDIN</span>
          <Typist.Backspace count={10} delay={200} />
          <span>A DEVELOPER</span>
          <Typist.Backspace count={11} delay={200} />
          <span>A HISTORIAN</span>
          <Typist.Backspace count={11} delay={200} />
          <span>A CAT LOVER</span>
          <Typist.Backspace count={11} delay={200} />
          <span>A FOOTBALL FAN</span>
          <Typist.Backspace count={14} delay={200} />
          <span>A TECH FREAK</span>
          <Typist.Backspace count={12} delay={200} />
        </Typist>
        <Segment basic compact className="description">
          <p className="long-description">
            I'm a Berlin based Frontend Developer. I help companies to build
            unique and well functioning products. I have strong skills/interest
            in tech, therefore I am always looking forward to improve myself. At
            the moment, I'm mainly working on React, React-Native and Flutter.
            If you are still reading, I will be more than happy to get connected
            with you. Just reach out to me!
          </p>
        </Segment>
      </Segment>
    </Segment>
  );
};

export default Header;
