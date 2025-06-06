import '../styles/hero.css';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
    <div className="hero">
        <Container className="hero-container">
            <h1 className="hero-title">Lufei Hair Salon</h1>
            <h2 className="hero-subtitle">Ottawa, Ontario</h2>
            <Link to="/book">
                <Button className="hero-btn rounded-pill px-4">
                    BOOK NOW
                </Button>
            </Link>
        </Container>
    </div>

    );
}

export default HeroSection;