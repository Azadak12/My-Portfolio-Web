import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaHtml5, FaCss3, FaReact, FaBootstrap, FaGithubSquare, FaNpm } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiWebpack } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { LuFigma } from 'react-icons/lu';
import { BsTools, BsEmojiSunglasses } from 'react-icons/bs';
import { RiTeamLine } from 'react-icons/ri';
import { CiTimer } from 'react-icons/ci';
import { GiTeamDowngrade } from 'react-icons/gi';
import { Fade } from 'react-reveal';
import '../style/Style.css';

function Skills() {
  return (
    <div>
      <Container className='my-4'>
        <h1 className='text-center mb-4 text-white'>Skills ∽</h1>
        <Row>
          <Col md={4}>
            <Fade bottom>
              <Card className='mb-4'>
                <CardHeader>Frontend Development</CardHeader>
                <CardBody>
                  <ListGroup>
                    <ListGroupItem>HTML <FaHtml5 style={{ color: "orange" }} /></ListGroupItem>
                    <ListGroupItem>CSS <FaCss3 style={{ color: "blue" }} /></ListGroupItem>
                    <ListGroupItem>JavaScript <IoLogoJavascript style={{ color: "green" }} /></ListGroupItem>
                    <ListGroupItem>React <FaReact style={{ color: "#00FFFF" }} /></ListGroupItem>
                    <ListGroupItem>Bootstrap <FaBootstrap style={{ color: "#4B0082" }} /></ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Fade>
          </Col>
          <Col md={4}>
            <Fade bottom>
              <Card className='mb-4'>
                <CardHeader>Tools & Technologies</CardHeader>
                <CardBody>
                  <ListGroup>
                    <ListGroupItem>Git <FaGithubSquare /></ListGroupItem>
                    <ListGroupItem>Webpack <SiWebpack /></ListGroupItem>
                    <ListGroupItem>npm <FaNpm /></ListGroupItem>
                    <ListGroupItem>VS Code <VscVscode /></ListGroupItem>
                    <ListGroupItem>Figma <LuFigma /></ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Fade>
          </Col>
          <Col md={4}>
            <Fade bottom>
              <Card className='mb-4'>
                <CardHeader>Other Skills</CardHeader>
                <CardBody>
                  <ListGroup>
                    <ListGroupItem>Problem Solving <BsTools /></ListGroupItem>
                    <ListGroupItem>Team Collaboration <RiTeamLine /></ListGroupItem>
                    <ListGroupItem>Time Management <CiTimer /></ListGroupItem>
                    <ListGroupItem>Agile Methodologies <GiTeamDowngrade /></ListGroupItem>
                    <ListGroupItem>Communication <BsEmojiSunglasses /></ListGroupItem>
                  </ListGroup>
                </CardBody>
              </Card>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
