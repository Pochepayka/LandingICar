import React, { useState } from "react";
import {Dones} from "../../App";
import leftBut from "../../media/image/Vector.png";
import rightBut from "../../media/image/Vector (1).png";
//const { useState } = React;



const Scroll = () =>{

    const [Num,setNum]=useState(0);

    const Next = (i) =>{
      var ii=Math.abs((i +1)%(Dones.length));
      setNum(ii);
      console.log("nextCardDone id:",ii);
    }
    const  Pred = (i) =>{
      var ii=i-1;
      if (Num == 0){
        ii=Dones.length -1;
      }
      setNum(ii);
      console.log("predCardDone id:",ii);
    }

    return (
        <div>
            <img src={leftBut} className="leftBut" onClick={()=>Next(Num)}></img>
            <img src={rightBut} className="rightBut"onClick={()=>Pred(Num)}></img>
            <div className="scroll">
                <img src={Dones[Num].src}></img>
                <div className="right">
                    <p className="big bold">{Dones[Num].name}</p>
                    <div className="margin">
                        <p className="normal"><span> · Срок подбора: </span>{Dones[Num].time}</p>
                        <p className="normal"><span> · Цена в объявлении: </span>{Dones[Num].priceOnWall}</p>
                        <p className="normal"><span> · Цена покупки: </span>{Dones[Num].realPrice}</p>
                    </div>
                    <p className="white opacity big marginBottom bold">Отзыв клиента</p>
                    <p className="big bold">{Dones[Num].text}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Scroll;