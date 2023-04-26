import React from "react";
import SentForm from "./SentForm";
import CROSE from "../../media/image/CROSE.png"
const { useState } = React;

const Form = ({i,setI}) => {
    const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
    const [error,setError] = useState("none");//"block");//
	const [border, setBorder] = useState("1px 5px 50px rgba(255, 255, 255, 0.35)");
	
    

	function nameChange(event) {
		setName(event.target.value);
        setBorder("1px 5px 50px rgba(255, 255, 255, 0.35)");
        console.log("New name: ", event.target.value);
	}
	
	function phoneChange(event) {
		setPhone(event.target.value);
        setBorder("1px 5px 50px rgba(255, 255, 255, 0.35)");
        console.log("New phone: ", event.target.value);
	}


    function NextAndSentForm({name},{phone}){
        
        if (name.length >2 && phone.length >=6){
            console.log("данные корректны")
            SentForm({name},{phone});
            setI(2);
        }
        else {
            console.log("данные некорректны")
            //setError("block");
            setBorder("1px 1px 10px rgba(100, 0, 0, 0.75)")
            console.log(error);
        }
    }

    function CloseError() {
		setError("none");
	}

    function CloseForm(){
        setI(0);
        setName("");
        setPhone("");
        setBorder("1px 5px 50px rgba(255, 255, 255, 0.35)");
        console.log("Close Form");
        
    }


    if (i==1){
        return(
            <div>

                <div className="blackFon"></div>
                <div className="formBlock">
                
                <form>
                    <img src={CROSE} className="Right" onClick={()=>CloseForm()}></img>
                    <p className="headText Left p1"><span className="blue">ОСТАВТЕ ЗАЯВКУ</span><br></br>
                    <span className="white">И МЫ ВАМ ПОЗВОНИМ</span></p>
                    <input type="name" id="name" value={name} placeholder="Имя" //minlength={3} 
                    onChange={nameChange} style={{boxShadow:border}}></input>
                    <input type="phone" id="phone" value={phone} placeholder="Телефон" //minlength={6} 
                    onChange={phoneChange} style={{boxShadow:border}}></input>
                    <p className="button black left normal" onClick={()=>NextAndSentForm({name},{phone})}>Отправить заявку</p>
                </form>
                </div>
                <div className="errorBlock" style={{display:error}}>
                    <div className="blackFon"></div>
                    <img src={CROSE} onClick={()=>CloseError()}></img>
                    <p className="big bold"><span className="blue">ОШИБКА</span> <br></br> <span className="white">ВВОДА ДАННЫХ!</span></p>
                </div>
            </div>  
        );
    }
    else if (i==2)
    {
        
        return(
            <div>
    
                <div className="blackFon"></div>
                <div className="formBlock">
                
                    <img src={CROSE} className="Right" onClick={()=>CloseForm()}></img>
                    <p className="large bold Left p1" style={{marginTop:"114px"}}><span className="blue">Спасибо!</span><br></br>
                    <span className="white">Мы скоро с вами <br></br>свяжемся</span></p>
            </div>
    
            </div>  
        );
    }
    else return;
      
}

export default Form;