import '../styles/navbar.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SiteNavbar() {
  return (
    <Navbar fixed="top" expand="lg" bg="white" variant="light" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-logo">lufei</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-3 nav-items">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Link to="/book">
            <Button className="navbar-book-btn rounded-pill px-4">
                  BOOK
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNavbar;
