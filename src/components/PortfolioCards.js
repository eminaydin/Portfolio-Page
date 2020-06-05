import React, { useState } from 'react';
import {

    Icon,
    Card,
    Image,
} from "semantic-ui-react";
import data from "../data.json";
import Portfolio from './Portfolio';

const PortfolioCards = (props) => {
    const [index, setIndex] = useState(1);
    const [isClicked, setIsClicked] = useState(false);
    const clickHandler = (index) => {
        setIndex(index);
        setIsClicked(!isClicked)
    };
    const callbackFunction = (childData) => {
        setIsClicked(childData)
    }
    return (
        <Card.Group itemsPerRow="3" centered >
            {data.map((e) => {
                return (
                    <Card raised >
                        <Image
                            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                            wrapped
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
                                Matthew is a musician living in Nashville.
                </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name="user" />
                  22 Friends
                </a>
                        </Card.Content>
                    </Card>
                );
            })}
            {isClicked ? <Portfolio index={index} parentCallback={callbackFunction} /> : null}

        </Card.Group>

    );
}

export default PortfolioCards;
