import React, { useState, useEffect } from "react";
import {
  Container,
  Icon,
  Card,
  Image,
  Header,
  Divider,
} from "semantic-ui-react";
import data from "../helpers/data.json";
import Portfolio from "./PortfolioModal";
import Moment from "react-moment";
import { useWindowSize } from "react-hooks-window-size";
import { motion } from "framer-motion";
import { readmeFiles } from "../helpers/Readmes";

const PortfolioCards = (props) => {
  const [index, setIndex] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [itemsPerRow, setItemsPerRow] = useState(3);
  const clickHandler = (index) => {
    setIndex(index);
    setIsClicked(!isClicked);
  };

  const callbackFunction = (childData) => {
    setIsClicked(childData);
  };
  const size = useWindowSize();

  useEffect(() => {
    if (size.width <= 414) return setItemsPerRow(1);
    if (size.width <= 768) return setItemsPerRow(2);
    if (size.width > 768) return setItemsPerRow(3);
  }, [size]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={props.animate}
    >
      <Container textAlign="center">
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
                  src={readmeFiles[userIndex].image}
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
            <Portfolio
              index={index}
              parentCallback={callbackFunction}
              data={data}
            />
          ) : null}
        </Card.Group>
      </Container>
    </motion.div>
  );
};

export default PortfolioCards;
