import '../styles/vision.css';
import { Container, Col, Row } from 'react-bootstrap';
import visionImg from '../assets/visionimg.jpg';

function VisionSection() {
    return (
        <div className="vision-div">
            <Container className="vision-container">
                <Row className="g-4 vision-row">
                    <Col>
                        <img src={visionImg} className="vision-img" />
                    </Col>
                    <Col className="vision-text">
                        <div className="textbox">
                            <h1 className="vision-title">OUR VISION</h1>
                        </div>
                        <p className="vision-description">At Lufei, our vision is to create a sanctuary 
                            where beauty meets confidence. Our mission is to help make your dream look 
                            come to life. We believe every guest deserves to feel empowered, refreshed,  
                            and celebrated.</p>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default VisionSection;