import React from "react";
import { Container, Icon, Segment, Header } from "semantic-ui-react";
import "../App.css";
import { motion } from "framer-motion";

const Contact = ({ animate }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 2 }}
      variants={animate}
      style={{ minHeight: "100%", display: "flex" }}
    >
      <Container className="contactWrapper">
        <Container textAlign="center" className="contactInfo">
          <motion.div>
            <h1 className="contactHeader"> Contact me</h1>
            <h1 className="mailAdress">
              You can contact me directly at
              <a
                href="mailto:eminaydin93@gmx.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp; eminaydin93@gmx.de &nbsp;
              </a>
              or find me on the social links below.
            </h1>
          </motion.div>
        </Container>
        <Segment inverted textAlign="center" className="socialIcons">
          <a
            href="mailto:eminaydin93@gmx.de"
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
            <Icon name="linkedin" size="huge" />
          </a>
          <a
            href="https://github.com/eminaydin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" size="huge" />
          </a>
          <a
            href="https://www.xing.com/profile/Emin_Aydin10/cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="xing" size="huge" />
          </a>
          <Header className="author">Copyright Emin Aydın 2020</Header>
        </Segment>
      </Container>
    </motion.div>
  );
};

export default Contact;
