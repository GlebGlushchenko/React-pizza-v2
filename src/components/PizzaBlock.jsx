import React from "react";

export const PizzaBlock = ({ item }) => {
  const [pizzaCount, setPizzaCount] = React.useState(null);
  const [activeIndexSize, setActiveIndexSize] = React.useState(0);
  const [activeIndexDough, setActiveIndexDough] = React.useState(0);
  const [showDescriptions, setShowDescriptions] = React.useState(false);
  const [price, setPrice] = React.useState(350);
  const [weight, setWeight] = React.useState(330);

  const handlerPizzaCount = () => setPizzaCount((prev) => prev + 1);

  const handlerActiveIndexSize = (index, e) => {
    let size = e.target.innerText.slice(0, 2);
    setPrice(item.price[size]);
    setWeight(item.weight[size]);

    setActiveIndexSize(index);
  };

  const handlerActiveIndexDough = (index) => setActiveIndexDough(index);

  const descriptorCut =
    item.description.length > 70 ? item.description.slice(0, 65) + "..." : item.description;

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
          {item.types.map((i, index) => {
            return (
              <li
                onClick={() => handlerActiveIndexDough(index)}
                key={index}
                className={activeIndexDough === index ? "active" : ""}>
                {item.doughType[i]}
              </li>
            );
          })}
        </ul>
        <ul>
          {item.sizePizza.map((item, index) => {
            return (
              <li
                className={activeIndexSize === index ? "active" : ""}
                onClick={(e) => handlerActiveIndexSize(index, e)}
                key={index}>
                {item} см.
              </li>
            );
          })}
        </ul>
      </div>

      <div className="pizza-block__bottom">
        <div className="pizza-block__price"> {price === 350 ? `от ${price}` : price} ₽</div>
        <div className="pizza-block__weight">Вес: {weight} гр.</div>

        <button onClick={handlerPizzaCount} className="button button--outline button--add">
          <span>
            <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z" />
              <circle cx="10.5" cy="19.5" r="1.5" fill="" />
              <circle cx="17.5" cy="19.5" r="1.5" fill="" />
            </svg>
          </span>
          {pizzaCount && <i>{pizzaCount}</i>}
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
