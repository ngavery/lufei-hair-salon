import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/moreservices.css';
import { FaArrowRight } from "react-icons/fa";


const services = [
  {
    title: 'Cut & Style - Women',
    description: 'Professional haircut with styling for all hair types.',
    price: 'Starting at $65'
  },
  {
    title: 'Cut & Style - Men',
    description: 'Professional haircut with styling for all hair types.',
    price: 'Starting at $35'
  },
  {
    title: 'Colouring',
    description: 'Full colour application to refresh your look.',
    price: 'Starting at $70'
  },
  {
    title: 'Highlights',
    description: 'Add dimension with foiled or balayage highlights.',
    price: 'Starting at $95'
  },
  {
    title: 'Blowout',
    description: 'Wash and blow dry for smooth, voluminous finish.',
    price: 'Starting at $35'
  },
  {
    title: 'Updo',
    description: 'Elegant upstyles for events and special occasions.',
    price: 'Starting at $50'
  }
];

function MoreServices() {
  return (
    <Container className="services-grid-container py-5">
      <Row className="g-4">
        {services.map((service, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="service-card h-100">
              <Card.Body>
                <Card.Title className="service-title">{service.title}</Card.Title>
                <Card.Text className="service-description">{service.description}</Card.Text>
                <Card.Text className="service-price">{service.price}</Card.Text>
              </Card.Body>
            </Card>

          </Col>
        ))}
        <div className="btn-div">
            <Link to="/book">
              <button className="services-book-btn rounded-pill px-4">
                    BOOK AN APPOINTMENT
                    <FaArrowRight className="icon" />
              </button>
            </Link>
        </div>

      </Row>

    </Container>
  );
}

export default MoreServices;
