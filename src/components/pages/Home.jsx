import React from "react";
import Skeliton from "../PizzaBlock/Skeliton";
import Categories from "../Categories";
import PizzaBlock from "../PizzaBlock";
import Sort from "../Sort";

export const Home = () => {
  const [pizzas, setPizza] = React.useState([]); //Pizza
  const [isLoading, setIsLoading] = React.useState(true); //Flag loading state

  const [selectedCategories, setSelectedCategories] = React.useState(0); // Active index Categories
  const [sortType, setSortType] = React.useState({ name: "популярности", sort: "rating" }); // Active index Sort

  const handlerSelectedCategories = (index) => {
    setSelectedCategories(index);
  };

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://62a30a6421232ff9b2169b1b.mockapi.io/items?${
        selectedCategories > 0 ? `category=${selectedCategories}` : ""
      }&sortBy=${sortType.sort.replace("-", "")}&order=${
        sortType.sort.includes("-") ? "asc" : "desc"
      }`,
    )
      .then((response) => response.json())
      .then((json) => {
        setPizza(json);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [selectedCategories, sortType]);
  return (
    <>
      <div className="content__top">
        <Categories
          selectedCategories={selectedCategories}
          handlerSelectedCategories={handlerSelectedCategories}
        />
        <Sort sortType={sortType} setSortType={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(pizzas.length)].map((item, index) => <Skeliton key={index} />)
          : pizzas.map((item) => <PizzaBlock item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default Home;
