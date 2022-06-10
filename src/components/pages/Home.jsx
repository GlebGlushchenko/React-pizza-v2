import React from "react";
import Skeliton from "../PizzaBlock/Skeliton";
import Categories from "../Categories";
import PizzaBlock from "../PizzaBlock";
import Sort from "../Sort";

export const Home = () => {
  const [pizzas, setPizza] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://62a30a6421232ff9b2169b1b.mockapi.io/items")
      .then((response) => response.json())
      .then((json) => {
        setPizza(json);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((item, index) => <Skeliton key={index} />)
          : pizzas.map((item) => <PizzaBlock item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default Home;
