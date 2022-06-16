import React from "react";

import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Skeliton from "../components/PizzaBlock/Skeliton";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort, { listCategories } from "../components/Sort";
import Paginate from "../components/Paginate";
import { setCategoryId, setFilters } from "../redux/slices/filterSlice";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.filter.sort);
  const searchValue = useSelector((state) => state.search.searchValue);
  const pageCount = useSelector((state) => state.filter.pageCount);

  const [pizzas, setPizza] = React.useState([]); //Pizza

  const [isLoading, setIsLoading] = React.useState(true); //Flag loading state

  const sort = `&sortBy=${sortType.sortProperty.replace("-", "")}`; // Sort

  const order = `&order=${sortType.sortProperty.includes("-") ? "asc" : "desc"}`; // Order

  const selectedCategorie = useSelector((state) => state.filter.categoryesId); // Filter
  const handlerSelectCategory = (index) => dispatch(setCategoryId(index)); //Filter
  const categories = selectedCategorie > 0 ? `category=${selectedCategorie}` : ""; // Filter

  const search = searchValue ? `&title=${searchValue}` : ""; // Search

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = listCategories.find((obj) => obj.sortProperty === params.sortType);
      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
    }
  }, []);

  React.useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://62a30a6421232ff9b2169b1b.mockapi.io/items?page=${pageCount}&limit=8&${categories}${sort}${order}${search}`,
      )
      .then((response) => {
        setPizza(response.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [selectedCategorie, sortType, searchValue, sort, order, categories, search, pageCount]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortType: sortType.sortProperty,
      selectedCategorie,
      pageCount,
    });
    navigate(`?${queryString}`);
  }, [selectedCategorie, sortType, searchValue, sort, order, categories, search, pageCount]);

  const skeleton = [...new Array(pizzas.length)].map((item, index) => <Skeliton key={index} />); //Render skeleton
  const items = pizzas.map((item) => <PizzaBlock item={item} key={item.id} />); //Render pizzas

  return (
    <>
      <div className="content__top">
        <Categories id={selectedCategorie} handlerSelectCategory={handlerSelectCategory} />
        <Sort sortType={sortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : items}</div>
      <Paginate />
    </>
  );
};

export default Home;
