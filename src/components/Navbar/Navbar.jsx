import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-scroll';
import './Navb.css';
import {useState} from "react";

function Navb() {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)


    return (<Navbar expand="lg" className="bg-body-tertiary" id="Navb">
        <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{maxHeight: '100px'}}
                    navbarScroll>
                    {/*<Nav.Link href="#action2">Sign Up/Log In</Nav.Link>*/}
                    <Link
                        to="Auth-form-container"
                        className="nav-link"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                        onClick={closeMenu}>
                        Sign Up/Log In
                    </Link>
                </Nav>
                <Form className="d-flex">
                    <NavDropdown title="About" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">About Our Team</NavDropdown.Item>
                        <NavDropdown.Item href="#actio4">
                            Contact Us
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>);
}

export default Navb;