import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../style/Style.css';
import { a } from 'react-spring';

function About() {
  var link = "https://drive.google.com/file/d/1IMARpI8947bRWrj07Xwut_0CD_XVCEFn/view?usp=drivesdk";
  return (
    <div>
      <Container className='containerr'>
        <Row>
          <Col md={12}>
            <div>
              <h1>About Me ∽</h1>
              <h2 className='section-title'>Introduction:</h2>
              <p className='text-content'>
              Hi, I'm Abdul Kalam from Pakistan, currently studying BS IT. I am a passionate frontend developer specializing in React JS and Next.js. With a strong foundation in web technologies and a keen eye for modern, responsive design, I build dynamic, high-performance web applications.
              </p>
            </div>
            <div>
              <h2 className='section-title'>Education:</h2>
              <p className='text-content'>
                Lahore Institute of Science and Technology <br />
                BS Information Technology <br />
                2021-2025
              </p>
            </div>
            <div>
              <h2 className='section-title'>Experience:</h2>
              <p className='text-content'>
                Interns Pakistan <br />
                Frontend Devloper
                <br />
                July 2024-Present
              </p>
            </div>
            <a href={link} target='_blank'>
            <Button>Download Resume</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
