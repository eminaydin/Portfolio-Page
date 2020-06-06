import React, { useState } from "react";
import { Container, Icon, Card, Image, Header, Divider } from "semantic-ui-react";
import data from "../data.json";
import Portfolio from "./Portfolio";
import { images } from "./Images";
import { useEffect } from "react";
import Moment from "react-moment";


const PortfolioCards = (props) => {
  const [index, setIndex] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [state, setState] = useState(data);

  const clickHandler = (index) => {
    setIndex(index);
    setIsClicked(!isClicked);
  };
  const callbackFunction = (childData) => {
    setIsClicked(childData);
  };

  return (
    <Container textAlign="center" >
      <Divider horizontal >
        <Header as="h4" inverted>
          <Icon name="tag" />
            Some of my work
          </Header>
      </Divider>

      <Card.Group itemsPerRow="3" centered>
        {data.map((e) => {
          const dateToFormat = <Moment fromNow> {e.created_at}</Moment>;
          const userIndex = data.indexOf(e);

          return (
            <Card raised >
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
                <Card.Description>
                  {e.description}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  {dateToFormat}
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

  );
};

export default PortfolioCards;
