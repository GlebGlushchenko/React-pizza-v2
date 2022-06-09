import React from 'react';

export const PizzaBlock = ({ item }) => {
  const [pizzaCount, setPizzaCount] = React.useState(null);
  const [activeIndexSize, setActiveIndexSize] = React.useState(0);
  const [activeIndexDough, setActiveIndexDough] = React.useState(0);
  const [showDescriptions, setShowDescriptions] = React.useState(false);

  const handlerPizzaCount = () => setPizzaCount((prev) => prev + 1);

  const handlerActiveIndexSize = (index) => setActiveIndexSize(index);

  const handlerActiveIndexDough = (index) => setActiveIndexDough(index);

  const descriptorCut =
    item.description.length > 75 ? item.description.slice(0, 75) + '...' : item.description;

  return (
    <div className="pizza-block">
      {item.vegan && (
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

      <img className="pizza-block__image" src={item.imgUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{item.title}</h4>
      <div className="pizza-block__disc" onClick={() => setShowDescriptions(!showDescriptions)}>
        {!showDescriptions ? descriptorCut : item.description}
      </div>
      <div className="pizza-block__selector">
        <ul>
          {item.doughType.map((item, index) => (
            <li
              onClick={() => handlerActiveIndexDough(index)}
              key={index}
              className={activeIndexDough === index ? 'active' : ''}>
              {item}
            </li>
          ))}
        </ul>
        <ul>
          {item.sizePizza.map((item, index) => {
            return (
              <li
                className={activeIndexSize === index ? 'active' : ''}
                onClick={() => handlerActiveIndexSize(index)}
                key={index}>
                {item} см.
              </li>
            );
          })}
        </ul>
      </div>

      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {item.price} ₽</div>

        <button onClick={handlerPizzaCount} className="button button--outline button--add">
          <svg
            className="button__cross"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {pizzaCount && <i>{pizzaCount}</i>}
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
