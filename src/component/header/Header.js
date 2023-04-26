import React from "react";
import "./Header.css";
import companyLogo from "../../media/image/icar.logo2.png" 
const Header = ({setI}) => {
    return (
        <div className="header">
            <img src={companyLogo} className="logo " alt="logo"/>
            <div className="linksForBlocks">
                
                <p className="href" onClick={()=>{window.location.href = '#about'}/*()=>GoTo("About")*/}>О нас</p>
                <p className="href" onClick={()=>{window.location.href = '#offer'}}>Услуги</p>
                <p className="href" onClick={()=>{window.location.href = '#done'}}>Отзывы</p>
                <p className="href" onClick={()=>{window.location.href = '#contact'}}>Контакты</p>

                <p className="button" onClick={()=>setI(1)}>Оставить заявку</p>
            </div>
        </div>
    );
}


export default Header;