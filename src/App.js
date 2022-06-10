import React from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import Footer from "./components/Footer";
import "./scss/app.scss";

const App = () => {
  const [pizzas, setPizza] = React.useState([]);
  const [category, setCategory] = React.useState(0);

  React.useEffect(() => {
    console.log(123);
    fetch("https://62a30a6421232ff9b2169b1b.mockapi.io/items")
      .then((response) => response.json())
      .then((json) => setPizza(json));
  }, []);

  return (
    <div>
      <div className="wrapper">
        <Header />
        <main className="content">
          <div className="container">
            <div className="content__top">
              <Categories setCategory={setCategory} />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {category === 0
                ? pizzas.map((item, index) => {
                    return <PizzaBlock key={item.id} item={item} />;
                  })
                : pizzas.map((item, index) => {
                    return item.category === category ? (
                      <PizzaBlock key={item.id} item={item} />
                    ) : (
                      ""
                    );
                  })}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
