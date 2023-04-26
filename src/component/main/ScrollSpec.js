import React from "react";
import {Specs} from "../../App";
import leftBut from "../../media/image/Vector.png"
import rightBut from "../../media/image/Vector (1).png"
const { useState } = React



const ScrollSpec = () => {

    const [NumSpec,setNum] = useState(0);
    const NextSpec = (i) =>{
        const iii=(i +1)%(Specs.length);
        setNum(iii);
        console.log("nextCardSpecialist id:",iii);
    }
    const  PredSpec = (i) =>{
        var ii=i-1;
        if(i==0){
            ii=Specs.length -1;
        }
        setNum(ii);
        console.log("predCardSpecialist id:",ii);
    }

    var pred = 0;
    if(NumSpec == 0){
        pred = (Specs.length) -1;
    }
    else{
        
        pred = NumSpec -1;
    }

    
    return (
        <div>
            <img src={leftBut} className="leftBut" 
            style={{marginTop:"121px",marginBottom:"121px"}} 
            onClick={()=>NextSpec(NumSpec)}></img>
            <img src={rightBut} className="rightBut" 
            style={{marginTop:"121px",marginBottom:"121px"}} 
            onClick={()=>PredSpec(NumSpec)}></img>
            <div className="predSpecCard microCard" style={{zIndex:"0"}}>
                <img src ={Specs[pred].src}></img>
            </div>
            <div className="scrollSpec" style={{zIndex:"1"}}>
                <div className="left">
                    <img src ={Specs[NumSpec].src}></img>
                    <p className="big bold blue">{Specs[NumSpec].name}</p>
                </div>
                <div className="right">
                    <p className="big black">{Specs[NumSpec].text1}</p>
                    <p className="big black">{Specs[NumSpec].text2}</p>
                    <p className="big black">{Specs[NumSpec].text3}</p>
                </div>
            </div>
            <div className="nextSpecCard microCard"  style={{zIndex:"0"}}>
                <img src ={Specs[(NumSpec+1)%(Specs.length)].src}></img>
            </div>
        </div>
        
    )
}

export default ScrollSpec;