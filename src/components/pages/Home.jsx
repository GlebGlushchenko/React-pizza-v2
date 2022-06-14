import React from "react";
import Skeliton from "../PizzaBlock/Skeliton";
import Categories from "../Categories";
import PizzaBlock from "../PizzaBlock";
import Sort from "../Sort";

export const Home = ({ searchValue }) => {
  const [pizzas, setPizza] = React.useState([]); //Pizza
  const [isLoading, setIsLoading] = React.useState(true); //Flag loading state

  const [selectedCategories, setSelectedCategories] = React.useState(0); // Active index Categories
  const [sortType, setSortType] = React.useState({ name: "популярности", sort: "rating" }); // Active index Sort

  const sort = `&sortBy=${sortType.sort.replace("-", "")}`; // Sort
  const order = `&order=${sortType.sort.includes("-") ? "asc" : "desc"}`; // Order
  const categories = selectedCategories > 0 ? `category=${selectedCategories}` : ""; // Filter
  const search = searchValue ? `&title=${searchValue}` : ""; // Search

  React.useEffect(() => {
    setIsLoading(true);
    fetch(`https://62a30a6421232ff9b2169b1b.mockapi.io/items?${categories}${sort}${order}${search}`)
      .then((response) => response.json())
      .then((json) => {
        setPizza(json);
        setIsLoading(false);
      });

    window.scrollTo(0, 0);
  }, [selectedCategories, sortType, searchValue, sort, order, categories, search]);

  const skeleton = [...new Array(pizzas.length)].map((item, index) => <Skeliton key={index} />); //Render skeleton
  const items = pizzas.map((item) => <PizzaBlock item={item} key={item.id} />); //Render pizzas

  return (
    <>
      <div className="content__top">
        <Categories
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
        <Sort sortType={sortType} setSortType={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : items}</div>
    </>
  );
};

export default Home;
