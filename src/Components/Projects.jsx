import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Fade } from 'react-reveal'
import crud from "../assets/Screenshot 2024-06-17 184409.png"
import weather from "../assets/weather.png"
import counter from "../assets/counter.png"

function Projects() {
  return (
    <div>
      <Container className='mt-3 mb-5'>
        <h1 style={{ textAlign: "center", color:"white" }}>My Personal Projects ∽</h1>
        <Row className='mt-5'>
          <Col  xs={12} md={4} className='mt-4'>
            <Fade bottom>
              <Card>
                <Card.Img variant="top" src={weather} />
                <Card.Header className='text-center'>Weather App</Card.Header>
                <Card.Body>
                  <Card.Text>
                    A web application that provides current weather information for any location.
                  </Card.Text>
                  <div className='d-flex justify-content-center'>
                    <Button variant="primary" href="https://weatherapp-ten-lake.vercel.app/" target="_blank">
                      View Project
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col  xs={12} md={4} className='mt-4'>
            <Fade bottom delay={200}>
              <Card>
                <Card.Img variant="top" src={crud} style={{height:"180px"}}/>
                <Card.Header className='text-center'>CRUD operations applications</Card.Header>
                <Card.Body>
                  <Card.Text>
                    A simple and intuitive CRUD operations using MOCK API.
                  </Card.Text>
                  <div className='d-flex justify-content-center'>
                    <Button variant="primary" href="https://curd-react-app.vercel.app/" target="_blank">
                      View Project
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
          <Col xs={12} md={4} className='mt-4'>
            <Fade bottom delay={400}>
              <Card>
                <Card.Img variant="top" src={counter} style={{height:"205px"}} />
                <Card.Header className='text-center'>Counter</Card.Header>
                <Card.Body>
                  <Card.Text>
                    Counter which counts, reset and decount number
                  </Card.Text>
                  <div className='d-flex justify-content-center'>
                    <Button variant="primary" href="https://yourportfolio.com" target="_blank">
                      View Project
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects
