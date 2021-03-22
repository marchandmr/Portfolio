import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import "./jumbotron.css";


function JumboTron() {

    return (
        <Jumbotron>
            <Container>
                <h1>Hello World</h1>

            </Container>
        </Jumbotron>
    )

};

export default JumboTron;