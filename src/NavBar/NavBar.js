import React from "react";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import { FormControl, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">RAEA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ "maxHeight": "100px" }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <NavDropdown title="Publications" id="navbarSctrollingDropdown">
                                <NavDropdown.Item href="#action3">Books</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Posters</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action1">Gallery</Nav.Link>
                            <NavDropdown title="About" id="navbarSctrollingDropdown">
                                <NavDropdown.Item href="#action3">History</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Founders & Current Board</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Executive Board</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Facilities
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#action1">Contact</Nav.Link>
                            {/* <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link> */}
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                arai-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;