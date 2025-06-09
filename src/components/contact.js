import '../styles/contact.css';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapPin, FaClock} from "react-icons/fa";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    if (name && email && phone && message) {
      setIsValid(true);
      setSubmitted(true);
    } else {
      setIsValid(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-section">
      <Container>
        <Row className="contact-row">
          {/* LEFT: Form */}
          <Col md={6} className="contact-form-col">
            <div className="contact-div">
              <Form onSubmit={handleSubmit} className="contact-form">
                <h1 className="contact-title">Contact</h1>

                {submitted && isValid && (
                  <Alert variant="success">🎉 Your message has been sent!</Alert>
                )}

                {submitted && !isValid && (
                  <Alert variant="danger">Please fill in all fields.</Alert>
                )}

                <Form.Group className="mb-3">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <div className="btn-div">
                    <Button type="submit" className="submit-btn rounded-pill px-4 w-100">
                      SUBMIT
                    </Button>
                  </div>
                </Form.Group>
              </Form>
            </div>
          </Col>

          {/* RIGHT: Hours + Map */}
          <Col md={6} className="contact-info-col">
            <div className="contact-info-div">
              <h1 className="contact-title">Our Information</h1>

              <div className="title-div">
                <FaClock className="service-icon"/>
                <div>
                  <h2 className="contact-subtitle">Opening Hours</h2>
                    <ul className="hours-list">
                      <li>Mon–Fri: 9:00 AM – 8:00 PM</li>
                      <li>Saturday: 9:00 AM – 6:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                </div>
              </div>

              
              <div className="title-div">
                <FaMapPin className="service-icon"/>
                <div>
                  <h2 className="contact-subtitle">Address</h2>
                  <p className="description">75 Laurier Avenue East, Ottawa, ON K1N 6N5</p>
                </div>
              </div>

              <div className="title-div">
                <FaEnvelope className="service-icon"/>
                <div>
                  <h2 className="contact-subtitle">Email address</h2>
                  <p className="description">info@lufei.com</p>
                  </div>
              </div>
              
              <div className="title-div">
                <FaPhone className="service-icon"/>
                <div>
                  <h2 className="contact-subtitle">Phone</h2>
                  <p className="description">(613) 555-1234</p>
                </div>
              </div>

              <div className="map-container mt-4">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.0567413093437!2d-75.68313248444307!3d45.424721779100634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050b2fa4d8b7%3A0x61b44a4a213b1376!2sUniversity%20of%20Ottawa!5e0!3m2!1sen!2sca!4v1710000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactSection;
