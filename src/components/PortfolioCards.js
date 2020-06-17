import React, { useState, useEffect } from "react";
import {
  Container,
  Icon,
  Card,
  Image,
  Header,
  Divider,
  Button,
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
    setTimeout(() => {
      setIsClicked(!isClicked);
    }, 200);

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

          {data.map((e, i) => {
            const dateToFormat = e.created_at;
            const userIndex = data.indexOf(e);

            return (
              <motion.div
                whileTap={{ scale: 0.9 }} initial={{ scale: 0, rotate: 0 }} animate={{

                  scale: 1,
                  transition: {
                    delay: 0.18 * i
                  }

                }} >
                <Card raised fluid>
                  <Image
                    src={readmeFiles[userIndex].image}
                    wrapped
                    size="large"
                    ui={false}
                    onClick={() => {
                      clickHandler(userIndex);
                    }}
                  />
                  <Card.Content
                    onClick={() => {
                      clickHandler(userIndex);
                    }}
                  >
                    <Card.Header></Card.Header>
                    <Card.Meta content={`${e.name}`} />
                    <Card.Description>{e.description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <a>
                      <Icon name="calendar alternate outline" />
                    Created: <Moment date={dateToFormat} fromNow />
                    </a>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button
                        animated="fade"
                        basic
                        color="grey"
                        href={data[userIndex].html_url}
                        target="_blank"
                      >
                        <Button.Content visible>
                          <Icon color="black" name="github" />
                        Github repo
                      </Button.Content>
                        <Button.Content hidden>
                          This way to source code
                      </Button.Content>
                      </Button>
                      <Button
                        animated="fade"
                        basic
                        color="red"
                        content="Live version"
                        icon="keyboard"
                        href={data[userIndex].homepage}
                        target="_blank"
                      >
                        <Button.Content visible>
                          <Icon name="keyboard" />
                        Live version
                      </Button.Content>
                        <Button.Content hidden>
                          {" "}
                        Check out how it looks{" "}
                        </Button.Content>
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              </motion.div>
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
    </motion.div >
  );
};

export default PortfolioCards;
