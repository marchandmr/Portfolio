import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Jumbotron from "../../Component/JumboTron";
import Navi from "../../Component/NavBar";


function Projects() {
    const [project1, setProject1] = useState([])





    useEffect(() => {
        loadProjects()
    }, [])

    function loadProjects() {
        setProject1([{ name: "Meal-Maker", repo: "https://github.com/JasonMcD96/Meal-Maker", site: "https://jasonmcd96.github.io/Meal-Maker/", img: "https://raw.githubusercontent.com/marchandmr/Meal-Maker/main/homepreview.png", info: "Meal Maker is an app for a user to search for meal recipes and drink recipes. Using 3rd party APIs we were able to receive objects for dishes and for drinks that had necessary ingredients and steps to make them. The user is also able to save recipes that they have found to their favorites that are stored locally. When the user navigates to the favorites tab they are presented with lists of their favorited drink and food recipes. In the food tab the user is able to search for a meal recipe by searching with ingredient names and is also able to view the website in which the recipe directions are located by clicking the image. When the user navigates to the drinks tab they are able to search for mixed drink recipes using a keyword or drink name." },
        { name: "Happy Healthy Home", repo: "https://github.com/marchandmr/project2", site: "https://polar-lake-20379.herokuapp.com/", img: "https://cdn4.vectorstock.com/i/1000x1000/95/98/boy-and-girl-doing-chores-in-house-vector-18009598.jpg", info: "Happy Healthy Home, is an application that allows a user to keep track of the responsibilites of not only themselves, but also the daily responsibilities of their loved ones, or anyone they are in charge of. This project utilizes handlebarsJS, Mysql, Express, HTML, CSS, Javascript, and NodeJS to create a full stack CRUD application." },
        { name: "Burger", repo: "https://github.com/marchandmr/burger", site: "https://limitless-brushlands-53796.herokuapp.com", img: "https://raw.githubusercontent.com/marchandmr/burger/main/public/assets/img/screenshot.png", info: "This application allows the user to devour and create new burgers when they see fit. This is done by using, Mysql for the database, Express for the api/routes, handlebars for the views, and by using orm functions." },
        { name: "Workout-Tracker", repo: "https://github.com/marchandmr/Workout-Tracker", site: "https://thawing-dusk-37639.herokuapp.com/?id=603da2db55dc130015d029d9", img: "https://raw.githubusercontent.com/marchandmr/Workout-Tracker/main/public/assets/workout%20img.png", info: "Workout-Tracker allows users to keep track of their workouts. Created using MongoDB, Mongoose, Express, HTML, Javascript, and CSS." },
        { name: "RC Spots", repo: "https://github.com/marchandmr/Rc-Social-Network", site: "https://powerful-journey-56416.herokuapp.com", img: "https://raw.githubusercontent.com/marchandmr/Rc-Social-Network/main/client/public/img.png", info: "RC spots is a social media platform for RC car enthusiasts. The purpose of this website is to give the RC community a place to share their favorite locations to drive." },
        { name: "Javascript Quiz", repo: "https://github.com/marchandmr/Javascript-Quiz-HW4", site: "https://marchandmr.github.io/Javascript-Quiz-HW4/", img: "https://raw.githubusercontent.com/marchandmr/Javascript-Quiz-HW4/main/Assets/screenshot.png", info: " A JavaScript quiz that increments the score when a question was answered correctly, and decrement the time when a wrong answer has been chosen. When the quiz is finished, the user is prompted for their initials to save on a score board." }

        ])
    }
    return (
        <div>
            <Jumbotron />
            <Navi />
            <br></br>
            <h1 className="projectHeader">My Projects</h1>
            <hr></hr>
            <br></br>
            <br></br>
            <br></br>



            <div> {project1.map(({ name, repo, site, img, info }) => {
                return (

                    <div>
                        < ul >
                            <Container fluid="md">
                                <Row>
                                    <Col ><h1>{name}</h1><br></br></Col>
                                </Row>
                                <Row>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={img} />
                                    </Card>

                                    <Col md={7}><p>{info}</p></Col>
                                </Row>
                                <Row>
                                    <Col className="Repo" ><a href={repo}>Click here to view on github</a></Col>
                                </Row>
                                <Row>
                                    <Col className="text-center"><Button variant="outline-secondary" href={site}>View Live Site</Button></Col></Row>


                            </Container>
                            <hr className="projectBorder"></hr>
                        </ul>


                    </div>

                )
            }




            )
            }
            </div>
        </div >
    )
}

export default Projects;