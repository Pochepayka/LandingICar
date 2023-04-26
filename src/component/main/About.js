import React from "react";
import "./Main.css";


const About = ({setI}) => {
    return(
        <div className="about">
                <a id="about" name="about"></a>
                <p className="blue veryBig">Подберём для Вас автомобиль мечты<br></br> с гарантией</p>
                <p className="white big" style={{marginTop:"34px", width: "570px",height:"159px"}}
                >Найдём оптимальное предложение на рынке по вашим пожеланиям и нашим строгим критериям  </p>
                <p className="button" style={{marginTop:"16px", padding:"15.5px 53.5px 15.5px 53.5px", width: "303px"}}
                onClick={()=>setI(1)}>Оставить заявку</p>
            </div>
    );
}
export default About;