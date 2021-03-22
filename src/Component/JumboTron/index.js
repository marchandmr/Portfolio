import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";


function JumboTron() {

    return (
        <MDBJumbotron className="mb-0" fluid>
            <MDBContainer>
                <h2 className="display-4">Hello World</h2>

            </MDBContainer>
        </MDBJumbotron>
    )

};

export default JumboTron;