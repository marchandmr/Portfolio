import React from "react";
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"


function Navi() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="navBar">
                <Navbar.Brand href="/">Matthew Marchand</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>

            </Navbar>
        </div>
    )
};

export default Navi;