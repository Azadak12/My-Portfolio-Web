import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Style.css'; // Ensure to import your stylesheet

function Contact() {
  return (
    <>
      <h1 className='contact-title text-center'>Contact Me</h1>
      <Container className="contact-container">
        <div className="contact-form-wrapper">
          <Form action="mailto:kalamshar786@gmail.com" method="post" encType="text/plain">
            <Row>
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Control type="text" placeholder="Name" required className="contact-input" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Email" required className="contact-input" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formSubject">
              <Form.Control type="text" placeholder="Subject" required className="contact-input" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Control as="textarea" rows={4} placeholder="Your Message" required className="contact-input" />
            </Form.Group>
            <Button className='contact-button' variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Contact;
