import React, { useState } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Transition, Container } from "semantic-ui-react";

const Home = ({ animate }) => {
  const [timeToShowMessage, setTimeToShowMessage] = useState(false);
  setTimeout(() => {
    setTimeToShowMessage(true);
  }, 19500);
  return (
    <motion.div
      className="homeWrapper"
      initial="initial"
      animate="in"
      exit="out"
      variants={animate}
    >
      <Container>
        <Typist cursor startDelay={2000}>
          <span>Hello, my name is Emin Aydın. I'm a frontend devel</span>
          <Typist.Backspace count={14} delay={500} />
          <span>
            cat lover and frontend developer. Check{" "}
            <Link to="/about" className="aboutLink">
              about
            </Link>{" "}
            page for more details.
          </span>
          <br />
          <br />

          <span>
            Jump to{" "}
            <Link to="/portfolio" className="portfolioLink">
              portfolio
            </Link>{" "}
            page to see my projects.
          </span>
          <br />
          <br />
          <span>
            Or{" "}
            <Link to="/contact" className="contactLink">
              contact
            </Link>{" "}
            me directly.
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
              In the meantime you can check the source code of this{" "}
              <a
                href="https://github.com/eminaydin/Portfolio-Page"
                target="_blank"
                rel="noopener noreferrer"
              >
                page
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
