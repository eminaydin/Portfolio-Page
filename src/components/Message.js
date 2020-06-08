import React, { useState } from "react";
import { Button, Header, Icon, Modal, Container } from "semantic-ui-react";
import { motion } from "framer-motion";

const Message = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  const pageVariants = {
    initial: {
      x: 100,
    },
    in: {
      x: 0,
    },
    out: {
      x: 100,
    },
  };

  return (
    <Modal open={isOpen} basic size="small" dimmer="blurring">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <Container textAlign="left">
          <Header
            icon="hand point down outline"
            content="Sorry to interrupt but since you are already here..."
            inverted
          />
          <Modal.Content>
            <h3 style={{ lineHeight: "1.7" }}>
              You may want to check out my contribution to React.js. As I'm
              truly a huge fan of React, I'm very happy to had a chance on
              helping this community to grow even further. I'm one of the
              translators of React.js official website in Turkish! You can check
              the github{" "}
              <a
                href="https://github.com/reactjs/tr.reactjs.org/issues/1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#d03f3f" }}
              >
                {" "}
                repository
              </a>{" "}
              or the{" "}
              <a
                href="https://tr.reactjs.org/docs/release-channels.html"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "grey" }}
              >
                {" "}
                page{" "}
              </a>{" "}
              I've translated.
            </h3>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="green"
              onClick={handleClose}
              inverted
              floated="right"
              style={{ margin: "30px" }}
            >
              <Icon name="checkmark" /> Got it
            </Button>
          </Modal.Actions>
        </Container>
      </motion.div>
    </Modal>
  );
};

export default Message;
