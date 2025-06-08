import '../styles/contact.css';
import { Container, Row, Col } from 'react-bootstrap';

function ContactSection() {
  return (
    <div className="contact-section">
      <Container>
        <Row className="contact-row">
          {/* LEFT: Form */}
          <Col md={6} className="contact-form-col">
            <h2>Contact Us</h2>
            <form className="contact-form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit">Submit</button>
            </form>
          </Col>

          {/* RIGHT: Hours + Map */}
          <Col md={6} className="contact-info-col">
            <h2>Opening Hours</h2>
            <ul className="hours-list">
              <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
              <li>Saturday: 9:00 AM – 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>

            <div className="map-container">
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactSection;
