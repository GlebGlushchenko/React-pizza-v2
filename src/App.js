import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';

const App = () => {
  const pizzas = [
    {
      id: Date.now(),
      title: 'Пицца Курица и Колбаски',
      description:
        'Копченая курица, охотничьи колбаски, моцарелла, маринованные огурцы, томаты, красный лук, свежий укроп, майонезный соус, кетчуп, тесто',
      price: 365,
      imgUrl: 'https://tick-time.ru/images/products/mini/08baf365-27bf-4ad7-be4a-e864f685c455.png',
      vegan: false,
      sizePizza: [23, 28, 33, 38],
      doughType: ['тонкое', 'традиционное', 'толстое'],
      weight: 440,
    },
    {
      id: Date.now(),
      title: 'Пицца 4 сезона',
      description:
        ' 1/4 пепперони с  моцареллой; 1/4 ветчины со свежими шампиньонами и моцареллой; 1/4 копчёная курица с ананасами и моцареллой; 1/4 пармезан, моцарелла, томатный соус, тесто',
      price: 432,
      imgUrl: 'https://tick-time.ru/images/products/mini/073851ce-a75d-4138-bd87-b91440065c41.png',
      vegan: false,
      sizePizza: [23, 28, 33, 38],
      doughType: ['тонкое', 'традиционное', 'толстое'],
      weight: 440,
    },
    {
      id: Date.now(),
      title: 'Пицца Цезарь',
      description:
        'Копчёная курица, салат айсберг, моцарелла, пармезан, томаты, соус цезарь, тесто',
      price: 365,
      imgUrl: 'https://tick-time.ru/images/products/mini/95104448-0848-4b64-8f49-b15b3c46e0e5.png',
      vegan: true,
      sizePizza: [23, 28, 33, 38],
      doughType: ['тонкое', 'традиционное', 'толстое'],
      weight: 440,
    },
    {
      id: Date.now(),
      title: 'Пицца Гавайская',
      description: 'Много бекона, моцарелла, ананасы, томатный соус, тесто',
      price: 365,
      imgUrl: 'https://tick-time.ru/images/products/mini/5603586f-7198-41f5-8861-320a7ddc9593.png',
      vegan: true,
      sizePizza: [23, 28, 33, 38],
      doughType: ['тонкое', 'традиционное', 'толстое'],
      weight: 440,
    },
    {
      id: Date.now(),
      title: 'Пицца Ветчина и грибы',
      description: 'Много ветчины, моцарелла, свежие шампиньоны, красный лук, соус ранч, тесто',
      price: 365,
      imgUrl: 'https://tick-time.ru/images/products/mini/49610cd8-6e2a-4796-b1ae-bd13cb5a8f71.png',
      vegan: false,
      sizePizza: [23, 28, 33, 38],
      doughType: ['тонкое', 'традиционное', 'толстое'],
      weight: 440,
    },
  ];
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
            <a href="#">
              <img src="https://tick-time.ru/pictures/Google.png" alt="" />
            </a>
            <a href="#">
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
            <a target="_blank" href="https://github.com/GlebGlushchenko">
              github.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
