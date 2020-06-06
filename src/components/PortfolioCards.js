import React, { useState, useEffect } from "react";
import {
  Container,
  Icon,
  Card,
  Image,
  Header,
  Divider,
} from "semantic-ui-react";
import data from "../data.json";
import Portfolio from "./Portfolio";
import { images } from "./Images";
import Moment from "react-moment";
import { useWindowSize } from "react-hooks-window-size";
import Message from "./Message";
import { motion } from "framer-motion";

const PortfolioCards = (props) => {
  const [index, setIndex] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const clickHandler = (index) => {
    setIndex(index);
    setIsClicked(!isClicked);
  };
  const [timeToShowMessage, setTimeToShowMessage] = useState(false);
  const callbackFunction = (childData) => {
    setIsClicked(childData);
  };
  const size = useWindowSize();

  useEffect(() => {
    if (size.width <= 414) return setItemsPerRow(1);
    if (size.width <= 768) return setItemsPerRow(2);
    if (size.width > 768) return setItemsPerRow(3);
  }, [size]);
  setTimeout(() => {
    setTimeToShowMessage(true);
  }, 500);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={props.animate}
    >
      <Container textAlign="center">
        {timeToShowMessage && <Message />}
        <Divider horizontal>
          <Header as="h4" inverted>
            <Icon name="code" />
            Some of my work
          </Header>
        </Divider>

        <Card.Group itemsPerRow={itemsPerRow} centered>
          {data.map((e) => {
            const dateToFormat = e.created_at;
            const userIndex = data.indexOf(e);

            return (
              <Card raised>
                <Image
                  src={require(`${images[userIndex]}`)}
                  wrapped
                  size="large"
                  ui={false}
                  onClick={() => {
                    const index = data.indexOf(e);
                    clickHandler(index);
                  }}
                />
                <Card.Content>
                  <Card.Header></Card.Header>
                  <Card.Meta>
                    <span className="date">{e.name}</span>
                  </Card.Meta>
                  <Card.Description>{e.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="calendar alternate outline" />
                    Created: <Moment date={dateToFormat} fromNow />
                  </a>
                </Card.Content>
              </Card>
            );
          })}
          {isClicked ? (
            <Portfolio index={index} parentCallback={callbackFunction} />
          ) : null}
        </Card.Group>
      </Container>
    </motion.div>
  );
};

export default PortfolioCards;
