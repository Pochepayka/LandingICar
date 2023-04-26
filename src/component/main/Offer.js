import React from "react";
import "./Main.css";


const Offer = ({setI}) => {
    return(
        <div className="offer">
            <div className="left">
                <div className="block blocks" style={{width: "435px"}}>
                    <p className="headWrite blue big bold" >Подбор автомобиля <br></br>&laquo;под ключ&raquo;</p>
                    <p className="mainWrite write normal black bold">Проверка автомобиля включает в себя технический осмотр, диагностику работоспособности систем и компонентов автомобиля, а так же юридическую чистоту.</p>
                    <p className="price write big bold">От 5000 pуб.</p>
                </div>
                
                <div className="block blocks" style={{width: "435px", marginTop:"25px"}}>
                    <p className="headWrite blue big bold" >Эксперт на день</p>
                    <p className="mainWrite write normal black bold">Выездная диагностика нескольких автомобилей в течении одного дня.</p>
                    <p className="price write big bold">От 5000 pуб.</p>
                </div>

                <div className="block blocks" style={{width: "254px", height:"116px", marginTop:"25px", float:"right"}}>
                    <p className="headWrite blue big bold" >Подбор нового автомобиля</p>
                    <p className="price write big bold">От 7000 pуб.</p>
                </div>

            </div>
            <div className="right">
                <p className="lozung large">
                    <span className="blue">КАКИЕ УСЛУГИ&nbsp;</span><br></br><span className="white">МЫ ПРЕДЛАГАЕМ?</span>
                </p>
                <div className="block blocks" style={{width: "296px", height:"96px", marginTop:"60px"}}>
                    <p className="headWrite blue big bold" >Экспресс-подбор</p>
                    <p className="price write big bold">От 2000 pуб.</p>
                </div>
                
                <div className="block blocks" style={{width: "435px", marginTop:"25px"}}>
                    
                    <p className="headWrite blue big bold" >Выездная <br></br>диагностика</p>
                    <p className="mainWrite write normal black bold">Наш специалист проверит юридическую 
                    чистоту машины, техническую исправность, состояние салона и кузова, скрытые 
                    свидетельства ДТП, поможет Вам с выбором и расскажет про все риски.</p>
                    <p className="price write big bold">От 2500 pуб.</p>
                </div>
            </div>
            <p className="button" onClick={()=>setI(1)}>Оставить заявку</p>
            

        </div>
    );
}
export default Offer;