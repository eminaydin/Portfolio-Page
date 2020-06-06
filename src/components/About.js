import React from "react";
import {
  Divider,
  Header,
  Icon,
  Container,
  Segment,
  Image,
} from "semantic-ui-react";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaNodeJs, FaLess } from "react-icons/fa";
import {
  DiMongodb,
  DiNpm,
  DiReact,
  DiJavascript1,
  DiJqueryUiLogo,
  DiCss3,
  DiMaterializecss,
  DiBootstrap,
  DiSass,
} from "react-icons/di";

const About = () => {
  return (
    <div className="aboutWrapper">
      <Container textAlign="center">
        <Divider horizontal>
          <Header as="h4" inverted>
            <Icon name="tag" />
            About me
          </Header>
        </Divider>
        <Header
          as="h2"
          textAlign="center"
          style={{ color: "#cacaca", lineHeight: "2" }}
        >
          I'm Berlin based cat lover and Frontend developer. Relocating to
          Berlin was a significant step as it led me to have a chance to satisfy
          my curiosity in web development. Not so long after having enrolled to
          DCI where I've received intensive full-stack web development course,
          I've discovered the joy of creating applications, and pursuing
          projects on my own. You can check my projects here.
        </Header>

        <Divider horizontal>
          <Header as="h4" inverted>
            <Icon name="bar chart" />
            Tech-Stack
          </Header>
        </Divider>
        <Segment inverted textAlign="center">
          <Container>
            <Image.Group size="tiny">
              <Image>
                <AiFillHtml5 />
                <span>Html</span>
              </Image>
              <Image>
                <DiCss3 />
                <span>CSS</span>
              </Image>
              <Image>
                <DiSass />
                <span>SASS</span>
              </Image>
              <Image>
                <FaLess />
                <span>Less.css</span>{" "}
              </Image>
              <Image>
                <DiMaterializecss /> <span>Materialize.css</span>
              </Image>
              <Image>
                <DiBootstrap />
                <span>Bootstrap</span>
              </Image>
            </Image.Group>
          </Container>

          <Container textAlign="center">
            <Image.Group size="tiny" verticalAlign="middle" fluid>
              <Image>
                <DiReact /> <span>React</span>
              </Image>
              <Image>
                <DiJavascript1 />
                <span>Javascript</span>
              </Image>
              <Image>
                <DiJqueryUiLogo />
                <span>Jquery</span>
              </Image>
              <Image>
                {" "}
                <FaNodeJs /> <span>Node.Js</span>
              </Image>
              <Image>
                <DiMongodb />
                <span>MongoDB</span>
              </Image>
              <Image>
                <AiFillGithub />
                <span>Github</span>
              </Image>
              <Image>
                <DiNpm />
                <span>Npm</span>
              </Image>
            </Image.Group>
          </Container>
        </Segment>
      </Container>
    </div>
  );
};

export default About;
