import {Button, Image, Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';
import Login from './Login';
import { Link } from "react-router-dom";

function NavbarCrowStream() {
    return (
      <div className="Navbar">
        <Navbar bg="dark" expand="lg" variant="dark" style={{ minHeight: '20px', color: 'white' }}>
            <Container>
                <Navbar.Brand href="#home" style={{ color: 'white' }}>
                    <Image style={{margin: 'auto' }} src='/assets/images/Crowstream.png' width='90px'/>
                    <h3>CrowStream</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" style={{ color: 'white' }}>Quienes somos</Nav.Link>
                    <Nav.Link href="#link" style={{ color: 'white' }}>Preguntas frecuentes</Nav.Link>
                </Nav>
                  <Nav.Link href="/login" style={{ color: 'white' }}>Iniciar sesión </Nav.Link>
                  <Nav.Link href="/signin" style={{ color: '#27a5d7' }}>Registrarse</Nav.Link>
                
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    );
  }
  
  export default NavbarCrowStream;