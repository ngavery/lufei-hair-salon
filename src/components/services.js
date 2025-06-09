import '../styles/services.css';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


function ServicesSection() {
    return (
        <div className="services-div"> 
                <h1 className='services-title'>SERVICES</h1>
                <div className="services-bar"></div>
                <Container className="services-container">
                    <h2 className="services-subtitle">Lufei offers cutting, styling, highlighting, and colouring.</h2>
                    <p className="services-description">Pricing is based on each service and each stylist’s individual level of expertise. Please contact us for any questions related to pricing.</p>
                    <p className="mt-3 services-more">
                    <Link to="/services" className="text-decoration-none">
                        Learn More
                        <FaArrowRight className="icon" />
                        
                    </Link>
                    </p>
                </Container>
        </div>

    );
}

export default ServicesSection;