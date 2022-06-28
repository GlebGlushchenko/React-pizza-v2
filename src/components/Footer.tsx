import React from "react";

export const Footer:React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__icon">
        <a href="https://tick-time.ru/pictures/Google.png">
          <img src="https://tick-time.ru/pictures/Google.png" alt="" />
        </a>
        <a href="https://tick-time.ru/pictures/App-Store.png">
          <img src="https://tick-time.ru/pictures/App-Store.png" alt="" />
        </a>
      </div>
      <p>
        Добро пожаловать на сайт пиццерии Тик Тайм! Мы готовим и доставляем Пиццу с 2012 года! Мы
        готовим, быстро доставляем, дарим и едим любимую пиццу! Пиццерия Тик Тайм работает как
        небольшое заведение с доставкой по Вашему городу! Каждая Пицца готовится под заказ, и это
        занимает всего 10 минут!
      </p>
      <div className="github">
        <a href="https://github.com/GlebGlushchenko">github.com</a>
      </div>
    </footer>
  );
};

export default Footer;
