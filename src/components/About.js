import React, { Component } from 'react';
import { Divider, Header, Icon, Container, Segment, Image } from 'semantic-ui-react'
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { FaNodeJs } from "react-icons/fa"
import { DiMongodb, DiNpm, DiReact, DiJavascript1, DiJqueryUiLogo, DiCss3, DiMaterializecss, DiBootstrap, DiSass } from "react-icons/di"
class About extends Component {
    render() {
        return (
            <Container textAlign="center">

                <Divider horizontal fitted>
                    <Header as='h4' inverted>
                        <Icon name='tag' />
                About me
              </Header>
                </Divider>
                <Header as="h2" textAlign="center" style={{ color: "#cacaca" }}>
                    I'm Berlin based Frontend developer. Having a career in academia, I've decided to change my career path after I relocated to Germany. Decided to pursue a career on computer related field. Not so later, I've found DCI where full-stack intensive course has been thought.
            </Header>

                <Divider horizontal>
                    <Header as='h4' inverted>
                        <Icon name='bar chart' />
                Tech-Stack
              </Header>
                </Divider>




                <Segment inverted textAlign="center" compact >
                    <Header content="Some of my Tech-stack" />
                    <Container floated="right">
                        <Image.Group size="tiny">
                            <Image >  <AiFillHtml5 /> <span >Html</span></Image>
                            <Image><DiMongodb /><span>MongoDB</span></Image>
                            <Image> <FaNodeJs /> <span>Node.Js</span></Image>
                            <Image><DiReact /> <span>React</span></Image>
                            <Image><DiJavascript1 /><span>Javascript</span></Image>
                            <Image><DiJqueryUiLogo /><span>Jquery</span></Image>
                        </Image.Group>
                    </Container>

                    <Container textAlign="center" floated="left" >
                        <Image.Group size="tiny" verticalAlign="middle" fluid>
                            <Image ><DiCss3 /> <span>CSS</span></Image>
                            <Image ><DiMaterializecss /> <span>Materialize.css</span></Image>
                            <Image ><DiBootstrap /><span>Bootstrap</span></Image>
                            <Image ><DiSass /><span>SASS</span></Image>
                            <Image ><AiFillGithub /><span>Github</span></Image>
                            <Image ><DiNpm /><span>Npm</span></Image>
                        </Image.Group>
                    </Container >
                </Segment>
            </Container>
        );
    }
}

export default About;
