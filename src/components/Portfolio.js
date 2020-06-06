import React, { useState } from "react";
import {
  Modal,
  Button,
  Icon,
  Container,
  Menu,
} from "semantic-ui-react";
import data from "../data.json";
import { readmeFiles } from "../helpers/Readmes";
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
          <Menu.Item>
            <Button
              animated
              onClick={() => setIndex(index - 1)}
              disabled={index <= 0 ? true : false}
            >
              <Button.Content visible>Previous</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow left" />
              </Button.Content>
            </Button>
          </Menu.Item>
          <Menu.Item position="right">
            <Button
              animated
              onClick={() => setIndex(index + 1)}
              disabled={index >= 8 ? true : false}
            >
              <Button.Content visible>Next</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Menu.Item>
        </Menu>
        <Modal.Header >
          {data[index].name}
        </Modal.Header>
        <Modal.Content scrolling>

          <Modal.Description>


            <div dangerouslySetInnerHTML={createMarkup()}></div>

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
