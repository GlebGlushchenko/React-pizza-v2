import React from "react";

import { useSelector, useDispatch } from "react-redux/es/exports";
import { Link } from "react-router-dom";
import { selectCartItem } from "../../redux/slices/cart/selector";
import { plusProduct } from "../../redux/slices/cart/slice";
import { PizzaBlockProps } from "../../redux/slices/pizza/type";

export const PizzaBlock: React.FC<PizzaBlockProps> = ({ obj }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItem(obj.id));
  const count = cartItem ? cartItem.count : 0;

  const [activeSize, setActiveSize] = React.useState<number>(0);
  const [activeType, setActiveType] = React.useState<number>(0);

  const [showDescriptions, setShowDescriptions] = React.useState<boolean>(false);
  const [weights, setWeight] = React.useState<number>(330);

  const onClickAdd = () => {
    const item = {
      id: obj.id,
      title: obj.title,
      price: obj.price,
      imgUrl: obj.imgUrl,
      type: obj.doughType[activeType],
      size: obj.sizePizza[activeSize],
      count: 0,
    };
    dispatch(plusProduct(item));
  };

  const handlerActiveIndexSize = (index: number, e: React.MouseEvent<HTMLLIElement>) => {
    setWeight(obj.weight[index]);

    setActiveSize(index);
  };

  const handlerActiveIndexDough = (index: number) => setActiveType(index);

  const descriptorCut =
    obj.description.length > 70 ? obj.description.slice(0, 65) + "..." : obj.description;

  return (
    <div className="pizza-block__wrapper">
      <div className="pizza-block">
        {obj.vegan && (
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
        <Link to={"pizza/" + obj.id}>
          <img className="pizza-block__image" src={obj.imgUrl} alt="Pizza" />
        </Link>

        <h4 className="pizza-block__title">{obj.title}</h4>
        <div className="pizza-block__disc" onClick={() => setShowDescriptions(!showDescriptions)}>
          {!showDescriptions ? descriptorCut : obj.description}
        </div>
        <div className="pizza-block__selector">
          <ul>
            {obj.types.map((i, index) => {
              return (
                <li
                  onClick={() => handlerActiveIndexDough(index)}
                  key={index}
                  className={activeType === index ? "active" : ""}>
                  {obj.doughType[index]}
                </li>
              );
            })}
          </ul>
          <ul>
            {obj.sizePizza.map((item, index) => {
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
          <div className="pizza-block__price"> {obj.price} ₽</div>
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
