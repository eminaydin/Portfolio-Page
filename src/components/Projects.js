import React from "react";
import pflanzyGif from "../assets/pflanzy.gif";
import githubGif from "../assets/github.gif";
import "semantic-ui-css/semantic.min.css";
import { Header, Icon, Image, Reveal, Segment } from "semantic-ui-react";
const Projects = () => {
  return (
    <Segment className="projects" basic>
      <Reveal animated="move down">
        <Reveal.Content visible className="pflanzy-reveal">
          <Segment textAlign="center" className="pflanzy">
            <Header>Pflanzy</Header>
            <p>
              Plant care app - built in 6 weeks as a final project at Digital
              Career Institute. Allows you to search through database of plants
              either by typing manually or taking photo of your plant, sends
              notifications to remind you when to care and customize your plants
              for more individual feeling.
            </p>

            <Segment>
              <span>React-Native</span>
              <span>Redux</span>
              <span>Firebase</span>
            </Segment>
          </Segment>
        </Reveal.Content>
        <Reveal.Content>
          <Image
            src={pflanzyGif}
            size="medium"
            href="https://github.com/Pflanzy/Pflanzy-mobile-app"
            target="_blank"
          />
        </Reveal.Content>
      </Reveal>

      <Reveal animated="move up">
        <Reveal.Content visible className="repos-reveal">
          <Segment textAlign="center" className="repos">
            <Header>Github Popular Repositories</Header>
            <p>
              Website to search for popular Github repositories of the week that
              has been built in a day. You can simply change the value of
              dropdown and popular repositories of the selected value will be
              displayed. In order to make it user friendly, starred repositories
              are stored on local storage therefore will be available for you on
              the other tab anytime you pay a visit back.
            </p>

            <Segment>
              <span>React</span>
              <span>Redux</span>
              <span>React-Semantic-Ui</span>
              <span>SASS</span>
            </Segment>
          </Segment>
        </Reveal.Content>
        <Reveal.Content>
          <Image
            src={githubGif}
            size="big"
            href="https://github.com/eminaydin/github-popular-repositories"
            target="_blank"
          />
        </Reveal.Content>
      </Reveal>
      <Segment className="reach-out" basic>
        <p>
          Development is like a chess. You have to think of edge cases before
          you make a move, you need a lot of{" "}
          <span style={{ color: "#f19e8e", textDecoration: "underline" }}>
            patience
          </span>
          , you need{" "}
          <span style={{ color: "#f19e8e", textDecoration: "underline" }}>
            {" "}
            empathy
          </span>{" "}
          and you also need a{" "}
          <span style={{ color: "#f19e8e", textDecoration: "underline" }}>
            long-term mindset
          </span>
          . If you need all of these, look no more and say
          <a
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            style={{
              marginLeft: "0.2em",
              cursor: "pointer",
              color: "#f19e8e",
              fontSize: "20px",
              fontWeight: "900",
            }}
          >
            HI
          </a>
          !
        </p>
      </Segment>
    </Segment>
  );
};

export default Projects;
