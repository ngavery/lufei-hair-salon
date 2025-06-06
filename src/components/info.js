import '../styles/info.css';
import { Container, Row, Col } from 'react-bootstrap';

function InfoSection() {
    return (
        <div className="info-div">
            <Container className="info-container">
                <Row className="align-items-start info-row">
                    <Col className="info-col" md={4}>
                        <h2 className="info-title">LOCATION</h2>
                        <p className="info-paragraph">
                            Lufei Hair Salon<br />
                            800 King Edward Avenue<br />
                            Ottawa, ON<br />
                            K1N 6R5<br />
                        </p>
                    </Col>
                    <Col className="text-center info-col" md={4}>
                        <h2 className="info-title">BUSINESS HOURS</h2>
                        <p className="info-paragraph">
                            Monday: 9am-6pm<br />
                            Tuesday: 9am-6pm<br />
                            Wednesday: 9am-8pm<br />
                            Thursday: 9am-8pm<br />
                            Friday: 9am-8pm<br />
                            Saturday: 9am-8pm<br />
                            Sunday: CLOSED<br />
                        </p>
                    </Col>
                    <Col className="info-col" md={4}>
                        <h2 className="info-title">CONTACT</h2>
                        <p className="info-paragraph">
                            <a>(613) 555-1234</a> <br />
                            <a>info@lufei.com</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default InfoSection;