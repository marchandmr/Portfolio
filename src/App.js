import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navi from "./Component/NavBar";
import JumboTron from "./Component/JumboTron"
import Footer from "./Component/Footer"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"


function App() {
  return (
    <Router>
      <div>
        <JumboTron />
        <Navi />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
