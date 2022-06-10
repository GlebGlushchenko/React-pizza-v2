import React from "react";
import Skeliton from "../PizzaBlock/Skeliton";
import Categories from "../Categories";
import PizzaBlock from "../PizzaBlock";
import Sort from "../Sort";

export const Home = ({ pizzas, isLoading, setCategory }) => {
  return (
    <>
      <div className="content__top">
        <Categories setCategory={setCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map(() => <Skeliton />)
          : pizzas.map((item) => <PizzaBlock item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default Home;
