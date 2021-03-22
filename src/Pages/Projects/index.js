import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';



function Projects() {
    const [project1, setProject1] = useState([])
    const [project2, setProject2] = useState([])
    const [project3, setProject3] = useState([])
    const [project4, setProject4] = useState([])




    useEffect(() => {
        loadProjects()
    }, [])

    function loadProjects() {
        setProject1([{ name: "Meal-Maker", repo: "https://github.com/JasonMcD96/Meal-Maker", site: "https://jasonmcd96.github.io/Meal-Maker/", img: "https://raw.githubusercontent.com/marchandmr/Meal-Maker/main/homepreview.png" }
        ])

        setProject2([{ name: "Happy Healthy Home", repo: "https://github.com/marchandmr/project2", site: "https://polar-lake-20379.herokuapp.com/", img: "https://cdn4.vectorstock.com/i/1000x1000/95/98/boy-and-girl-doing-chores-in-house-vector-18009598.jpg" }])

        setProject3([{ name: "burger", repo: "https://github.com/marchandmr/burger", site: "https://limitless-brushlands-53796.herokuapp.com", img: "https://raw.githubusercontent.com/marchandmr/burger/main/public/assets/img/screenshot.png" }])

        setProject4([{ name: "Workout-Tracker", repo: "https://github.com/marchandmr/Workout-Tracker", site: "https://thawing-dusk-37639.herokuapp.com/?id=603da2db55dc130015d029d9", img: "https://raw.githubusercontent.com/marchandmr/Workout-Tracker/main/public/assets/workout%20img.png" }])
    }
    return (
        <div>
            <br></br>
            <h1>Portfolio</h1>
            <hr></hr>



            <div> {project1.map(({ name, repo, site, img }) => {
                return (


                    <Container fluid>
                        <Row className="center">
                            <Col><Card style={{ width: '18rem' }}>
                                <a href={site}>   <Card.Img variant="top" src={img} /></a>
                                <Card.Body>
                                    <a href={repo}> <Card.Title>{name}</Card.Title> </a>
                                    <Card.Text>
                                        Meal-Maker is an application that allows a user to create a meal using ingredients they currently have.
    </Card.Text>
                                </Card.Body>
                            </Card></Col>
                            {project2.map(({ name, repo, site, img }) => {
                                return (
                                    <Col><Card style={{ width: '18rem' }}>
                                        <a href={site}>   <Card.Img variant="top" src={img} /></a>
                                        <Card.Body>
                                            <a href={repo}> <Card.Title>{name}</Card.Title> </a>
                                            <Card.Text>
                                                Happy Healthy Home is a full stack C.R.U.D application that allows a user to create and assign tasks.
        </Card.Text>
                                        </Card.Body>
                                    </Card></Col>
                                )
                            })}
                            {project3.map(({ name, repo, site, img }) => {
                                return (
                                    <Col><Card style={{ width: '18rem' }}>
                                        <a href={site}>   <Card.Img variant="top" src={img} /></a>
                                        <Card.Body>
                                            <a href={repo}> <Card.Title>{name}</Card.Title> </a>
                                            <Card.Text>
                                                This simple burger app is fullstack, and uses handlebars to render the webpage while using Mysql as a database to store all of the created burger types.
        </Card.Text>
                                        </Card.Body>
                                    </Card></Col>
                                )
                            })}
                        </Row>
                        <Row className="center">
                            {project4.map(({ name, repo, site, img }) => {
                                return (
                                    <Col><Card style={{ width: '18rem' }}>
                                        <a href={site}>   <Card.Img variant="top" src={img} /></a>
                                        <Card.Body>
                                            <a href={repo}> <Card.Title>{name}</Card.Title> </a>
                                            <Card.Text>
                                                Workout Tracker allows a user to input the specifics of their weekly workouts and view all of the biometric data displaye in graphs and charts.
        </Card.Text>
                                        </Card.Body>
                                    </Card></Col>
                                )
                            })}
                        </Row>
                    </Container>

                    // <MDBRow className="row justify-content-center">
                    //     <MDBCol size="2" >
                    //         <MDBCard>
                    //             <a href={site}> <MDBCardImage
                    //                 hover
                    //                 overlay='white-light'
                    //                 className='card-img-top'
                    //                 src={img}
                    //                 alt='man'
                    //             /> </a>

                    //             <MDBCardBody cascade className='text-center'>
                    //                 <MDBCardTitle className='card-title'>
                    //                     <a href={repo}><strong>{name}</strong> </a>
                    //                 </MDBCardTitle>
                    //             </MDBCardBody>
                    //         </MDBCard>
                    //     </MDBCol>

                    //     {project2.map(({ name, repo, site, img }) => {
                    //         return (
                    //             <MDBCol className="column" size="2">
                    //                 <MDBCard>
                    //                     <a href={site}> <MDBCardImage
                    //                         hover
                    //                         overlay='white-light'
                    //                         className='card-img-top'
                    //                         src={img}
                    //                         alt='man'
                    //                     /> </a>

                    //                     <MDBCardBody cascade className='text-center'>
                    //                         <MDBCardTitle className='card-title'>
                    //                             <a href={repo}><strong>{name}</strong> </a>
                    //                         </MDBCardTitle>
                    //                     </MDBCardBody>
                    //                 </MDBCard>
                    //             </MDBCol>
                    //         )

                    //     })}
                    //     {project3.map(({ name, repo, site, img }) => {
                    //         return (
                    //             <MDBCol size="3" >
                    //                 <MDBCard>
                    //                     <a href={site}> <MDBCardImage
                    //                         hover
                    //                         overlay='white-light'
                    //                         className='card-img-top'
                    //                         src={img}
                    //                         alt='man'
                    //                     /> </a>

                    //                     <MDBCardBody cascade className='text-center'>
                    //                         <MDBCardTitle className='card-title'>
                    //                             <a href={repo}><strong>{name}</strong> </a>
                    //                         </MDBCardTitle>
                    //                     </MDBCardBody>
                    //                 </MDBCard>
                    //             </MDBCol>
                    //         )

                    //     })}

                    //     {project4.map(({ name, repo, site, img }) => {
                    //         return (
                    //             <MDBCol size="2" >
                    //                 <MDBCard>
                    //                     <a href={site}> <MDBCardImage
                    //                         hover
                    //                         overlay='white-light'
                    //                         className='card-img-top'
                    //                         src={img}
                    //                         alt='man'
                    //                     /> </a>

                    //                     <MDBCardBody cascade className='text-center'>
                    //                         <MDBCardTitle className='card-title'>
                    //                             <a href={repo}><strong>{name}</strong> </a>
                    //                         </MDBCardTitle>
                    //                     </MDBCardBody>
                    //                 </MDBCard>
                    //             </MDBCol>
                    //         )

                    //     })}

                    // </MDBRow>
                )
            }




            )
            }
            </div>
        </div >
    )
}

export default Projects;