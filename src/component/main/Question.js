import React from "react";
import "./Main.css";
import que from "../../media/image/que.png";
import {Ques} from "../../App";
import OpenedAnswer from "./OpenedAnswer";
import SentForm from "./SentForm";
const { useState } = React;

const Question = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [border, setBorder] = useState("10px 15px 50px rgba(0, 0, 0, 0.25)");
	
	
	function nameChange(event) {
		setName(event.target.value);
        setBorder("10px 15px 50px rgba(0, 0, 0, 0.25)");
        console.log("New name: ", event.target.value);
	}
	
	function phoneChange(event) {
		setPhone(event.target.value);
        setBorder("10px 15px 50px rgba(0, 0, 0, 0.25)");
        console.log("New phone: ", event.target.value);
	}

    function SentAndClearForm({name},{phone})
    {
        if (name.length >2 && phone.length >=6){
            console.log("данные корректны")
            SentForm({name},{phone});
            setName("");
            setPhone("");
        }
        else {
            console.log("данные некорректны")
            setBorder("1px 1px 10px rgba(100, 0, 0, 0.75)")
        }
    }

    return(
        <div className="question">
            <img src = {que}></img>
            <p className="large  bold Right"> 
            <span className="blue">
            Ответы на часто <wbr></wbr>задаваемые &nbsp;</span> 
            <span className="white">вопросы</span></p>
            <div className="que"> 
                <div className="queBlock">
                    <p className="big ">{Ques[0].text}</p>
                    <OpenedAnswer i={0}  ></OpenedAnswer>
                    <hr></hr>
                </div>
                <div className="queBlock">
                    <p className="big ">{Ques[1].text}</p>
                    <OpenedAnswer i={1} ></OpenedAnswer>
                    <hr></hr>
                </div>
                <div className="queBlock">
                    <p className="big ">{Ques[2].text}</p>
                    <OpenedAnswer i={2} ></OpenedAnswer>
                    <hr></hr>
                </div>
                <div className="queBlock">
                    <p className="big ">{Ques[3].text}</p>
                    <OpenedAnswer i={3} ></OpenedAnswer>
                    <hr></hr>
                </div>
                <div className="queBlock">
                    <p className="big ">{Ques[4].text}</p>
                    <OpenedAnswer i={4} ></OpenedAnswer>
                    <hr></hr>
                </div>
                <div className="queBlock">
                    <p className="big ">
                    {Ques[5].text}</p>
                    <OpenedAnswer i={5} ></OpenedAnswer>
                    <hr></hr>
                </div>
                <div className="queBlock">
                    <form>
                        <input type="name" id="name" 
                        value={name} placeholder="Имя" //minlength={3}
                        onChange={nameChange} style={{boxShadow:border}} ></input>
                        <input type="phone" id="phone" 
                        value={phone} placeholder="Телефон" //minlength={6}
                        onChange={phoneChange} style={{boxShadow:border}}></input>
                        <p className="button black normal" onClick={()=>SentAndClearForm({name},{phone})}>Отправить заявку</p>
                        <p className="large RightText Right"><span className="blue">ОСТАВТЕ ЗАЯВКУ</span><br></br>
                        <span className="white">И МЫ ВАМ ПОЗВОНИМ</span></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Question;