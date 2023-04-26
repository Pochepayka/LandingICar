import React from "react";
import "./Main.css";
import ADVANTAGES from "../../media/image/ADVANTAGES.png"
import SMAIL from "../../media/image/Group.png"
import TIME from "../../media/image/time.png"
import TALK from "../../media/image/talk.png"
import DOC from "../../media/image/document.png"
import CAR from "../../media/image/car.png"

const Advantages = () => {
    return(
        <div className="advantages">
            {//<img src= {ADVANTAGES}></img>
            }
            
            <p className="headText"><span className="white">ПОЧЕМУ СТОИТ <br></br> ВЫБРАТЬ </span><span className="blue">НАС?</span></p>
            <div className="AdBlock1">
                <img src={SMAIL}></img>
                <p className="big "><span className="bold blue">Никаких<br></br> изнурительных<br></br> поездок</span>
                <span className="marg5 white"><br></br>Вы не ездите на осмотр заведомо дефектных авто</span></p>
            </div>
            <div className="AdBlock2 ">
                <img src={TIME}></img>
                <p className="big "><span className="bold blue">Экономия времени<br></br></span>
                <span className="marg5 white">Вы тратите не более двух часов времени на подбор вашего авто</span></p>
            </div>
            <div className="AdBlock3">
                <img src={TALK}></img>
                <p className="big"><span className="bold blue">Общение с клиентом на протежении всего времени<br></br></span>
                <span className="marg5 white">Поможем определиться с моделью и комплектацией, заключить договор,  после покупки проконсультируем по обслуживанию </span></p>
            </div>
            <div className="AdBlock4">
                <img src={DOC}></img>
                <p className="big"><span className="bold blue">Cтрогие критерии подбора<br></br></span>
                <span className="marg5 white">Техническая исправность, отсутствие серьезных ДТП, юридическая чистота, возраст авто, пробег, косметическое состояние </span></p>
            </div>
            <div className="AdBlock5">
                <p className="big bold blue">Автомобиль мечты легко и просто!</p>
                <img src={CAR}></img>
            </div>
            
        </div>
    );
}

export default Advantages;