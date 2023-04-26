import React from "react";
import "./Main.css";
import GoFeedback from "./GoFeedback";
import Scroll from "./Scroll";
import MES from "../../media/image/MESSENGE.png"


const Done = () => {
    return(
        <div className="done">
            <p className="large center headText"><span className="blue">КАКИЕ МАШИНЫ&nbsp;</span><span className="white">МЫ ПОДОБРАЛИ?</span></p>
            <hr></hr>
            <Scroll></Scroll>
            <p className="button" onClick={()=>GoFeedback()}>Оставить отзыв</p>
            <img src={MES}></img>
        </div>
    );
}

export default Done;