import React, { useState } from "react";
import { Modal, Button, Icon, Container, Menu } from "semantic-ui-react";
import { readmeFiles } from "../helpers/Readmes";
import "../App.css";
const Portfolio = (props) => {
  const [modalIsClosed, setModalIsClosed] = useState(true);
  const [index, setIndex] = useState(props.index);
  const data = props.data;
  function createMarkup() {
    return { __html: readmeFiles[index].text };
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
      <Modal open={modalIsClosed} onClose={closeModal} size="small">
        <Menu>
          <Menu.Item>
            <Button
              animated
              basic
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
              basic
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
        <Modal.Header>{data[index].name}</Modal.Header>
        <Modal.Content scrolling>
          <Modal.Description>
            <div dangerouslySetInnerHTML={createMarkup()}></div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            animated
            basic
            compact
            className="modal-btn"
            floated="left"
            href={data[index].html_url}
            target="_blank"
          >
            <Button.Content visible>Check the code </Button.Content>
            <Button.Content hidden>
              <Icon name="chevron left" />
            </Button.Content>
          </Button>
          <Button
            animated
            basic
            compact
            className="modal-btn"
            floated="right"
            href={data[index].homepage}
            target="_blank"
          >
            <Button.Content visible>Go to live version </Button.Content>
            <Button.Content hidden>
              <Icon name="chevron right" />
            </Button.Content>
          </Button>
        </Modal.Actions>
      </Modal>
    </Container>
  );
};

export default Portfolio;
