import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fullPizzaSelector } from "../redux/slices/pizza/selector";
import { fetchFullPizza } from "../redux/slices/pizza/slice";

export const FullPizza: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { title, description, imgUrl } = useSelector(fullPizzaSelector);

  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchFullPizza(id ? id : ""));
  }, []);

  return (
    <div className="container">
      <h2>{title}</h2>
      <img src={imgUrl} alt="" />
      <div>{description}</div>
    </div>
  );
};

export default FullPizza;
