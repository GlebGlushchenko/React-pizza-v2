// @ts-nocheck
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFullPizza } from "../redux/slices/pizzaSlice";

export const FullPizza: React.FC = () => {
  const dispatch = useDispatch<any>();
  const pizza: { title: string; description: string; imgUrl: string } = useSelector(
    (state: any) => state.pizza.fullpizza,
  );
  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchFullPizza(id));
  }, []);

  return (
    <div className="container">
      <h2>{pizza.title}</h2>
      <img src={pizza.imgUrl} alt="" />
      <div>{pizza.description}</div>
    </div>
  );
};

export default FullPizza;