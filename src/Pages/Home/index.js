
import React from 'react';
import { MDBMedia } from 'mdbreact';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "../../Component/JumboTron";
import Navi from "../../Component/NavBar";

const Home = () => {
    return (
        <div>
            <Jumbotron />
            <Navi />
            <Container className="homeContainer">
                <MDBMedia>
                    <MDBMedia left top className="mr-3" href="#">
                        <MDBMedia className="img" object src="https://raw.githubusercontent.com/marchandmr/my-portfolio/main/assets/images/me.jpg" alt="Generic placeholder image" />
                    </MDBMedia>
                    <MDBMedia body>
                        <MDBMedia heading className="header">
                            Web Developer
        </MDBMedia>
                        <p>
                            Full stack web developer, with a life-long dedication to learning. Effective at combining creativity and problem solving to develop user-friendly applications. Known among peers for strong wit and attention to detail no matter the complexity of the project. I am always available to listen to
            any inquiries, feel free to reach out to me using my contact page, or by email.  <a href="mailto:marchandmr@icloud.com">marchandmr@icloud.com</a></p>
                    </MDBMedia>
                </MDBMedia>
            </Container>
        </div>
    );
}

export default Home;