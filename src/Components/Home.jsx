import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import img from "../assets/oie_sNoQcpGSCzX9.png";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import ParticlesBg from 'particles-bg';
import { FaGithubSquare } from "react-icons/fa";
import { Fade, Zoom, Bounce } from 'react-reveal';
import { FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import '../style/Style.css';

function Home() {
  let contact ="mailto:kalamshar786@gmail.com";
  return (
    <div className="particles-bg">
      <ParticlesBg type="cobweb" style={{ backgroundColor: '#f0f0f0' }} num={50} color="#000000" bg={true} />
      <div className="py-5">
        <Container style={{ marginTop: "110px" }}>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-4 mb-md-0 text-white">
              <Fade left>
                <h3 className="fw-bold">Welcome to my portfolio</h3>
                <p className="fs-5 mb-4">
                  <span className="text-2xl me-2  " style={{ fontSize: "25px", fontWeight: "bold" }}>Hello, I'm a </span>
                  <ReactTyped
                    className="font-bold"
                    strings={[" Frontend Developer", "Programmer", "React Js Developer"]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop={true}
                    style={{ color: "green", fontWeight: "bold", fontSize: "25px" }}
                  />
                </p>
                <p className="text-sm md:text-md text-justify" style={{ fontSize: "18px" }}>
                  Hello, I'm a frontend developer specializing in React JS. With expertise in HTML, CSS, JavaScript, and Bootstrap, I create dynamic and responsive web applications. Explore my portfolio to see how I bring ideas to life with clean code and intuitive user interfaces.
                  
                </p>
                <div>
                  <a href={contact} target='_blank'>
                  <Button type='button' className='btn btn-primary' style={{marginLeft:"20px"}}>Hire Me</Button>
                  </a>
                </div>
                <ul className="list-inline">
                  <li className="list-inline-item me-3">
                    <a href="https://www.linkedin.com/in/abdul-kalam-%E2%9C%A8-714a87259/"><FaLinkedin style={{border:"2px solid #E48400",borderRadius:"30px", padding:"5px"}}/></a>
                  </li>
                  {/* <li className="list-inline-item me-3">
                    <a href="https://twitter.com"><FaTwitter style={{ color: "black" }} /></a>
                  </li>
                  <li className="list-inline-item me-3">
                    <a href="https://web.facebook.com/profile.php?id=100076966325420"><FaFacebook /></a>
                  </li>
                  <li className="list-inline-item me-3">
                    <a href="https://www.instagram.com/kalamak66/"><FaInstagram style={{ color: "red" }} /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#"><FaDiscord /></a>
                  </li> */}
                  <li className="list-inline-item">
                    <a href="https://github.com/Azadak12"><FaGithubSquare style={{ color: "black",border:"2px solid #E48400",borderRadius:"30px", padding:"5px" }} /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://api.whatsapp.com/send?phone=+923097502122"><FaWhatsapp style={{ color: "green",border:"2px solid #E48400",borderRadius:"30px", padding:"7px" }} /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="mailto:kalamshar786@gmail.com"><MdEmail style={{ color: "black", border:"2px solid #E48400",borderRadius:"30px", padding:"3px"}} /></a>
                  </li>
                </ul>
              </Fade>
            </Col>

            <Col md={6} className="text-center">
              <Zoom>
                <div className="d-flex justify-content-center">
                  <Image
                    src={img}
                    alt="Profile Image"
                    roundedCircle
                    className="img-fluid rounded-circle"
                    style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }}
                  />
                </div>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
