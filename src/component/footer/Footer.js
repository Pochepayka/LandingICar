import React from "react";
import "./Footer.css";
import logo from "../../media/image/icar.logo2.png"

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} className="logo" alt="logo"/>
            <div className="right">
                
                <p className="number" >+7(901)715-71-04</p>
                <p className="lozung" >Mы открыты к сотрудничеству!</p>
                
            </div>
        </div>
    );
}

export default Footer;