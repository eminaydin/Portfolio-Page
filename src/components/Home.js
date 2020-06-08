import React, { useState, useEffect } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Transition, Container } from "semantic-ui-react";

const Home = ({ animate }) => {
  const [typingDone, setTypingDone] = useState(false);
  const [timeToShowMessage, setTimeToShowMessage] = useState(false);
  useEffect(() => {
    if (typingDone) {
      setTimeout(() => {
        setTimeToShowMessage(true);
      }, 2000);
    }
  }, [typingDone]);
  return (
    <motion.div
      className="homeWrapper"
      initial="initial"
      animate="in"
      exit="out"
      variants={animate}
    >
      <Container>
        <Typist
          cursor={{
            show: true,
            blink: true,
            element: "|",
            hideWhenDone: true,
          }}
          startDelay={2000}
          onTypingDone={() => setTypingDone(true)}
        >
          <span>Hello, my name is Emin Aydın. I'm a frontend devel</span>
          <Typist.Backspace count={14} delay={500} />
          <span>
            cat lover and frontend developer. Check &nbsp;
            <Link to="/about" className="aboutLink">
              about
            </Link>
            &nbsp; page for more details.
          </span>
          <br />
          <br />
          <span>
            Jump to &nbsp;
            <Link to="/portfolio" className="portfolioLink">
              portfolio
            </Link>
            &nbsp; page to see my projects.
          </span>
          <br />
          <br />
          <span>
            Or&nbsp;
            <Link to="/contact" className="contactLink">
              contact
            </Link>
            &nbsp; me directly.
          </span>
          <br />
          <br />
        </Typist>
        {timeToShowMessage && (
          <Transition
            transitionOnMount={true}
            animation="fly right"
            duration={700}
          >
            <p>
              In the meantime you can check the source code of this
              <a
                href="https://github.com/eminaydin/Portfolio-Page"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp; page
              </a>
              .
            </p>
          </Transition>
        )}
      </Container>
    </motion.div>
  );
};

export default Home;
