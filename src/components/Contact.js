import React from "react";
import { Container, Icon, Segment, Header } from "semantic-ui-react";
import "../App.css";
import { motion } from "framer-motion";

const Contact = (props) => {
  console.log(props);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 2 }}
      variants={props.animate}
    >
      <Container className="contactWrapper">
        <div></div>
        <Container textAlign="center">
          <motion.h1 className="mailAdress">eminaydin93@yahoo.com</motion.h1>
        </Container>
        <Segment inverted textAlign="center" className="socialIcons">
          <a
            href="mailto:eminaydin93@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="mail" size="huge" as="i" />
          </a>
          <a
            href="https://www.linkedin.com/in/emin-aydin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <Icon name="linkedin" size="huge" />
          </a>
          <a
            href="https://github.com/eminaydin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" size="huge" />
          </a>
          <Header className="author">Copyright Emin Aydın 2020</Header>
        </Segment>
      </Container>
    </motion.div>
  );
};

export default Contact;
