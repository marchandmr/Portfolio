import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import Jumbotron from "../../Component/JumboTron";
import Navi from "../../Component/NavBar";
import Button from "react-bootstrap/Button";

function Contact() {
    const [state, handleSubmit] = useForm("mjvpwajk");
    if (state.succeeded) {
        return <p>Thank you for your interest!</p>;
    }
    return (
        <div>
            <Jumbotron />
            <Navi />
            <div className="header">
                <h1>Contact Me</h1>
                <hr></hr>
            </div>

            <MDBContainer className="contactForm">
                <MDBRow className="row justify-content-center">
                    <MDBCol md="6">
                        <form onSubmit={handleSubmit}>
                            <div className="grey-text">

                                <MDBInput label="Your email" icon="envelope" type="email" validate error="wrong" id="email" name="email"
                                    success="right" />

                                <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" id="message" name="message" />
                            </div>
                            <div className="text-center">
                                <Button type="submit" disabled={state.submitting} variant="outline-secondary">Send</Button>{' '}

                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>



        </div>
    );
}


export default Contact;
