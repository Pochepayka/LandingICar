import React from "react";
import "./Main.css";
import About from "./About";
import Employee from "./Employee";
import Offer from "./Offer";
import HowItWorks from "./HowItWorks";
import Advantages from "./Advantages";
import Guarantee from "./Guarantee";
import Done from "./Done";
import Question from "./Question";
import Contact from "./Contact";


const Main = ({setI}) => {
    return (
        <div className="main">
            <About setI={setI}/>

            <Employee/>

            <Offer setI={setI}/>

            <HowItWorks/>

            <Advantages/>

            <Guarantee/>

            <Done/>

            <Question/>

            <Contact/>
        </div>
    );
}

export default Main;