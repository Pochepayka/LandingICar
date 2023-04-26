import React from "react";
import "./Main.css";
import phone from "../../media/image/PHONE.png"
import point from "../../media/image/MAP_POINT.png"
import tg from "../../media/image/TG.png"
import whats from "../../media/image/WHATSAPP.png"
import Map from "./map";

import { coordinates } from "../../App";

const Contact = () => {
    return(
        <div className="contact">
            <a name = "contact"></a>
            <hr className="br"></hr>
            <div className="left">    
                <p className="large bold headText"><span className="white">наши</span><span className="blue"> контакты</span></p>
                <img src={phone}></img>
                <p className="big phoneText">+7 (901) 715-71-04</p>
                <img src={point}></img>
                <p className="big mapText">г.Москва, Варшавское шоссе 1-2 W-Plaza офис А314, 3 этаж</p>
                <img src={tg}></img>
                <img src={whats}></img>
                <p className="big tgText">+7 (910) 813-98-69</p>
            </div>
            
            <div className="right">
                <Map coordinates={coordinates}></Map>
            </div>
            
            
        
        
        
        </div>
    );
}

export default Contact;