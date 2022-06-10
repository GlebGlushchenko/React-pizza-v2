import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import "./scss/app.scss";

import pizzas from "./db/pizzas.json";

const App = () => {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <main className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((item, index) => {
                return <PizzaBlock key={item.id} item={item} />;
              })}
            </div>
          </div>
        </main>
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
            Добро пожаловать на сайт пиццерии Тик Тайм! Мы готовим и доставляем Пиццу с 2012 года!
            Мы готовим, быстро доставляем, дарим и едим любимую пиццу! Пиццерия Тик Тайм работает
            как небольшое заведение с доставкой по Вашему городу! Каждая Пицца готовится под заказ,
            и это занимает всего 10 минут!
          </p>
          <div className="github">
            <a href="https://github.com/GlebGlushchenko">github.com</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
