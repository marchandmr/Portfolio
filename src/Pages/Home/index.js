
import React from 'react';
import { MDBMedia } from 'mdbreact';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

const Home = () => {
    return (
        <Container className="homeContainer">
            <MDBMedia>
                <MDBMedia left top className="mr-3" href="#">
                    <MDBMedia className="img" object src="https://raw.githubusercontent.com/marchandmr/my-portfolio/main/assets/images/me.jpg" alt="Generic placeholder image" />
                </MDBMedia>
                <MDBMedia body>
                    <MDBMedia heading className="header">
                        About Me
        </MDBMedia>
                    <p>Hello, my name is Matthew Marchand, and I am a web developer. After spending years in the medical industry,
                    I decided it was time to follow my dreams and move over to web development. The transition was not always
                    easy but so far it has been one of the best decisions I have ever made. I am always available to listen to
            any inquiries, feel free to reach out to me using my contact page.</p>
                </MDBMedia>
            </MDBMedia>
        </Container>
    );
}

export default Home;