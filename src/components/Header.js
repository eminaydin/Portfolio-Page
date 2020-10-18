import React, { useEffect, useState } from "react";
import photo from "../assets/image2.jpeg";
import { Parallax } from "react-scroll-parallax";
import Typist from "react-typist";
const Header = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    setCount(1);
  }, [count]);
  return (
    <div className="header">
      <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <img src={photo} className="profile-photo" />
      </Parallax>
      <div className="main-text-container">
        <h2 className="main-header">HI THERE !</h2>
        <span className="short-description">
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
            <span>A HISTORIAN</span>
            <Typist.Backspace count={10} delay={200} />
          </Typist>
        </span>
        <p className="long-description">
          I'm a Freelance UI/UX Designer and Developer based in London, England.
          I strives to build immersive and beautiful web applications through
          carefully crafted code and user-centric design.
        </p>
      </div>
    </div>
  );
};

export default Header;
