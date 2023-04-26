import React from "react";
import "./Main.css";
import BACKS from "../../media/image/BACKS.png"
import BALANSE from "../../media/image/BALANSE.png"
import SETTING from "../../media/image/SETTING.png"

const Guarantee = () => {
    return(
        <div className="guarantee">
            <img id = "backs" src = {BACKS}></img>
            <img id = "setting" src = {SETTING}></img>
            <img id = "balanse" src = {BALANSE}></img>
            {/*<img src = {GUARANTEE}></img>*/}
            <p className="large bold"><span className="white">Какие мы даём</span><span className="blue"> Гарантии?</span></p>
            
            <div className="block1 blocks">

                <p className="big bold blue Right RightText fullWidthBlock"
                style = {{marginBottom : "7px"}}
                ><span>Гарантия 100%</span><br/> <span>возврата денег</span></p>
                <p className="normal bold RightText fullWidthBlock"
                style = {{height : "71px"}}
                >Если мы не сможем найти для вас требуемый автомобиль в установленные сроки — вернем предоплату в полном объёме</p>
            </div>
            
            <div className="block2 blocks">
                <p className="big bold blue Left LeftText fullWidthBlock"
                style = {{marginBottom : "7px"}}
                >Техническая гарантия<br/> 2 месяца</p>
                <p className="normal bold marginTop"
                style = {{height : "101px", width: "437px"}}
                >Если после проведения рекомендованных <br/>нами работ возникнут проблемы с автомобилем, мы предоставим большую скидку у наших партнеров</p>
            </div>
            
            <div className="block3 blocks">
                <p className="big bold blue Left LeftText fullWidthBlock"
                style = {{marginBottom : "15px"}}
                >Гарантия юридической<br/> чистоты</p>
                <p className="normal bold marginTop"
                style = {{height : "71px"}}
                >Вы приобретаете автомобиль без кредитных и залоговых обязательств, запрета на регистрацию и других ограничений</p>
            </div>
            <a name = "done" id="done"></a>
        </div>
    );
}

export default Guarantee;