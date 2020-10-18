import React, { useEffect, useState } from "react";
import photo from "../assets/image2.jpeg";
import { Parallax } from "react-scroll-parallax";
import Typist from "react-typist";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
const Header = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(1);
  }, [count]);
  return (
    <div className="header">
      <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <img src={photo} className="profile-photo" />
        <div className="social-icons">
          <UseAnimations
            animation={github}
            size={56}
            strokeColor="#58656d"
            wrapperStyle={{ padding: 100, padding: "unset" }}
            className="github"
          />
          <UseAnimations
            animation={linkedin}
            size={56}
            strokeColor="#58656d"
            wrapperStyle={{ padding: 100, padding: "unset" }}
            className="linkedin"
          />
        </div>
      </Parallax>
      <div className="main-text-container">
        <h2 className="main-header">HI THERE !</h2>
        <span className="short-description">
          I'M{" "}
          <Typist
            key={count}
            cursor={{ show: false, blink: false }}
            onTypingDone={() => {
              setTimeout(() => {
                setCount(0);
              }, 300);
            }}
          >
            <span> EMIN AYDIN</span>
            <Typist.Backspace count={10} delay={200} />
            <span>A DEVELOPER</span>
            <Typist.Backspace count={11} delay={200} />
            <span>A HISTORIAN</span>
            <Typist.Backspace count={11} delay={200} />
            <span>A CAT LOVER</span>
            <Typist.Backspace count={11} delay={200} />
            <span>A FOOTBALL FAN</span>
            <Typist.Backspace count={14} delay={200} />
            <span>A TECH ENTHUSIAST</span>
            <Typist.Backspace count={17} delay={200} />
          </Typist>
        </span>
        <p className="long-description">
          I'm a Berlin based Frontend Developer. I help companies to build
          unique and fascinating products. I have a strong interest in tech,
          therefore I am always looking forward to improve myself. I'm mainly
          working on React, React-Native and Flutter at the moment. If you are
          already here, I will be more than happy to be connected. Just reach
          out to me!
        </p>
      </div>
    </div>
  );
};

export default Header;
