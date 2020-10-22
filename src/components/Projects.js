import React, { useState } from "react";
import pflanzyGif from "../assets/pflanzy.gif";
import githubGif from "../assets/github.gif";
import "semantic-ui-css/semantic.min.css";
import { Header, Icon, Image, Reveal, Segment } from "semantic-ui-react";
const Projects = () => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <Segment className="projects" basic>
      <Reveal animated="fade">
        <Reveal.Content visible>
          <Segment inverted textAlign="center" compact className="pflanzy">
            <Header>Sample Project</Header>
            <Header block inverted>
              Pflanzy
            </Header>
            <p>
              Plant care app - built in 6 weeks as a final project at Digital
              Career Institute. Allows you to search through database of plants
              either by typing manually or taking photo of your plant, sends
              notifications to remind you when to care and customize your plants
              for more individual feeling.
            </p>
            <Header subheader>
              <Icon name="computer" />
              <Header.Content>Tech Stack</Header.Content>
            </Header>
            <Segment>
              <span>React-Native</span>
              <span>Redux</span>
              <span>Firebase</span>
              <span>Expo</span>
            </Segment>
          </Segment>
        </Reveal.Content>
        <Reveal.Content hidden={isHidden}>
          <Image src={pflanzyGif} size="medium" />
        </Reveal.Content>
      </Reveal>
      <Reveal animated="small fade">
        <Reveal.Content visible>
          <Segment inverted textAlign="center" compact>
            <Header>Sample Project</Header>
            <Header block inverted>
              Github Popular Repositories
            </Header>
            <p>
              Website to search for popular Github repositories of the week that
              has been built in a day. You can simply change the value of
              dropdown and popular repositories of the selected value will be
              displayed. In order to make it user friendly, starred repositories
              are stored on local storage therefore will be available for you on
              the other tab anytime you pay a visit back.
            </p>
            <Header subheader>
              <Icon name="computer" />
              <Header.Content>Tech Stack</Header.Content>
            </Header>
            <Segment>
              <span>React</span>
              <span>Redux</span>
              <span>React-Semantic-Ui</span>
              <span>SASS</span>
            </Segment>
          </Segment>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src={githubGif} size="big" />
        </Reveal.Content>
      </Reveal>
    </Segment>
  );
};

export default Projects;
