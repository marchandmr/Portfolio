/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import { FiGithub } from 'react-icons/fi';
import { GrLinkedin } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { BsNewspaper } from 'react-icons/bs'
import "./footer.css";

const Footer = () => {
    return (
        <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">




            <hr />
            <div className="text-center">
                <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">

                        <a href="https://github.com/marchandmr"><FiGithub size={30} /></a>

                    </li>
                    <li className="list-inline-item">

                        <a href="https://linkedin.com/in/matthewmarchand-ab55211ba
"><GrLinkedin size={30} />
                        </a>
                    </li>
                    <li className="list-inline-item">

                        <a href="mailto:marchandmr@icloud.com"><MdEmail size={30} /></a>

                    </li>
                    <li className="list-inline-item">

                        <BsNewspaper size={30} />

                    </li>



                </ul>
            </div>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    <p>469-406-3774</p>
                </MDBContainer>
            </div>
            <hr />
        </MDBFooter>
    );
}

export default Footer;