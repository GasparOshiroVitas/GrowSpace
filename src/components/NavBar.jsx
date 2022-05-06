import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";



const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"> Growspace </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#features">Grow Shop</Nav.Link>
            <Nav.Link href="#pricing">Smoke Shop</Nav.Link>
    </Nav>
    <Nav>
        <Nav.Link eventKey={2} href="#memes">
            Consultas
        </Nav.Link>
    </Nav>
    <h6>Carrito      <CartWidget/></h6>
    </Navbar.Collapse>
    </Container>
</Navbar>
    )
}
export default NavBar;
