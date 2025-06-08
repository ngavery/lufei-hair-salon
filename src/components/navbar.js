import '../styles/navbar.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function SiteNavbar() {
  return (
    <Navbar fixed="top" expand="lg" bg="white" variant="light" className="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-logo">lufei</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-3 nav-items">
            <NavLink to="/"className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>
              Home
            </NavLink>
            <NavLink to="/services"className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>
              Services
            </NavLink>
            <NavLink to="/contact"className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}>
              Info/Contact
            </NavLink>
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
