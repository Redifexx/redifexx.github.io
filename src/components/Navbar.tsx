import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    useEffect(() => {
        function scrollHandler() {
            if (window.scrollY >= 20) {
                updateNavbar(true);
            } else {
                updateNavbar(false);
            }
        }
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);
    
    return (
        <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        bg="dark" variant="dark"
        className={navColour ? "sticky navbar-dark bg-dark" : "navbar-light bg-light"}
        >
            <Container>
                <Navbar.Brand as={Link} to="/">Giovanni Perez Colon</Navbar.Brand>
                <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={() => {
                    updateExpanded(!expand);
                }}
                >
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" >Home</Nav.Link>
                        <Nav.Link as={Link} to="/code" >Software Dev</Nav.Link>
                        <Nav.Link as={Link} to="/games" >Game Dev</Nav.Link>
                        <Nav.Link as={Link} to="/art" >3D Art</Nav.Link>
                        <Nav.Link as={Link} to="/contact" >Contact Info</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
