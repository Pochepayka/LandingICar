import React from "react";
import {Ques} from "../../App";
import OPEN from "../../media/image/MORE.png";
import CLOSE from "../../media/image/CLOSE.png";
const { useState } = React;

const OpenedAnswer = (i) => {
    const [arr, setArr] = useState([false, false, false, false, false,false]);
    
    const OpenQue = (i) =>{
        var arr1 = Object.assign([], arr);
        arr1[i] = true;
        setArr(arr1);
        console.log(arr);
        console.log("openCardAnswer id:",i);
    }
    const CloseQue = (i) =>{
        var arr1 = Object.assign([], arr);
        arr1[i] = false;
        setArr(arr1);
        console.log("closeCardAnswer id:",i);
    }

    if (arr[i.i]){
        return(
            <div onClick={()=>CloseQue(i.i)}>
                <div  className="imgClose">
                    <img  src={CLOSE} ></img>
                </div>
                <p className="big bold marginTop pAnswer">{Ques[i.i].answer}</p>
            </div>
        )
    }
    else
    {
        return (
            <div onClick={()=>OpenQue(i.i)} className="imgOpen">
                <img src={OPEN}></img>
            </div>
        )
    }
}

export default OpenedAnswer;