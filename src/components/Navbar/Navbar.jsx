import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {FormControl} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState} from "react";

function Navb(props) {
    const search = (e) => {
        props.setFilters({s: e, page: 1});
    }
    console.log("this is posts")
    console.log(props.posts);
    console.log("this is filters")
    console.log(props.filters);
    const [searchTerm, setSearchTerm] = useState('');
    const [typingTimer, setTypingTimer] = useState(null);

    const handleSearch = () => {
        if (!searchTerm) return;
        search(searchTerm);
    };

    const handleKeyUp = (event) => {
        clearTimeout(typingTimer);
        setTypingTimer(
            setTimeout(() => {
                handleSearch();
            }, 3000)
        );
    };


    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">About Us</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto my-2 my-lg-0" style={{maxHeight: '100px'}}
                         navbarScroll>  {/* Class changed to ms-auto */}
                        <Nav.Link href="/logout">Logout</Nav.Link>
                    </Nav>

                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyUp={handleKeyUp}
                        />
                        <Button variant="outline-success" onClick={handleSearch} disabled={!searchTerm}>
                            Search
                        </Button>
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navb;