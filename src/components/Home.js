import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import { motion } from "framer-motion";
const Home = (props) => {
  console.log(props);

  return (
    <motion.div
      className="homeWrapper"
      initial="initial"
      animate="in"
      exit="out"
      variants={props.animate}
    >
      <Typist cursor startDelay={2000}>
        <span>Hello, my name is Emin Aydın. I'm a frontend devel</span>
        <Typist.Backspace count={14} delay={500} />
        <span>cat lover and frontend developer.</span>
        <br />
        <br />

        <span>You can check out my portfolio page to see my work.</span>
        <br />
        <br />
        <span>Or drop me a message</span>
        <br />
        <br />
      </Typist>
    </motion.div>
  );
};

export default Home;
