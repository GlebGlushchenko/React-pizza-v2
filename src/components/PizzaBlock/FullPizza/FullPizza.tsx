import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fullPizzaSelector } from "../../../redux/slices/pizza/selector";
import { fetchFullPizza } from "../../../redux/slices/pizza/slice";
import style from "../FullPizza/fullPizza.module.scss";

export const FullPizza: React.FC = () => {
  const dispatch = useDispatch<any>();
  const { title, description, imgUrl, price } = useSelector(fullPizzaSelector);

  const { id } = useParams();

  React.useEffect(() => {
    dispatch(fetchFullPizza(id ? id : ""));
  }, []);

  return (
    <div className="container">
      <div className={style.wrapper}>
        <h2 className={style.title}>{title}</h2>
        <img className={style.img} src={imgUrl} alt="" />
        <div className={style.disc}>{description}</div>
        <Link to="/" className="button button--outline button--add go-back-btn fullpizza--btn">
          <p>Вернуться назад</p>
        </Link>
      </div>
    </div>
  );
};

export default FullPizza;
