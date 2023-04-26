import React from "react";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Main from "./component/main/Main";
import Form from "./component/main/Form";
const { useState } = React

export const coordinates = ["55.703992","37.625909"]

export const Dones = [
  {id: 1, name: 'SKODA OCTAVIA 1.8 DSG 2015',
  time:"6 дней",
  priceOnWall: "1.050.000₽",
  realPrice: " 1.020.000₽",
  text:`Спасибо Кире и Тимофею, помогли в выборе шкоды Октавия, 
  за относительно бюджетные деньги, работают пунктуально, 
  вежливо, видно что  ...`,
  src: "https://auto.vercity.ru/gallery/img/automobiles/Skoda/2009%20Skoda%20Octavia%20RS/900x/2009%20Skoda%20Octavia%20RS%20017.jpg"
  },
  {id: 2, name: 'MITSUBISI LANSER 1.6 2009',
  time:"2 дня",
  priceOnWall: "400.000₽",
  realPrice: "350.000₽",
  text:`Спасибо Алексею, машина огонь, обслужена, 
  пройдено ТО, все в лучшем виде, буду покупать машину жене - 
  точно обращусь опять к Вам! Спасибо ICar!!!`,
  src: "https://avatars.mds.yandex.net/i?id=688cb7d8b3df535ed09514e1889d571d-4566264-images-thumbs&n=13"
  } 
];

export const Specs = [
  {id: 1, name: 'Лыткин Глеб',
  text1:` · Cооснователь компании ICar`,
  text2:` · Более 7 лет на авторынке`,
  text3:` · Более 150 довольных клиентов`,
  src: "https://cdn.profi.ru/xfiles/pfiles/9b01be04e9624e12b4d56a9f1a05f3db.jpg-profi_a34-240.jpg"
  },
  {id: 2, name: 'Захаров Егор',
  text1:` · Эксперт WAG`,
  text2:` · Более 5 лет на авторынке`,
  text3:` · Более 50 довольных клиентов`,
  src: "https://sun1-54.userapi.com/impg/GWJw_fkYniuHZZlh-Nmqtx0cr-mjzyy0FZPufg/VWpPAHTr3dc.jpg?size=1620x2160&quality=95&sign=732c87345301a92376770ee7aa2e39a2&type=album"
  },
  {id: 3, name: 'Пивунов Никита',
  text1:` · Эксперт BMW`,
  text2:` · Более 2 лет на авторынке`,
  text3:` · Более 15 довольных клиентов`,
  src: "https://cdn.profi.ru/xfiles/pfiles/b1d86b678ad74768be7243591dc9ec4d.jpg-profi_a34-240.jpg"
  } 
];

export const Ques = [
  {id:0,text:"Какой порядок оформления заявки на подбор автомобиля?",
  answer: `Oтвет на этот вопрос очень прост. Понять ценовой диапазон->
  по нашим рекомендациям выбрать марку и модель->дать одобрение на подбор заключив договор.`},
  {id:1,text:"Сроки подбора автомобиля «под ключ»?",
  answer: `Oтвет на этот вопрос очень прост. Всё зависит от марки и модели отдельного автомобиля.`},
  {id:2,text:"Что делать когда автомобиль нужен срочно?",
  answer: `Oтвет на этот вопрос очень прост. Свяжитесь с нами и мы под ваш конкретный случай найдем ответ.`},
  {id:3,text:"Может ли клиент корректировать заказ в ходе работы?",
  answer: `Oтвет на этот вопрос очень прост. Да`},
  {id:4,text:"Есть  ограничения по подбору?",
  answer: `Oтвет на этот вопрос очень прост. Да`},
  {id:5,text:"Не нашёл на сайте стоимость подбора. Есть ли предоплата? Как делится сумма за подбор?",
  answer: `Стоимость подбора зависит от бюджета на предполагаемое авто. Предоплата составляет 50% от общей стоимости подбора под ключ, остаток оплачивается по факту сдачи`},
];


const App = ()=>
{
 const [state,setState] = useState(0);
    return(
      <div className="allBlocks">
        <div>
          <Header setI = {setState}/>
          <Main setI={setState}/>
          <Form i = {state} setI={setState}> </Form>
          <Footer/>
        </div>
      </div>
    );

}

export default App;