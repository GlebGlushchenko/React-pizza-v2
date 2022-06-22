import React from "react";

import qs from "qs";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Skeliton from "../components/PizzaBlock/Skeliton";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Sort from "../components/Sort";
import Paginate from "../components/Paginate";
import { setCategoryId, setFilters } from "../redux/slices/filterSlice";
import { listCategories } from "../components/Sort";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { sortType, pageCount } = useSelector((state) => state.filter);
  const searchValue = useSelector((state) => state.search.searchValue);

  const { pizzas, status } = useSelector((state) => state.pizza); //Pizza

  const selectedCategorie = useSelector((state) => state.filter.categoryesId); // Filter
  const handlerSelectCategory = (index) => dispatch(setCategoryId(index)); //Filter

  const getPizzas = async () => {
    const search = searchValue ? `&title=${searchValue}` : ""; // Search
    const sort = `&sortBy=${sortType.sortProperty.replace("-", "")}`; // Sort
    const order = `&order=${sortType.sortProperty.includes("-") ? "asc" : "desc"}`; // Order
    const categories = selectedCategorie > 0 ? `category=${selectedCategorie}` : ""; // Filter

    dispatch(fetchPizzas({ pageCount, categories, sort, order, search }));
  };

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
      isSearch.current = true;
    }
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
    window.scrollTo(0, 0);
  }, [selectedCategorie, sortType, searchValue, pageCount]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortType: sortType.sortProperty,
        selectedCategorie,
        pageCount,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [selectedCategorie, sortType, searchValue, pageCount]);

  const skeleton = [...new Array(8)].map((item, index) => <Skeliton key={index} />); //Render skeleton
  const items = pizzas.map((item) => <PizzaBlock {...item} key={item.id} />); //Render pizzas

  return (
    <>
      <div className="content__top">
        <Categories id={selectedCategorie} handlerSelectCategory={handlerSelectCategory} />
        <Sort sortType={sortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
        <div style={{ textAlign: "center", marginBottom: "100px" }}>
          <h2>Нечего не найдено 😕</h2>
          <p>К сожелению что то пошло не так</p>
        </div>
      ) : (
        <div className="content__items">{status === "loading" ? skeleton : items}</div>
      )}

      <Paginate />
    </>
  );
};

export default Home;
