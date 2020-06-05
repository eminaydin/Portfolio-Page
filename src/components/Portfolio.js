import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Header,
  Icon,
  Container,
  Card,
  Image,
  Menu,
} from "semantic-ui-react";
import data from "../data.json";
import { readmeFiles } from "./Readmes";
const Portfolio = (props) => {
  const [modalIsClosed, setModalIsClosed] = useState(true);
  const [index, setIndex] = useState(props.index);

  function createMarkup() {
    return { __html: readmeFiles[index] };
  }
  const closeModal = () => {
    setModalIsClosed(false);
  };
  const sendData = () => {
    props.parentCallback(modalIsClosed);
  };
  sendData();
  return (
    <Container textAlign="center">
      <Modal open={modalIsClosed} onClose={closeModal}>
        <Menu>
          <Menu.Item icon="language" />
          <Menu.Item icon="language" position="right" />
        </Menu>
        <Modal.Content image scrolling>
          <Image
            size="medium"
            src="https://images.unsplash.com/photo-1591229677225-2e8fc742b80c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />

          <Modal.Description>
            <Header>{data[index].name}</Header>
            <Header as="h3" style={{ lineHeight: "3" }}>
              <div dangerouslySetInnerHTML={createMarkup()}></div>
            </Header>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            primary
            floated="left"
            href={data[index].html_url}
            target="_blank"
          >
            Check the code <Icon name="chevron right" />
          </Button>
          <Button primary href={data[index].homepage} target="_blank">
            Go to live version <Icon name="chevron right" />
          </Button>
        </Modal.Actions>
      </Modal>
    </Container>
  );
};

export default Portfolio;
