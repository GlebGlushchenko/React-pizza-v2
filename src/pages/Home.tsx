import React from "react";

import qs from "qs";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import Skeliton from "../components/PizzaBlock/Skeliton";
import PizzaBlock from "../components/PizzaBlock";
import Paginate from "../components/Paginate";
import { urlString } from "../utils/urlStringHelper";
import { RootState, useAppDispatch } from "../redux/store";
import Filters from "../components/Filters/Filters";
import { setCategoryId, setFilters } from "../redux/slices/filter/slice";
import { CategoriesType } from "../redux/slices/filter/type";
import { fetchPizzas } from "../redux/slices/pizza/slice";
import { selectSearchValue } from "../redux/slices/search/selector";
import ErrorSearch from "../components/NotFoundBlock/ErrorSearch";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handlerSelectCategory = React.useCallback((index: number) => {
    dispatch(setCategoryId(index));
  }, []);

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categories, sortType, pageCount, categoryesId, listCategories } = useSelector(
    (state: RootState) => state.filter,
  );
  const searchValue = useSelector(selectSearchValue);

  const { pizzas, status } = useSelector((state: RootState) => state.pizza); //Pizza

  const getPizzas = async () => {
    const search = urlString.search(searchValue);
    const sort = urlString.sort(sortType);
    const order = urlString.order(sortType);
    const categorie = urlString.categorie(categoryesId);

    dispatch(fetchPizzas({ pageCount, categorie, sort, order, search }));
  };

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sortType = listCategories.find(
        (obj: CategoriesType) => obj.sortProperty === params.sortType,
      );

      dispatch(
        setFilters({
          ...params,
          sortType,
        }),
      );
      isSearch.current = true;
    }
    window.scrollTo(0, 0);
  }, [listCategories, dispatch]);

  React.useEffect(() => {
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
    window.scrollTo(0, 0);
  }, [categoryesId, sortType, searchValue, pageCount]);

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortType: sortType.sortProperty,
        categoryesId,
        pageCount,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryesId, sortType, searchValue, pageCount, navigate]);
  const skeleton = [...new Array(8)].map((item, index) => <Skeliton key={index} />); //Render skeleton
  const items = pizzas.map((item) => <PizzaBlock obj={item} key={item.id} />); //Render pizzas

  return (
    <>
      <Filters
        handlerSelectCategory={handlerSelectCategory}
        categories={categories}
        categoryesId={categoryesId}
        sortType={sortType}
        listCategories={listCategories}
      />
      <h2 className="content__title">?????? ??????????</h2>
      {status === "error" ? (
        <ErrorSearch />
      ) : (
        <div className="content__items">{status === "loading" ? skeleton : items}</div>
      )}

      <Paginate />
    </>
  );
};

export default Home;
