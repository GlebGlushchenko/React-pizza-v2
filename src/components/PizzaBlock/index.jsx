import React from "react";

import { useSelector, useDispatch } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { plusProduct, selectCartItem } from "../../redux/slices/cartSlice";

export const PizzaBlock = ({
  vegan,
  description,
  weight,
  imgUrl,
  title,
  types,
  doughType,
  sizePizza,
  price,
  id,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItem(id));
  const count = cartItem ? cartItem.count : 0;
  const [activeSize, setActiveSize] = React.useState(0);
  const [activeType, setActiveType] = React.useState(0);
  const [showDescriptions, setShowDescriptions] = React.useState(false);
  const [weights, setWeight] = React.useState(330);

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imgUrl,
      type: doughType[activeType],
      size: sizePizza[activeSize],
    };
    dispatch(plusProduct(item));
  };

  const handlerActiveIndexSize = (index, e) => {
    let size = e.target.innerText.slice(0, 2);
    setWeight(weight[size]);

    setActiveSize(index);
  };

  const handlerActiveIndexDough = (index) => setActiveType(index);

  const descriptorCut = description.length > 70 ? description.slice(0, 65) + "..." : description;

  return (
    <div className="pizza-block__wrapper">
      <div className="pizza-block">
        {vegan && (
          <span className="pizza-block__veganIcon">
            <img
              src="https://tick-time.ru/images/filters/4b8e14c0-3933-485a-85e4-e971c44c99f9.png"
              alt=""
            />
            <img
              src="https://tick-time.ru/images/filters/6c955049-9244-4ec3-b450-243b0829eba0.png"
              alt=""
            />
          </span>
        )}
        <Link to={"pizza/" + id}>
          <img className="pizza-block__image" src={imgUrl} alt="Pizza" />
        </Link>

        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__disc" onClick={() => setShowDescriptions(!showDescriptions)}>
          {!showDescriptions ? descriptorCut : description}
        </div>
        <div className="pizza-block__selector">
          <ul>
            {types.map((i, index) => {
              return (
                <li
                  onClick={() => handlerActiveIndexDough(index)}
                  key={index}
                  className={activeType === index ? "active" : ""}>
                  {doughType[i]}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizePizza.map((item, index) => {
              return (
                <li
                  className={activeSize === index ? "active" : ""}
                  onClick={(e) => handlerActiveIndexSize(index, e)}
                  key={index}>
                  {item} см.
                </li>
              );
            })}
          </ul>
        </div>

        <div className="pizza-block__bottom">
          <div className="pizza-block__price"> {price} ₽</div>
          <div className="pizza-block__weight">Вес: {weights} гр.</div>

          <button onClick={onClickAdd} className="button button--outline button--add">
            <span>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z" />
                <circle cx="10.5" cy="19.5" r="1.5" fill="" />
                <circle cx="17.5" cy="19.5" r="1.5" fill="" />
              </svg>
            </span>
            {count > 0 && <i>{count}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
