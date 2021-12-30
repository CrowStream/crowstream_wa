import {Button, Image, Nav, Navbar, NavDropdown, Container} from 'react-bootstrap';

function NavbarCrowStream() {
    return (
      <div className="Navbar">
        <Navbar bg="dark" expand="lg" style={{ minHeight: '80px', color: 'white' }}>
            <Container>
                <Navbar.Brand href="#home" style={{ color: 'white' }}>
                    <Image src='/assets/images/logo_provisional.PNG' width='60px'/>
                    CrowStream
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" style={{ color: 'white' }}>Quienes somos</Nav.Link>
                    <Nav.Link href="#link" style={{ color: 'white' }}>Preguntas frecuentes</Nav.Link>
                </Nav>
                <Button variant="primary" style={{right: '0px'}}>Iniciar Sesión</Button>{' '}
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    );
  }
  
  export default NavbarCrowStream;