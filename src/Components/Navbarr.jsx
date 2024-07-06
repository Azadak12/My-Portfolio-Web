import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import logo from "../assets/oie_sNoQcpGSCzX9.png"
import '../style/Style.css';

function Navbarr() {
  return (
    <Navbar style={{backgroundColor:"#1F305E"}} variant="dark" expand="lg" fixed="top" className="py-3">
      <Container className='navbar'>
        <Navbar.Brand>
          <img
            src={logo}
            alt="Logo"
            height="80"
            width="80"
            style={{ borderRadius: '50%' }}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fs-5">
            <Link
              to="home"
              className="nav-link text-light"
              activeClass="active"
              smooth={true}
              duration={50}
              style={{ textDecoration: 'none', cursor:"pointer" }}
            >
              Home
            </Link>
            <Link
              to="about"
              className="nav-link text-light"
              activeClass="active"
              smooth={true}
              duration={50}
              style={{ textDecoration: 'none', cursor:"pointer" }}
            >
              About
            </Link>
            <Link
              to="Skills"
              className="nav-link text-light"
              activeClass="active"
              smooth={true}
              duration={50}
              style={{ textDecoration: 'none', cursor:"pointer" }}
            >
              Skills
            </Link>
          
            <Link
              to="projects"
              className="nav-link text-light"
              activeClass="active"
              smooth={true}
              duration={50}
              style={{ textDecoration: 'none', cursor:"pointer" }}
            >
              Projects
            </Link>
            <Link
              to="contact"
              className="nav-link text-light"
              activeClass="active"
              smooth={true}
              duration={50}
              style={{ textDecoration: 'none', cursor:"pointer" }}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
