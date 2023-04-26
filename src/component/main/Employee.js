import React from "react";
import "./Main.css";
import ScrollSpec from "./ScrollSpec";


const Employee = () => {
    return(
        <div className="employee">
            <p className="large bold"><span className="whith">НАШИ&nbsp;</span><span className="blue">СПЕЦИАЛИСТЫ</span></p>
            <ScrollSpec></ScrollSpec>
            <a name = "offer"></a>
        </div>
    );
}

export default Employee;