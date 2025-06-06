import '../styles/footer.css';
import { Container, Col, Row} from 'react-bootstrap';
import instagramIcon from '../assets/icon-instagram.svg'
import facebookIcon from '../assets/icon-facebook.svg';

function FooterSection() {
    return (
        <div className="footer-div">
            <Container className="footer-container">
                <Row>
                    <Col>
                        <h1 className="footer-logo">lufei</h1>
                        <p className="footer-copyright">©Lufei Hair Salon | All rights reserved</p>

                    </Col>
                    <Col className="align-self-center footer-social">
                        <div className="footer-social-div">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src={ instagramIcon } className="footer-icon"></img>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src={ facebookIcon } className="footer-icon"></img>
                            </a>
                        </div>

                            <p className="footer-copyright">
                            Website by
                            <a className="avery" href="https://ngavery.github.io/averyng.github.io/" target="_blank" rel="noopener noreferrer"> Avery Ng </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default FooterSection;